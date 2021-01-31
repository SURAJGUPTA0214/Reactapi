import react from 'react';
import reactdom from 'react-dom';
import LandingBanner from '../LandingBanner';
import BannerData from "../BannerData"

const Contact =()=>{
    return (
        <>
        <LandingBanner heading={BannerData[1].heading} paragraph={BannerData[1].paragraph} image={BannerData[1].image} />
        <h1> Hi I am Contact page</h1>
        </>
    )
}
export default Contact;