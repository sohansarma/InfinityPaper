import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import "./navbar.style.css";

class Navigation extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              {/* <img src={Logo} alt="Hotel" /> */}
              <div>Infinity</div>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About us</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/channelPartner">Become a channel partner</Link>
            </li>
            <li>
              <Link to="/career">career</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
