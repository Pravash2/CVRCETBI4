import React, { Component } from "react";
import BreadCumb from "../BreadCumb";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <BreadCumb title="Contact" />
        <section className="contact-info-area ptb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="contact-info-box">
                  <div className="icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <h3>Mail Here</h3>
                  <p>
                    <a href="#">admin@startp.com</a>
                  </p>
                  <p>
                    <a href="#">info@startp.com</a>
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="contact-info-box">
                  <div className="icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <h3>Visit Here</h3>
                  <p>27 Division St, New York, NY 10002, USA</p>
                  <p>27 Division St, New York, NY 10002, USA</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                <div className="contact-info-box">
                  <div className="icon">
                    <i className="fa fa-mobile"></i>
                  </div>
                  <h3>Call Here</h3>
                  <p>
                    <a href="#">+123 456 7890</a>
                  </p>
                  <p>
                    <a href="#">+241 452 4526</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14975.843856875843!2d85.7360337!3d20.2189431!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc81fc475faa77274!2sC.%20V.%20Raman%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1575136673010!5m2!1sen!2sin"
            style={{ width: "100%", height: 450, border: 0 }}
          ></iframe>
        </div>

        <section className="contact-area ptb-80">
          <div className="container">
            <div className="section-title">
              <h2>Get In Touch With Us</h2>
              <div className="bar"></div>
              <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
            </div>

            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <img src={require("../../assets/img/1.png")} alt="image" />
              </div>
              <div className="col-lg-6 col-md-12">
                <form id="contactForm">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          required
                          data-error="Please enter your name"
                          placeholder="Name"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          required
                          data-error="Please enter your email"
                          placeholder="Email"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          required
                          data-error="Please enter your number"
                          className="form-control"
                          placeholder="Phone"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="msg_subject"
                          id="msg_subject"
                          className="form-control"
                          required
                          data-error="Please enter your subject"
                          placeholder="Subject"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols="30"
                          rows="5"
                          required
                          data-error="Write your message"
                          placeholder="Your Message"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="btn btn-primary">
                        Send Message
                      </button>
                      <div
                        id="msgSubmit"
                        className="h3 text-center hidden"
                      ></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
