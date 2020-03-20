import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const Clients = () => {
    
    const data = useStaticQuery(graphql`
    query{
        client: file(relativePath: { eq: "index/clients.jpg"}){
            childImageSharp{
                fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                  }
            }
        }
    }
    `)
  return (
    <BackgroundImage fluid={data.client.childImageSharp.fluid} className="py-5">
      <div className="client container grid grid-2 text-center white">
        <div className="xxxl">CLIENTES FELICES</div>
        <div className="client--number xxxl">+ 55.000</div>
      </div>
    </BackgroundImage>
  )
}

export default Clients
