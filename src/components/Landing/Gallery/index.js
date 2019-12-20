// import React, { Component } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

// export default class index extends Component {
//   Responsive() {
//     if (window.innerWidth > 1550) {
//       return 5;
//     } else if (window.innerWidth < 1550 && window.innerWidth > 1200) {
//       return 4;
//     } else if (window.innerWidth <= 1199 && window.innerWidth > 992) {
//       return 3;
//     } else if (window.innerWidth <= 991 && window.innerWidth > 769) {
//       return 3;
//     } else if (window.innerWidth <= 768 && window.innerWidth > 421) {
//       return 1;
//     } else if (window.innerWidth <= 420) {
//       return 1;
//     }
//   }
//   render() {
//     return (
//       <div id="gallery">
//         <section className="gallery ptb-80 bg-f9f6f6">
//           <div className="container">
//             <div className="section-title">
//               <h2>Gallery</h2>
//               <div className="bar"></div>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p>
//             </div>
//           </div>

//           <div className="row m-0">
//             {/* <OwlCarousel
//               className="owl-theme"
//               items={this.Responsive()}
//               nav={false}
//               margin={10}
//             >
//               <div>
//                 <div className="single-team1">
//                   <div className="gallery-image">
//                     <img
//                       src={require("../../../assets/img/events/73163736_118256929591132_3220217232722231296_o.jpg")}
//                       alt="teamimage"
//                     />
//                   </div>

//                   <div className="team-content">
//                     <div className="team-info">
//                       <h3>Josh Talk</h3>
//                       <span>12 Jan 2019</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="single-team1">
//                   <div className="gallery-image">
//                     <img
//                       src={require("../../../assets/img/blog-image/2.jpg")}
//                       alt="teamimage"
//                     />
//                   </div>

//                   <div className="team-content">
//                     <div className="team-info">
//                       <h3>Josh Talk</h3>
//                       <span>12 Jan 2019</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="single-team1">
//                   <div className="gallery-image">
//                     <img
//                       src={require("../../../assets/img/blog-image/3.jpg")}
//                       alt="teamimage"
//                     />
//                   </div>

//                   <div className="team-content">
//                     <div className="team-info">
//                       <h3>Josh Talk</h3>
//                       <span>12 Jan 2019</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="single-team1">
//                   <div className="gallery-image">
//                     <img
//                       src={require("../../../assets/img/blog-image/1.jpg")}
//                       alt="teamimage"
//                     />
//                   </div>

//                   <div className="team-content">
//                     <div className="team-info">
//                       <h3>Josh Talk</h3>
//                       <span>12 Jan 2019</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="single-team1">
//                   <div className="gallery-image">
//                     <img
//                       src={require("../../../assets/img/blog-image/3.jpg")}
//                       alt="teamimage"
//                     />
//                   </div>

//                   <div className="team-content">
//                     <div className="team-info">
//                       <h3>Josh Talk</h3>
//                       <span>12 Jan 2019</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="single-team1">
//                   <div className="gallery-image">
//                     <img
//                       src={require("../../../assets/img/blog-image/3.jpg")}
//                       alt="teamimage"
//                     />
//                   </div>

//                   <div className="team-content">
//                     <div className="team-info">
//                       <h3>Josh Talk</h3>
//                       <span>12 Jan 2019</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="single-team1">
//                   <div className="gallery-image">
//                     <img
//                       src={require("../../../assets/img/blog-image/3.jpg")}
//                       alt="teamimage"
//                     />
//                   </div>

//                   <div className="team-content">
//                     <div className="team-info">
//                       <h3>Josh Talk</h3>
//                       <span>12 Jan 2019</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </OwlCarousel> */}
//             <Carousel>
//                 <div>
//                     <img src="assets/1.jpeg" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="assets/2.jpeg" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="assets/3.jpeg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//           </div>
//         </section>
//       </div>
//     );
//   }
// }

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
        <section className="gallery mb-5">
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
              <div className="single-team1">
                <div className="gallery-image">
                  <img
                    src={require("../../../assets/img/events/73163736_118256929591132_3220217232722231296_o.jpg")}
                    alt="teamimage"
                  />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Josh Talk</h3>
                    <span>12 Jan 2019</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="single-team1">
                <div className="gallery-image">
                  <img
                    src={require("../../../assets/img/events/73163736_118256929591132_3220217232722231296_o.jpg")}
                    alt="teamimage"
                  />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Josh Talk</h3>
                    <span>12 Jan 2019</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="single-team1">
                <div className="gallery-image">
                  <img
                    src={require("../../../assets/img/events/73163736_118256929591132_3220217232722231296_o.jpg")}
                    alt="teamimage"
                  />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Josh Talk</h3>
                    <span>12 Jan 2019</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="single-team1">
                <div className="gallery-image">
                  <img
                    src={require("../../../assets/img/events/73163736_118256929591132_3220217232722231296_o.jpg")}
                    alt="teamimage"
                  />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Josh Talk</h3>
                    <span>12 Jan 2019</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="single-team1">
                <div className="gallery-image">
                  <img
                    src={require("../../../assets/img/events/73163736_118256929591132_3220217232722231296_o.jpg")}
                    alt="teamimage"
                  />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Josh Talk</h3>
                    <span>12 Jan 2019</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="single-team1">
                <div className="gallery-image">
                  <img
                    src={require("../../../assets/img/events/73163736_118256929591132_3220217232722231296_o.jpg")}
                    alt="teamimage"
                  />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Josh Talk</h3>
                    <span>12 Jan 2019</span>
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
