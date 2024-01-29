import React from 'react'

function Header() {
  return (
    <div className='head'>
        <h1 className="logo">
            HU SITE.
        </h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Se connecter</a></li>
                <li><a href="/inscrir">S'inscrir</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header