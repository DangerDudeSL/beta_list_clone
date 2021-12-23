import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="intro">
        <div className="container">
          <p className="text_lg text_600">
            Discover tomorrow's startups, today.
          </p>
          <p className="text_md">
            Beta List is a community of makers and early adopters <br />
            showcasing there startups and exchanging feedback
          </p>
          <a href="#">
            <button>Sign in/Sign up </button>
          </a>
        </div>
      </section>
      <section className="trending_startups">
        <div className="container">
          <div className="cards">
            <div className="card">
              <div className="card_image">
                <img src="https://betalist.imgix.net/attachment/163197/image/50855780c23fcb73faf83e71fe6d155f.png"/>
              </div>
              <div className="card_content">
                <p className="card_title">
                  Videodeck
                </p>
                <p className="card_text">
                  We turn your written content into videos
                </p>
              </div>
              <div className="card_footer"></div>
            </div>
            <div className="card">
              <div className="card_image">
                <img src="https://betalist.imgix.net/attachment/164636/image/6b9702f0594e2ebebb27fd0ec9595fc7.jpeg" alt="" />
              </div>
              <div className="card_content">
                <p className="card_title">
                  Incoggo
                </p>
                <p className="card_text">
                  A free adblocker for paywalls-read NYTimes, WSJ, and more for free
                </p>
              </div>
              <div className="card_footer"></div>
            </div>
            <div className="card">
              <div className="card_image">
                <img src="https://betalist.imgix.net/attachment/163633/image/71fe383d206e3671c9ccbd44c02243f0.png" alt="" />
              </div>
              <div className="card_content">
                <p className="card_title">
                  Supercode
                </p>
                <p className="card_text">
                  The Best QR Code Generator
                </p>
              </div>
              <div className="card_footer"></div>
            </div>
            <div className="card">
              <div className="card_image">
                <img src="https://betalist.imgix.net/promotion/77/image/946bbff068670475da13da79fc910043.gif" alt="" />
              </div>
              <div className="card_content">
                <p className="card_title">
                  MicroAcquire
                </p>
                <p className="card_text">
                  A free and anonymous startup acquisition marketplace
                </p>
              </div>
              <div className="card_footer"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
