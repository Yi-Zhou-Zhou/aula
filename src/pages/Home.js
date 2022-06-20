import React from 'react'
import {GiHamburgerMenu, GiBookPile} from 'react-icons/gi';
import {AiOutlineSearch,AiOutlineHome,AiFillFolder, AiOutlineStar} from 'react-icons/ai';
import {TbWorld,TbCertificate} from 'react-icons/tb';
import {VscBell} from 'react-icons/vsc';
import {IoChatbubbleOutline, IoSpeedometerOutline, IoDocumentsOutline} from 'react-icons/io5';
import {IoMdArrowDropdown, IoMdPeople,IoMdRibbon} from 'react-icons/io'
import {FaUserCircle,FaUniversalAccess} from 'react-icons/fa'
import logo from "../imgs/logo.png"
import { IconContext } from 'react-icons/lib';
import {BiCalendar} from 'react-icons/bi'
import {HiOutlineAcademicCap} from 'react-icons/hi';
import {FiSettings} from 'react-icons/fi'
import heroHeaderImg from "../imgs/informationHeader.png";
import heroInfoImg from "../imgs/information.png";
import {BsListUl} from "react-icons/bs"
import {GoBook} from "react-icons/go"

const Home = () => {
    
    
  return (
    <>
    <nav className='navbar'>
        <div className='left-header'> 
            <GiHamburgerMenu size={25}/>
            <img src={logo} alt='UTFSM_Logo' className='header-logo'/>
        </div>
        <div className='right-header'>
            <IconContext.Provider  value={{ className: "navbar-icons", size: 25}}>
                <AiOutlineSearch/>
                <TbWorld/>
                <VscBell/>
                <IoChatbubbleOutline/>
                <div className='user'>
                <FaUserCircle/>
                <IoMdArrowDropdown/>
                </div>
            </IconContext.Provider>
        </div>
    </nav>

    <main className='main-content'>
    <aside className='sidebar'> 
        <div className='sidebar-top'>
            <IconContext.Provider  value={{ size: 23  , color: 'white'}}>
                <BsListUl/>
                <IoMdPeople/>
                <IoMdRibbon/>
                <GiBookPile/>
                <AiOutlineStar/>
                <GoBook/>
                <AiOutlineHome />
                <IoSpeedometerOutline/>
                <BiCalendar/>
                <HiOutlineAcademicCap/>
                <IoDocumentsOutline/>
            </IconContext.Provider>
        </div>
            <div className='sidebar-bottom'>
                <FaUniversalAccess size={23}/>
            </div>
        </aside>

        <div className='hero-section'>
            <div className='hero-title-container'>
                <div className='hero-title-header'>
                    <h1>PROGRAMACIóN</h1>
                    <FiSettings size={30}/>
                </div>
                <div className='hero-title-footer'>
                        <ul class="breadcrumb">
                            <li class="completed">
                                <a href='#'>
                                <i class="fa fa-user"></i> Página Principal
                                </a>
                            </li>
                            <li class="active">
                                <a href='#'>
                                <i class="fa fa-book"></i> Mis cursos
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                <i class="fa fa-photo"></i> PROGRAMACIÓN
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                <i class="fa fa-cc-mastercard"></i> Información General
                                </a>
                            </li>
                        </ul>
                        <button className='hero-btn'>Activar Edicion</button> 

                </div>
            </div>
            <div className='hero-main'>
                    <ul className='hero-main-titles'>
                        <li className='active clickable'>
                            Informacion General
                        </li>
                        <li className='clickable'>
                            <a href='/UVA1'>
                            Unidad 1
                            </a>
                        </li>
                        <li className='clickable'>
                            Unidad 2
                        </li>
                        <li className='clickable'>
                            Unidad 3
                        </li>
                        <li className='clickable'>
                            Unidad 4
                        </li>
                        <li className='clickable'>
                            Unidad 5
                        </li>
                        <li className='clickable'>
                            Unidad 6
                        </li>
                        <li className='clickable'>
                            Unidad 7
                        </li>
                        <li className='clickable'>
                            Unidad 8
                        </li>
                        <li className='clickable'>
                            Unidad 9
                        </li>
                        <li className='inactive'>
                            Tema 10
                        </li>
                        <li className='inactive'>
                            Certamen 2
                        </li>
                        <li className='inactive'>
                            Certamen Recuperativo
                        </li>
                    </ul>
                    <div className='hero-info-container'>
                        <img src={heroHeaderImg} className='hero-header-img' alt='Hero Header Image'/>
                        <img src={heroInfoImg} className='hero-info-img' alt='Hero Information Image'/>
                        <div className='hero-info-details'>
                            <div className='hero-info-group'>
                                <span className='bold'>Nombre de la asignatura: </span> 
                                <span>Programación</span>
                            </div>
                            <div className='hero-info-group'>
                                <span className='bold'>SIGLA: </span> 
                                <span>IWI131</span>
                            </div>
                            <div className='hero-info-group'>
                                <span className='bold'>Semestre que se dica:  </span> 
                                <span>Ambos</span>
                            </div>
                            <div className='hero-info-group'>
                                <span className='bold'>Dedicación de tiempo (SCT): </span> 
                                <span>153.5 horas cronológicas</span>
                            </div>
                            <div className='hero-info-group description'>
                                <span className='bold'>Descripción de la asignatura: </span> 
                                <span>Esta asignatura forma parte del plan de estudios conducente a la Licenciatura en Ciencias de la Ingeniería</span>
                            </div>
                            <div className='hero-info-group2'>
                                <span>El propósito de ésta es desarollar el pensamiento algorítmico para resolver problemas de ingeniería mediante el uso de un lenguaje
                                    de programación. En esta asignatura se enseñan las estructuras de control básica de un lenguaje de programación, creación de
                                    funciones, uso de colecciones de datos para resolver problemas más complejos y el uso de archivos de texto con el objetivo de
                                    preservar la información persistente 
                                </span>
                            </div>
                            <div className='hero-info-group2'>
                                <span className='bold black'>Correos de contacto</span> 
                            </div>
                            <div className='hero-info-group2 bold'>
                                Campus Casa Central Valparaíso 
                            </div>
                            <div className='hero-info-group2'>
                                Profesora coordinadora - Andrea Vásquez G: andrea.vasquez@inf.utfsm.cl
                            </div>
                            <div className='hero-info-group2'>
                                Ayudante coordinadora - Catalina Concha C.: catalina.concha@sansano.usm.cl 
                            </div>
                            <div className='hero-info-group2 bold'>
                                Campus Santiago San Joaquín 
                            </div>
                            <div className='hero-info-group2'>
                                Profesor coordinador - Federico Meza: federico.meza@usm.cl
                            </div>
                            <div className='hero-info-group2'>
                                Ayudante coordinador - Gonzalo Fernánez: gonzalo.fernandezc@sansano.usm.cl
                            </div>
                            <div className='hero-info-group2 bold'>
                                Campus Santiago Vitacura 
                            </div>
                            <div className='hero-info-group2'>
                                Profesor coordinador - Pedro Godoy B.: pedro.godoy@inf.utfsm.cl
                            </div>
                            <div className='hero-info-group2 bold'>
                                Sede Viña del Mar
                            </div>
                            <div className='hero-info-group2'>
                                Profesor coordinador - Gabriel Jara: gabriel.jara@usm.cl
                            </div>
                            <div className='hero-info-group2 bold'>
                                Sede Concepción 
                            </div>
                            <div className='hero-info-group2'>
                                Profesor coordinador - Cristian Lara: cristian.lara@usm.cl
                            </div>

                            <div className='hero-links'>
                                <div className='link-section'>
                                
                                <img src='https://aula.usm.cl/theme/image.php/moove/folder/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href='#'>Correos de contacto profesores</a>
                                </div>
                                <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/forum/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Noticias y avisos</a>
                                </div>
                                <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/forum/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Avisos Casa Central</a>
                                </div>
                                <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/forum/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Avisos Campus San Joaquín</a>
                                </div>
                                <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/core/1655227420/f/pdf-24' alt="Noticias-logo" className='hero-logo'></img><a href="#">Programa de Estudio</a>
                                </div>
                                <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/core/1655227420/f/pdf-24' alt="Noticias-logo" className='hero-logo'></img><a href="#">Reglas del curso y forma de evaluación</a>
                                </div>
                                <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/core/1655227420/f/pdf-24' alt="Noticias-logo" className='hero-logo'></img><a href="#">Sistema de evaluación</a>
                                </div>
                                <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Planificación de la asignatura</a>
                                </div>
                                <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Horario de atención remota de profesores/as</a>
                                </div>
                                <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Apuntes interactivos del curso</a>
                                </div>
                                <div className='link-section'>
                                    <span className="marginLeft">Aquí podrás encontrar el material de apoyopara las distintas UVAs, que te permitirá interactuar directamente con los ejemplos</span>
                                </div>
                                <div className='link-section'>
                                    <span className="bold black">Herramientas</span>
                                </div>
                                <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/core/1655227420/f/pdf-24' alt="Noticias-logo" className='hero-logo'></img><a href="#">Tutorial Piazza</a>
                                </div>
                                <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Piazza</a>
                                </div>
                                <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">SMOJ</a>
                                </div>
                                <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="PySano">PySano</a>
                                </div>
                                <div className='link-section'>
                                    <span className="bold black">Sesiones de Ayudantía (Campus San Joaquín)</span>
                                </div>
                                <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Paralelo 201 - Felipe Muñoz (Google Drive)</a>
                                </div>
                                <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Paralelo 202 - Camilo Vidal (Google Drive)</a>
                                </div>
                                <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Paralelo 207 - Kimberly Charlote (Google Drive)</a>
                                </div>
                                <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Paralelo 208 - Maximiliano Tapia (Google Drive)</a>
                                </div>
                                <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Paralelo 209 - José Runín (Google Drive)</a>
                                </div>
                                <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Paralelo 210 - Nicolás Pujante (Google Drive)</a>
                                </div>
                                <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Paralelo 213 - Patricio Valenzuela (Google Drive)</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            </div>
        </div>
    </main>
    
    
    </>
  )
}

export default Home