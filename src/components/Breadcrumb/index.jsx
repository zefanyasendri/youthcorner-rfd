import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

export default function Breadcrumb({list}) {
    return (
        <React.Fragment>
            {/* <!-- START: BREADCRUMB --> */}
            <section className="bg-gray-100 py-8 px-4">
            <div className="container mx-auto">
                <ul className="breadcrumb">
                    {
                        list?.map?.((item, index) => {
                            const arias = index === list.length ? {"aria-label": "current-page"} : {}
                            return (
                                <li key={item.url}>
                                    <Link to={item.url} {...arias}>{item.name}</Link>
                                </li>
                            )
                        })
                    }
                
                </ul>
            </div>
            </section>
            {/* <!-- END: BREADCRUMB --> */}
        </React.Fragment>
    )
}

Breadcrumb.propTypes = {
    list: PropTypes.array.isRequired,
}