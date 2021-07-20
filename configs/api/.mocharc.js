"use strict";

module.exports = {
  "allow-uncaught": false,
  "async-only": false,
  bail: false,
  "check-leaks": false,
  color: true,
  delay: false,
  diff: true,
  exit: false, // could be expressed as "'no-exit': true"
  extension: ["js", ".cjs"],
  "forbid-only": false,
  "forbid-pending": false,
  "full-trace": false,
  growl: false,
  ignore: ["/path/to/some/ignored/file"],
  "inline-diffs": false,
  jobs: 1,
  package: "./package.json",
  parallel: false,
  recursive: false,
  reporter: "spec",
  "reporter-option": ["foo=bar", "baz=quux"],
  retries: 1,
  slow: "75",
  sort: false,
  spec: ["./routes/**/*.spec.js"], // the positional arguments!
  timeout: "2000", // same as "timeout: '2s'"
  "trace-warnings": true, // node flags ok
  ui: "bdd",
  "v8-stack-trace-limit": 100, // V8 flags are prepended with "v8-"
  watch: false,
  "watch-files": ["./**/*.js"],
  "watch-ignore": ["node_modules"],
};
