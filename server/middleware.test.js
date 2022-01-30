import { logErrors } from "./services/errorHandling";
import { middleware } from "./middleware";

jest.mock("express", () => ({ json: () => "EXPRESS_JSON" }));
jest.mock("./user/routes", () => "USER_ROUTE");
jest.mock("./services/errorHandling", () => ({
  logErrors: jest.fn(() => "LOG_ERRORS"),
  validationError: "VALIDATION_ERROR",
  clientErrorHandler: "CLIENT_ERROR_HANDLER",
  errorHandler: "ERROR_HANDLER",
}));

describe("middleware", () => {
  const appMock = { use: jest.fn() };
  const loggerMock = {};

  it("should call app.use with the middleware", () => {
    middleware(appMock, loggerMock);

    expect(logErrors).toHaveBeenCalledWith(loggerMock);
    expect(appMock.use.mock.calls).toMatchSnapshot();
  });
});
