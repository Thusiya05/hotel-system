import React from 'react'
import Banner from "../Components/Banner"
import Hero from '../Components/Hero'
import {Container} from 'react-bootstrap'
import ActCard from '../Components/ActCard'
import img1 from '../images/waterRafting.jpg'
import img2 from '../images/abselling.jpg'
import img3 from '../images/bbq-2.jpg'
import Title from '../Components/Title'

export default function Activities() {
    return (
        <>
        <Hero hero="activity-Hero">
            <Banner title="Feel Real Adventure" subtitle="Manage Your Day With Our Activities." children="Schedule The Day" path="/"></Banner>
        </Hero>

        <Title title="A c t i v i t i e s" />

        <Container>
        <div className="row">
            <div className="col-md-4 col-sm-6">
                <ActCard img={img1} title="Darshana" text="nsvdhvchsdvckjvsdjc jhbjkcvkuscfkufsckuv jvdkjcvkusdfcu"></ActCard>
            </div>
            <div className="col-md-4 col-sm-6">
            <ActCard img={img2} title="BAndara" text="avckhgvckvkgc jvcakusfacfvk vckusfduckwvcukvc hvcaskhgcvku"></ActCard>
            </div>
            <div className="col-md-4 col-sm-6">
            <ActCard img={img3} title="RAvindu" text="aschjCKVSDKC Vckvuvdsckvsd bd svcvsdcjs dv"></ActCard>
            </div>

        </div>
        </Container>
    </>
    )
}

