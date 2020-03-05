import React, { Component } from "react";
import { connect } from "react-redux";
import { carDetail } from "../actions";
import { bindActionCreators } from "redux";
class car extends Component {
  showCarDetails = carinfo => {
    if (carinfo) {
      return carinfo.map(car => {
        return (
          <div>          <div>
            <h1 style={{fontFamily:'cursive',textAlign:'center',margin:'30px 0px'}}>Car Details</h1>
          </div>
          <div
            className="card text-center"
            style={{ width: "600px", height: "700px", margin: "20px auto" }}
          >
            <img
              className="card-img-top img-thumbnail"
              style={{ height: "435px" }}
              src={`/images/${car.image}`}
              alt="Card image cap"
            />
            <div className="card-body">
              <h3 className="card-title">
                {car.brand}{" "}
                <span style={{ display: "inline" }}>{car.year}</span>
              </h3>
              <p className="card-text" style={{ color: "gray" }}>
                {car.description}
              </p>
            </div>
          </div>
          </div>

        );
      });
    }
  };

  componentWillMount() {
    {
      this.props.carDetail(this.props.match.params.id);
    }
  }
  render() {
    // const { cars } = this.props.cars;
    return <div>{this.showCarDetails(this.props.cars.carinfo)}</div>;
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ carDetail }, dispatch);
}
function mapStateToProps(state) {
  console.log(state);
  return {
    cars: state.cars
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(car);
