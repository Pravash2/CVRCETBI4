import React from "react"
import BreadCumb from "./BreadCumb"
import { useStaticQuery, Link } from "gatsby"

let tags=[]

const Resources = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulResources {
        edges {
          node {
            id
            links
            title
            tags
          }
        }
      }
    }
  `)
  
  console.log(data.allContentfulResources.edges)
  data.allContentfulResources.edges.map(d=>{
    tags=[...tags,...d.node.tags]
  })

  const myfun=(a)=>{
    return data.allContentfulResources.edges.filter(item=>item.node.tags.map(it=>it.toLowerCase()).indexOf(a)!==-1)
  }
  tags=[...new Set(tags.map(item=>item.toLowerCase()))]  
  console.log(myfun('cloud'))
    return (
      <div style={{}}>
        <BreadCumb title="Resources" />
        <h1 style={{textAlign:'center',margin:20}}>Browse through previous lessons </h1>
        <ul style={{marginLeft:100}}>
        
        {tags?tags.map((item,i)=>{
        return ( <li style={{fontSize:'1.1rem',margin:20}}>{item}
          <ul>
            {myfun(item).map((itm)=>{       
            return <li style={{fontSize:'0.9rem',letterSpacing:'1px'}}><a href={itm.node.links} target="_blank" download>{itm.node.title}</a></li>
            })}
           
          </ul> 
          </li>
        )
        }):''}
    
           
        </ul>
      </div>
    )
  }





export default Resources;
