import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(randomMessage);

  return (
    <div>
      <h2 className="is-size-4 has-text-centered">{greeting}</h2>
      <div className="columns is-centered">
        <div className="column is-narrow is-full-mobile">
          <button
            className="button is-rounded is-dark"
            onClick={() => setGreeting(randomMessage())}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}
