import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PortfolioItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItemClass: ""
    };
  }

  handleMouseEnter() {
    this.setState({ portfolioItemClass: "image-blur" }); // al poner el raton se oscurece
  }

  handleMouseLeave() {
    this.setState({ portfolioItemClass: "" }); // al levantarlo vuelve a la normalidad
  }

  render() {
    const { id, description, thumb_image_url, logo_url } = this.props.item;
    return (
      <div
        className="portfolio-item-wrapper"
        onMouseEnter={() => this.handleMouseEnter()} // para que cargue y se ejecute cuando estemos encima 
        onMouseLeave={() => this.handleMouseLeave()} // para que cargue y se ejecute cuando quitemos el raton  
      >
        <div
          className={
            "portfolio-img-background " + this.state.portfolioItemClass  // trae la clase que hace que se sombree
          }
          style={{
            backgroundImage: "url(" + thumb_image_url + ")"
          }}
        />

        <div className="img-text-wrapper">
          <div className="logo-wrapper">
            <img src={logo_url} />
          </div>

          <div className="subtitle">{description}</div>
        </div>
      </div>
    );
  }
}