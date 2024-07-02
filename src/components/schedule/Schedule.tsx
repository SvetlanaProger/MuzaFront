import React from 'react';
import ArticleFormat from "../article_format/ArticleFormat";
import SCHEDULE from "./photos/SCHEDULE.jpg";
import './Schedule.css';

function Schedule() {
    return (
        <ArticleFormat>
            <div className='main__schedule'>
                <h1 id='schedule_heading'>Расписание</h1>
                <img className='img_schedule' src={SCHEDULE} alt='Картинки нет'/>
            </div>
        </ArticleFormat>
    );
}

export default Schedule;