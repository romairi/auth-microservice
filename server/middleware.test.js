import {logErrors} from './services/errorHandling';
import {middleware} from "./middleware";

jest.mock('express', () => ({json: () => "EXPRESS_JSON"}));
jest.mock('./user/routes', () => 'USER_ROUTE');
jest.mock('./services/errorHandling', () => ({
    validationError: "VALIDATION_ERROR",
    logErrors: jest.fn(() => 'LOG_ERRORS'),
    clientErrorHandler: "CLIENT_ERROR_HANDLER",
    errorHandler: "ERROR_HANDLER",
}));

describe('middleware', () => {
    const appMock = {use: jest.fn()};
    const loggerMock = {};

    it('should call app.use with the middleware', () => {
        middleware(appMock, loggerMock);

        expect(logErrors).toHaveBeenCalledWith(loggerMock);
        expect(appMock.use.mock.calls).toMatchSnapshot();
    });
});
