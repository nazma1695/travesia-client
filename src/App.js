import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./shared/Header/Header";
import Home from "./components/pages/Home/Home";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ServiceDetails from "./components/pages/ServiceDetails/ServiceDetails";
import Services from "./components/pages/Services/Services";
import Blog from "./components/pages/Blog/blog";
import Contact from "./components/pages/Contact/Contact";
import Login from "./components/pages/Login/Login";
import NotFound from "./components/pages/NotFound/NotFound";
import Footer from "./shared/Footer/Footer";
import AddOffer from "./components/pages/AddOffer/AddOffer";
import ManageOffer from "./components/pages/ManageOffer/ManageOffer";
import MyOrder from "./components/pages/MyOrder/MyOrder";
import Shipping from "./components/pages/Shipping/Shipping";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route path="/addOffer">
              <AddOffer></AddOffer>
            </Route>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/offer">
              <ManageOffer></ManageOffer>
            </Route>
            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <PrivateRoute path="/blog">
              <Blog></Blog>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path={"/details/:serviceId"}>
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
