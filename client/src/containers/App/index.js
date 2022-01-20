import { BrowserRouter as Router } from "react-router-dom";
import routes from "../../routes";
import "./index.scss";
import Footer from '../../components/Footer/index';
import Header from "../../components/Header";

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
