import React, { Component } from "react"
import BreadCumb from "../BreadCumb"

export default class SingleGallery extends Component {
  render() {
    return (
      <div>
        <BreadCumb title="SAP Meeting February 28, 2019" />
        <section className="project-details-area ptb-80">
          <div className="container">
            <section class="section">
              <div class="grid">
                <div
                  class="item"
                  style={{
                    background:
                      "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=",
                  }}
                ></div>
                <div class="item item--large"></div>
                <div class="item item--medium"></div>
                <div class="item item--large"></div>
                <div class="item item--full"></div>
                <div class="item item--medium"></div>
                <div class="item item--large"></div>
                <div class="item"></div>
                <div class="item item--medium"></div>
                <div class="item item--large"></div>
                <div class="item"></div>
                <div class="item item--medium"></div>
                <div class="item item--medium"></div>
                <div class="item item--large"></div>
                <div class="item"></div>
              </div>
            </section>
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="project-details-desc">
                  <h3>Network Marketing</h3>

                  <p>
                    Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit,
                    sed diam no nu m nibhie eui smod. Facil isis atve eros et
                    accumsan etiu sto odi dignis sim qui blandit praesen lup ta
                    de er. At molestiae appellantur pro. Vis wisi oportere per
                    ic ula ad, ei latine prop riae na, mea cu purto debitis.
                    Primis nost rud no eos, no impedit dissenti as mea, ea vide
                    labor amus neglegentur vix. Ancillae intellegat vix et. Sit
                    causae laoreet nolu ise. Ad po exerci nusquam eos te. Cu
                    altera expet enda qui, munere oblique theo phrastu ea vix.
                    Ne nec modus civibus modera tius, sit ei lorem doctus. Ne
                    docen di verterem reformidans eos. Cu altera expetenda qui,
                    munere oblique theophr astus ea vix modus civiu mod eratius.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit,
                    sed diam no nu m nibhie eui smod. Facil isis atve eros et
                    accumsan etiu sto odi dignis sim qui blandit praesen lup ta
                    de er. At molestiae appellantur pro. Vis wisi oportere per
                    ic ula ad, ei latine prop riae na, mea cu purto debitis.
                    Primis nost rud no eos, no impedit dissenti as mea, ea vide
                    labor amus neglegentur vix. Ancillae intellegat vix et. Sit
                    causae laoreet nolu ise. Ad po exerci nusquam eos te. Cu
                    altera expet enda qui, munere oblique theo phrastu ea vix.
                    Ne nec modus civibus modera tius, sit ei lorem doctus. Ne
                    docen di verterem reformidans eos. Cu altera expetenda qui,
                    munere oblique theophr astus ea vix modus civiu mod eratius.
                  </p>

                  <div className="project-details-information">
                    <div className="single-info-box">
                      <h4>Happy Client</h4>
                      <p>John Doe</p>
                    </div>

                    <div className="single-info-box">
                      <h4>Category</h4>
                      <p>Portfolio, Personal</p>
                    </div>

                    <div className="single-info-box">
                      <h4>Date</h4>
                      <p>February 28, 2019</p>
                    </div>

                    <div className="single-info-box">
                      <h4>Share</h4>
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
                            <i data-feather="instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i data-feather="linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="single-info-box">
                      <a href="#" className="btn btn-primary">
                        Live Preview
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
