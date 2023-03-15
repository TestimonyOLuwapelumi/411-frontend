import React from 'react'
import { Link } from 'react-router-dom'


const Podcastp = ({podcasts}) => {
  return (
    <>
    <main>
    <article className="container">
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
              </ul>
      </section>
      </article>
      </main>


    </>
  )
}

export default Podcastp