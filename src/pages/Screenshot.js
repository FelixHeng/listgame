import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import "./Screenshot.css";

class Screenshot extends Component {
  state = {
    screenshot: []
  };

  getScreenshot = () => {
    Axios.get("https://wild-games.herokuapp.com/api/v1").then(response =>
      this.setState({
        screenshot: response.data
      })
    );
  };

  componentDidMount() {
    this.getScreenshot();
  }

  render() {
    console.log("paraaaaam", this.props.match.params.id);
    return (
      <div className="screenshot-container">
        <div>
          <button className="home-btn">
            <Link to={"/"}>Home</Link>
          </button>
        </div>
        {this.state.screenshot.map(firstArray => {
          console.log(firstArray);
          console.log("id du jeu", firstArray.id);
          console.log("url id ", this.props.match.params.id);
          console.log(
            "same typeof ?",
            firstArray.id === this.props.match.params.id
          );
          console.log("url id is a ", typeof this.props.match.params.id);
          if (firstArray.id === parseInt(this.props.match.params.id))
            return firstArray.short_screenshots.map(shortArray => {
              return (
                <img
                  className="screenshot"
                  src={shortArray.image}
                  alt={firstArray.name}
                />
              );
            });
        })}
      </div>
    );
  }
}

export default Screenshot;
