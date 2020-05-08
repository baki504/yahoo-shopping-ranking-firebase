import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Ranking from "./containers/Ranking";
import Nav from "./containers/Nav";
import CssBaseline from "@material-ui/core/CssBaseline";

export default class App extends Component {
  render() {
    return (
      <div className="App" style={{ paddingLeft: 240 }}>
        <CssBaseline />

        <AppBar style={{ left: 240 }}>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Yahoo!ショッピングランキング
            </Typography>
          </Toolbar>
        </AppBar>

        <Nav />

        <div style={{ marginTop: 64, padding: 32 }}>
          <Switch>
            <Route path="/all" component={Ranking} />
            <Route path="/category/1" render={() => <Redirect to="/all" />} />
            <Route
              path="/category/:id"
              render={({ match }) => <Ranking categoryId={match.params.id} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
