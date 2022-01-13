import Button from "../components/Button";
import restartIcon from "../assets/icon-restart.svg";

export default function ButtonTestPage() {
  return (
    <div>
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
