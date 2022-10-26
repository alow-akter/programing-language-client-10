import React from 'react';

const SingleCard = ({ card }) => {
    const { title, image_url, name, total_view, price } = card
    return (
        <div className='w-10/12 mx-auto m-2'>
            <div className="card w-[350px] h-[500px] shadow-xl  bg-[#D6A7C4] text-black">
                <figure className="px-10 pt-10">
                    <img src={image_url} alt="Shoes" className="w-[300px] h-[200px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h1 className=''>{name}</h1>
                    <h2 className="">{title}</h2>
                    <p> total view: {total_view}</p>
                    <p> price: {price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;