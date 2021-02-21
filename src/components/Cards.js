import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
                <CardItem 
                src="images/img-9.jpg"
                texts="Explore the hidden waterfall deep inside The Amazon"
                label='Adventure'
                path='/services'
                 />
                <CardItem 
                src="images/img-2.jpg"
                texts="Travel through the Island of BALI in a Private cruise"
                label='Luxury'
                path='/services'
                 />
          </ul>
          <ul className='cards__items'>
                <CardItem 
                src="images/img-8.jpg"
                texts="Ride through the Sahara Desert on guided camel Tour"
                label='Adventure'
                path='/services'
                 />
                <CardItem 
                src="images/img-3.jpg"
                texts="Set Sail Into The Atlantic Ocean"
                label='Mystery'
                path='/services'
                 />
                <CardItem 
                src="images/img-4.jpg"
                texts="Explore Football On Top Of the Himalayas "
                label='Adventure'
                path='/services'
                 />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;