import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Edited by <a href="https://www.instagram.com/ozcanakyuz_/">Ozcan Akyuz</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    );
  }
}
