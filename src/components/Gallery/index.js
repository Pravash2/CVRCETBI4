import React, { Component } from "react"
import BreadCumb from "../BreadCumb"
import { Link } from "gatsby"
import "./gallery.css"

export default class Gallery extends Component {
  render() {
    return (
      <section>
        <BreadCumb title="Gallery" />
        <section className="section">
          <div className="grid">
            <div
              className="item"
              style={{
                background:
                  "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=",
              }}
            >
              <Link to="/gallerySingle">
                <div className="item__details">jelly-o brownie sweet</div>
              </Link>
            </div>
            <div className="item item--large">
              <div className="item__details">Muffin jelly gingerbread</div>
            </div>
            <div className="item item--medium">
              <div className="item__details">sesame snaps chocolate</div>
            </div>
            <div className="item item--large">
              <div className="item__details">Oat cake</div>
            </div>
            <div className="item item--full">
              <div className="item__details">jujubes cheesecake</div>
            </div>
            <div className="item item--medium">
              <div className="item__details">Dragée pudding brownie</div>
            </div>
            <div className="item item--large">
              <div className="item__details">Oat cake</div>
            </div>
            <div className="item">
              <div className="item__details">powder toffee</div>
            </div>
            <div className="item item--medium">
              <div className="item__details">pudding cheesecake</div>
            </div>
            <div className="item item--large">
              <div className="item__details">toffee bear claw</div>
            </div>
            <div className="item">
              <div className="item__details">cake cookie croissant</div>
            </div>
            <div className="item item--medium">
              <div className="item__details">liquorice sweet roll</div>
            </div>
            <div className="item item--medium">
              <div className="item__details">chocolate marzipan</div>
            </div>
            <div className="item item--large">
              <div className="item__details">danish dessert lollipop</div>
            </div>
            <div className="item">
              <div className="item__details">sugar plum dragée</div>
            </div>
          </div>
        </section>
      </section>
    )
  }
}
