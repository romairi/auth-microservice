import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./containers/App";
import store, {history} from "./redux/store";
import { createSetUserAction } from "./redux/reducers/UserReducer/actions";
import "./i18next";
import "./index.scss";

window.clientData = window.clientData || {};

store.dispatch(createSetUserAction(window.clientData.user));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <App history={history}/>
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
