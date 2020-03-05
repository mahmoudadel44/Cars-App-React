import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class list_cars extends Component {
  showCars = ({list}) => {
    if (list) {
      return list.map(car => {
        return (
          <div className="all">
            <div className="mycontainer">
              <div className="infoContain">
                <h1 className="header">{car.brand}</h1>
                <div className="header2andspan">
                  <h2>{car.model}</h2>
                  <span>{car.year}</span>
                </div>
              </div>
              <Link to={`/car/${car.id}`}>
                  <img src={`/images/${car.image}`} />
              </Link>
            </div>
          </div>
        );
      });
    }
  };
  render() {
    // const {cars} = this.props.cars;
    return <div> {this.showCars(this.props.cars)}</div>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    cars: state.cars
  };
}

export default connect(mapStateToProps, null)(list_cars);
