import React, { useMemo }from 'react';

import AppSegment from '@department-of-veterans-affairs/caseflow-frontend-toolkit/components/AppSegment';

import ProgressBar from '../../components/ProgressBar';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import { EditCavcRemandView } from './editCavcRemandView';
import { EditCavcRemandTasksView } from './editCavcRemandTasks/editCavcRemandTasksView';
import { EditCavcRemandReview } from './editCavcRemandReview/editCavcRemandReview';


const sections = [
  'Edit CAVC Remand',
  'Modify tasks',
  'Review',
];

export const EditCavcRemandContainer = () => {
  const { path, url } = useRouteMatch();

  const step = useSelector((state) => state.substituteAppellant.step);

  // Keep our progress bar updated based on current step
  const pbSections = useMemo(
    () =>
      sections.map((title, idx) => ({
        title: `${idx + 1}. ${title}`,
        current: idx === step,
      })),
    [step]
  );

  return (
    <AppSegment>
      <ProgressBar sections={pbSections} />
      <Switch>
        <Redirect exact from={[url, `${url}/`]} to={`${url}/basics`} />
        <Route path={`${path}`} title = "Edit Cavc Remand | Caseflow">
          <EditCavcRemandView />
        </Route>

        <Route path={`${path}/tasks`} title = "Edit Cavc Remand | Caseflow">
          <EditCavcRemandTasksView />
        </Route>

        <Route path={`${path}/review`} title = "Edit Cavc Remand | Caseflow">
          <EditCavcRemandReview />
        </Route>

      </Switch>
    </AppSegment>

  );
};
