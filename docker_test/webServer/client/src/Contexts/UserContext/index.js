import React from "react";
import _ from "lodash";

export const UserContext = React.createContext({
  user: {},
  setUser: _.noop,
});
