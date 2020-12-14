/**
 * A wrapper logger
 */
export default class Logger {
    log(...args) {
        console.log(...args);
    }

    info(...args) {
        console.info(...args);
    }

    error(...args) {
        console.error(...args);
    }
}
