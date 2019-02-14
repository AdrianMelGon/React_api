import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class ProductListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentWillMount() {
    this.getData();
  }


  getData() {
    let url = `http://localhost:3020/products`;
    axios.get(url)
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(e => console.log("error pidiendo datos"))
  }

  render() {
    const products = this.state.products
    return (
      <div className="phone-container">
        {products.map((e, i) => <div key={e.name}>
          <h2>
            <Link to={`/${e.id}`}>{e.name}</Link>
          </h2>
          <div className="phone-container-pic">
          <img src={e.picture} alt="phone" className="phone"></img>
          </div>
        </div>)}
      </div>
    )

  }
}



export default ProductListContainer;