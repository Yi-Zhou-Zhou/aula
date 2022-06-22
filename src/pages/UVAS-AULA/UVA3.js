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
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/user/UserContext';   
import { showNotification } from '@mantine/notifications';

const UVA3 = () => {

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
                    user.rol === "201873081-0" ? updateRol("201873027-0") : updateRol("201873081-0")
                    showNotification({
                        color: "green",
                        title: 'Usuario cambiado exitosamente',
                        message: 'Usuario actual con Rol: ' + user.rol,
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
                        <li className='clickable'>
                            <Link href="/UVA2">
                            Unidad 2
                            </Link>
                        </li>
                        <li className='active clickable'>
                            <Link href='/UVA3'>
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
                        <div className='hero-header-img-uva' alt='Hero Header Image'>
                            <p>Unidad 3</p>
                        </div>
                        <img src={heroResultsImg} className='hero-info-img' alt='Hero Information Image'/>
                        <div className='hero-info-details'>
                            <ul className='hero-info-group hero-info-group2'>
                                <li className='hero-results'>1. En el contexto de un problema, expresar una condición lógica que modele una situación particular, a partir de comparaciones y operadores lógicos.  </li>
                                <li className='hero-results'>2. Organizar la lógica de decisiones de un programa en Python entorno a decisiones simples, dobles, en cascada o anidadas, según sea necesario. </li>
                                <li className='hero-results'>3. Ser capaz de dar seguimiento (ruteo) a un programa o algoritmo que comprenda decisiones. </li>
                                <li className='hero-results'>4. Resolver problemas en Python a partir de un enunciado en lenguaje natural, a través de algoritmos que deban tomar decisiones simples o dobles, expresando adecuadamente la condición que permite decidir. </li>
                            </ul>
                        </div>
                        <img src={heroContentsImg} className='hero-info-img' alt='Hero Information Image'/>
                        <div className='hero-info-details'>
                            <ul>
                                <li className='hero-info-content'>– Operadores de comparación.</li>
                                <li className='hero-info-content'>– Condiciones lógicas y operadores lógicos. </li>
                                <li className='hero-info-content'>– Decisiones con un único camino: if.</li>
                                <li className='hero-info-content'>– Decisiones con dos caminos: if - else.</li>
                                <li className='hero-info-content'>– Decisiones en cascada: if - elif- else.</li>
                                <li className='hero-info-content'>– Decisiones anidadas.</li>
                                <li className='hero-info-content'>– Ruteo de programas con flujo condicional.</li>
                            </ul>
                        </div>
                        <img src={heroResourcesImg} className='hero-info-img' alt='Hero Information Image'/>
                        <div className='hero-info-details'>
                            <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img>
                                    <Link to="/PySano/UVA3">PySano</Link>
                            </div>
                        </div>
                        <div className='hero-info-details'>
                            <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Condicionales - Introducción</a>
                            </div>
                            <div className='hero-info-details link-section'>
                                <img src='https://aula.usm.cl/theme/image.php/moove/quiz/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Condiciones lógicas</a>
                            </div>
                        </div>
                        <div className='hero-info-details'>
                            <div className='link-section'>  
                                <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Condicionales - Control de Flujo</a>
                            </div>
                            <div className='hero-info-details link-section'>
                                <img src='https://aula.usm.cl/theme/image.php/moove/quiz/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Condicional (Instrucción if)</a>
                            </div>
                        </div>
                        <div className='hero-info-details'>
                            <div className='link-section'>  
                                <img src='https://aula.usm.cl/theme/image.php/moove/url/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Condicionales - Ejercicio</a>
                            </div>
                            <div className='hero-info-details link-section'>
                                <img src='https://aula.usm.cl/theme/image.php/moove/quiz/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Solución de problemas con decisiones</a>
                            </div>
                        </div>
                     
                        <div className='link-section'>
                            <img src='https://aula.usm.cl/theme/image.php/moove/folder/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Material por paralelo</a>
                        </div>
                        <div className='link-section'>
                            <img src='https://aula.usm.cl/theme/image.php/moove/folder/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="#">Documentos complementarios</a>
                        </div>
                        <img src={heroActivityImg} className='hero-info-img' alt='Hero Information Image'/>
                        <div className='hero-info-details'>
                            <div className='link-section'>
                                    <img src='https://aula.usm.cl/theme/image.php/moove/quiz/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a className='inactive' href="#">Control 3</a>
                            </div>
                        </div>
                        <img src={heroEvalImg} className='hero-info-img' alt='Hero Information Image'/>
                        <div className='hero-info-details'>
                            <span className=' bold'>Evaluaciones a realizar en periodos de modalidad online</span>
                        <div className='hero-info-details link-section mt-2'>
                        <img src='https://aula.usm.cl/theme/image.php/moove/assign/1655227420/icon' alt="Noticias-logo" className='hero-logo'></img><a href="/PySano/UVA1">Tarea 3 - Decisiones</a>
                        </div>
                        <div className='video-container'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/HvReNhnlvCU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        </div>
                    </div>
                    
            </div>
        </div>
    </main>
    
    
    </>
  )
}

export default UVA3