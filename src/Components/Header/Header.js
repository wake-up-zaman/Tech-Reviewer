import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='header'>
                <CustomLink className='al' to='/'>Home</CustomLink>
                <CustomLink className='al' to='/review'>Reviews</CustomLink>
                <CustomLink className='al' to='/dash'>Dashboard</CustomLink>
                <CustomLink className='al' to='/blogs'>Blogs</CustomLink>
                <CustomLink className='al' to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;