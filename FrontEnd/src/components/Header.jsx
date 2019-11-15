/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions';
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
          <a id="logo-header" href="#">
            <span class="site-name">FranciscoAMK</span>
            <span class="site-desc">Diseño web / WordPress / Tutoriales</span>
          </a>
          <nav>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Acerca de</a></li>
              <li><a href="#">Contacto</a></li>
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
