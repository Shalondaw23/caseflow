import React from 'react';
import PropTypes from 'prop-types';
import { COLORS } from '@department-of-veterans-affairs/caseflow-frontend-toolkit/util/StyleConstants';

export const ExternalLinkIcon = (props) => {
  const { color, size, cname } = props;

  return <svg height={size} viewBox="0 0 18 16" version="1.1" xmlns="http://www.w3.org/2000/svg" className={cname}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g fillRule="nonzero" fill={color}>
        <g transform="translate(1.000000, 1.000000)">
          <path d="M12.2767813,8.17242825 L11.7057188,8.17242825
          C11.6223125,8.17242825 11.553875,8.19969476 11.500625,8.25448292
          C11.4469375,8.30895216 11.4202188,8.37876082 11.4202188,8.46378132
          L11.4202188,11.377344 C11.4202188,11.7779863 11.2805313,12.1208747
          11.001,12.4062005 C10.7214688,12.6914624 10.3853438,12.8339818
          9.99275,12.8339818 L2.5695,12.8339818 C2.1769375,12.8339818
          1.84084375,12.6914624 1.56125,12.4062005 C1.28171875,12.1209066
          1.14196875,11.7780182 1.14196875,11.377344 L1.14196875,3.80200456
          C1.14196875,3.40139408 1.2816875,3.05853759 1.56125,2.77324374
          C1.84084375,2.487918 2.1769375,2.34533485 2.5695,2.34533485
          L8.8505625,2.34533485 C8.93396875,2.34533485 9.00240625,2.31794077
          9.055875,2.26337585 C9.10934375,2.20874715 9.1360625,2.13900228
          9.1360625,2.05394989 L9.1360625,1.47114806 C9.1360625,1.38625513
          9.10934375,1.31638269 9.055875,1.26184966 C9.00240625,1.20722096
          8.93396875,1.17995444 8.8505625,1.17995444 L2.5695,1.17995444
          C1.86175,1.17995444 1.2565,1.43641913 0.7538125,1.94931663
          C0.2513125,2.46218223 0,3.07984055 0,3.80210023 L0,11.3774715
          C0,12.0996993 0.2513125,12.7174533 0.75384375,13.2301595 C1.25653125,13.7430888
          1.86178125,13.9996811 2.56953125,13.9996811 L9.99275,13.9996811 C10.7004688,13.9996811
          11.3057813,13.7430888 11.8084063,13.2301595 C12.3110625,12.7174533
          12.562375,12.0997312 12.562375,11.3774715 L12.562375,8.46400456
          C12.562375,8.37888838 12.535625,8.30904784 12.4819375,8.25448292
          C12.4284063,8.19969476 12.3599688,8.17242825 12.2767813,8.17242825 Z"
          id="external-link-outline-box"></path>
          <path d="M15.8009687,0.172974943 C15.6879375,0.0576264237
          15.5539375,0 15.3994062,0 L10.8313437,0 C10.6767187,0 10.5428125,0.0576264237
          10.429875,0.172974943 C10.3168438,0.288259681 10.26025,0.42484738 10.26025,0.58267426
          C10.26025,0.740501139 10.3168438,0.877120729 10.429875,0.992469248 L12.0000938,2.59491116
          L6.183,8.53138952 C6.1234375,8.59207745 6.09375,8.661918 6.09375,8.74068793
          C6.09375,8.81974487 6.12353125,8.88955353 6.183,8.95024146 L7.200125,9.98809112
          C7.25959375,10.048779 7.32803125,10.0790433 7.40534375,10.0790433 C7.48265625,10.0790433
          7.551125,10.0488109 7.6105625,9.98809112 L13.4276875,4.05170843 L14.9980313,5.65415034
          C15.1109687,5.76949886 15.2448438,5.82718907 15.3995,5.82718907 C15.5541562,5.82718907
          15.6880312,5.76949886 15.8010937,5.65415034 C15.914125,5.53883371 15.9705937,5.4022779
          15.9705937,5.24445103 L15.9705937,0.58267426 C15.9705625,0.424751708 15.9139063,0.288259681
          15.8009687,0.172974943 Z" id="external-link-outline-arrow"></path>
        </g>
      </g>
    </g>
  </svg>;
};
ExternalLinkIcon.propTypes = {

  /**
  Sets height of the component, width is set automatically by the svg viewbox property. Default height is '16px'.
  */
  size: PropTypes.number,

  /**
  Sets color of the component. Default value is 'COLORS.WHITE'.
  */
  color: PropTypes.string,

  /**
  Adds class to the component. Default value is ''.
  */
  cname: PropTypes.string
};
ExternalLinkIcon.defaultProps = {
  size: 16,
  color: COLORS.WHITE,
  cname: ''
};
