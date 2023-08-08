/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Suggestion({data}) {
    return (
        <React.Fragment>
            {/* <!-- START: COMPLETE YOUR ROOM --> */}
            <section className="bg-gray-100 px-4 py-16">
                <div className="container mx-auto">
                    <div className="flex flex-start mb-4">
                    <h3 className="text-2xl capitalize font-semibold">
                        Complete your room <br className="" />with what we designed
                    </h3>
                    </div>
                    <div className="flex overflow-x-auto mb-4 -mx-3">
                        {data?.map( (item) => {
                            return (
                                <div className="px-3 flex-none" key={item.id} style={{width: 320}}>
                                    <div className="rounded-xl p-4 pb-8 relative bg-white">
                                    <div className="rounded-xl overflow-hidden card-shadow w-full h-36">
                                        <img
                                        src={item.imageUrl}
                                        alt={item.imageUrl}
                                        className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                    <h5 className="text-lg font-semibold mt-4">{item.title}</h5>
                                    <span className="">IDR {item.price}</span>
                                    <Link to={`/categories/${item.idc}/products/${item.id}`} className="stretched-link">
                                        {/* <!-- fake children --> */}
                                    </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            {/* <!-- END: COMPLETE YOUR ROOM --> */}
        </React.Fragment>
    )
}
