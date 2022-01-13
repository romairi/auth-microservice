import { ValidationError } from "express-validation";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import {
  clientErrorHandler,
  errorHandler,
  logErrors,
  validationError,
} from "./errorHandling";

describe("errorHandling", () => {
  describe("validationError", () => {
    const resMock = {
      status: jest.fn(() => ({
        json: (err) => JSON.stringify(err),
      })),
    };

    const nextMock = jest.fn(() => "MOCK_NEXT");

    beforeEach(() => {
      resMock.status.mockClear();
      nextMock.mockClear();
    });

    it("should return status code error with the object", () => {
      const err = new ValidationError(["err1", "err2", "err3"], {
        statusCode: 500,
      });
      const result = validationError(err, null, resMock, nextMock);

      expect(resMock.status).toHaveBeenCalledWith(500);
      expect(nextMock).not.toHaveBeenCalled();
      expect(result).toMatchSnapshot();
    });

    it("should pass the error to the next middleware", () => {
      const err = new Error("MOCK_ERROR");
      const result = validationError(err, null, resMock, nextMock);

      expect(resMock.status).not.toHaveBeenCalled();
      expect(nextMock).toHaveBeenCalledWith(err);
      expect(result).toBe("MOCK_NEXT");
    });
  });

  describe("logErrors", () => {
    const loggerMock = { error: jest.fn() };
    const nextMock = jest.fn();

    it("should log stack trace and pass the error to the next middleware", () => {
      const err = { stack: "MOCK_STACK" };
      logErrors(loggerMock)(err, null, null, nextMock);

      expect(loggerMock.error).toHaveBeenCalledWith("MOCK_STACK");
      expect(nextMock).toHaveBeenCalledWith(err);
    });
  });

  describe("clientErrorHandler", () => {
    const sendMock = jest.fn();
    const resMock = { status: jest.fn(() => ({ send: sendMock })) };
    const nextMock = jest.fn();

    beforeEach(() => {
      sendMock.mockClear();
      resMock.status.mockClear();
      nextMock.mockClear();
    });

    it("should return INTERNAL_SERVER_ERROR", () => {
      const reqMock = { xhr: jest.fn() };
      clientErrorHandler(null, reqMock, resMock, nextMock);

      expect(resMock.status).toHaveBeenCalledWith(
        StatusCodes.INTERNAL_SERVER_ERROR
      );
      expect(sendMock).toHaveBeenCalledWith({
        error: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
      expect(nextMock).not.toHaveBeenCalled();
    });

    it("should pass the error to the next middleware", () => {
      const reqMock = {};
      const err = new Error("MOCK_ERROR");
      clientErrorHandler(err, reqMock, resMock, nextMock);
      expect(resMock.status).not.toHaveBeenCalled();
      expect(sendMock).not.toHaveBeenCalled();
      expect(nextMock).toHaveBeenCalledWith(err);
    });
  });

  describe("errorHandler", () => {
    const resMock = { status: jest.fn(), send: jest.fn() };

    beforeEach(() => {
      resMock.status.mockClear();
      resMock.send.mockClear();
    });

    it("should return response with INTERNAL_SERVER_ERROR", () => {
      errorHandler(null, null, resMock, null);

      expect(resMock.status).toHaveBeenCalledWith(
        StatusCodes.INTERNAL_SERVER_ERROR
      );
      expect(resMock.send).toHaveBeenCalledWith(
        ReasonPhrases.INTERNAL_SERVER_ERROR
      );
    });
  });
});
