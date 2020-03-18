import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


import Menu from "./header/menu"

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "footer/grupopaz.png"}){
                childImageSharp{
                    fluid(maxWidth: 150){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            bgFooter: file(relativePath: { eq: "footer/footer-bg.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 1920){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return(
        <BackgroundImage fluid={data.bgFooter.childImageSharp.fluid}>
            <div className="footer container grid grid-3 black-overlay black-overlay--green m-0">
                <div className="">
                    <h3>Menú</h3>
                        <Menu />
                    <h3>Redes Sociales</h3>
                    <ul className="social__media">
                        <li className="social__media--list"><FontAwesomeIcon icon={faFacebookF} /></li>
                        <li className="social__media--list"><FontAwesomeIcon icon={faTwitter} /></li>
                        <li className="social__media--list"><FontAwesomeIcon icon={faInstagram} /></li>
                    </ul>
                </div>
                <div className=""><h3>Nuestros Proyectos</h3>
                    <div className="grid grid-2 mt-0">
                        <ul>
                            <li><FontAwesomeIcon icon={faChevronRight} className="footer--icons"/> Celina 1</li>
                            <li><FontAwesomeIcon icon={faChevronRight} className="footer--icons"/> Celina 2</li>
                            <li><FontAwesomeIcon icon={faChevronRight} className="footer--icons"/> Celina 3</li>
                            <li><FontAwesomeIcon icon={faChevronRight} className="footer--icons"/> Celina 4</li>
                            <li><FontAwesomeIcon icon={faChevronRight} className="footer--icons"/> Celina 5</li>
                        </ul>
                        <ul>
                            <li><FontAwesomeIcon icon={faChevronRight} className="footer--icons"/> Celina 7</li>
                            <li><FontAwesomeIcon icon={faChevronRight} className="footer--icons"/> Paraíso</li>
                            <li><FontAwesomeIcon icon={faChevronRight} className="footer--icons"/> Rancho Nuevo</li>
                            <li><FontAwesomeIcon icon={faChevronRight} className="footer--icons"/> Santa Rosa</li>
                            <li><FontAwesomeIcon icon={faChevronRight} className="footer--icons"/> Santa Rosa 2</li>
                        </ul>  
                    </div>            
                </div>
                <div className="">
                    <h3>Dirección</h3>
                    <ul>
                        <li> <FontAwesomeIcon icon={faMapMarkerAlt}  className="footer--icons"/> Avenida Cañoto Esquina Libertad #879 Edificio Celina</li>
                    </ul>
                    <h3>Teléfono</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faPhoneAlt}  className="footer--icons"/> (591) (3) 3375363</li>
                    </ul>
                    <h3> Email</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faEnvelope}  className="footer--icons"/> info@celina.com.bo</li>
                    </ul>
                </div>
                <div className="footerLogo">
                    <Img
                    fluid = {data.logo.childImageSharp.fluid} 
                    className="logoImg"/>
                </div>
            </div>
        </BackgroundImage>
    )
}

export default Footer