import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Course = () => {
    const [course, setCourse] = useState([])
    useEffect(() => {
        fetch('https://programing-language-server.vercel.app/course')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div>
            <div className='grid lg:grid-cols-9'>
                <div className='grid grid-cols-2 col-span-7 gap-10  bg-white'>
                    {
                        course.map(card => <SingleCard key={card._id} card={card}></SingleCard>)
                    }
                </div>
                <div className='grid col-span-2 bg-red-500'>
                    <h4>side var</h4>
                </div>
            </div>
        </div>
    );
};

export default Course;