import React, {useEffect, useState, useContext} from 'react'
import { Table } from '@mantine/core';
import axios from 'axios';
import { UserContext } from '../../context/user/UserContext';

const UVA1 = () => {

  const [questions, setQuestions] = useState([]);
  const {user} = useContext(UserContext);

  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios.get('http://127.0.0.1:8000', {
        params: {
          student: user.rol,
          uva: 3
        }
      });
      setQuestions(result.data);
    }
    fetchdata();
  }, [user]);

  const rows = questions.map((question) => (
    <tr key={question.id}>
      <a href={"/PySano/UVA1/" + question.id}>
        <td className='table-name-tag'>
        <span className='table-name'>{question.title}</span>
        <span className='table-tags'>tags: {question.category_info}</span>
        </td>
      </a>
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

export default UVA1