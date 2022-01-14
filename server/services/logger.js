/**
 * A wrapper logger
 */
export default class Logger {
  constructor(_console = global.console) {
    this.console = _console;
  }

  log(...args) {
    this.console.log(...args);
  }

  info(...args) {
    this.console.info(...args);
  }

  error(...args) {
    this.console.error(...args);
  }
}
