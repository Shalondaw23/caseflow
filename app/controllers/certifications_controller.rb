require "vbms_error"

class CertificationsController < ApplicationController
  before_action :verify_authentication
  before_action :verify_access

  rescue_from VBMSError, with: :on_vbms_error

  def on_vbms_error
    @error_title = "VBMS Failure"
    @error_subtitle = "Unable to communicate with the VBMS system at this time."
    @error_retry_external_service = "VBMS"
    render "errors/500", layout: "application", status: 500
  end

  def new
    # NOTE: this isn't rails-restful. certification.start! saves
    # the certification instance.
    case certification.start!
    when :already_certified    then render "already_certified"
    when :data_missing         then render "not_ready", status: 409
    when :mismatched_documents then render "mismatched_documents"
    end

    # VACOLS data will be fetched fresh every time.
    # However, visiting "/certifications/new/123C" will
    # bring the user to the certification with VACOLS id "123C"
    # if it already exists.
    #
    # Update the form8 that belongs to this certification
    # with the newest data.
    certification.form8.update_from_appeal(appeal)
    @form8 = certification.form8
  end

  def create
    # Can't use controller params in model mass assignments without whitelisting. See:
    # http://edgeguides.rubyonrails.org/action_controller_overview.html#strong-parameters
    params.require(:form8).permit!
    form8.update!(params[:form8])
    form8.save_pdf!

    # TODO alex: this writes to the rails cache before we redirect
    # to the PDF preview page. it seems safe to remove but
    # doublecheck.
    # Rails.cache.write(form8_cache_key, form8.attributes)

    redirect_to certification_path(id: certification.form8.vacols_id)
  end

  def show
    render "confirm" if params[:confirm]
  end

  def pdf
    send_file(form8.pdf_location, type: "application/pdf", disposition: "inline")
  end

  def confirm
    @certification = Certification.find_by(vacols_id: vacols_id)

    # Account for appeals that don't have a certification record
    # We'll eventually take this split out.
    @certification ? @certification.complete! : appeal.certify!

    redirect_to certification_path(id: appeal.vacols_id, confirm: true)
  end

  def cancel
    render layout: "application"
  end

  private

  # TODO: alex: is this necessary? should it live elsewhere?
  def form8_cache_key
    # force initialization of cache, there's probably a better way to do this
    session["init"] = true

    "#{session.id}_form8"
  end

  def verify_access
    return true if current_user && current_user.can?("Certify Appeal")
    session["return_to"] = request.original_url
    redirect_to "/unauthorized"
  end

  def certification
    @certification ||= Certification.find_or_create_by_vacols_id(vacols_id)
  end

  def appeal
    @appeal ||= certification.appeal
  end

  helper_method :appeal

  def form8
    # Can't use controller params in model mass assignments without whitelisting. See:
    # http://edgeguides.rubyonrails.org/action_controller_overview.html#strong-parameters
    # TODO (alex): is this too permissive
    params.permit!
    @form8 ||= certification.form8
  end

  helper_method :form8

  def vacols_id
    params[:id] || params[:vacols_id] || params[:form8][:vacols_id]
  end
end
