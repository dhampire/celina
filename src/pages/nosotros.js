import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Nosotros = () => {
  const data = useStaticQuery(graphql`
    query {
      bgSlide: file(
        relativePath: { eq: "nosotros/nuestros-proyectos-bg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gpaz: file(relativePath: { eq: "nosotros/grupo-paz.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gpazTeam: file(relativePath: { eq: "nosotros/grupo-paz-team.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bgHolding: file(relativePath: { eq: "nosotros/bgHolding.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      holding: file(relativePath: { eq: "nosotros/holding.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      celina: file(relativePath: { eq: "nosotros/celina-15.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      celina15: file(relativePath: { eq: "nosotros/15-anhos.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      proyectos: file(relativePath: { eq: "nosotros/proyectos.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mision: file(relativePath: { eq: "nosotros/mision.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vision: file(relativePath: { eq: "nosotros/vision.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      valores: file(relativePath: { eq: "nosotros/valores.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rafael: file(relativePath: { eq: "nosotros/rafael.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oscar: file(relativePath: { eq: "nosotros/oscar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      alejandro: file(relativePath: { eq: "nosotros/alejandro.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      silueta: file(relativePath: { eq: "nosotros/silueta.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Acerca de Celina" />

      <BackgroundImage fluid={data.bgSlide.childImageSharp.fluid}>
        <div className="title__page black-overlay grid center m-0 p-0">
          <h2 className="xxl">Nosotros</h2>
        </div>
      </BackgroundImage>

      <div className="container grid grid-2 pb-0">
        <div className="justify">
          <div className="text-center">
            <Img
              fluid={data.gpaz.childImageSharp.fluid}
              className="iconHand iconHand--gp"
            />
          </div>
          <p>
            Grupo Paz es un grupo empresarial con tradición en Bolivia, inició
            en el sector inmobiliario y la agricultura. Está conformado por
            empresas competitivas dedicadas a diversos rubros manteniendo la
            misma filosofía de trabajo con manejo de altos estándares de gestión
            y producción. Actualmente cuenta con 9 unidades de negocios
            comprometidas en el crecimiento y desarrollo del país.
          </p>

          <div className="text-center">
            <a
              href="http://grupopaz.com.bo/"
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn__primary"
            >
              Grupopaz.com.bo
            </a>
          </div>
        </div>
        <div className="img__deco">
          <Img fluid={data.gpazTeam.childImageSharp.fluid} />
        </div>
        <h2 className="title--index xxl">Holding Empresarial</h2>
      </div>

      {/* Holding */}

      <BackgroundImage fluid={data.bgHolding.childImageSharp.fluid}>
        <div className="black-overlay black-overlay--green">
          <Img fluid={data.holding.childImageSharp.fluid} />
        </div>
      </BackgroundImage>

      {/* Celina 15 years */}
      <div className="container grid grid-2 center pb-0">
        <div className="">
          <Img
            fluid={data.celina15.childImageSharp.fluid}
            className="celina15"
          />
          <p>
            Parte de nuestros valores es el compromiso con la excelencia en
            todos nuestros actos, calidad de nuestros productos y servicios.
            Impactando positivamente en la construcción de una sociedad más
            sana, más justa y con mayor igualdad de oportunidades.
          </p>
        </div>
        <div className="img__deco">
          <Img fluid={data.celina.childImageSharp.fluid} />
        </div>
      </div>
      <h2 className="title--index xxl py-5">Proyectos principales</h2>
      <Img fluid={data.proyectos.childImageSharp.fluid} />
      <div className="container grid text-center">
        <div className="xxl cultura">
          Contamos con una{" "}
          <span className="cultura--dinamica">cultura dinámica</span> que nos ha
          permitido crecer con nuestros clientes y colaboradores
        </div>
      </div>
      <div className="container grid grid-3">
        <div className="text-center valores">
          <Img
            fluid={data.mision.childImageSharp.fluid}
            className="iconValores"
          />
          <p>
            Amamos dar oportunidades inmobiliarias para mejorar la calidad de
            vida de nuestros clientes, cumpliendo sus sueños de una forma
            accesible y a un precio justo.
          </p>
          <h3>Misión</h3>
        </div>
        <div className="text-center valores">
          <Img
            fluid={data.vision.childImageSharp.fluid}
            className="iconValores"
          />
          <p>
            Ser la empresa numero uno a nivel nacional en el rubro inmobiliario,
            reconocida por su desarrollo sostenido de proyectos de inversion y
            comercializacion a nivel nacional e internacional.
          </p>
          <h3>Visión</h3>
        </div>
        <div className="text-center valores">
          <Img
            fluid={data.valores.childImageSharp.fluid}
            className="iconValores"
          />
          <p>
            Calidad Humana – Orientación al Cliente – Contribuir a la Sociedad –
            Sentido de Urgencia – Excelencia – Eficiencia
          </p>
          <h3>Valores</h3>
        </div>
      </div>
      <div className="great__place container grid">
        <p className="text-center xl py-5">
          <span className="cutura cultura--dinamica">
            Trabajar en Celina no es solo realizar una labor rutinaria
          </span>
          <br />
          …es lograr la felicidad del cliente cumpliendo de manera tangible sus
          anhelos y expectativas
        </p>
      </div>
      <div className="container grid grid-5">
        <div className="">
          <Img fluid={data.rafael.childImageSharp.fluid} />
          <div className="text-center">
            <h3 className="cultura cultura--dinamica">Rafael Paz</h3>
            <span>Presidente</span>

            <a className="white" target="_blank" href="https://www.linkedin.com/in/rafael-paz-aguilera-707ba873/">
              <ul className="social__media">
                <li className="social__media--list">
                  <FontAwesomeIcon icon={faLinkedin} />
                </li>
              </ul>
            </a>
          </div>
        </div>
        <div className="text-center">
          <Img fluid={data.oscar.childImageSharp.fluid} />
          <h3 className="cultura cultura--dinamica">Oscar Paz</h3>
          <span>Vice presidente</span>
          <a className="white" target="_blank" href="https://www.linkedin.com/in/oscar-a-paz-gutierrez-a6440bb6/">
            <ul className="social__media">
              <li className="social__media--list">
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
            </ul>
          </a>
        </div>
        <div className="text-center">
          <Img fluid={data.silueta.childImageSharp.fluid} />
          <h3 className="cultura cultura--dinamica">Claudia Paz</h3>
          <span>Presidente</span>
          <a className="white" target="_blank" href="#">
            <ul className="social__media">
              <li className="social__media--list">
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
            </ul>
          </a>
        </div>
        <div className="text-center">
          <Img fluid={data.alejandro.childImageSharp.fluid} />
          <h3 className="cultura cultura--dinamica">Alejandro Barrientos</h3>
          <span>Director Comercial</span>
          <a className="white" target="_blank" href="https://www.linkedin.com/in/alejandro-barrientos-gil-61ba0a49/">
            <ul className="social__media">
              <li className="social__media--list">
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
            </ul>
          </a>
        </div>
        <div className="text-center">
          <Img fluid={data.silueta.childImageSharp.fluid} />
          <h3 className="cultura cultura--dinamica">Gabriela Paz</h3>
          <span>Director Ejecutivo</span>
          <a className="white" target="_blank" href="https://www.linkedin.com/in/gabriela-paz-35a28940/">
            <ul className="social__media">
              <li className="social__media--list">
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
            </ul>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Nosotros
