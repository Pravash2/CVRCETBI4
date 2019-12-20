import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div>
        <section className="why-choose-us ptb-80 pt-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="section-title">
                  <h2>Why Choose Us</h2>
                  <div className="bar"></div>
                </div>

                <div className="why-choose-us-image">
                  <img
                    src={require("../../../assets/img/why-choose-us-image/man-stand.png")}
                    className="wow fadeInLeft"
                    alt="image"
                  />
                  <img
                    src={require("../../../assets/img/why-choose-us-image/database.png")}
                    className="wow fadeInRight"
                    alt="image"
                  />
                  <img
                    src={require("../../../assets/img/services-left-image/cercle-shape.png")}
                    className="rotateme"
                    alt="image"
                  />
                  <img
                    src={require("../../../assets/img/why-choose-us-image/main-static.png")}
                    className="main-pic wow fadeInUp"
                    alt="image"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="single-why-choose-us">
                      <div className="icon">
                        <i className="flaticon-team"></i>
                      </div>
                      <h3>Location In Heart of State</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="single-why-choose-us">
                      <div className="icon">
                        <i className="flaticon-rocket"></i>
                      </div>
                      <h3>Supported by 23 COE's</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="single-why-choose-us">
                      <div className="icon">
                        <i className="flaticon-shield"></i>
                      </div>
                      <h3>24*7 Co-working Access</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="single-why-choose-us">
                      <div className="icon">
                        <i className="flaticon-diamond"></i>
                      </div>
                      <h3>Vibrant Teams</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna.
                      </p>
                    </div>
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
