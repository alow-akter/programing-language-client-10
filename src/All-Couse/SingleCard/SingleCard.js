import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SingleCard = ({ card }) => {
    const { title, image_url, name, total_view, price } = card;
    const { handleCourse } = useContext(AuthContext)

    return (
        <div className='w-10/12 mx-auto m-2'>
            <div className="card lg:w-[350px] lg:h-[500px] shadow-xl  bg-[#A9B7AF] text-black">
                <figure className="px-10 pt-10">
                    <img src={image_url} alt="Shoes" className="w-[300px] h-[200px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h1 className=''>{name}</h1>
                    <h2 className="">{title}</h2>
                    <p> total view: {total_view}</p>
                    <p> price: {price}</p>
                    <div className="card-actions">
                        <button onClick={() => handleCourse(card)} className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;