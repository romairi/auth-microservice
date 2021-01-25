import Logger from './logger';

describe('Logger', () => {
    let logger;
    const consoleLogger = {
        log: jest.fn(),
        info: jest.fn(),
        error: jest.fn()
    };

    beforeEach(() => {
        consoleLogger.log.mockClear();
        consoleLogger.info.mockClear();
        consoleLogger.error.mockClear();

        logger = new Logger(consoleLogger);
    });

    it('should log a message', () => {
        logger.log('The test is working with console.log');
        expect(consoleLogger.log).toHaveBeenCalledWith('The test is working with console.log');
    });

    it('should log a info message', () => {
        logger.info('The test is working with console.info');
        expect(consoleLogger.info).toHaveBeenCalledWith('The test is working with console.info');
    });

    it('should log an error message', () => {
        logger.error('The test is working with console.error');
        expect(consoleLogger.error).toHaveBeenCalledWith('The test is working with console.error');
    });
});
