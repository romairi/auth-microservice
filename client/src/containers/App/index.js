import { BrowserRouter as Router } from "react-router-dom";
import routes from "../../routes";
import Footer from '../../components/Footer/index';
import Header from "../../components/Header";

import "./index.scss";

const App = () => {
  return (
    <div className="app-container">
      <Header/>
      <Router>{routes}</Router>
      <Footer/>
    </div>
  );
};

export default App;
