import React, { Component } from "react"
import BreadCumb from "../BreadCumb"
import { Link, useStaticQuery } from "gatsby"
import "./gallery.css"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query MyQuerys {
      allContentfulGallery(sort: { fields: createdAt, order: ASC }) {
        nodes {
          title
          tumbnailImage {
            file {
              url
              details {
                image {
                  height
                  width
                }
              }
            }
          }
          id
        }
      }
    }
  `)
  const items = data.allContentfulGallery.nodes

  return (
    <section>
      <BreadCumb title="Gallery" />
      <section className="container" style={{ marginBottom: 100 }}>
        <div id="gallery">
          {items
            ? items.map((item, i) => {
                return (
                  <div style={{ margin: 10 }}>
                    <img src={`https:${item.tumbnailImage.file.url}`} />
                    <Link to={`/singleGallery?id=${item.id}`}>
                      {item.title}
                    </Link>
                  </div>
                )
              })
            : ""}
        </div>
      </section>
    </section>
  )
}

export default Gallery
