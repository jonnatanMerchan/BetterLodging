import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const Home = ({ mylist, trends, colombia }) => {
  return (
    <div className='App'>
      <Search isHome />

      {mylist.length > 0 &&
        <Categories title='Mi lista'>
          <Carousel>
            {mylist.map((item, index) =>
              <CarouselItem key={index} isListBand={true} {...item} />
            )}
          </Carousel>
        </Categories>}

      <Categories title='Tendencias'>
        <Carousel>
          { trends.map((item, index) =>
            <CarouselItem key={index} {...item} />
          )}
        </Carousel>
      </Categories>

      <Categories title='Lo mas reservado en Colombia'>
        <Carousel>
          {colombia.map((item, index) =>
            <CarouselItem key={index} {...item} />
          )}
        </Carousel>
      </Categories>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    colombia: state.colombia,
    user: state.user
  };
};

export default connect(mapStateToProps, null)(Home);
