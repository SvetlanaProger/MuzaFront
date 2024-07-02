import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
        <div className='inline-header'>
            <div className='header__fisrt_part'>
                <Link to='/home' className='btn__home logo-link btns'>Главная</Link>
                <Link to='/direction' className='btn__direction logo-link btns'>Направления</Link>
            </div>
            <div className="header__logo">
                <Link to='/home' className='logo-link'>
                    <text className='m_select'>M</text>
                    U
                    <text className='highlight'>Z</text>
                    A</Link>
            </div>
            <div className='header__second_part'>
                <Link to='/schedule' className='btn__schedule logo-link btns'>Расписание</Link>
                <Link to='/adress' className='btn__adress logo-link btns'>Адреса</Link>
            </div>
        </div>
    </header>
);
}

export default Header;
