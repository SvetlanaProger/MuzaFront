import React, { useState } from 'react';
import ArticleFormat from "../article_format/ArticleFormat";
import api from "../../api";
import './ReviewPage.css'
import './ReviewButton.css'

const ReviewPage = () => {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');
    const [placeholder, setPlaceholder] = useState('Ваше имя');
    const [textareaPlaceholder, setTextareaPlaceholder] = useState('Оставьте ваш отзыв');

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setMessage(''); // Сбросить сообщение перед отправкой
        try {
            const newReview = { author, text };
            await api.post('http://localhost:5000/review', newReview);
            setMessage('Отзыв успешно отправлен!');
            setAuthor('');
            setText('');
        } catch (error) {
            console.log('Error submitting review:', error);
            setMessage(String(error));
        }
    };

    const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
        const target = e.target as HTMLTextAreaElement;
        target.style.height = 'auto'; // Сбросить высоту, чтобы textarea могла уменьшиться
        target.style.height = `${target.scrollHeight}px`; // Установить высоту равной высоте скролла

        // Ограничить максимальную высоту
        if (target.scrollHeight > 330) {
            target.style.height = '330px';
            target.style.overflowY = 'auto'; // Добавить скролл, если текст превышает максимальную высоту
        } else {
            target.style.overflowY = 'hidden'; // Убрать скролл, если текст не превышает максимальную высоту
        }
    };

    const handleMouseEnter = () => {
        setTimeout(() => {
            setPlaceholder('Введите ваше имя');
        }, 200);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setPlaceholder('Ваше имя');
        }, 200);
    };

    const textareaHandleMouseEnter = () => {
        setTimeout(() => {
            setTextareaPlaceholder('Начните писать ваш отзыв...');
        }, 200);
    }

    const textareaHandleMouseLeave = () => {
        setTimeout(() => {
            setTextareaPlaceholder('Оставьте ваш отзыв');
        }, 200);
    }

    return (
        <ArticleFormat>
            <div>
                <div id='review__header'>
                    ОСТАВИТЬ ОТЗЫВ
                </div>
                <form onSubmit={handleSubmit} id='form__body'>
                    <div>
                        <div className='input__header'>Имя</div>
                        <input
                            name='author'
                            id='author'
                            className='input__form name__form'
                            placeholder={placeholder}
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            required
                        />
                    </div>
                    <div>
                        <div className='input__header'>Отзыв</div>
                        <textarea
                            id='text'
                            name='text'
                            className='input__form review__form'
                            value={text}
                            placeholder={textareaPlaceholder}
                            onChange={(e) => setText(e.target.value)}
                            onInput={handleInput}
                            onMouseEnter={textareaHandleMouseEnter}
                            onMouseLeave={textareaHandleMouseLeave}
                            required
                        />
                    </div>
                    <button type="submit" className='review_button' id='review_button'>Отправить</button>
                    {message && <p>{message}</p>}
                </form>
            </div>
        </ArticleFormat>
    );
}

export default ReviewPage;