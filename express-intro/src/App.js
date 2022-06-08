import React, { useState } from 'react';
import './App.css';

function App() {
  let name = 'Antonio'
  let favColor = 'red'
  let movies = ['batman', 'superman', 'flash']
  const [Name, setName] = useState()
  const [age, setAge] = useState()
  const [color, setColor] = useState()




  return (



    < div className="App">
      <header className="App-header" style={{ backgroundColor: color }}>
        <div>
          <a>Name: {Name}</a>
          <div>
            <input type='text' onChange={(event) => {
              const value = event.target.value
              setName(value)
            }} />
          </div>
          <a>Age: {age}</a>

          <div>
            <input type='text' onChange={(event) => {
              const value = event.target.value
              setAge(value)
            }} />
          </div>
          <a>

            Color: {color}</a>

          <div>

            <input type='text' onChange={(event) => {

              const value = event.target.value.toString()
              setColor(value)
            }} />


          </div>

        </div>



        <h1>my stuff</h1>
        <div>
          my name: {name}
          <br></br>
          my fav color: {favColor}
          <br></br>
          <h3>movies</h3>
          <div>
            {movies[0]}
            <br></br>
            {movies[1]}
            <br></br>
            {movies[2]}
          </div>

        </div>

      </header>
    </div >
  );
}

export default App;
