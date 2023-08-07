import React from 'react'
import Header from '../parts/Header.jsx'
import Hero from '../parts/HomePage/Hero.jsx'
import JustArrived from '../parts/HomePage/JustArrived.jsx'
import BrowseRoom from '../parts/HomePage/BrowseRoom.jsx'
import Clients from '../parts/Clients.jsx'
import Sitemap from '../parts/Sitemap.jsx'
import Footer from '../parts/Footer.jsx'

import useScrollAnchor from '../helpers/hooks/useScrollAnchor.jsx'
import useModalDOM from '../helpers/hooks/useModalDOM.jsx'

export default function Homepage() {
  useScrollAnchor()
  useModalDOM()

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
