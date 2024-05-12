import { useState } from "preact/hooks";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive);
    console.log('Burger menu clicked!');
  };

  return (
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          {" "}
        </a>

        <a
          role="button"
          class={`navbar-burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          onClick={toggleIsActive}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="nav-menu-items"
        class={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div class="navbar-start">
          <a class="navbar-item" href="/">
            {" "}
            Home{" "}
          </a>

          <a class="navbar-item" href="/about/">
            {" "}
            About{" "}
          </a>

          <a class="navbar-item" href="/blog/">
            {" "}
            Blog{" "}
          </a>

          <a class="navbar-item" href="/tags/">
            {" "}
            Tags{" "}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
