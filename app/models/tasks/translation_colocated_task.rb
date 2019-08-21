# frozen_string_literal: true

class TranslationColocatedTask < ColocatedTask
  after_create :create_translation_task

  def self.label
    Constants.CO_LOCATED_ADMIN_ACTIONS.translation
  end

  def self.default_assignee
    Translation.singleton
  end

  def hide_from_case_timeline
    new_style_colocated?
  end

  def hide_from_task_snapshot
    new_style_colocated?
  end

  # Temporary fix for production tasks in weird state
  # https://github.com/department-of-veterans-affairs/caseflow/pull/11848
  def self.hide_from_queue_table_view
    false
  end

  def create_translation_task
    TranslationTask.create!(
      assigned_to: assigned_to,
      assigned_by: assigned_by,
      instructions: instructions,
      appeal: appeal,
      parent: self
    )
  end

  private

  def cascade_closure_from_child_task?(child_task)
    child_task.is_a?(TranslationTask)
  end

  def new_style_colocated?
    children.any? && children.first.is_a?(TranslationTask)
  end
end
