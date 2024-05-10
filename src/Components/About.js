import React from 'react'
import NavBar from './NavBar'
import './NavBar.css'

export default function About() {
  return (
    <>
      <header>
          <NavBar/>
      </header>
      <body>
          <div style={{display: "flex"}} id='about'>
          <img src='https://images.pexels.com/photos/1671014/pexels-photo-1671014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Art-Gallery' style={{ width: '50%', height: '100%' }}/>
          <div id='content'>
              <h3>DESCRIPTION</h3>
              <p>At Art Gallery, our mission is to celebrate and promote the diverse world of art by providing a platform for artists to showcase their work and for art enthusiasts to discover and engage with exceptional artwork.</p>
              <h3>OVERVIEW</h3>
              <p>
              Art Gallery is an online art gallery dedicated to connecting artists and art lovers from around the globe. Our platform features a curated collection of contemporary artwork spanning various genres, styles, and mediums.
              </p>
          </div>

      </div>
      </body>
    </>
  )
}
