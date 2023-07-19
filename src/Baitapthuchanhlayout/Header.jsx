import React from 'react'

const Header = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-black">
    <div className='container d-flex justify-content-between'>
      <div>
      <a class="navbar-brand  text-white" href="#">Start Bootstrap</a>
      </div>
      <div class="collapse navbar-collapse  d-flex justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link  text-white active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-secondary" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-secondary" href="#">Pricing</a>
          </li>
      </ul>
      </div>
    </div>
</nav>
    </div>
  )
}

export default Header