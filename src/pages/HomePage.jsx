import Header from '../parts/Header.jsx'
import Hero from '../parts/HomePage/Hero.jsx'
import JustArrived from '../parts/HomePage/JustArrived.jsx'
import BrowseRoom from '../parts/HomePage/BrowseRoom.jsx'
import Clients from '../parts/Clients.jsx'
import Sitemap from '../parts/Sitemap.jsx'
import Footer from '../parts/Footer.jsx'
import Document from '../parts/Document.jsx'

export default function Homepage() {
  return (
    <Document>
        <Header theme="white" position="absolute"></Header>
        <Hero></Hero>
        <BrowseRoom></BrowseRoom>
        <JustArrived></JustArrived>
        <Clients></Clients>
        <Sitemap></Sitemap>
        <Footer></Footer>
    </Document>
  )
}
