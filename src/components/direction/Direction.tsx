import React from 'react';
import ArticleFormat from "../article_format/ArticleFormat";
import './Direction.css';
import hiphopImg from './photos/hiphop.jpg';
import jazzfunkImg from './photos/jazzfunk.jpg';
import dancehallImg from './photos/dancehall.jpg';
import contemporaryImg from './photos/contemporary.jpg';
import highheelsImg from './photos/highheels.jpg';

function Direction() {
    return (
        <ArticleFormat>
            <div className='main__direction'>
                <div className='header__direction'>
                    СТИЛИ
                </div>
                <div className='column__diretion'>

                    <a href='https://ru.wikipedia.org/wiki/Хип-хоп_(танец)'>
                        <img className='img' src={hiphopImg} alt='Картинки нет'/>
                    </a>

                    <a href='https://ru.wikipedia.org/wiki/%D0%94%D0%B6%D0%B0%D0%B7-%D1%84%D0%B0%D0%BD%D0%BA_(%D1%82%D0%B0%D0%BD%D0%B5%D1%86)'>
                        <img className='img' src={jazzfunkImg} alt='Картинки нет'/>
                    </a>

                    <a href='https://en.wikipedia.org/wiki/Dancehall'>
                        <img className='img' src={dancehallImg} alt='Картинки нет'/>
                    </a>

                    <a href='https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D1%82%D0%B5%D0%BC%D0%BF%D0%BE%D1%80%D0%B0%D1%80%D0%B8'>
                        <img className='img' src={contemporaryImg} alt='Картинки нет'/>
                    </a>

                    <a href='https://www.premier-sport.ru/blog/high-heels-tantsy-na-vysokikh-kablukakh/'>
                        <img className='img' src={highheelsImg} alt='Картинки нет'/>
                    </a>
                </div>
            </div>
        </ArticleFormat>
    );
}

export default Direction;