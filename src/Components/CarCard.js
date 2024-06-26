import React, { Component } from "react";

export class CarCard extends Component {
  render() {
    let { title, description, imageUrl } = this.props;
    return (
      <div className="mt-5">
        <div className="card" style={{ width: "20rem", height: "25rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-sm btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CarCard;
