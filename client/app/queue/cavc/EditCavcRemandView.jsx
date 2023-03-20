import React, { useEffect, useMemo } from 'react';

import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import COPY from 'app/../COPY';
import { appealWithDetailSelector } from 'app/queue/selectors';
import { getSupportedDecisionTypes, getSupportedRemandTypes } from './utils';
import { EditCavcRemandForm } from './EditCavcRemandForm';
import { format } from 'date-fns';
import { requestPatch, showErrorMessage } from 'app/queue/uiReducer/uiActions';
import { editAppeal } from '../QueueActions';

import {
  updateData,
  stepForward,
  fetchRelationships,
  cancel
} from './editCavcRemand.slice';
import moment from 'moment';

export const EditCavcRemandView = () => {
  /* eslint-disable camelcase */
  const { appealId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const cavcAppeal = useSelector((state) =>
    appealWithDetailSelector(state, { appealId })
  );
  const { cavcRemand, substituteAppellantClaimantOptions } = cavcAppeal;

  const featureToggles = useSelector((state) => state.ui.featureToggles);

  const supportedDecisionTypes = getSupportedDecisionTypes(featureToggles);
  const supportedRemandTypes = getSupportedRemandTypes(featureToggles);
  const { formData: currentValues } = useSelector(
    (state) => state.cavcRemand
  );

  const existingValues = useMemo(() => {
    return {
      decisionType: currentValues.decisionType || cavcRemand.cavc_decision_type,
      docketNumber: currentValues.docketNumber || cavcRemand.cavc_docket_number,
      judge: currentValues.judge || cavcRemand.cavc_judge_full_name,
      decisionDate: currentValues.decisionDate || cavcRemand.decision_date,
      issueIds: currentValues.issueIds || cavcRemand.decision_issue_ids,
      federalCircuit: currentValues.federalCircuit || cavcRemand.federal_circuit,
      instructions: currentValues.instructions || cavcRemand.instructions,
      judgementDate: currentValues.judgementDate || cavcRemand.judgement_date,
      mandateDate: currentValues.mandateDate || cavcRemand.mandate_date,
      remandType: currentValues.remandType || cavcRemand.remand_subtype,
      attorney: (currentValues.attorney || (cavcRemand.represented_by_attorney ? 'yes' : 'no')),
      remandDatesProvided: currentValues.remandDatesProvided || (cavcRemand.judgement_date || cavcRemand.mandate_date) ? 'yes' : 'no',
      remandAppealId: currentValues.remandAppealId || cavcRemand.remand_appeal_uuid,
      substitutionDate: currentValues.substitutionDate || cavcRemand.cavc_remands_appellant_substitution?.substitution_date,
      participantId: currentValues.participantId || cavcRemand.cavc_remands_appellant_substitution?.participant_id,
      isAppellantSubstituted:
        (currentValues.isAppellantSubstituted || (cavcRemand.cavc_remands_appellant_substitution?.is_appellant_substituted ? 'true' : 'false'))
    };
  }, [cavcRemand, currentValues]);

  const handleCancel = () => history.push(`/queue/appeals/${appealId}`);

  const handleSubmit = async (formData) => {
    const payload = {
      data: {
        judgement_date: formData.judgementDate ? formData.judgementDate : '',
        mandate_date: formData.mandateDate ? formData.mandateDate : '',
        source_appeal_id: cavcRemand.source_appeal_uuid,
        remand_appeal_id: appealId,
        cavc_docket_number: formData.docketNumber,
        cavc_judge_full_name: formData.judge,
        cavc_decision_type: formData.decisionType,
        decision_date: formData.decisionDate,
        remand_subtype: formData.remandType,
        represented_by_attorney: formData.attorney === 'yes',
        decision_issue_ids: formData.issueIds,
        federal_circuit: formData.federalCircuit,
        instructions: formData.instructions,
        substitution_date: formData.isAppellantSubstituted === 'true' ? formData.substitutionDate : null,
        participant_id: formData.isAppellantSubstituted === 'true' ? formData.participantId : null,
        is_appellant_substituted: formData.isAppellantSubstituted
      },
    };

    if (!featureToggles.cavc_remand_granted_substitute_appellant) {
      const successMsg = {
        title: COPY.CAVC_REMAND_EDIT_SUCCESS_TITLE,
        detail: COPY.CAVC_REMAND_EDIT_SUCCESS_DETAIL,
      };

      try {
        const res = await dispatch(
          requestPatch(`/appeals/${appealId}/cavc_remand`, payload, successMsg)
        );
        const updatedCavcRemand = res.body.cavc_remand;

        // Update Redux
        dispatch(editAppeal(appealId, {cavcRemand: updatedCavcRemand}));
        // Redirect back to case details for remand appeal
        // EditCavcTodo: Force a refresh in case issue selection changed
        history.push(`/queue/appeals/${appealId}`);

      } catch (error) {
        dispatch(
          showErrorMessage({
            title: 'Error',
            detail: JSON.parse(error.message).errors[0].detail,
          })
        );
      }
    } else {
      // TODO connect with new modify task page for new edit court remand workflow
      dispatch(
        updateData({
          formData: {
            ...formData,
            substitutionDate: moment(formData.substitutionDate).format('YYYY-MM-DD'),
            decisionDate: moment(formData.decisionDate).format('YYYY-MM-DD'),
            // Currently hardcoding claimantType until future work where this is selectable
            claimantType: 'DependentClaimant'
          }
        })
      );

      dispatch(stepForward());

      history.push(`/queue/appeals/${appealId}/edit_cavc_remand/tasks`);
    }
  };

  // Load veteran relationships for this appeal
  useEffect(() => {
    dispatch(fetchRelationships({ appealId }));
  }, []);

  return (
    <EditCavcRemandForm
      decisionIssues={cavcRemand?.source_decision_issues}
      existingValues={existingValues}
      supportedDecisionTypes={supportedDecisionTypes}
      supportedRemandTypes={supportedRemandTypes}
      substituteAppellantClaimantOptions={substituteAppellantClaimantOptions}
      onCancel={handleCancel}
      onSubmit={handleSubmit}
    />
  );
};
