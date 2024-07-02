import React from 'react';
import ArticleFormat from "../article_format/ArticleFormat";
import cartImg from './photos/cart.jpg';
import './Adress.css'
import point from './photos/point.png';

function Adress() {
    return (
        <ArticleFormat>
            <div className='main__adress'>
                <h1 id='heading__adress'>АДРЕСА</h1>
                <div className='adresses'>
                    <div className='adress__inline'>
                        <img className='pointers__adress' src={point} alt='Картинки нет' />
                        <text>ул. Калинина, 277</text>
                    </div>
                    <div className='adress__inline'>
                        <img src={point} alt='Картинки нет' className='pointers__adress'/>
                        <text>проспект Красного Знамени, 123</text>
                    </div>
                    <div className='adress__inline'>
                        <img src={point} alt='Картинки нет' className='pointers__adress'/>
                        <text>ул. Мордовцева, 3</text>
                    </div>
                </div>
                <img src={cartImg} alt='Картинки нет' className='cart_img'/>
            </div>
        </ArticleFormat>
    );
}

export default Adress;