import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { searchVideo } from '../actions';
import Categories from './Categories';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const { isHome, search, isSearch } = props;
  const hasSearch = Object.keys(search).length > 0;
  const handleInput = (event) => {
    // setValues({
    //   ...form,
    //   [event.target.name]: event.target.value,
    // });
    props.searchVideo(event.target.value);
  };

  const inputStyte = classNames('inputSearch', {
    isHome,
  });
  const searchStyle = classNames('categories', {
    isSearch,
  });
  return (
    <div>
      <section className='main'>
        <h2 className='main__title'>¿Reservar alojamiento?</h2>
        <input type='text' name='search' className={inputStyte} 
                placeholder="Buscar..." onChange={handleInput} />
          <input type="date" className ="inputDate" />
          <input type="date" className ="inputDate" />
          <select className ="selectPerson" name="transporte">
            <option>1 </option>
            <option>2 </option>
            <option selected>0 -Cantidad personas 0 - habitaciones</option>
        </select>
        {hasSearch ? (
          <Categories title='Resultados' className={searchStyle}>
            <Carousel>
              {search.map((item, index) => <CarouselItem key={index} {...item} />)}
            </Carousel>
          </Categories>
        ) :
          null}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

const mapDispatchToProps = {
  searchVideo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
