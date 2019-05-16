# Working With Osquery Logs

Osquery agents are typically configured to send logs to the Fleet server (`--logger_plugin=tls`). This is not a requirement, and any other logger plugin can be used even when osquery clients are connecting to the Fleet server to retrieve configuration or run live queries. See the [osquery logging documentation](https://osquery.readthedocs.io/en/stable/deployment/logging/) for more about configuring logging on the agent.

If `--logger_plugin=tls` is used with osquery clients, the following configuration can be applied on the Fleet server for handling the incoming logs.

## Osquery Logging Plugins

Fleet supports the following logging plugins for osquery logs:

- [Filesystem](#filesystem) - Logs are written to the local Fleet server filesystem.
- [Firehose](#firehose) - Logs are written to AWS Firehose streams.

To set the osquery logging plugins, use the `--osquery_result_log_plugin` and `--osquery_status_log_plugin` flags (or [equivalents for environment variables or configuration files](../infrastructure/configuring-the-fleet-binary.md#options)).

### Filesystem

The default logging plugin.

- Plugin name: `filesystem`
- Flag namespace: [filesystem](../infrastructure/configuring-the-fleet-binary.md#filesystem)

With the filesystem plugin, osquery result and/or status logs are written to the local filesystem on the Fleet server. This is typically used with a log forwarding agent on the Fleet server that will push the logs into a logging pipeline. Note that if multiple load-balanced Fleet servers are used, the logs will be load-balanced across those servers (not duplicated).

### Firehose

- Plugin name: `firehose`
- Flag namespace: [firehose](../infrastructure/configuring-the-fleet-binary.md#firehose)

With the Firehose plugin, osquery result and/or status logs are written to [AWS Firehose](https://aws.amazon.com/kinesis/data-firehose/) streams. This is a very good method for aggregating osquery logs into AWS S3 storage.

Note that Firehose logging has limits [discussed in the documentation](https://docs.aws.amazon.com/firehose/latest/dev/limits.html). When Fleet encounters logs that are too big for Firehose, notifications will be output in the Fleet logs and those logs _will not_ be sent to Firehose.
