import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import api from '../api';

const PageTracker: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        const recordVisit = async () => {
            try {
                const data = { page: location.pathname.slice(1) };
                console.log(data)
                const response = await api.post('http://localhost:5000/counter', data);
                console.log('Visit recorded:', response);
            } catch (error) {
                console.error('Error recording visit:', error);
            }
        };

        recordVisit();
    }, [location]);

    return null;
};
export default PageTracker;
