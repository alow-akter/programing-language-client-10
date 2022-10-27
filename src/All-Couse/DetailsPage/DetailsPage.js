import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import DetailsSingleCart from '../DetailsSingleCart/DetailsSingleCart';

const DetailsPage = () => {
    const { courses } = useContext(AuthContext)
    return (
        <div>
            <div className="w-8/12  flex flex-col  p-6 space-y-4 sm:p-10 bg-[#A9B7AF] mt-3 mx-auto">
                <h2 className="text-xl font-semibold">Your cart</h2>
                <ul className="flex flex-col divide-y divide-gray-700 ">
                    {
                        courses.map((card, inx) => <DetailsSingleCart key={inx} card={card}></DetailsSingleCart>)
                    }
                </ul>
                <div className="space-y-1 text-right">
                    <p>Total amount:
                        <span className="font-semibold">357 €</span>
                    </p>
                    <p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
                </div>
                <div className="flex justify-end space-x-4">
                    <Link to='/course'>
                        <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
                            <span className="sr-only sm:not-sr-only">to shop</span>
                        </button>
                    </Link>
                    <Link to='/checkOut'>
                        <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                            <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;