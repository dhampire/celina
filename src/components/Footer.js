import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

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
            <div className="footer container grid grid-3 black-overlay black-overlay--green ">
                <div className="">
                    <h3>Menú</h3>
                        <Menu />
                    <h3><FontAwesomeIcon icon="coffee" /> Redes Sociales</h3>
                    <ul className="social__media">
                        <li></li>
                    </ul>
                </div>
                <div className=""><h3>Nuestros Proyectos</h3>
                    <div className="grid grid-2 mt-0">
                        <ul>
                            <li>Celina 1</li>
                            <li>Celina 2</li>
                            <li>Celina 3</li>
                            <li>Celina 4</li>
                            <li>Celina 5</li>
                        </ul>
                        <ul>
                            <li>Celina 7</li>
                            <li>Paraíso</li>
                            <li>Rancho Nuevo</li>
                            <li>Santa Rosa</li>
                            <li>Santa Rosa 2</li>
                        </ul>  
                    </div>            
                </div>
                <div className="">
                    <h3>Dirección</h3>
                    <p>Avenida Cañoto Esquina Libertad #879 Edificio Celina</p>
                    <h3>Teléfono</h3>
                    <p>(591) (3) 3375363</p>
                    <h3>Email</h3>
                    <p>info@celina.com.bo</p>
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