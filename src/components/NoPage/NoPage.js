import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoPage = () => {
    const navigate = useNavigate();
    function goBack() {
        // navigate("/name");
        navigate(-1);
    }

    return (
        <div>
            No Page 
            <button type='button' onClick={goBack}>Go Back</button>
        </div>
    );
};

export default NoPage;