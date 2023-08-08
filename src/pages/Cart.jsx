import React from 'react'
import Header from '../parts/Header.jsx'
import Breadcrumb from '../components/Breadcrumb/index.jsx'
import Footer from '../parts/Footer.jsx'
import Sitemap from '../parts/Sitemap.jsx'
import ShoppingCart from '../parts/Cart/ShoppingCart.jsx'
import ShippingDetails from '../parts/Cart/ShippingDetails.jsx'

export default function Cart() {
    return (
        <React.Fragment>
            <Header theme="black" position=""/>

            <Breadcrumb list={[
                { url: "/", name: "Home" },
                { url: "/cart", name: "Shopping Cart" },
            ]} />

            <section className="md:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex -mx-4 flex-wrap">
                    <ShoppingCart/>
                    <ShippingDetails/>  
                    </div>
                </div>
            </section>

            <Sitemap/>
            <Footer/>
        </React.Fragment>
    )
}
