import React from 'react'
import Banner from "../Components/Banner"
import Hero from '../Components/Hero'
import {Container} from 'react-bootstrap'
import InfoCard from '../Components/InfoCard'
import img1 from '../images/waterRafting.jpg'
import img2 from '../images/abselling.jpg'
import img3 from '../images/Canyoneering.jpg'
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
            <div className="col-md-4 col-sm-4">
                <InfoCard img={img1} 
                title="White Water Rafting" 
                text="We being the pioneers of the White Water Rafting in Sri Lanka as ‘Adventure Base Camp’ have made tremendous progress since 2000 under British White Water Rafting expert Peter Black.
                      Beginner Level & Advance Level Training available"></InfoCard>
            </div>
            <div className="col-md-4 col-sm-4">
                <InfoCard img={img2} 
                title="Waterfall Abseiling" 
                text="The intense and powerful feeling of the water combined with the fact that you are hanging on a rope and that there is nothing but water beneath and above, will give adrenalin
                      push like you have never experienced before. Waterfall Abseiling is an ideal adventure activity to test your confidence."></InfoCard>
            </div>
            <div className="col-md-4 col-sm-4">
            <InfoCard img={img3} 
            title="Canyoning"
            text="Canyoning’ is an outdoor activity that combines confidence jump, abseiling, sliding, swimming, and hiking. Adventure Base Camp is one of the premier places in the country to participate
                  in this exciting activity."></InfoCard>
            </div>

        </div>
        </Container>
    </>
    )
}

