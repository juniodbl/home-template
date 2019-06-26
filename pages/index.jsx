import Head from 'next/head';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Description from './Description';
import Tour from './Tour';
import Contact from './Contact';
import Footer from './Footer';
import Map from './Map';
import Modal from './Modal';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="/static/home.css" />
                    <link rel="stylesheet" href="/static/w3.css" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                </Head>
                <Navbar />

                <div className="w3-content" style={{ maxWidth: '2000px', marginTop: '46px' }}>
                    <Carousel />

                    <Description />

                    <Tour />

                    <Contact />
                </div>

                <Map />

                <Modal />

                <Footer />
            </div>
        )
    }
}

export default Home