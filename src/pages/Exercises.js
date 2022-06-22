import React from 'react'
import {FaLongArrowAltRight} from "react-icons/fa"
import {GrConfigure} from "react-icons/gr"
import {MdUpgrade} from "react-icons/md"
import { Button } from '@mantine/core';
const Exercises = () => {
  return (
    <div>
        <nav class="navbar-pysano">
        <div class="logo">
            <h2>PySano</h2>
        </div>
            <a className='uva-link' href='/PySano/UVA1'>UVA 1</a>
            <a className='uva-link' href='UVA2'>UVA 2</a>
            <a className='uva-link' href='UVA3'>UVA 3</a>
            <a className='uva-link' href='UVA4'>UVA 4</a>
            <a className='uva-link' href='UVA5'>UVA 5</a>
            <a className='uva-link' href='UVA6'>UVA 6</a>
            <a className='uva-link' href='UVA7'>UVA 7</a>
            <a className='uva-link' href='UVA8'>UVA 8</a>
            <a className='uva-link' href='UVA9'>UVA 9</a>
            <a className='uva-link' href='UVA10'>UVA 10</a>
        </nav>

        <main className='main-content-pysano'>
            <div className='exercise-title'>
                <h1>UVA1</h1>
                <FaLongArrowAltRight size={20}/> 
                <h1>Teorema de Pitágoras</h1> 
            </div>

            <div className='rating'>
                <span>Rating: </span>
                <span>800</span>
            </div>

            <div className='description-pysano'>   
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
            </div>
            
            <h3 className='example'>Ejemplo</h3>

            <h4>Input</h4>
            <div className='input'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </div>

            <h4>Output</h4>
            <div className='output'>
                <p>[1,2,3]</p>
            </div>

            <div className='solution'>
                <select name="select" className='select-language'>
                        <option value="value1" selected>Python 3.6.9</option>
                        <option value="value2">C++</option>
                        <option value="value3">Haskell</option>
                </select>
                <textarea/>
            </div>
            
            <div className='submit-btns'>
                <Button color={"yellow"} leftIcon={<GrConfigure size={20} color="white"/>}>
                    Probar
                </Button>

                <Button color={"green"} leftIcon={<MdUpgrade size={20} />}>
                    Probar
                </Button>
                
            </div>

        </main>
    </div>
  )
}

export default Exercises