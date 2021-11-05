import React from 'react'
import "./Home.css";
import Slider from "./HomeSlider/Slider"

function Home() {
    return (
        <div>
            
    <section className="header">
        <Slider/>
    </section>
    {/* <section className="slider"></section> */}
    <section className="show">
        <h1 className="title heading">Find band that <span>don't Suck</span></h1>
        <div className="section__plank">
            <div className="plank__card">

                <div className="card mm">
                    <div className="content">
                        <h2 className="copy h">Mountain view</h2>
                        <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you
                            guessed it, the mountains</p><button className="shop__button">View Trips</button>
                    </div>
                </div>


                <div className="card">
                    <div className="content">
                        <h2 className="copy h">Mountain view</h2>
                        <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you
                            guessed it, the mountains</p><button className="shop__button">View Trips</button>
                    </div>
                </div>
            </div>
            <div className="plank__card">

                <div className="section__custom__card">
                    <h1 className="title">
                        We get your ready for everything
                    </h1>
                    <h5>Sports, Lifestyle, Casuals or Formal? We have got you covered. </h5>
                    <button className="shop__bt">
                        Shop now
                    </button>
                </div>
                <div className="card">
                    <div className="content">
                        <h2 className="copy h">Mountain view</h2>
                        <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you
                            guessed it, the mountains</p><button className="shop__button">View Trips</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="letter__form">
        <h1 className="heading">
            Subscribe to our newsletter
        </h1>
        <p style={{fontWeight:300, color: "grey", marginBottom: "8rem"}}>Get Best deals and promotional discounts directly to your email.</p>
        <form action="#">
            <div className="form__group">
                <input type="text" className="letter__form__input" placeholder="Enter your email"/>
            </div>
            <div className="form__group">
                <button className="form__button">
                    Subscribe
                </button>
            </div>
        </form>
    </section>
    <footer>

    </footer>
        </div>
    )
}

export default Home
