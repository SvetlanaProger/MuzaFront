import React from 'react';
import './ArticleFormat.css';

interface ArticleFormatProps {
    children: React.ReactNode;
}

const ArticleFormat: React.FC<ArticleFormatProps> = ({ children}) => {
    return (
        <>
        <div className='article'>
            {children}
        </div>
        </>
    );
}

export default ArticleFormat;