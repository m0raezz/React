import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>Este é o ambiente padrão do React :D</h1>
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h5><strong>Curiosidade:</strong> O nome <i>React</i> é uma referência ao
          tempo de resposta rápido que a biblioteca fornece ao construir interfaces de usuários.</h5>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5><i>Link direcionado para ler mais informações sobre</i></h5>
        </a>
      </header>
    </div>
  );
}

export default App;
