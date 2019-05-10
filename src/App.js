import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import alertify from "alertifyjs";
import { LoaderAlt } from "./components/shared";

const Index = React.lazy(() => import("./containers/index/Index.container"));
class App extends Component {
  componentDidMount() {
    //Load CSS ASSETS
    Promise.all([
      import("bootstrap/dist/css/bootstrap.min.css"),
      import("jquery/dist/jquery.min"),
      import("bootstrap/dist/js/bootstrap.min"),
      import("@fortawesome/fontawesome-free/css/all.css"),
      import("./alertify.css")
    ]);
  }

  render() {
    //CONFIG ALERTIFY SETTING
    alertify.defaults.transition = "zoom";
    alertify.defaults.theme.ok = "btn st-bg-green text-white";
    alertify.defaults.theme.cancel = "btn btn-danger";
    alertify.defaults.theme.input = "form-control";

    return (
      <React.Suspense fallback={<LoaderAlt />}>
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </React.Suspense>
    );
  }
}

export default App;
