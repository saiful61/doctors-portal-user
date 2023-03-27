import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryBnt from '../../Shared/PrimaryBnt';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div className="" >
                    <h3 className="text-5xl font-bold">Your New Smail Start Here</h3>
                    <p className="py-6">Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem quasi.In deleniti eaque autrepudiandae et a id nisi.</p>
                    <PrimaryBnt>Get Started</PrimaryBnt>
                </div>
            </div>
        </div>
    );
};

export default Banner;