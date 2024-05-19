import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(randomMessage);

  return (
    <div>
      <p className="is-size-4 has-text-centered">{greeting}</p>
      <div className="columns is-centered">
        <div className="column is-narrow is-full-mobile">
          <button
            className="button is-rounded is-primary-dark"
            onClick={() => setGreeting(randomMessage())}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}
