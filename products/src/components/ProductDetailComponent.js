import React, { Component } from 'react';
import axios from 'axios';


class ProductDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      isLoaded: false,
    };
  }

  componentWillMount() {
    this.getData();
  }


  getData() {
    let url = `http://localhost:3020/products`;
    let paramsId = this.props.match.params.id;
    let data = [];
    axios.get(url)
      .then(res => {
        data.push(res.data)
        data[0].forEach((e) => {
          if (e.id == paramsId) {
            this.setState({ product: e, isLoaded: true })
          }
        })
      })
      .catch(e => console.log("error pidiendo datos"))

  }

  render() {
    let info = this.state.product
    if (!this.state.isLoaded) {
      return (
        <div className="spinner"></div>
      )
    } else  {
      return (
        <div className="spcific-phone-info">
          <div className="spcific-phone-info-up">
            <div className="specific-phone-div">
              <img src={info.picture} alt="phone" className="specific-phone"></img>
            </div>
            <div className="spcific-phone-info-text">
              <h3>{info.name}</h3>
              <h5>Price: {info.price}</h5>
              <h5>Available colours: {info.colour}</h5>
              <h5>Size: {info.size}</h5>
              <h5>Score: {info.score}</h5>
            </div>
          </div>
          <div className="spcific-phone-info-down">
          <h5>{info.description}</h5>
          </div>
        </div>
      )
    }

  }
}



export default ProductDetailComponent;