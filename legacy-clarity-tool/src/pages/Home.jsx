import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
      <h1>Legacy Clarity — Quick Snapshot</h1>
      <p>
        Answer what you can. You can always come back and update this later.
      </p>

      <Link to="/form">Start</Link>
    </main>
  );
}
