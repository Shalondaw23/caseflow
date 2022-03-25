import { ACTIONS } from '../constants';

export const setDocketType = (docketType) => ({
  type: ACTIONS.SET_DOCKET_TYPE,
  payload: {
    docketType
  },
  meta: {
    analytics: {
      label: docketType
    }
  }
});


export const setHomelessnessType = (homelessness) => ({
  type: ACTIONS.SET_HOMELESSNESS_TYPE,
  payload: {
    homelessness
  },
  meta: {
    analytics: {
      label: homelessness
    }
  }
});

export const setHomelessnessUserInteraction = (homelessnessUserInteraction) => ({
  type: ACTIONS.SET_HOMELESSNESS_USER_INTERACTION,
  payload: {
    homelessnessUserInteraction
  },
  meta: {
    analytics: {
      label: homelessnessUserInteraction
    }
  }
});
