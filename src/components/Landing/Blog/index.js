import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div>
        <section className="blog-area ptb-80">
          <div className="container">
            <div className="section-title">
              <h2>Let's stay updated</h2>
              <div className="bar"></div>
              <p>Move Closer To Startup Ecosystem Across the Globe</p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <a href="#">
                      <img
                        src={require("../../../assets/img/blog-image/1.jpg")}
                        alt="image"
                      />
                    </a>

                    <div className="date">
                      <i data-feather="calendar"></i> March 15, 2019
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <h3>
                      <a href="#">
                        The security risks of changing package owners
                      </a>
                    </h3>

                    <span>
                      by <a href="#">admin</a>
                    </span>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>

                    <a href="#" className="read-more-btn">
                      Read More <i data-feather="arrow-right"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <a href="#">
                      <img
                        src={require("../../../assets/img/blog-image/2.jpg")}
                        alt="image"
                      />
                    </a>

                    <div className="date">
                      <i data-feather="calendar"></i> March 17, 2019
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <h3>
                      <a href="#">
                        Tips to Protecting Your Business and Family
                      </a>
                    </h3>

                    <span>
                      by <a href="#">smith</a>
                    </span>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>

                    <a href="#" className="read-more-btn">
                      Read More <i data-feather="arrow-right"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <a href="#">
                      <img
                        src={require("../../../assets/img/blog-image/3.jpg")}
                        alt="image"
                      />
                    </a>

                    <div className="date">
                      <i data-feather="calendar"></i> March 19, 2019
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <h3>
                      <a href="#">Protect Your Workplace from Cyber Attacks</a>
                    </h3>

                    <span>
                      by <a href="#">john</a>
                    </span>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>

                    <a href="#" className="read-more-btn">
                      Read More <i data-feather="arrow-right"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
