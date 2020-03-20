import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"


import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

import Slide from "../components/index/Slide"
import Counter from "../components/index/Counter"
import Projects from "../components/index/Proyectos"
import Clients from "../components/index/Clients"
import Credentials from "../components/Credentials"
import Maps from "../components/Maps"
import Form from "../components/Form"

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${Credentials.mapKey}`

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      weare: file(relativePath: { eq: "index/celina-sobre-nosotros.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      group: file(relativePath: { eq: "index/celina-group.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      testimonial: file(relativePath: { eq: "index/testimonio-maria-victoria.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bgSlide: file(relativePath: { eq: "index/bg-terreno.jpg"}){
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    }
  `)

  return (
    <Layout>
      <SEO title="Terrenos en venta" />
        <Slide />
      <div className="great__place container grid grid-2 mt-0">
        <div className="great__place--text">
          <h4 className="l">Reconocimiento</h4>
          <h2 className="xxl">GREAT PLACE TO WORK 2019</h2>
          <p>
            Celina Urbanizaciones está entre las 5 mejores empresas para
            trabajar en Bolivia. Para nosotros es un orgullo el contribuir al
            desarrollo personal y profesional de nuestros colaboradores ya que
            de esa manera nos comprometemos con el objetivo de tener un mejor
            país.
          </p>
        </div>
        <div className="">
          <div className="btn btn__primary">
            Leer más
          </div>
        </div>
      </div>

      <div className="about__celina container grid grid-2">
        <h2 className="title--index xxl">Sobre Celina</h2>
        <div className="about__celina--text justify">
          <h3>Nuestro Compromiso</h3>
          <p>
            <strong>CELINA INVERSIONES S.A. (CEISA)</strong> es la primera
            empresa en el holding del Grupo Paz dedicada a realizar inversiones
            inmobiliarias, desarrollo de proyectos unifamiliares y
            multifamiliares en Santa Cruz de la Sierra, ciudad considerada la
            número 14 en crecimiento mundial y número uno en Sudamérica según
            datos de Forbes.
          </p>
          <p>
            En estos 15 años hemos consolidado 12 proyectos urbanísticos
            brindando la oportunidad de cambiar el estilo de vida a más de
            55.000 personas, adquiriendo un terreno propio de manera rápida,
            asequible y hasta 10 años plazos a sola firma. Enfocada siempre en
            ayudar al prójimo, contribuyendo con el desarrollo del país.
          </p>
          <a className="btn btn__primary">Leer más</a>
        </div>
        <div className="img__deco">
          <Img fluid={data.weare.childImageSharp.fluid} />
        </div>
      </div>

      <Counter />
      <Projects />

      <div className="respose__social container grid grid-2">
        <h2 className="title--index xxl">Responsabilidad Social</h2>
        <div className="img__deco">
          <Img fluid={data.group.childImageSharp.fluid} />
        </div>
        <div className="justify">
          <h3>Nuestro Compromiso</h3>
          <p className="">
            En Celina Urbanizaciones buscamos de manera continua la auto
            superación y desarrollo profesional de cada uno de nuestros
            colaboradores para así poder influir de manera directa e indirecta
            en nuestro país. <br />
            Estamos constantemente comprometidos con el crecimiento de nuestros
            colaboradores, medio ambiente, con la juventud y la niñez,
            realizando charlas motivacionales y constantes capacitaciones.
          </p>
          <a href="/" className="btn btn__primary">
            Leer más
          </a>
        </div>
      </div>
      <div className="bg--gray">
        <div className="testimonial container grid grid-2">
        <h2 className="title--index xxl">Testimonios</h2>
        <div className="">
        <Img fluid={data.testimonial.childImageSharp.fluid} />
        </div>
        <div className="">
          <p>
            <i>
              Cuando vi la convocatoria interna sabía que era mi oportunidad,me
              gustó mucho que tomen en cuenta a personas de la empresa para
              cubrir nuevos cargos y poder ascender. Siempre estuve segura que
              lo lograría y transmito a mis compañeros que es posible crecer
              dentro de la empresa solo tenes que hacer cosas distintas y dar
              más de lo que te pidan.
            </i>
          </p>
        </div>
      </div>
      </div>
      <div className="news container grid grid-3">
        <h2 className="title--index xxl">Novedades</h2>
        <div className="news__cards">
          <h3>Visita, Compra y Gana con Celina</h3>
          <a href="/" className="btn btn__primary">
            Ver más
          </a>
        </div>
        <div className="news__cards">
          <h3>Niños con cancer 2020 – Celina</h3>
          <a href="/" className="btn btn__primary">
            Ver más
          </a>
        </div>
        <div className="news__cards">
          <h3>Celebramos en Familia</h3>
          <a href="/" className="btn btn__primary">
            Ver más
          </a>
        </div>
      </div>

      <Clients />
      <div className="contact container grid grid-2">
        <div className="title--index xxl">Contacto</div>
        <div className="">
          <Maps
            googleMapURL = {mapURL}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
         />
         </div>
        <div className=""><Form /></div>
      </div>
      
      <Link to="/page-2/"></Link>
    </Layout>
  )
}
export default IndexPage
