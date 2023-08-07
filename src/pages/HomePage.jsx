import React from 'react'
import Header from '../parts/Header.jsx'
import Hero from '../parts/Hero.jsx'
import JustArrived from '../parts/HomePage/JustArrived.jsx'
import BrowseRoom from '../parts/HomePage/BrowseRoom.jsx'
import Clients from '../parts/HomePage/Clients.jsx'
import Sitemap from '../parts/HomePage/Sitemap.jsx'
import Footer from '../parts/HomePage/Footer.jsx'

export default function Homepage() {
  return (
    <React.Fragment>
        <Header theme="white" position="absolute"></Header>
        <Hero></Hero>
        <BrowseRoom></BrowseRoom>
        <JustArrived></JustArrived>
        <Clients></Clients>
        <Sitemap></Sitemap>
        <Footer></Footer>
    </React.Fragment>
  )
}
