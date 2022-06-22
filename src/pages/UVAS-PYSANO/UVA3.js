import React, {useEffect, useState, useContext} from 'react'
import { Table } from '@mantine/core';
import axios from 'axios';
import { UserContext } from '../../context/user/UserContext';
import { QuestionContext } from '../../context/question/QuestionContext';
import { Link } from "react-router-dom";

const UVA3 = () => {

  const uva = 3
  const {user} = useContext(UserContext);
  const { questions, addUvaQuestions} = useContext(QuestionContext);

  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios.get('http://127.0.0.1:8000', {
        params: {
          student: user.rol,
          uva: uva
        }
      });
      addUvaQuestions(uva, result.data);
    }
    fetchdata();
  }, []);

  const rows = questions[uva].map((question) => (
    <tr key={question.id}>
      <Link to={`/PySano/UVA${uva}/${question.id}`}>
        <td className='table-name-tag'>
        <span className='table-name'>{question.title}</span>
        <span className='table-tags'>tags: {question.category_info}</span>
        </td>
      </Link>
      <td className={question.difficulty <= 200 ? "table-rating-easy": "table-rating-medium"}>{question.difficulty}</td>
      <td>{question.recommended}</td>
      <td> {question.done}</td>
    </tr>
  ));

  return (
    <>
   
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
    <main className='table-content'>
    <h1 className='table-header'>Lista de ejercicios</h1>
    <Table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Rating</th>
          <th>Sugerencia</th>
          <th>Realizado</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
    </main>
    </>
  )
}

export default UVA3