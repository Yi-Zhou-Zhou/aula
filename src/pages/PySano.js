import React from 'react'
const PySano = () => {
  return (
    <>
    <nav class="navbar-pysano">
        <div class="logo">
            <h2>PySano</h2>
        </div>
        <a className='uva-link' href='PySano/UVA1'>UVA 1</a>
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

    <main class="main-content-pysano">
        <div class="exercise">
            <div class="title">
                <span>UVA 2</span>
                <i class="fa-solid fa-angle-right"></i>
                <span>Ejercicio 19</span>
            </div>
            <div class="rating">
                <span class="rating">Rating: </span>
                <span>800</span>
            </div>
        </div>

        <div class="description-pysano">
            <p>Write a program to add two lists index-wise. Create a new list that contains the 0th index item from both the list, then the 1st index item, and so on till the last element. any leftover items will get added at the end of the new list.</p>
            <h3>Ejemplo</h3>
            <h3 class="input">Input</h3>
            <p>['He', 'Wo']</p>
            <p>['llo', 'rld']</p>
            <h3 class="output">Output</h3>
            <p>['Hello', 'World']</p>
        </div>

        <div class="solution">
            <textarea name=""></textarea>
            <select name="select" class="select-language">
                <option value="value1" selected>Python</option>
                <option value="value2" >C++</option>
                <option value="value3">Haskell</option>
              </select>
        </div>

        <div class="submit-btns">
            <button><i class="fa-solid fa-hammer"></i> Test</button>
            <button> <i class="fa-solid fa-cloud-arrow-up"></i> Enviar</button>
        </div>
        
    </main>
    </>
  )
}

export default PySano