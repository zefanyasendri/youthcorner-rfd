import Header from '../parts/Header.jsx'
import Sitemap from '../parts/Sitemap.jsx'
import Footer from '../parts/Footer.jsx'
import PageErrorMessage from '../parts/PageErrorMessage.jsx'
import Document from '../parts/Document.jsx'

export default function NotFound() {
    return (
        <Document>
            <Header theme="black" position=""/>

            <PageErrorMessage/>

            <Sitemap/>
            <Footer/>

        </Document>
    )
}
