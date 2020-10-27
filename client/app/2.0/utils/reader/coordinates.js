/**
 * We do a lot of work with coordinates to render PDFs.
 * It is important to keep the various coordinate systems straight.
 * Here are the systems we use:
 *
 *    Root coordinates: The coordinate system for the entire app.
 *      (0, 0) is the top left hand corner of the entire HTML document that the browser has rendered.
 *
 *    Page coordinates: A coordinate system for a given PDF page.
 *      (0, 0) is the top left hand corner of that PDF page.
 *
 * The relationship between root and page coordinates is defined by where the PDF page is within the whole app,
 * and what the current scale factor is.
 *
 * All coordinates in our codebase should have `page` or `root` in the name, to make it clear which
 * coordinate system they belong to. All converting between coordinate systems should be done with
 * the proper helper functions.
 */

// External Dependencies
import { clamp, includes } from 'lodash';

// Local Dependencies
import {
  ROTATION_INCREMENTS,
  NUMBER_OF_DIRECTIONS,
  MOVE_ANNOTATION_ICON_DIRECTION_ARRAY,
  MOVE_ANNOTATION_ICON_DIRECTIONS,
  ANNOTATION_ICON_SIDE_LENGTH,
} from 'store/constants/reader';

/**
 * Helper Method to calculate the page coordinates
 * @param {Object} dimensions -- The Page Dimensions
 * @param {Object} pageBoundingBox -- The Boundary for the page
 * @param {number} scale -- The scale by which to change
 */
export const pageCoordsOfRootCoords = ({ x, y }, pageBoundingBox, scale) => ({
  x: (x - pageBoundingBox.left) / scale,
  y: (y - pageBoundingBox.top) / scale
});

/**
 * Helper Method to rotate the page coordinates
 * @param {Object} dimensions -- The Page Dimensions
 * @param {Object} container -- The Container to rotate inside
 * @param {number} rotation -- The rotation value
 */
export const rotateCoordinates = ({ x, y }, container, rotation) => {
  // Handle the Rotation types
  switch (rotation) {
  case 90:
    return { x: y, y: container.width - x };
  case 180:
    return { x: container.width - x, y: container.height - y };
  case 270:
    return { x: container.height - y, y: x };
  case 0:
  default:
    return { x, y };
  }
};

/**
 * Helper Method to calculate the Page coordinates from the mouse event
 * @param {Object} event -- The Mouse Event that was triggered
 * @param {Object} container -- The Container to calculate coordinates inside
 * @param {number} scale -- The scale by which to change
 * @param {number} rotation -- The rotation by which to change
 */
export const getPageCoordinatesOfMouseEvent = (event, container, scale, rotation) =>
  rotateCoordinates(
    pageCoordsOfRootCoords(
      {
        x: clamp(event.pageX, container.left, container.right - ANNOTATION_ICON_SIDE_LENGTH),
        y: clamp(event.pageY, container.top, container.bottom - ANNOTATION_ICON_SIDE_LENGTH)
      },
      container,
      scale
    ),
    container,
    rotation
  );

/**
 * Helper Method to Calculate the Page Coordinates
 * @param {number} direction -- The direction of the PDF
 * @param {Object} pageCoords -- The current page coordinates
 * @param {Object} pageDimensions -- The current page dimensions
 * @param {Object} file -- The file whose page coordinates are being updated
 * @param {number} rotation -- The rotation amount
 */
export const nextPageCoords = (direction, pageCoords, pageDimensions, file, rotation = 0) => {
  // There are four valid rotations: 0, 90, 180, 270. We transform those values to 0, -1, -2, -3.
  // We then use that value to rotate the direction. I.E. Hitting up (value 0) on the
  // keyboard when rotated 90 degrees corresponds to moving left (value 3) on the document.
  const increment = -(rotation / ROTATION_INCREMENTS) % NUMBER_OF_DIRECTIONS;

  // Calculate the transformation
  const transform = (direction + increment + NUMBER_OF_DIRECTIONS) % NUMBER_OF_DIRECTIONS;

  // Set the Movement Amount in Pixels
  const moveAmount = 5;

  // Calculate the direction of the movement
  const moveDirection = includes(
    [MOVE_ANNOTATION_ICON_DIRECTIONS.UP, MOVE_ANNOTATION_ICON_DIRECTIONS.LEFT],
    MOVE_ANNOTATION_ICON_DIRECTION_ARRAY[transform]
  ) ? -1 : 1;

  // Calculate the dimension of the movement (`x` || `y`)
  const moveDimension = includes(
    [MOVE_ANNOTATION_ICON_DIRECTIONS.UP, MOVE_ANNOTATION_ICON_DIRECTIONS.DOWN],
    MOVE_ANNOTATION_ICON_DIRECTION_ARRAY[transform]
  ) ? 'y' : 'x';

  // Apply the new coordinates to the page
  const { pageIndex, ...coords } = pageCoords[moveDimension].map((coord) => coord + (moveAmount * moveDirection));

  // Update the page boundaries
  const pageCoordsBounds = pageDimensions[file][pageIndex];

  // This calculation is not quite right, because we are not using the scale
  // to correct ANNOTATION_ICON_SIDE_LENGTH. This leads to the outer edge of where
  // you're able to place the annotation with the keyboard looking progressively
  // weirder as you get further from zoom level 0. I am not going to fix this issue
  // now, because `scale` is stored in the state of `PdfUI`, and this PR is already
  // too massive. This can be a follow-up issue.
  return {
    x: clamp(coords.x, 0, pageCoordsBounds.width - ANNOTATION_ICON_SIDE_LENGTH),
    y: clamp(coords.y, 0, pageCoordsBounds.height - ANNOTATION_ICON_SIDE_LENGTH)
  };
};
