import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = (props) => {
  const { id, Full_Name, image, Country, Street_Address, Phone, City, Money, Currency, Description, isListBand } = props;
  const handleAddToCart = (product) => {
    props.addToCart(product);
  }
  return (
    <Link to="/detailRoom">
    <div className='carousel-item'>
      <img className="carousel-item__img" src={image} alt={Full_Name} />
      <div className='carousel-item__details'>
        <p className='carousel-item__details--title'>{Full_Name}</p>
        <button type="button" onClick={() => handleAddToCart(product)}>Comprar</button>
      </div>
    </div>
  </Link>

  );
};

CarouselItem.propTypes = {
  Full_Name: PropTypes.string,
  Country: PropTypes.string,
  Street_Address: PropTypes.string,
  Phone: PropTypes.number,
  City: PropTypes.string,
  Money: PropTypes.number,
  Currency: PropTypes.string,
  Description: PropTypes.string,
};

//const mapDispatchToProps = {
//  setFavorite,
//  unsetFavorite,
//};

export default connect(null, null)(CarouselItem);
