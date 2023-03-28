SCHEDULED_JOBS = {
    "amo_metrics_report" => AMOMetricsReportJob,
    "annual_metrics" => AnnualMetricsReportJob,
    "calculate_dispatch_stats" => CalculateDispatchStatsJob,
    "create_establish_claim" => CreateEstablishClaimTasksJob,
    "data_integrity_checks" => DataIntegrityChecksJob,
    "delete_conferences_job" => VirtualHearings::DeleteConferencesJob,
    "dependencies_check" => DependenciesCheckJob,
    "dependencies_report_service_log" => DependenciesReportServiceLogJob,
    "docket_range_job" => DocketRangeJob,
    "etl_builder" => ETLBuilderJob,
    "fetch_hearing_locations_for_veterans_job" => FetchHearingLocationsForVeteransJob,
    "foreign_key_polymorphic_association_job" => ForeignKeyPolymorphicAssociationJob,
    "hearing_disposition_change_job" => HearingDispositionChangeJob,
    "hearing_email_status_job" => Hearings::HearingEmailStatusJob,
    "heartbeat" => HeartbeatTasksJob,
    "incomplete_distributions_job" => IncompleteDistributionsJob,
    "monthly_metrics" => MonthlyMetricsReportJob,
    "nightly_syncs" => NightlySyncsJob,
    "out_of_service_reminder" => OutOfServiceReminderJob,
    "prepare_establish_claim" => PrepareEstablishClaimTasksJob,
    "push_priority_appeals_to_judges" => PushPriorityAppealsToJudgesJob,
    "quarterly_metrics" => QuarterlyMetricsReportJob,
    "quarterly_notifications_job" => QuarterlyNotificationsJob,
    "reassign_old_tasks" => ReassignOldTasksJob,
    "retrieve_documents_for_reader" => RetrieveDocumentsForReaderJob,
    "send_reminder_emails_job" => Hearings::SendReminderEmailsJob,
    "set_appeal_age_aod" => SetAppealAgeAodJob,
    "stats_collector" => StatsCollectorJob,
    "sync_intake" => SyncIntakeJob,
    "sync_reviews" => SyncReviewsJob,
    "take_docket_snapshot" => TakeDocketSnapshotJob,
    "task_timer_job" => TaskTimerJob,
    "update_appellant_representation_job" => UpdateAppellantRepresentationJob,
    "update_cached_appeals_attributes_job" => UpdateCachedAppealsAttributesJob,
    "warm_bgs_caches_job" => WarmBgsCachesJob,
    "va_notify_status_update_job" => VANotifyStatusUpdateJob,
    "poll_docketed_legacy_appeals_job" => PollDocketedLegacyAppealsJob,
    "fetch_all_active_ama_appeals_job" => FetchAllActiveAmaAppealsJob,
    "fetch_all_active_legacy_appeals_job" => FetchAllActiveLegacyAppealsJob,
    "retrieve_and_cache_reader_documents_job" => RetrieveAndCacheReaderDocumentsJob,
    "travel_board_hearing_sync_job" => Hearings::TravelBoardHearingSyncJob,
    "notification_efolder_sync_job" => NotificationEfolderSyncJob,
    "change_hearing_request_type_task_cancellation_job" => ChangeHearingRequestTypeTaskCancellationJob
}.freeze