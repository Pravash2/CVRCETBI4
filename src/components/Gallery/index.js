import React, { Component } from "react"
import BreadCumb from "../BreadCumb"
import { Link, useStaticQuery } from "gatsby"
import "./gallery.css"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query MyQuerys {
      allContentfulGallery {
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
  console.log(items[0])
  return (
    <section>
      <BreadCumb title="Gallery" />
      <section className="container">
        <div id="gallery">
          {items
            ? items.map((item, i) => {
                return (
                  <div>
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
