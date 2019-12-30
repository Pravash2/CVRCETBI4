import React from "react"

import { Link, useStaticQuery } from "gatsby"

const News = () => {
  const data = useStaticQuery(graphql`
    query MyQueryssssssss {
      allContentfulNews {
        nodes {
          id
          title
          createdAt(formatString: "")
          thumbnail {
            file {
              url
            }
          }
          thumbnailtext {
            thumbnailtext
          }
        }
      }
    }
  `)
  const items = data.allContentfulNews.nodes.reverse().splice(0, 3)

  return (
    <div>
      <section class="blog-area ptb-80">
        <div class="container">
          <div class="row">
            {items
              ? items.map(item => (
                  <div class="col-lg-4 col-md-6">
                    <Link to={`/singleNews?id=${item.id}`}>
                      <div class="single-blog-post">
                        <div class="blog-image">
                          <a href="#">
                            <img
                              src={`https:${item.thumbnail.file.url}`}
                              alt="imageBlog"
                            />
                          </a>
                          <div class="date">
                            <i data-feather="calendar"></i>{" "}
                            {new Date(item.createdAt).toDateString()}
                          </div>
                        </div>
                        <div class="blog-post-content">
                          <h3>
                            <Link to={`/singleNews?id=${item.id}`}>
                              {item.title}
                            </Link>
                          </h3>

                          <p>
                            {item.thumbnailtext
                              ? item.thumbnailtext.thumbnailtext
                              : ""}
                          </p>
                          <Link
                            to={`/singleNews?id=${item.id}`}
                            class="read-more-btn"
                          >
                            Read More <i data-feather="arrow-right"></i>{" "}
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
