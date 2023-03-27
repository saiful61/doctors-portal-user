import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../src/assets/icons/clock.svg'
import marker from '../../src/assets/icons/marker.svg'
import phone from '../../src/assets/icons/phone.svg'

const Info = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: marker,
            bgClass: 'bg-neutral'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (

        // <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
        //     <InfoCard cardTitle="opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
        //     <InfoCard cardTitle="Our Locations" bgClass="bg-accent" img={marker}></InfoCard>
        //     <InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        // </div>

        <div className='grid mt-8 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default Info;