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
                            src='images/img-1.jpg'
                            text='Not all those who wander are lost'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Life is either a daring adventure or nothing at all'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-3.jpg'
                            text='Take only memories, leave only footprints'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Take only memories, leave only footprints'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src='images/img-5.jpg'
                            text='Travel makes one modest, you see what a tiny place you occupy in the world.'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
