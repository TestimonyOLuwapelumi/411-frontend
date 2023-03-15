import React from 'react'
import "./Podcast.css"
import pict from "./images/logo.svg"
import pict1 from "./images/hero-title.png"
import pict2 from "./images/podcast-1.png"
import { Link } from 'react-router-dom'
import Podcastp from './Podcastp'


const Podcast = ({podcasts, firstpodcasts}) => {
    // console.log({podcasts});
  return (
    <>
            
  <header className="active" data-header>
    <div className="container">

   
      <div className="overlay" data-overlay></div>

      <a href="#" className="logo">
        <img src={pict} alt="Micro logo"/>
      </a>

      <button className="nav-toggle-btn" data-nav-toggle-btn>
        <ion-icon name="menu-outline"></ion-icon>
      </button>

      <nav className="navbar" data-navbar>
        <ul className="navbar-list">

          <li className="navbar-item">
            <a href="#hero" className="navbar-link">Home</a>
          </li>

          <li className="navbar-item">
            <a href="#podcast" className="navbar-link">Podcast</a>
          </li>

          <li className="navbar-item">
            <a href="#" className="navbar-link">Host</a>
          </li>

          <li className="navbar-item">
            <a href="#" className="navbar-link">Blog</a>
          </li>

          <li className="navbar-item">
            <a href="#" className="navbar-link">Contact</a>
          </li>

        </ul>

        <div className="navbar-actions">

          <button className="navbar-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>

          <button className="navbar-btn">
            <ion-icon name="log-in-outline"></ion-icon>
          </button>

          <button className="navbar-btn">
            <ion-icon name="cart-outline"></ion-icon>
          </button>

          <button className="btn">
            <ion-icon name="logo-paypal"></ion-icon>

            <span>Donate</span>
          </button>

        </div>
      </nav>

    </div>
  </header>





  <main>
    <article className="container">

   

      <section className="hero" id="hero">
      {firstpodcasts.data.map((firstpodcast)=>
        <Link to={`/firstpodcast/${firstpodcast.id}`}>
        <div className="hero-content">

          <img src={pict1}/>

          <p className="hero-text">
          {firstpodcast.attributes.firstpodDesc}
          </p>

          <div className="hero-btn-group">

            <button className="btn btn-primary">
              <ion-icon name="headset"></ion-icon>

              <span>Listen Now</span>
            </button>

            <div className="btn-link-wrapper">

              <p className="btn-title">Follow On:</p>

              <a href="#" className="btn-link">
                <ion-icon name="logo-instagram"></ion-icon>

                <span>Instagram</span>
              </a>

              <a href="#" className="btn-link">
                <ion-icon name="logo-twitter"></ion-icon>

                

                <span>Twitter</span>
              </a>

            </div>

          </div>

        </div>
        </Link>
                  ) }
        <div className="hero-banner"></div>

      </section>





 

      <section className="podcast" id="podcast">
        <ul className="podcast-list">
        {podcasts.data.map((podcast)=>

        <Link to={`/podcasts/${podcast.id}`}>
          <li>
            <a href="#" className="podcast-card">

              <figure className="card-banner">
                {/* <img src={podcast.attributes.podcastVideo.data.attributes.url} alt="Tube Preamps, TLM103 vs. OJ 818, Podcastage's Beanies"/> */}
                <video src={podcast.attributes.podcastVideo.data.attributes.url}></video>
                <div className="card-banner-icon">
                  <ion-icon name="play"></ion-icon>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-meta">
                  <time datetime="2022-02-15">Feb 15, 2022</time>

                  <p className="pod-epi">Episodes: 01</p>
                </div>

                <h3 className="h3 card-title">{podcast.attributes.podcastTitle}</h3>
              </div>

            </a>
          </li>
          
          </Link>

            ) }

          {/* <li>
            <a href="#" className="podcast-card">

              <figure className="card-banner">
                <img src={pict3} alt="Ask Unladylike: Late Bloomer with Forever 35"/>

                <div className="card-banner-icon">
                  <ion-icon name="play"></ion-icon>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-meta">
                  <time datetime="2022-02-15">Feb 15, 2022</time>

                  <p className="pod-epi">Episodes: 02</p>
                </div>

                <h3 className="h3 card-title">Ask Unladylike: Late Bloomer with Forever 35</h3>
              </div>

            </a>
          </li> */}

          {/* <li>
            <a href="#" className="podcast-card">

              <figure className="card-banner">
                <img src={pict2} alt="How to Effectively Incentivize Team Members"/>

                <div className="card-banner-icon">
                  <ion-icon name="play"></ion-icon>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-meta">
                  <time datetime="2022-02-15">Feb 15, 2022</time>

                  <p className="pod-epi">Episodes: 03</p>
                </div>

                <h3 className="h3 card-title">How to Effectively Incentivize Team Members</h3>
              </div>

            </a>
          </li> */}

          {/* <li>
            <a href="#" className="podcast-card">

              <figure className="card-banner">
                <img src={pict3} alt="How to go from Start-Up to Scale-Up"/>

                <div className="card-banner-icon">
                  <ion-icon name="play"></ion-icon>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-meta">
                  <time datetime="2022-02-15">Feb 15, 2022</time>

                  <p className="pod-epi">Episodes: 04</p>
                </div>

                <h3 className="h3 card-title">How to go from Start-Up to Scale-Up</h3>
              </div>

            </a>
          </li> */}

          {/* <li>
            <a href="#" className="podcast-card">

              <figure className="card-banner">
                <img src={pict3} alt="Deadbuttons – Tired of You | Live at Club Heavy"/>

                <div className="card-banner-icon">
                  <ion-icon name="play"></ion-icon>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-meta">
                  <time datetime="2022-02-15">Feb 15, 2022</time>

                  <p className="pod-epi">Episodes: 05</p>
                </div>

                <h3 className="h3 card-title">Deadbuttons – Tired of You | Live at Club Heavy</h3>
              </div>

            </a>
          </li> */}

          {/* <li>
            <a href="#" className="podcast-card">

              <figure className="card-banner">
                <img src={pict2} alt="Boogie Through the Universe with SOWO"/>

                <div className="card-banner-icon">
                  <ion-icon name="play"></ion-icon>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-meta">
                  <time datetime="2022-02-15">Feb 15, 2022</time>

                  <p className="pod-epi">Episodes: 06</p>
                </div>

                <h3 className="h3 card-title">Boogie Through the Universe with SOWO</h3>
              </div>

            </a>
          </li> */}

          {/* <li>
            <a href="#" className="podcast-card">

              <figure className="card-banner">
                <img src={pict3} alt="Glittering Blackness, Fall – 4 | Live at Club Heavy"/>

                <div className="card-banner-icon">
                  <ion-icon name="play"></ion-icon>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-meta">
                  <time datetime="2022-02-15">Feb 15, 2022</time>

                  <p className="pod-epi">Episodes: 07</p>
                </div>

                <h3 className="h3 card-title">Glittering Blackness, Fall – 4 | Live at Club Heavy</h3>
              </div>

            </a>
          </li> */}

          {/* <li>
            <a href="#" className="podcast-card">

              <figure className="card-banner">
                <img src={pict3} alt="The Meditative Photos of Chaelinjane"/>

                <div className="card-banner-icon">
                  <ion-icon name="play"></ion-icon>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-meta">
                  <time datetime="2022-02-15">Feb 15, 2022</time>

                  <p className="pod-epi">Episodes: 08</p>
                </div>

                <h3 className="h3 card-title">The Meditative Photos of Chaelinjane</h3>
              </div>

            </a>
          </li> */}
          {/* <Podcastp podcasts={podcasts?podcasts: ""} /> */}

        </ul>
      </section>






      <section className="newsletter">
        <div className="newsletter-card">

          <div className="card-content">
            <h3 className="h3 card-title">Sign Up For Our Newsletter. It’s Free!</h3>

            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt todeiy felis malesuada mollis purus id
              sit in aliquet.
            </p>
          </div>

          <form action="" className="card-form" data-form>
            <input type="email" name="email_address" placeholder="Your Email Address" required className="input-field"
              data-input/>

            <button type="submit" className="btn btn-primary" disabled data-submit>Subscribe</button>
          </form>

        </div>
      </section>

    </article>
  </main>





  <footer>

    <div className="footer-top">
      <div className="container">

        <div className="footer-brand">
          <a href="#" className="logo">
            <img src={pict} alt="Micro logo"/>
          </a>

          <p className="footer-text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt in felis malesuada mollis purus id sit in
            aliquet
            lectus eget morbi dui felis malesuada.
          </p>
        </div>

        <ul className="footer-list">

          <li>
            <p className="footer-link-title">Start A Conversation</p>
          </li>

          <li>
            <a href="mailto:hello@micro.com" className="footer-link">hello@micro.com</a>
          </li>

          <li>
            <a href="tel:+0123454678" className="footer-link">+01234 54678</a>
          </li>

          <li>
            <a href="tel:+15780346789" className="footer-link">+1 (578) 034-6789</a>
          </li>

        </ul>

        <div className="social-list-box">

          <p className="social-title">Follow Us On:</p>

          <ul className="social-list">

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-soundcloud"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-apple"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">
        <p className="copyright">
          &copy; 2022 <a href="#">codewithsadee</a>. All Rights Reserved
        </p>
      </div>
    </div>

  </footer>



    </>
  )
}

export default Podcast