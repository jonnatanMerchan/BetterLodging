import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/DetailRoom.scss';
import MapContainer from "../components/Map";  

const DetailRoom = (props) => { 
  const {room} = props;
  const sumTotal = () => {
    return room.reduce((totalPrice,b) => totalPrice + b.price, 0)
  }
  return(
  <div className="container">
  <div className="crosselImage">
    <ul className="slides">
      <span id="slide1"><img src="https://a0.muscache.com/im/pictures/25625163/d4833a1c_original.jpg?aki_policy=xx_large" alt="" /></span>
      <span id="slide2"><img src="https://a0.muscache.com/im/pictures/25624825/6ef8e934_original.jpg?aki_policy=xx_large" alt="" /></span>
      <span id="slide3"><img src="https://a0.muscache.com/im/pictures/09cef96b-3288-4a5d-a9c5-16bc857379e9.jpg?aki_policy=xx_large" alt="" /></span>
      <span id="slide4"><img src="https://a0.muscache.com/im/pictures/b6491587-80c2-42c1-a89b-1dd2f5f95071.jpg?aki_policy=xx_large" alt="" /></span>
      <span id="slide5"><img src="https://a0.muscache.com/im/pictures/97a4b034-6bdc-43ea-b2cc-0bcbbbf211b1.jpg?aki_policy=xx_large" alt="" /></span>
    </ul>

    <ul className="thumbnails">
      <span>
        <a href="#slide1"><img src="https://a0.muscache.com/im/pictures/25625163/d4833a1c_original.jpg?aki_policy=small" /></a>
      </span>
      <span>
        <a href="#slide2"><img src="https://a0.muscache.com/im/pictures/25624825/6ef8e934_original.jpg?aki_policy=small" /></a>
      </span>
      <span>
        <a href="#slide3"><img src="https://a0.muscache.com/im/pictures/09cef96b-3288-4a5d-a9c5-16bc857379e9.jpg?aki_policy=small" /></a>
      </span>
      <span>
        <a href="#slide4"><img src="https://a0.muscache.com/im/pictures/b6491587-80c2-42c1-a89b-1dd2f5f95071.jpg?aki_policy=small" /></a>
      </span>
      <span>
        <a href="#slide5"><img src="https://a0.muscache.com/im/pictures/97a4b034-6bdc-43ea-b2cc-0bcbbbf211b1.jpg?aki_policy=small" /></a>
      </span>
    </ul>
  </div>
  <div className="price">
    <div className="header-price">
      <h1>$160.000</h1><span>por noche</span>
      <div className="clasificacion">
        <p className="clasificacion">
          <input id="radio1" type="radio" name="estrellas" value="5" />
          <label for="radio1">★</label>
          <input id="radio2" type="radio" name="estrellas" value="4" />
          <label for="radio2">★</label>
          <input id="radio3" type="radio" name="estrellas" value="3" />
          <label for="radio3">★</label>
          <input id="radio4" type="radio" name="estrellas" value="2" />
          <label for="radio4">★</label>
          <input id="radio5" type="radio" name="estrellas" value="1" />
          <label for="radio5">★</label>
        </p>
      </div>
    </div>
    <div className="content-price">
      <p>total</p>
      <h2>${sumTotal()}</h2>
    </div>
  </div>
  <div className="map">
    <MapContainer />
  </div>
</div>
  );  
};

const mapStateToProps = state => {
  return {
    room: state.room,
  };
};

export default connect(mapStateToProps, null)(DetailRoom);
