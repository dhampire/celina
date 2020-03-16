import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const Counter = () => {
  const data = useStaticQuery(graphql`
    query {
      Counter: file(relativePath: { eq: "index/bgCounters.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage fluid={data.Counter.childImageSharp.fluid}>
      <div className="black-overlay">
        <div className="counter container grid grid-3">
          <div className="counter--items grid center">
            <div className="text-center">
                <h3 className="xxxl">+200</h3>
                <div className="">Colaboradores</div>
            </div>
          </div>
          <div className="counter--items grid center">
            <div className="text-center">
              <h3 className="xxxl">20</h3>
              <div className="">Países con nuestros clientes</div>
            </div>
          </div>
          <div className="counter--items grid center">
            <div className="text-center">
              <h3 className="xxxl">+50.000</h3>
              <div className="counter--description">Personas Beneficiadas</div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Counter
