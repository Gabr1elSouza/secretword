import "./GameOver.css";

function GameOver({ retry, Score }) {
  return (
    <div>
      <h1>Fim de jogo</h1>
      <h2>
        A sua pontuanção foi: <span>{Score}</span>
      </h2>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  );
}

export default GameOver;
