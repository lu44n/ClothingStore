import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Receba ofertas excluvivas em seu e-mail!</h1>
      <p>Inscreva-se em nossos anúncios e mantenha-se por dentro das novidades.</p>
      <div>
        <input type="email" placeholder='E-Mail' />
        <button>Inscreva-se</button>
      </div>
    </div>
  )
}

export default NewsLetter
