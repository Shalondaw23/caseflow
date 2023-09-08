import React from 'react';
import { Route, useParams, useHistory } from 'react-router';
import PageRoute from '../../components/PageRoute';

import TASK_ACTIONS from '../../../constants/TASK_ACTIONS';
import ReviewMotionToVacateView from './ReviewMotionToVacateView';
import { AddressMotionToVacateView } from './AddressMotionToVacateView';
import { ReturnToLitSupportModal } from './ReturnToLitSupportModal';
import { useDispatch, useSelector } from 'react-redux';
import { returnToLitSupport } from './mtvActions';
import { MotionToVacateFlowContainer } from './checkout/MotionToVacateFlowContainer';
import { appealWithDetailSelector } from '../selectors';
import { PAGE_TITLES } from '../constants';

const RoutedReturnToLitSupport = (props) => {
  const { taskId, appealId } = useParams();
  const { goBack } = useHistory();
  const dispatch = useDispatch();

  const appeal = useSelector((state) => appealWithDetailSelector(state, { appealId }));

  return (
    <ReturnToLitSupportModal
      onCancel={() => goBack()}
      onSubmit={({ instructions }) =>
        dispatch(
          returnToLitSupport(
            {
              instructions,
              task_id: taskId
            },
            { ...props,
              appeal }
          )
        )
      }
    />
  );
};

const basePath = `/queue/appeals/:appealId/tasks/:taskId`;

const PageRoutes = [
  <PageRoute
    path={`${basePath}/${TASK_ACTIONS.ADDRESS_MOTION_TO_VACATE.value}`}
    title={`${PAGE_TITLES.MOTION_TO_VACATE.ADDRESS_MOTION_TO_VACATE} | Caseflow`}
    component={AddressMotionToVacateView}
    key={`${basePath}/${TASK_ACTIONS.ADDRESS_MOTION_TO_VACATE.value}`.replace(/[^\w\s]/gi,'_')}
  />,

  // This route handles the remaining checkout flow
  <Route
    path={`${basePath}/motion_to_vacate_checkout`}
    component={MotionToVacateFlowContainer}
    key={`${basePath}/motion_to_vacate_checkout`.replace(/[^\w\s]/gi,'_')}
  />
];

const path = `/queue/appeals/:appealId/tasks/:taskId/${TASK_ACTIONS.SEND_MOTION_TO_VACATE_TO_JUDGE.value}`;

const ModalRoutes = [
  <PageRoute
    exact
    path={[
      basePath,
      TASK_ACTIONS.ADDRESS_MOTION_TO_VACATE.value,
      TASK_ACTIONS.JUDGE_RETURN_TO_LIT_SUPPORT.value
    ].join('/')}
    title={`${PAGE_TITLES.MOTION_TO_VACATE.RETURN_TO_LITIGATION_SUPPORT} | Caseflow`}
    component={RoutedReturnToLitSupport}
    key={`${basePath}/${TASK_ACTIONS.ADDRESS_MOTION_TO_VACATE.value}`.replace(/[^\w\s]/gi,'_')}
  />,
  <Route
    path={`${basePath}/${TASK_ACTIONS.SEND_MOTION_TO_VACATE_TO_JUDGE.value}`}
    component={ReviewMotionToVacateView}
    key={`${basePath}/${TASK_ACTIONS.SEND_MOTION_TO_VACATE_TO_JUDGE.value}`.replace(/[^\w\s]/gi,'_')}
  />
];

export const motionToVacateRoutes = {
  page: PageRoutes,
  modal: ModalRoutes
};
