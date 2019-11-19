/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions/index';
import '../assets/styles/components/Header.scss';
import Logo from '../assets/images/logo-header.png';
import ProfilePic from '../assets/images/user-icon.png';
import gravatar from '../utils/gravatar';

const Header = (props) => {
  const { user } = props;

  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
      <header id="main-header">
          <a id="logo-header" href="/">
            <span class="site-name">BetterLodging</span>
            <span class="site-desc">Alojamiento / Alquiler / Los mejores precios </span>
          </a>
          <nav>
            <ul>
              <li><Link to="/login">
                    Iniciar Sessión
                  </Link>
              </li>
            </ul>
          </nav>
        </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
