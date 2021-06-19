import React from 'react'
import Banner from "../Components/Banner"
import Hero from '../Components/Hero'
import {Container} from 'react-bootstrap'
import Card from '../Components/Card'
import img1 from '../images/waterRafting.jpg'
import img2 from '../images/abselling.jpg'
import Title from '../Components/Title'

const Activities = () => {
    return (
        <>
        <Hero hero="activity-Hero">
            <Banner title="Feel Real Adventure" subtitle="Manage Your Day With Our Activities." children="Schedule The Day" path="/"></Banner>
        </Hero>

        <Title title="A c t i v i t i e s" />

        <Container>
        <div className="row">
            <div className="col-md-4 col-sm-6">
                <Card img={img1} title="water rafting" text="jvcdhvsdhcvjSVDCJKsvchjv chjvhsdvchsVCHDSVCHSVCDHSVCK VUCVDKUvcksvcvshcvhscvh"></Card>
            </div>
            <div className="col-md-4 col-sm-6">
                <Card img={img2} title="Abseling" text="jhvcashvcvchj jvhcvhdcvkavdkc jvachvkusfvdckjsvdc vjsdVCUKFKUSDCVK vdsv"></Card>
            </div>
            <div className="col-md-4 col-sm-6">
                <Card title="Ane Manda" text="jsafchjsfcvcku gkucgwucguwegcy giwcgdwgc gciowoc giwgovciwgovc gcilwgcki"></Card>
            </div>

        </div>
        </Container>
    </>
    )
}
export default Activities
