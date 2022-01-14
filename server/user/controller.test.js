import jwt from "jsonwebtoken";

import { loadUser } from "./controller";

jest.mock("jsonwebtoken", () => ({
  sign: jest.fn(() => "TOKEN"),
}));

jest.mock("../config/serverConfig", () => ({
  serverConfig: { jwt: { secret: "SECRET" } },
}));

describe("controller", () => {
  describe("loadUser", () => {
    const userMock = {
      _id: 1,
      toObject: () => ({ password: "PASSWORD", userName: "USER_NAME" }),
    };

    const resMock = {
      json: jest.fn(),
    };

    it("should load the user", () => {
      const result = loadUser(resMock, userMock);

      expect(resMock.json.mock.calls.pop()).toMatchSnapshot();
      expect(jwt.sign.mock.calls.pop()).toMatchSnapshot();
      expect(result).toBe(resMock);
    });
  });
});
