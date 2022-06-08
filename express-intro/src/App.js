
import './App.css';

function App() {
  let name = 'Antonio'
  let favColor = 'red'
  let movies = ['batman', 'superman', 'flash']

  return (
    <div className="App">
      <header className="App-header">


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
    </div>
  );
}

export default App;
