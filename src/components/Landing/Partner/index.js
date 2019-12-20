import React, { Component } from "react"
import { Link } from "gatsby"

export default class index extends Component {
  render() {
    return (
      <div>
        <section className="ready-to-talk">
          <div className="container">
            <h3>Ready to talk?</h3>
            <p>Our team is here to answer your question</p>
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </section>

        <div className="partner-area partner-section">
          <div className="container">
            <h5>CVRCE Technology Business Incubator being supported by,</h5>

            <div className="partner-inner">
              <div className="row">
                <div className="col-lg-2 col-md-3 col-6">
                  <a href="#">
                    <img
                      src={require("../../../assets/img/partner-img/partner-1.png")}
                      alt="partner"
                    />
                    <img
                      src={require("../../../assets/img/partner-img/partner-hover1.png")}
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                  <a href="#">
                    <img
                      src={require("../../../assets/img/partner-img/partner-1.png")}
                      alt="partner"
                    />
                    <img
                      src={require("../../../assets/img/partner-img/partner-hover1.png")}
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                  <a href="#">
                    <img
                      src={require("../../../assets/img/partner-img/partner-1.png")}
                      alt="partner"
                    />
                    <img
                      src={require("../../../assets/img/partner-img/partner-hover1.png")}
                      alt="partner"
                    />
                  </a>
                </div>

                <div className="col-lg-2 col-md-3 col-6">
                  <a href="#">
                    <img
                      src={require("../../../assets/img/partner-img/partner-1.png")}
                      alt="partner"
                    />
                    <img
                      src={require("../../../assets/img/partner-img/partner-hover1.png")}
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                  <a href="#">
                    <img
                      src={require("../../../assets/img/partner-img/partner-1.png")}
                      alt="partner"
                    />
                    <img
                      src={require("../../../assets/img/partner-img/partner-hover1.png")}
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                  <a href="#">
                    <img
                      src={require("../../../assets/img/partner-img/partner-1.png")}
                      alt="partner"
                    />
                    <img
                      src={require("../../../assets/img/partner-img/partner-hover1.png")}
                      alt="partner"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
