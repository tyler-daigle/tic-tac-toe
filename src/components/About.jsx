export default function About() {
  return (
    <p
      style={{
        margin: "2rem 0",
        border: "solid 1px white",
        padding: "1rem",
      }}
    >
      This App was created as part of the frontendmentor.io challenge. You can
      view the source code{" "}
      <a
        style={{ color: "white" }}
        href="https://github.com/tyler-daigle/tic-tac-toe"
      >
        here
      </a>
      . It is still a work in progress. Also only the{" "}
      <strong>NEW GAME (VS PLAYER)</strong> option works. CPU opponent DLC
      coming soon.
    </p>
  );
}
