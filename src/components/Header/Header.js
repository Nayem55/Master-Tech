import React from 'react';
import logo from './logo.png';
import './Header.css'
import ActiveLink from '../../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='header sticky-top'>
            <img className='logo' src={logo} alt="" />
            <div className='link'>
                <ActiveLink to={"/home"}>HOME </ActiveLink> 
                <ActiveLink to={"/reviews"}>REVIEWS</ActiveLink>
                <ActiveLink to={"/dashboard"}>DASHBOARD</ActiveLink>
                <ActiveLink to={"/blogs"}>BLOGS</ActiveLink>
                <ActiveLink to={"/about"}>ABOUT</ActiveLink>
              
            </div>
        </div>
    );
};

export default Header;