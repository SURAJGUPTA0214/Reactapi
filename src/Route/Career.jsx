import react from 'react';
import reactdom from 'react-dom';
import LandingBanner from '../LandingBanner';
import BannerData from "../BannerData"
const Career =()=>{
    return (
        <>
        <LandingBanner heading={BannerData[2].heading} paragraph={BannerData[2].paragraph} image={BannerData[2].image} />
        <h1> Hi I am career page</h1>
        </>
    )
}
export default Career;