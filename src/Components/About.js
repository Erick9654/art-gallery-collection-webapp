import React from 'react'
import NavBar from './NavBar'

export default function About() {
  return (
    <>
      <header>
          <NavBar/>
      </header>
      <body>
          <div style={{display: "flex"}} id='about'>
          <img src='https://images.pexels.com/photos/1671014/pexels-photo-1671014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Art-Gallery' style={{ width: '50%', height: '600px' }}/>
          <div>
              <h3>Description</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </div>

      </div>
      </body>
    </>
  )
}
