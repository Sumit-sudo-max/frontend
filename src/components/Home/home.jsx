import React from 'react';
import header from './header.jpg';
import  './Home.css';

const Home = () =>{
    return(
        <>
        <nav>
            <div className="logo">
                <img style={{paddingTop:'2px', height:70, width: 80}} src={header} alt="logo" />
            </div>
            <div className="search_bar">
                <input className="search_input" type="text" placeholder="Search..." />
            </div>
            <ol className="list">
                <li><a href="/">Sign Out</a></li>
                <li><a href="/home">Home</a></li>

            </ol>
        </nav>
         {/* Footer */}
            <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        {/* <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" /> */}
      </div>

      <div className="midFooter">
        <h1>Xenon</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; SuMiT</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/sumitjaswal4">Instagram</a>
        <a href="https://www.youtube.com/channel/UC3rtK8576hxzvOKCjnEkAdQ">Youtube</a>
        <a href="http://instagram.com/sumitjaswal4">Facebook</a>
      </div>
    </footer>
    </>
    )
}

export default Home;