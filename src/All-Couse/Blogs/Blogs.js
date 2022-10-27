import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:w-8/12 mx-auto gap-9 mt-5 bg-[#A9B7AE] p-9' >

            <div class="space-y-4">
                <details class="group" open>
                    <summary
                        class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4"
                    >
                        <h2 class="font-medium text-gray-900">
                            what is cors?
                        </h2>

                        <svg
                            class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </summary>

                    <p class="mt-4 px-4 leading-relaxed text-gray-700">
                        CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                    </p>
                </details>

                <details class="group">
                    <summary
                        class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4"
                    >
                        <h2 class="font-medium text-gray-900">
                            Why are you using firebase? What other options do you have to implement authentication?
                        </h2>

                        <svg
                            class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </summary>

                    <p class="mt-4 px-4 leading-relaxed text-gray-700">
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    </p>
                </details>

                <details class="group">
                    <summary
                        class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4"
                    >
                        <h2 class="font-medium text-gray-900">
                            How does the private route work?
                        </h2>

                        <svg
                            class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </summary>

                    <p class="mt-4 px-4 leading-relaxed text-gray-700">
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </p>
                </details>
                <details class="group">
                    <summary
                        class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4"
                    >
                        <h2 class="font-medium text-gray-900">
                            What is Node? How does Node work?
                        </h2>

                        <svg
                            class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </summary>

                    <p class="mt-4 px-4 leading-relaxed text-gray-700">
                        Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
                    </p>
                </details>
            </div>

        </div>
    );
};

export default Blogs;