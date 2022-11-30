import React, { Component } from "react";
import React from "react";
import Weather from "./Weather";


export default class App extends Component {
  render() {
    return (
      <div>
        <createRoot
          exact={true}
          path="/"
          render={() => (
            <div className="App">
              <Weather city="lisbon" />
            </div>
          )}
        />
        <createRoot
          exact={true}
          path="/paris"
          render={() => (
            <div className="App">
              <Weather city="Paris" />
            </div>
          )}
        />
        <createRoot
          exact={true}
          path="/sydney"
          render={() => (
            <div className="App">
              <Weather city="Sydney" />
            </div>
          )}
        />
        <createRoot
          exact={true}
          path="/san-francisco"
          render={() => (
            <div className="App">
              <Weather city="San Francisco" />
            </div>
          )}
        />

      </div>
    );
  }
}
