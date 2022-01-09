import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Homepage from "../Components/homepage";
import SitewidePasskey from "../Components/SitewidePasskey";
import Paymentportal from "../Components/Paymentportal";
import Beneficiary from "../Components/Beneficiaryportal";

const AppRouter = () => (
    <Router>
      <div>
          <Switch>
            <Route path="/"><SitewidePasskey/></Route>
            <Route path="/home"><Homepage/></Route>
            <Route path="/payment"><Paymentportal/></Route>
            <Route path="/Beneficiary"><Beneficiary/></Route>
          </Switch>
      </div>
    </Router>
);

export default AppRouter;
