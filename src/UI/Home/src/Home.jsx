export default function Home() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="navbar-brand">Simple Login Upload</div>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarA"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarA" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Upload</a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Contact</a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">Sign up</a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
