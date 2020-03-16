import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      celina1: file(relativePath: { eq: "projects/celina-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      celina2: file(relativePath: { eq: "projects/celina-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      celina3: file(relativePath: { eq: "projects/celina-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      celina4: file(relativePath: { eq: "projects/celina-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      celina5: file(relativePath: { eq: "projects/celina-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      celina7: file(relativePath: { eq: "projects/celina-7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      naranjal: file(relativePath: { eq: "projects/naranjal.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paraiso: file(relativePath: { eq: "projects/Paraiso.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ranchoNuevo: file(relativePath: { eq: "projects/rancho-nuevo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      santaRosa: file(relativePath: { eq: "projects/santa-rosa.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return (
    <div className="our__projects container grid grid-4">
      <h2 className="title--index xxl">Nuestros proyectos</h2>
      <div className="our__projects--items">
        <div className="">
          <Img fluid={data.celina1.childImageSharp.fluid} />
        </div>
        <h3>Celina 1</h3>
        <p>Segundo anillo Este Montero – Santa Cruz</p>
        <a className="btn btn__primary">Leer más</a>
        <div className="overlay overlay--red">
          <div className="text">
            AGOTADO
          </div>
        </div>
      </div>
      <div className="our__projects--items">
        <div className="">
          <Img fluid={data.celina2.childImageSharp.fluid} />
        </div>
        <h3>Celina 2</h3>
        <p>Segundo anillo Este Montero – Santa Cruz</p>
        <a className="btn btn__primary">Leer más</a>
        <div className="overlay overlay--red">
          <div className="text">
            AGOTADO
          </div>
        </div>
      </div>
      <div className="our__projects--items">
        <div className="">
          <Img fluid={data.celina3.childImageSharp.fluid} />
        </div>
        <h3>Celina 3</h3>
        <p>Carretera al Norte Montero – Santa Cruz</p>
        <a className="btn btn__primary">Leer más</a>
        <div className="overlay">
          <div className="text">
            <a href="/">Urbanización totalmente pavimentada y con todos los servicios básicos</a>
          </div>
        </div>
      </div>
      <div className="our__projects--items">
        <div className="">
          <Img fluid={data.celina4.childImageSharp.fluid} />
        </div>
        <h3>Celina 4</h3>
        <p>Carretera al Norte Montero – Santa Cruz</p>
        <a className="btn btn__primary">Leer más</a>
        <div className="overlay">
          <div className="text">
            <a href="/">Urbanización totalmente pavimentada y con todos los servicios básicos</a>
          </div>
        </div>
      </div>
      <div className="our__projects--items">
        <div className="">
          <Img fluid={data.celina5.childImageSharp.fluid} />
        </div>
        <h3>Celina 5</h3>
        <p>Carretera al Norte Montero – Santa Cruz</p>
        <a className="btn btn__primary">Leer más</a>
        <div className="overlay">
          <div className="text">
            <a href="/">Urbanización totalmente pavimentada y con todos los servicios básicos</a>
          </div>
        </div>
      </div>
      <div className="our__projects--items">
        <div className="">
          <Img fluid={data.celina7.childImageSharp.fluid} />
        </div>
        <h3>Celina 7</h3>
        <p>Zona Satélite cerca a la Nueva Autopista Santa Cruz – Warnes</p>
        <a className="btn btn__primary">Leer más</a>
        <div className="overlay">
          <div className="text">
            <a href="/">Urbanización totalmente pavimentada y con todos los servicios básicos</a>
          </div>
        </div>
      </div>
      <div className="our__projects--items">
        <div className="">
          <Img fluid={data.naranjal.childImageSharp.fluid} />
        </div>
        <h3>Celina El Naranjal</h3>
        <p>Carretera al Norte Warnes – Montero</p>
        <a className="btn btn__primary">Leer más</a>
        <div className="overlay">
          <div className="text">
            <a href="/">Urbanización totalmente pavimentada y con todos los servicios básicos</a>
          </div>
        </div>
      </div>
      <div className="our__projects--items">
        <div className="">
          <Img fluid={data.ranchoNuevo.childImageSharp.fluid} />
        </div>
        <h3>Rancho Nuevo</h3>
        <p>Cerca al Ingenio Unagro Minero – Santa Cruz</p>
        <a className="btn btn__primary">Leer más</a>
        <div className="overlay">
          <div className="text">
            <a href="/">Urbanización totalmente pavimentada y con todos los servicios básicos</a>
          </div>
        </div>
      </div>
      <div className="our__projects--items">
        <div className="">
          <Img fluid={data.paraiso.childImageSharp.fluid} />
        </div>
        <h3>Paraiso</h3>
        <p>Carretera al Norte – Zona Satélite cerca a la Nueva Autopista</p>
        <a className="btn btn__primary">Leer más</a>
        <div className="overlay overlay--red">
          <div className="text">
            AGOTADO
          </div>
        </div>
      </div>
      <div className="our__projects--items">
        <div className="">
          <Img fluid={data.santaRosa.childImageSharp.fluid} />
        </div>
        <h3>Santa Rosa</h3>
        <p>Sobre el segundo anillo de Cotoca en Santa Cruz</p>
        <a className="btn btn__primary">Leer más</a>
        <div className="overlay">
          <div className="text">
            <a href="/">Urbanización totalmente pavimentada y con todos los servicios básicos</a>
          </div>
        </div>
      </div>
      <div className="our__projects--items">
        <div className="">
          <Img fluid={data.celina7.childImageSharp.fluid} />
        </div>
        <h3>Santa Rosa 2</h3>
        <p>Sobre el segundo anillo de Cotoca en Santa Cruz</p>
        <a className="btn btn__primary">Leer más</a>
        <div className="overlay">
          <div className="text">
            <a href="/">Urbanización totalmente pavimentada y con todos los servicios básicos</a>
          </div>
        </div>
      </div>
      <div className="our__projects--items">
        <div className="text-center">
          <h3>PROXIMOS PROYECTOS</h3>
          <p>Nuevos proyectos en el 2020</p>
        </div>
      </div>
    </div>
  )
}

export default Projects
