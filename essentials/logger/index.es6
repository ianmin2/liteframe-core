const { createLogger, format, transports } = winston;
const { combine, timestamp, label, prettyPrint, json, simple, logstash } =
  format;

const service = process.env.APP_NAME || "@liteframe-core";

const logDestination = path.join(
  `${process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE}`,
  `/.bixbyte/${service}/logs`
);

const errorLogPath = path.join(logDestination, `error-log.log`);

const combinedLogpath = path.join(logDestination, `main.log`);

const jsonLogpath = path.join(logDestination, `log.json`);

//@ Ensure that the loging directory exists
fse.ensureDirSync(logDestination);

const consoleLogger = createLogger({
  defaultMeta: { service, timestamp: Date.now() },
  format: prettyPrint(),
  level: "silly",
  transports: [new transports.Console()],
});

const logger = createLogger({
  level: "info",
  defaultMeta: { service, timestamp: Date.now() },
  format: prettyPrint(),
  transports: [
    new transports.File({
      filename: errorLogPath,
      level: "error",
    }),
    new transports.File({
      filename: combinedLogpath,
    }),
  ],
});

const jlogger = createLogger({
  level: "info",
  defaultMeta: { service, timestamp: Date.now() },
  format: json(),
  transports: [
    new transports.File({
      filename: errorLogPath,
      level: "error",
    }),
    new transports.File({
      filename: jsonLogpath,
    }),
  ],
});

if (process.env.DEBUG) {
  logger.add(
    new transports.Console({
      format: simple(),
      level: "silly",
    })
  );
}

exports._LOG = exports.log = exports.logger = logger;

exports._C_LOG = exports.c_log = consoleLogger;

exports._J_LOG = exports.j_log = jlogger;
