// External Dependencies
import React from 'react';
// import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// Internal Dependencies
import PageRoute from 'app/components/PageRoute';
import AppFrame from 'app/components/AppFrame';
import { claimsFolderPageTitle } from 'utils';
import { LOADING_DATA_MESSAGE } from 'store/constants/reader';
import { useSelector } from 'react-redux';

// Lazy load screens
const DocumentList = React.lazy(() => import('screens/reader/DocumentList'));
const Document = React.lazy(() => import('screens/reader/Document'));

const ReaderRoutes = (props) => {
  // Override The App Name here for the page routes
  const appName = 'Reader';

  // Get the Reader Loading Status
  const { loading } = useSelector((state) => ({
    loading: state.reader.document.loading
  }));

  // Return the list of routes
  return (
    <AppFrame wideApp>
      <PageRoute
        exact
        loading={loading}
        loadingMessage={LOADING_DATA_MESSAGE}
        title={claimsFolderPageTitle(props.appeal)}
        path="/reader/appeal/:vacolsId/documents"
        render={(routeProps) => <DocumentList {...props} {...routeProps} />}
        appName={appName}
      />
      <PageRoute
        exact
        loading={loading}
        loadingMessage={LOADING_DATA_MESSAGE}
        title="Document Viewer | Caseflow Reader"
        path="/reader/appeal/:vacolsId/documents/:docId"
        render={(routeProps) => <Document {...props} {...routeProps} />}
        appName={appName}
      />
    </AppFrame>
  );
};

ReaderRoutes.propTypes = {
  appeal: PropTypes.object
};

export default ReaderRoutes;
