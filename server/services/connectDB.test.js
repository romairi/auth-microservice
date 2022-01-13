import mongoose from "mongoose";

import { connectDB } from "./connectDB";

jest.mock("mongoose");
jest.mock("../config/serverConfig", () => ({
  serverConfig: {
    mongo: {
      hostURI: "MOCK_URI",
    },
  },
}));

let mockLogger = {
  log: jest.fn(),
  error: jest.fn(),
};

let mockProcess = {
  exit: jest.fn(),
};

describe("connectDB", () => {
  beforeEach(() => {
    mockLogger.log.mockClear();
    mockLogger.error.mockClear();
    mockProcess.exit.mockClear();
  });

  it("should successfully connect to mongoDB", async () => {
    mongoose.connect.mockImplementationOnce(() => Promise.resolve());

    await connectDB(mockLogger, { process: mockProcess });

    expect(mongoose.connect.mock.calls.pop()).toMatchSnapshot();
    expect(mockLogger.log.mock.calls.pop()).toMatchSnapshot();
    expect(mockLogger.error).not.toHaveBeenCalled();
    expect(mockProcess.exit).not.toHaveBeenCalled();
  });

  it("should failed to connect to mongoDB", async () => {
    mongoose.connect.mockImplementationOnce(() =>
      Promise.reject(new Error("ERROR_MESSAGE"))
    );

    await connectDB(mockLogger, { process: mockProcess });

    expect(mongoose.connect.mock.calls.pop()).toMatchSnapshot();
    expect(mockLogger.log.mock.calls.pop()).toMatchSnapshot();
    expect(mockLogger.error.mock.calls.pop()).toMatchSnapshot();
    expect(mockProcess.exit).toHaveBeenCalledWith(1);
  });
});
