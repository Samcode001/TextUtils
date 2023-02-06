import React from 'react'

function About(props) {
  return (
    <div className='container my-4' style={{ color: `${props.mode === 'light' ? 'black' : 'wheat'}` }}>
      <h1>TextUtils</h1>
      <p>A website to analye the texts.we provide many  tools such as for converting Uppercase as well as Lowercase and various other tools for your convinience.</p>
    </div>
  )
}

export default About