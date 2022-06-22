import React, {useContext} from 'react'
import {FaLongArrowAltRight} from "react-icons/fa"
import {GrConfigure} from "react-icons/gr"
import {MdUpgrade} from "react-icons/md"
import { Button } from '@mantine/core';

import {useParams, Link, Navigate} from 'react-router-dom'
import { QuestionContext } from '../context/question/QuestionContext';

const Exercises = () => {
    const {uva_id, exercise_id} = useParams()
    const uva_num = parseInt(uva_id.substring(3))
    const {questions} = useContext(QuestionContext)
    if (questions[uva_num].length === 0)
        return <Navigate to={`/PySano/${uva_id}`}/>
    const question = questions[uva_num].find(question => question.id == exercise_id)
    console.log(question)

  return (
    <div>
        <nav class="navbar-pysano">
        <div class="logo">
            <h2>PySano</h2>
        </div>
            <Link className='uva-link' to="/PySano/UVA1"> UVA 1 </Link>
            <Link className='uva-link' to="/PySano/UVA2"> UVA 2 </Link>
            <Link className='uva-link' to="/PySano/UVA3"> UVA 3 </Link>
            <Link className='uva-link' to="/PySano/UVA4"> UVA 4 </Link>
            <Link className='uva-link' to="/PySano/UVA5"> UVA 5 </Link>
            <Link className='uva-link' to="/PySano/UVA6"> UVA 6 </Link>
            <Link className='uva-link' to="/PySano/UVA7"> UVA 7 </Link>
            <Link className='uva-link' to="/PySano/UVA8"> UVA 8 </Link>
            <Link className='uva-link' to="/PySano/UVA9"> UVA 9 </Link>
            <Link className='uva-link' to="/PySano/UVA10"> UVA 10 </Link>
        </nav>

        <main className='main-content-pysano'>
            <div className='exercise-title'>
                <h1>{uva_id}</h1>
                <FaLongArrowAltRight size={20}/> 
                <h1>{question.title}</h1> 
            </div>

            <div className='rating'>
                <span>Rating: </span>
                <span>{question.difficulty}</span>
            </div>

            <div className='description-pysano'>   
                <p>
                    {question.question}
                </p>

                <h4>
                    Instrucciones de input
                </h4>
                <p>
                    {question.input_instructions}
                </p>
                <h4>
                    Instrucciones de output
                </h4>
                <p>
                    {question.output_instructions}
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
                    Enviar
                </Button>
                
            </div>

        </main>
    </div>
  )
}

export default Exercises