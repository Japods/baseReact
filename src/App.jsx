import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import RouterView from "./router/index";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import store from "./Store/index";
// import store from "./Store/Store"

import Interceptor from "./hooks/Interceptor/Interceptor";
import { ReactNotifications } from "react-notifications-component";

// style
import "./assets/Style/index.css";
import "./assets/Style/index.scss";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";
import "animate.css/animate.compat.css";
import "swiper/css";

function App() {
  const ejecuteInterceptor = Interceptor();
  ejecuteInterceptor;
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ReactNotifications />
        <Header />
        <RouterView />
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
