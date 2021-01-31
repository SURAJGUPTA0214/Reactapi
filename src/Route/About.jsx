import react from 'react';
import reactdom from 'react-dom';
import LandingBanner from '../LandingBanner';
import BannerData from "../BannerData"


const About =()=>{
    return (
        <>
        <LandingBanner heading={BannerData[0].heading} paragraph={BannerData[0].paragraph} image={BannerData[0].image} />
        <h1> Hi I am Anout page</h1>
        </>
    )
}
export default About;