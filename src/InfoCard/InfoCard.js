import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div className={`card lg:card-side  shadow-xl ${bgClass}`} >
            <figure className='p-5'>
                <img src={icon} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div >
    );
};

export default InfoCard;