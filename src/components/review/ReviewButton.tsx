import React, { useState, useEffect } from 'react';
import api from "../../api";
import { Link } from 'react-router-dom';
import './ReviewButton.css'


function ReviewButton() {
    return (
        <Link to='/review' className='review_button'>Оставить отзыв</Link>
    )
}

export default ReviewButton;

