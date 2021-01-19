# frozen_string_literal: true

# Controller to edit NOD dates and store the related info in the nod_date_updates table

class NodDateUpdatesController < ApplicationController
  def create
    nod_date_update = NodDateUpdate.create!(updated_params)
    appeal.update_receipt_date!(receipt_date: params[:receipt_date])
    render json: { nod_date_update: nod_date_update }, status: :created
  end

  def update
    if existing_nod_date_update
      nod_date_update = NodDateUpdate.update(updated_params)
      appeal.update_receipt_date!(receipt_date: params[:receipt_date])
      render json: { nod_date_update: nod_date_update }, status: :ok
    else
      create
    end
  end

  private

  def appeal
    @appeal ||= Appeal.find_by_uuid(params[:appeal_id])
  end

  def existing_nod_date_update
    @existing_nod_date_update ||= NodDateUpdate.find_by(appeal_id: appeal.id)
  end

  def updated_params
    params.merge!(
      user_id: current_user.id,
      appeal_id: appeal.id,
      old_date: appeal.receipt_date,
      new_date: params["receipt_date"],
      change_reason: params["change_reason"]["value"]
    )
    params.permit(required_params)
  end

  def required_params
    [
      :user_id,
      :appeal_id,
      :old_date,
      :new_date,
      :change_reason,
      :created_at,
      :updated_at
    ]
  end
end
