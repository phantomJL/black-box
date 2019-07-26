import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import alertify from "alertifyjs";
import { LoaderAlt } from "./components/shared";
import ProtectedRoute from "./components/shared/protectedRouter";
import SideBar from "./components/main/sidebar.componenet";

const Dashboard = React.lazy(() => import("./containers/dashboard/dashboard.container"));
const RuleList = React.lazy(() => import("./containers/rules/ruleList/ruleList.container"));
const ZoneDetail = React.lazy(() => import("./containers/dashboard/zoneDetail/zoneDetail.container"));
const RuleDetail = React.lazy(() => import("./containers/rules/ruleDetail/ruleDetail.container"));
const WrappedLogin = React.lazy(() => import("./containers/login/login.container"));
const VehicleType = React.lazy(() => import("./containers/setting/vehicleSetting/vehicleType.container"));
const GeneralSetting = React.lazy(() => import("./containers/setting/generalSetting/generalSetting.container"));

class App extends Component {
  componentDidMount() {
    //Load CSS ASSETS
    Promise.all([
      import("bootstrap/dist/css/bootstrap.min.css"),
      import("bootstrap/dist/js/bootstrap.min"),
      import("jquery/dist/jquery.min"),
      import("antd/dist/antd.css"),
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

    const Loadable = Component => props => {
      return (
        <React.Suspense fallback={<LoaderAlt />}>
          <Component {...props} />
        </React.Suspense>
      );
    };
    return (
      <Switch>
        <Route exact path="/" component={Loadable(WrappedLogin)} />
        <SideBar>
          <Switch>
            <Route exact path="/dashboard" component={Loadable(Dashboard)} />
            <Route exact path="/zone/:zone_token" component={Loadable(ZoneDetail)} />

            <Route exact path="/rules" component={Loadable(RuleList)} />
            <Route exact path="/rule/:rule_token" component={Loadable(RuleDetail)} />
            <Route exact path="/vehicleType" component={Loadable(VehicleType)} />
            <Route exact path="/general" component={Loadable(GeneralSetting)} />
          </Switch>
        </SideBar>
      </Switch>
    );
  }
}

export default App;
