import React from 'react';
import Info from '../../InfoCard/Info';
import Login from '../../Login/Login';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
// import Exceptional from '../../Services/Exceptional';
import Services from '../../Services/Services';
import Footer from '../../Shared/Footer/Footer';
import Testtimonial from '../../Testimonial/Testimonial';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testtimonial></Testtimonial>
            <Login></Login>
            <Footer></Footer>
        </div>
    );
};

export default Home;