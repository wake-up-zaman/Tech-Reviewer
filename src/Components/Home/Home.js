import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/Asus.webp';
import ReviewHome from '../ReviewHome/ReviewHome';
import './Home.css'
const Home = () => {

    return (
        <div>
            <div className='home-main'>
                <div className='intro'>
                    <h1>ASUS Zenbook Pro</h1>
                    <p>ASUS Zenbook series is compact, thin and light, with the best innovative laptop technology, NanoEdge displays, precision craftsmanship, and uncompromising performance.</p>
                    <button>Explore More</button>
                </div>
                <div className='intro-img'>
                    <img src={logo} alt=''></img>
                </div>
            
            </div>
            <div className='review-home'>
                <h1 className='review-home-title'>Customer Review(3)</h1>
            </div>
            <ReviewHome></ReviewHome>
            <Link to="/review"><button className='More-Review'>More Review</button></Link>
        </div>
    );
};

export default Home;