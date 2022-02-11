const appframe = require("./frame.js");

const add1 = appframe.inject([
  { sample: { one: "I am a sample injected value" } },
]);
const add1_2 = appframe.inject([
  { sample: { one: "I won't work; I am already defined" } },
]);

const stars = `${appframe.duplicate(`${appframe.icons.success}`.yell, 5)}`;
const newlines = `${appframe.duplicate(`\n`.yell, 2)}`;

c_log.info(`${newlines}${stars} SAMPLE APP ${stars}${newlines}`.succ);
c_log.info(appframe.sample, {
  attempt_one: add1,
  attempt_two: add1_2,
});
c_log.info(newlines);
