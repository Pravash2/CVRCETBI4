import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

var global = require("global")
var document = require("global/document")
var window = require("global/window")

export default class SimpleSlider extends React.Component {
  Responsive() {
    if (window.innerWidth > 1550) {
      return 4
    } else if (window.innerWidth < 1550 && window.innerWidth > 1200) {
      return 4
    } else if (window.innerWidth <= 1199 && window.innerWidth > 992) {
      return 3
    } else if (window.innerWidth <= 991 && window.innerWidth > 769) {
      return 3
    } else if (window.innerWidth <= 768 && window.innerWidth > 421) {
      return 1
    } else if (window.innerWidth <= 420) {
      return 1
    }
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: this.Responsive(),
      slidesToScroll: 1,
    }
    return (
      <div id="gallery">
        <section className="gallery ptb-80 bg-f9f6f6">
          <div className="container">
            <div className="section-title">
              <h2>Gallery</h2>
              <div className="bar"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <Slider {...settings}>
            <div>
              <div className="col-lg-12">
                <div className="single-team">
                  <div className="team-image">
                    <img
                      src={require("../../../assets/img/team-image/5.jpg")}
                      alt="teamimage"
                    />
                  </div>

                  <div className="team-content">
                    <div className="team-info">
                      <h3>Corey Anderson</h3>
                      <span>Project Manager</span>
                    </div>

                    <ul>
                      <li>
                        <a href="#">
                          <i data-feather="facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="gitlab"></i>
                        </a>
                      </li>
                    </ul>

                    <p>
                      Risus commodo viverra maecenas accumsan lacus vel
                      facilisis quis ipsum.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="col-lg-12">
                <div className="single-team">
                  <div className="team-image">
                    <img
                      src={require("../../../assets/img/team-image/5.jpg")}
                      alt="teamimage"
                    />
                  </div>

                  <div className="team-content">
                    <div className="team-info">
                      <h3>Corey Anderson</h3>
                      <span>Project Manager</span>
                    </div>

                    <ul>
                      <li>
                        <a href="#">
                          <i data-feather="facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="gitlab"></i>
                        </a>
                      </li>
                    </ul>

                    <p>
                      Risus commodo viverra maecenas accumsan lacus vel
                      facilisis quis ipsum.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="col-lg-12">
                <div className="single-team">
                  <div className="team-image">
                    <img
                      src={require("../../../assets/img/team-image/5.jpg")}
                      alt="teamimage"
                    />
                  </div>

                  <div className="team-content">
                    <div className="team-info">
                      <h3>Corey Anderson</h3>
                      <span>Project Manager</span>
                    </div>

                    <ul>
                      <li>
                        <a href="#">
                          <i data-feather="facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="gitlab"></i>
                        </a>
                      </li>
                    </ul>

                    <p>
                      Risus commodo viverra maecenas accumsan lacus vel
                      facilisis quis ipsum.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="col-lg-12">
                <div className="single-team">
                  <div className="team-image">
                    <img
                      src={require("../../../assets/img/team-image/5.jpg")}
                      alt="teamimage"
                    />
                  </div>

                  <div className="team-content">
                    <div className="team-info">
                      <h3>Corey Anderson</h3>
                      <span>Project Manager</span>
                    </div>

                    <ul>
                      <li>
                        <a href="#">
                          <i data-feather="facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="gitlab"></i>
                        </a>
                      </li>
                    </ul>

                    <p>
                      Risus commodo viverra maecenas accumsan lacus vel
                      facilisis quis ipsum.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="col-lg-12">
                <div className="single-team">
                  <div className="team-image">
                    <img
                      src={require("../../../assets/img/team-image/5.jpg")}
                      alt="teamimage"
                    />
                  </div>

                  <div className="team-content">
                    <div className="team-info">
                      <h3>Corey Anderson</h3>
                      <span>Project Manager</span>
                    </div>

                    <ul>
                      <li>
                        <a href="#">
                          <i data-feather="facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="gitlab"></i>
                        </a>
                      </li>
                    </ul>

                    <p>
                      Risus commodo viverra maecenas accumsan lacus vel
                      facilisis quis ipsum.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </section>
      </div>
    )
  }
}
