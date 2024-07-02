import React from 'react';
import ArticleFormat from "../article_format/ArticleFormat";
import ReviewButton from "../review/ReviewButton";
import './Home.css';
import main_img from './photos/main_picture.jpg';

function Home() {
    return (
        <ArticleFormat>
            <div className='main__home'>
                <img src={main_img} alt='Картинки нет' id='main_img'/>
                <div className='company_info'>
                    <h2 id='text_company'>Танцевальная студия Muza: 5 лет работы, 5 направлений, 10 преподавателей</h2>
                    <div className='homepage_buttons'>
                        <a href='https://t.me/svetosiikk' id='button_enroll'>Записаться</a>
                        <ReviewButton />
                    </div>
                </div>
            </div>
        </ArticleFormat>
    );
}

export default Home;