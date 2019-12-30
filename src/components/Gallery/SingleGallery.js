import React, { Component } from "react"
import BreadCumb from "../BreadCumb"
import withLocation from "../withLocation"
import { Link, useStaticQuery } from "gatsby"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import parse from "html-react-parser"

const SingleGallery = ({ search }) => {
  const data = useStaticQuery(graphql`
    query MyQueryss {
      allContentfulGallery {
        edges {
          node {
            id
            date
            category
            eventsImages {
              file {
                url
              }
              title
            }
            title
            description {
              json
            }
            updatedAt(formatString: "")
          }
        }
      }
    }
  `)

  const items = data.allContentfulGallery.edges.filter(
    item => item.node.id === search.id
  )[0]
    ? data.allContentfulGallery.edges.filter(
        item => item.node.id === search.id
      )[0].node
    : []
  if (items) {
    return (
      <div>
        <BreadCumb title={items.title} />
        <section className="project-details-area ptb-80">
          <div className="container">
            <section class="section">
              <div id="gallery">
                {items.eventsImages
                  ? items.eventsImages.map((item, i) => {
                      return (
                        <div>
                          <img src={`https:${item.file.url}`} />
                          <a to={`#`}>{item.title}</a>
                        </div>
                      )
                    })
                  : ""}
              </div>
            </section>
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="project-details-desc">
                  <div style={{ textAlign: "justify" }}>
                    {items.description
                      ? parse(documentToHtmlString(items.description.json))
                      : ""}
                  </div>

                  <div className="project-details-information">
                    <div className="single-info-box">
                      <h4>Location</h4>
                      <p>{items.locations}</p>
                    </div>

                    <div className="single-info-box">
                      <h4>Category</h4>
                      {items.category
                        ? items.category.map(item => <p>{item}</p>)
                        : ""}
                    </div>

                    <div className="single-info-box">
                      <h4>Date</h4>
                      <p>
                        {items.date ? new Date(items.date).toDateString() : ""}
                      </p>
                    </div>

                    <div className="single-info-box">
                      <h4>Share</h4>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  } else {
    return <div>Hello</div>
  }
}

export default withLocation(SingleGallery)
