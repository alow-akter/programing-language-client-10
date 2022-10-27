import React from 'react';

const Blogs = () => {
    return (
        <div className='grid lg:grid-cols-3 w-11/12 mx-auto gap-9 mt-5' >
            <div className='text-center w-[300px] h-[400] bg-lime-300 p-8 text-black mt-6'>
                <h1 className='text-2xl'>what is cors?</h1>
                <p className='mt-5'>
                    CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                </p>
            </div>
            <div className='text-center w-[300px] h-[400] bg-lime-300 p-8  text-black mt-5'>
                <h1 className='text-2xl'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p className='mt-5'>
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                </p>
            </div>
            <div className='text-center w-[300px] h-[400] bg-lime-300 p-8  text-black mt-5'>
                <h1 className='text-2xl'>How does the private route work?</h1>
                <p className='mt-5'>
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                </p>
            </div>
            <div className='text-center w-[300px] h-[400] bg-lime-300 p-8  text-black mt-5'>
                <h1 className='text-2xl'>What is Node? How does Node work?</h1>
                <p className='mt-5'>
                    Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
                </p>
            </div>
        </div>
    );
};

export default Blogs;