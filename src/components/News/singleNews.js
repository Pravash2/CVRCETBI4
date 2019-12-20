import React, { Component } from "react"

export default class singleNews extends Component {
  render() {
    return (
      <div>
        <section className="blog-details-area ptb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 offset-lg-2">
                <div className="blog-details">
                  <div className="article-img">
                    <img
                      src={require("../../assets/img/blog-details.jpg")}
                      alt="blog-details"
                    />
                    <div className="date">
                      20 <br /> Jan
                    </div>
                  </div>

                  <div className="article-content">
                    <ul className="category">
                      <li>
                        <a href="#">IT</a>
                      </li>
                      <li>
                        <a href="#">Mobile</a>
                      </li>
                      <li>
                        <a href="#">Marketing</a>
                      </li>
                      <li>
                        <a href="#">Design</a>
                      </li>
                      <li>
                        <a href="#">Development</a>
                      </li>
                    </ul>

                    <h3>How to Be a Work From Home Professional</h3>

                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      In necessitatibus provident facere, reiciendis voluptate
                      dolorem iste consectetur veniam aperiam suscipit ad ipsum
                      et labore a repellendus debitis explicabo quisquam
                      obcaecati....
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Atque eum alias debitis suscipit, sint dignissimos minus
                      quisquam recusandae nostrum quas eligendi odit, fugiat
                      eius rem. Cumque, labore placeat! Velit, vitae. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                      iste? Aut ipsam consequuntur non rem tenetur dolore
                      consequatur ducimus a labore excepturi quae nisi,
                      quisquam, maxime voluptates magnam aliquid. Cupiditate!
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore
                      consequatur ducimus a labore excepturi quae nisi,
                      quisquam, maxime voluptates magnam aliquid. Cupiditate!
                    </p>

                    <blockquote className="blockquote">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo, iste? Aut ipsam consequuntur non rem tenetur
                        dolore consequatur ducimus a labore excepturi quae nisi,
                        quisquam, maxime voluptates magnam aliquid. Cupiditate.
                      </p>
                    </blockquote>

                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Atque eum alias debitis suscipit, sint dignissimos minus
                      quisquam recusandae nostrum quas eligendi odit, fugiat
                      eius rem. Cumque, labore placeat! Velit, vitae. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                      iste? Aut ipsam consequuntur non rem tenetur dolore
                      consequatur ducimus a labore excepturi quae nisi,
                      quisquam, maxime voluptates magnam aliquid. Cupiditate!
                    </p>

                    <div className="share-post">
                      <ul>
                        <li>
                          <a href="#">
                            <i classNameName="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i classNameName="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i classNameName="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i classNameName="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="post-controls-buttons">
                  <div className="controls-left">
                    <a href="#">
                      <i data-feather="chevron-left"></i> Prev Post
                    </a>
                  </div>

                  <div className="controls-right">
                    <a href="#">
                      Next Post <i data-feather="chevron-right"></i>
                    </a>
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
