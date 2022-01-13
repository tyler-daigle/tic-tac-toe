import Button from "./components/Button";
import restartIcon from "./assets/icon-restart.svg";

import "./global.css";
export default function App() {
  return (
    <div className="appContainer">
      <h1>Hello, Tic Tac Toe!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolor
        eaque assumenda quae commodi distinctio.
      </p>
      <Button type="primary" color="blue">
        Primary Blue
      </Button>
      <Button type="secondary" color="yellow">
        Secondary Yellow
      </Button>

      <Button type="primary" color="yellow">
        Primary Yellow
      </Button>
      <Button type="secondary" color="blue">
        Secondary Blue
      </Button>

      <Button>Default Button</Button>
      <Button type="secondary" color="gray">
        Secondary Gray
      </Button>

      <Button type="secondary" color="gray">
        <img src={restartIcon} alt="Restart Icon" />
      </Button>
    </div>
  );
}
