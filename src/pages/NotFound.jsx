import React from 'react'
import Header from '../parts/Header.jsx'
import Sitemap from '../parts/Sitemap.jsx'
import Footer from '../parts/Footer.jsx'
import PageErrorMessage from '../parts/PageErrorMessage.jsx'

export default function NotFound() {
    return (
        <React.Fragment>
            <Header theme="black" position=""/>

            <PageErrorMessage/>

            <Sitemap/>
            <Footer/>

        </React.Fragment>
    )
}
