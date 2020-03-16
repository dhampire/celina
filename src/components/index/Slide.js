import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const Slide = () => {
    const data = useStaticQuery(graphql`
    query {
      bgSlide: file(relativePath: { eq: "index/bg-terreno.jpg"}){
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iconHand: file(relativePath: { eq: "index/icon-hand.png" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)



  return (
    <BackgroundImage fluid={data.bgSlide.childImageSharp.fluid} className="slide">
      <div className="black-overlay grid center">
        <div className="content-box text-center">
            <h2 className="xxxl">Construimos tu futuro</h2>
            <div className="btn btn__primary xl">Contactanos</div>
            <Img
                fluid = {data.iconHand.childImageSharp.fluid}
                className="iconHand"
            />
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Slide
