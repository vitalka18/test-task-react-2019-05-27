/* eslint-disable no-console */

/**
 * Incapsulate logging systems into single place
 *
 * @class Logger
 */
class Logger {
  /**
   * Logging all list of arguments as error message
   */
  static error(...params) {
    console.log(params);
  }

  /**
   * Logging all list of arguments as info message
   */
  static info(...params) {
    console.info(params);
  }

  /**
   * Logging all list of arguments as warning message
   */
  static warn(...params) {
    console.warn(params);
  }
}

export default Logger;
