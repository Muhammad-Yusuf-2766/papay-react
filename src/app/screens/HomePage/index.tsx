import React from 'react';
import { Statistics } from "./statistics";
import { TopRestaurants } from './topRestaurant';
import { BestRestaurants } from './bestRestaurant';
import { BestDishes } from './bestDishes';
import { Advertisements } from './advertisement';
import { Events } from './events';
import { Recommendations } from './recommendations';


export function HomePage() {
    return ( <div className="homepage">
        <Statistics />
        <TopRestaurants />
        <BestRestaurants />
        <BestDishes />
        <Advertisements />
        <Events />
        <Recommendations />
    </div>
    )
}