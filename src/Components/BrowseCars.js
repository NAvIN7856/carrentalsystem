import React, { Component } from "react";
import CarCard from "./CarCard";

export class BrowseCars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
  }

  componentDidMount() {
    fetch("/cars.json")
      .then((response) => response.json())
      .then((data) => this.setState({ cars: data }))
      .catch((error) => console.error("Error fetching the cars:", error));
  }
  render() {
    return (
      <div className="container my-4">
        <h2>BrowseCars</h2>
        <div className="row">
          {this.state.cars.map((car) => (
            <div className="col-md-3" key={car.id}>
              <CarCard
                title={`${car.make} ${car.model}`}
                description={`Year: ${car.year}`}
                imageUrl={car.image}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BrowseCars;
