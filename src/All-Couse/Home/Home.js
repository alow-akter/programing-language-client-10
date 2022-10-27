import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='text-center mt-20 bg-[#A9B7AF] p-20'>
            <h1 className='text-3xl font-bold mt-5 m-3'>What is Programing  Language?</h1>
            <p className='font-semibold mt-4'>A programming language is a computer language that is used by programmers (developers) to communicate with computers. It is a set of instructions written in any specific language ( C, C++, Java, Python) to perform a specific task.</p>

            <Link to='/course'>
                <button className="btn btn-outline btn-secondary mt-5">Go back Course</button>
            </Link>

        </div>
    );
};

export default Home;