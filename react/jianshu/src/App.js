import React, { Component } from "react";
import Header from "./common/header/index";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store/index";
import { Provider } from "react-redux";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from './pages/login';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            {/* <Route path="/" exact render={() => <div>home</div>}></Route>
              <Route path="/detail" exact render={() => <div>detail</div>}></Route> */}
            <Route path="/" exact component={Home} />
            <Route path="/detail/:id" exact component={Detail} />
            <Route path="/login" exact component={Login} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
