import React from 'react';
import { Link } from 'react-router-dom';
import sourdough from '../img/sourdough.jpg';
import pancakes from '../img/pancakes.jpg';
import chocolate from '../img/chocolate.jpg';
import kale from '../img/kale.jpg';
import corn from '../img/corn.jpg';
import veggie from '../img/veggie.jpg';
import soup from '../img/soup.jpg';
import steak from '../img/steak-veggies.JPG';
import chicken from '../img/chicken.jpg';
import fish from '../img/fish.jpg';
import sushi from '../img/sushi.jpg';

const GuestDashboard = () => {
  return (
    <>
      <div className='dashboard-search'>
        <h1
          style={{
            color: '#07fe20'
          }}
        >
          Featured
        </h1>
        <form>
          <input
            style={{
              padding: '5px',
              borderRadius: '5px',
              border: 0,
              width: '200px'
            }}
            type='text'
            placeholder='Search..'
            name='search'
          />
        </form>
      </div>

      <section>
        <h2>Something For Dinner</h2>
        <div id='myUL' className='dashboard-container'>
          <div className='dashboard-card'>
            <img src={sourdough} />
            <h3>Grandma's Sourdough</h3>
            <p>Approx 2 hrs</p>
          </div>
          <div className='dashboard-card'>
            <img src={pancakes} />
            <h3>Whole Wheat Pancakes</h3>
            <p>30 min</p>
          </div>
          <div className='dashboard-card'>
            <img src={chocolate} />
            <h3>Easy Chocolate Volcano</h3>
            <p>30 min</p>
          </div>
          <div className='dashboard-card'>
            <img src={kale} />
            <h3>Kale Salad</h3>
            <p>30 min</p>
          </div>
          <div className='dashboard-card'>
            <img src={corn} />
            <h3>Creamy Corn</h3>
            <p>30 min</p>
          </div>
          <div className='dashboard-card'>
            <img src={veggie} />
            <h3>Very Veggie Burger</h3>
            <p>30 min</p>
          </div>
          <div className='dashboard-card'>
            <img src={soup} />
            <h3>Ellies Magic Soup</h3>
            <p>30 min</p>
          </div>
          <div className='dashboard-card'>
            <img src={steak} />
            <h3>Steak {`&`} Veggies</h3>
            <p>30 min</p>
          </div>
          <div className='dashboard-card'>
            <img src={chicken} />
            <h3>Roast Chicken</h3>
            <p>30 min</p>
          </div>
          <div className='dashboard-card'>
            <img src={fish} />
            <h3>Fish Basics</h3>
            <p>30 min</p>
          </div>
          <div className='dashboard-card'>
            <img src={sushi} />
            <h3>Sushi Sushi</h3>
            <p>30 min</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GuestDashboard;
