import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import SelectedCard from '../SelectedCard/SelectedCard';
import SingleCard from '../SingleCard/SingleCard';

const Course = () => {
    const [course, setCourse] = useState([])
    const { courses } = useContext(AuthContext)
    useEffect(() => {
        fetch('https://programing-language-server.vercel.app/course')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div>
            <div className='grid lg:grid-cols-9'>
                <div className='grid lg:grid-cols-2 col-span-7 justify-center lg:gap-10  bg-white'>
                    {
                        course.map(card => <SingleCard key={card._id} card={card}></SingleCard>)
                    }
                </div>
                <div className='grid grid-cols-1 col-span-2 bg-[#cfe3d6]'>
                    <ul>
                        {
                            courses.map((java, idx) => <SelectedCard key={idx} java={java}></SelectedCard>)
                        }
                        <div className='flex justify-center'>
                            {
                                courses.length > 0 ?
                                    <Link to='/detailsPage'> <button className="btn btn-outline btn-primary ">Details Page</button></Link>
                                    :
                                    undefined
                            }
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Course;