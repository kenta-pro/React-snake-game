import Button from "./components/Button";
import Field from "./components/Field";
import ManipulationPanel from "./components/ManipulationPanel";
import Navigation from "./components/Navigation";
import useSnakeGame from "./hooks/useSnakeGame";

function App() {
  const {
    body,
    difficulty,
    fields,
    start,
    stop,
    reload,
    status,
    updateDirection,
    updateDifficulty,
  } = useSnakeGame();

  return (
    <div className="App">
      <header>
        <div className="title-container">
          <h1 className="title">Snake Game</h1>
        </div>
        <Navigation
          length={body.length}
          difficulty={difficulty}
          onChangeDifficulty={updateDifficulty}
        />
      </header>
      <main className="main">
        <Field fields={fields} />
      </main>
      <footer className="footer">
        <Button
          status={status}
          onStart={start}
          onRestart={reload}
          onStop={stop}
        />
        <ManipulationPanel onChange={updateDirection} />
      </footer>
    </div>
  );
}

export default App;
