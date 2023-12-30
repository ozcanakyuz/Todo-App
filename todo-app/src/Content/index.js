import React, { Component } from "react";
import List from "./List";

export default class Content extends Component {
  render() {
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <List/>
      </section>
    );
  }
}
