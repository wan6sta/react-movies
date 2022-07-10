import React from "react";

class Header extends React.Component {

  render() {
    return <nav className='purple darken-4'>
      <div className="nav-wrapper">
        <a href="!#" className="brand-logo center">Movies</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href='!#'>Repo</a></li>
        </ul>
      </div>
    </nav>
  }
}

export default Header