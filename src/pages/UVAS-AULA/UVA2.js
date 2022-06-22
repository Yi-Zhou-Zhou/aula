import React from 'react'
import {GiHamburgerMenu, GiBookPile} from 'react-icons/gi';
import {AiOutlineSearch,AiOutlineHome,AiFillFolder, AiOutlineStar} from 'react-icons/ai';
import {TbWorld,TbCertificate} from 'react-icons/tb';
import {VscBell} from 'react-icons/vsc';
import {IoChatbubbleOutline, IoSpeedometerOutline, IoDocumentsOutline} from 'react-icons/io5';
import {IoMdArrowDropdown, IoMdPeople,IoMdRibbon} from 'react-icons/io'
import {FaUserCircle,FaUniversalAccess} from 'react-icons/fa'
import logo from "../../imgs/logo.png"
import { IconContext } from 'react-icons/lib';
import {BiCalendar} from 'react-icons/bi'
import {HiOutlineAcademicCap} from 'react-icons/hi';
import {FiSettings} from 'react-icons/fi'
import heroHeaderImg from "../../imgs/informationHeader.png";
import heroResultsImg from "../../imgs/02-resultado.png";
import heroContentsImg from "../../imgs/03-contenidos.png"
import heroActivityImg from "../../imgs/05-actividades.png"
import heroResourcesImg from "../../imgs/04-recursos.png"
import heroEvalImg from "../../imgs/06-evaluaciones.png"
import {BsListUl} from "react-icons/bs"
import {GoBook} from "react-icons/go"
import Unidad2 from "../../imgs/Unidad2.png"
import CapsulasVideo from "../../imgs/Capsulas.png"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/user/UserContext';
import { showNotification } from '@mantine/notifications';

const UVA2 = () => {

    const {user,updateRol} = useContext(UserContext)

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
                <div className='user' onClick={() => {
                    const newRol = user.rol === "201873081-0" ? "201873027-0" : "201873081-0"
                    updateRol(newRol)
                    showNotification({
                        color: "green",
                        title: 'Usuario cambiado exitosamente',
                        message: 'Usuario actual con Rol: ' + newRol,
                      })
                }} >
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
                        <li className='clickable'>
                            <a href='/'>
                            Información General
                            </a>
                        </li>
                        <li className='clickable'>
                            <Link to='/UVA1'>
                            Unidad 1
                            </Link>
                        </li>
                        <li className='active clickable'>
                            <Link to="/UVA2">
                            Unidad 2
                            </Link>
                        </li>
                        <li className='clickable'>
                            <Link to='/UVA3'>
                            Unidad 3
                            </Link>
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
                        <img src={Unidad2} alt="Unidad1-logo" className='hero-info-img' />
                        <img src={heroResultsImg} className='hero-info-img' alt='Hero Information Image'/>
                        <div className='hero-info-details'>
                            <ul className='hero-info-group hero-info-group2'>
                                <li className='hero-results'>1. Efectuar cálculos aritméticos con variables y operandos literales, tanto enteros como reales, desde la consola de Python.</li>
                                <li className='hero-results'>2. Escribir programas de flujo secuencial en Python que reciban entradas y generen salidas.</li>
                                <li className='hero-results'>3. Resolver problemas especificados en lenguaje natural mediante programas en Python que hagan cálculos matemáticos utilizando los operadores básicos y funciones predefinidas de biblioteca, almacenando operandos y resultados en variables y aplicando conversión de tipos (casting) cuando es necesario.</li>
                            </ul>
                        </div>
                        <img src={heroContentsImg} className='hero-info-img' alt='Hero Information Image'/>
                        <div className='hero-info-details'>
                            <ul>
                                <li className='hero-info-content'>– Introducción a Python</li>
                                <li className='hero-info-content'>– Tipos de datos, variables operadores y expresiones.</li>
                                <li className='hero-info-content'>– Entrada y salida</li>
                                <li className='hero-info-content'>– Programas con flujo secuencial</li>
                                <li className='hero-info-content'>– Funciones predefinidas y de biblioteca</li>
                            </ul>
                        </div>
                        <img src={heroResourcesImg} className='hero-info-img' alt='Hero Information Image'/>
                        <div className='link-section'>
                                <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img>
                                <Link to="/PySano/UVA2">PySano</Link>
                        </div>  
                        <div className='hero-info-details'>
                            <img src={CapsulasVideo} alt="Capsulas-video-logo"/>
                        </div>
                        <div className='hero-info-details'>
                            <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Python</a>
                            </div>
                            <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Python - Datos, tipos y expresiones</a>
                            </div>
                            <div className='hero-info-details link-section'>
                                <img src='https://aula.usm.cl/theme/image.php/moove/quiz/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Python - Introducción </a>
                            </div>
                        </div>
                        <div className='hero-info-details'>
                            <div className='link-section'>  
                                <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Python - Variables</a>
                            </div>
                            <div className='link-section'>  
                                <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Python - Variables: Asignación y nombres</a>
                            </div>
                            <div className='hero-info-details link-section'>
                                <img src='https://aula.usm.cl/theme/image.php/moove/quiz/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Python - Variables y asignación</a>
                            </div>
                        </div>
                        <div className='hero-info-details'>
                        <div className='link-section'>  
                                <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Python - Programa 1</a>
                        </div>
                        <div className='link-section'>  
                                <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Python - Programa 2</a>
                        </div>
                        <div className='link-section'>  
                                <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Python - Programa 3</a>
                        </div>
                        <div className='link-section'>  
                                <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Python - Programa 4</a>
                        </div>
                        <div className='hero-info-details link-section'>
                                <img src='https://aula.usm.cl/theme/image.php/moove/quiz/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Python - Programas secuenciales</a>
                            </div>
                        </div>
                        <div className='link-section'>
                            <img src='https://aula.usm.cl/theme/image.php/moove/page/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Prepárate para usar SMOJ</a>
                        </div>
                        <div className='link-section'>
                            <img src='https://aula.usm.cl/theme/image.php/moove/folder/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Material por paralelo</a>
                        </div>
                        <div className='link-section'>
                            <img src='https://aula.usm.cl/theme/image.php/moove/folder/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Documentos complementarios</a>
                        </div>
                        <img src={heroActivityImg} className='hero-info-img' alt='Hero Information Image'/>
                            <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/quiz/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a className='inactive' href="#">Control 2</a>
                            </div>
                            <div className='hero-info-details'>
                                <span className='restricted'>Restringido</span>
                                <span> No disponible hasta que cualquiera de:</span>
                                <ul>
                                    <li className='activity-list'>Antes de 21 de marzo de 2022, 09:30</li>
                                    <li className='activity-list'>Antes de 21 de marzo de 2022, 10:50</li>
                                    <li className='activity-list'>Antes de 21 de marzo de 2022, 12:10</li>
                                    <li className='activity-list'>Antes de 21 de marzo de 2022, 13:30</li>
                                    <li className='activity-list'>Antes de 22 de marzo de 2022, 09:35</li>
                                    <li className='activity-list'>Antes de 22 de marzo de 2022, 10:55</li>
                                    <li className='activity-list'>Antes de 23 de marzo de 2022, 08:45</li>
                                    <li className='activity-list'>Antes de 23 de marzo de 2022, 10:05</li>
                                    <li className='activity-list'>Antes de 23 de marzo de 2022, 11:25</li>
                                    <li className='activity-list'>Antes de 23 de marzo de 2022, 12:45</li>
                                    <li className='activity-list'>Antes de 24 de marzo de 2022, 15:00</li>
                                    <li className='activity-list'>Antes de 22 de marzo de 2022, 18:25</li>
                                    <li className='activity-list'>Antes de 22 de marzo de 2022, 13:15</li>
                                </ul>

                        </div>
                        <img src={heroEvalImg} className='hero-info-img' alt='Hero Information Image'/>
                        <div className='hero-info-details'>
                            <span className=' bold'>Evaluaciones a realizar en periodos de modalidad online</span>
                        <div className='hero-info-details link-section mt-2'>   
                            <img src='https://aula.usm.cl/theme/image.php/moove/assign/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="/PySano/UVA1">Tarea 2 - Programas Secuenciales</a>
                        </div>
                        <div className='video-container'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/pu2bznIFfY0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        </div>
                    </div>
                    
            </div>
        </div>
    </main>
    
    
    </>
  )
}

export default UVA2