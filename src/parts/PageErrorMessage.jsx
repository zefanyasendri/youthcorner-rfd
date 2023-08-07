import React from 'react'
import { Link } from 'react-router-dom'

export default function PageErrorMessage({
    // eslint-disable-next-line react/prop-types
    title = "404 NOT FOUND",
    // eslint-disable-next-line react/prop-types
    body = "Looks like the page you're trying to visit doesn't exist."
}) {
    return (
        <React.Fragment>    
            {/* <!-- START: ERROR --> */}
            <section className="mt-14">
            <div className="container mx-auto min-h-screen">
                <div className="flex flex-col items-center justify-center">
                <div className="w-full md:w-4/12 text-center">
                    <h2 className="text-3xl font-semibold mb-6">{title}</h2>
                    <p className="text-lg mb-12">
                        {body}
                    </p>
                    <Link
                    to="/"
                    className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
                    >
                    Back to Shop
                    </Link>
                </div>
                </div>
            </div>
            </section>
            {/* <!-- END: ERROR --> */}
        </React.Fragment>
    )
}