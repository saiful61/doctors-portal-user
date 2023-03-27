import React from 'react';
import PrimaryBnt from '../../Shared/PrimaryBnt';
// import appointment from '../../../src/assets/images/appointment'


const MyReview = () => {
    return (
        <section className=''
        >
        <div className=''><h2 className='text-lg text-primary font-bold text-center'>My Review</h2></div>
        <h2 className='text-3xl text-white font-bold text-center'>Stay Connected With Us</h2>
        <div className="">
            <div className="hero-content">
                <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="hero-content">
                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="hero-content">
                <textarea className="textarea input-bordered w-80" placeholder="Your Message"></textarea>
            </div>
            <div className="hero-content pb-10">
                <PrimaryBnt>Submit</PrimaryBnt>
            </div>
        </div>
    </section>
    );
};

export default MyReview;