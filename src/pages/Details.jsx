import React from 'react'
import Header from '../parts/Header.jsx'
import Breadcrumb from '../components/Breadcrumb/index.jsx'
import Sitemap from '../parts/HomePage/Sitemap.jsx'
import Footer from '../parts/HomePage/Footer.jsx'
import ProductDetails from '../parts/Details/ProductDetails.jsx'
import Suggestion from '../parts/Details/Suggestion.jsx'

export default function Homepage() {
    return (
        <React.Fragment>
            <Header theme="black" position=""/>

            <Breadcrumb list={[
                { url: "/", name: "Home" },
                { url: "/categories/91231", name: "Office Room" },
                { url: "/categories/91231/products/1231", name: "Details" },
            ]} />

            <ProductDetails/>
            <Suggestion/>
            <Sitemap/>
            <Footer/>
        </React.Fragment>
    )
}
