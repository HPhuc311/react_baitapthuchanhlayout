import React from 'react'

const Header = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div className='container d-flex justify-content-between'>
      <div>
      <a class="navbar-brand" href="#">Start Bootstrap</a>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
      </ul>
      </div>
    </div>
</nav>
    </div>
  )
}

export default Header