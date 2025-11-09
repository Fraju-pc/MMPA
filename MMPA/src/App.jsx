import { useState } from 'react'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'
import twitter from './assets/twitter.svg'
import mmpalogo from './assets/mmpalogo.jpg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="main-content">
        <div class="banner-container">
       
          <img src={mmpalogo} alt="MMPA Banner" class="banner-image"/>
          <h2>Millbury Music & Performing Arts</h2>
        </div>
        
        <div class="social-icons">
                    <a href="https://www.facebook.com/millburymusic/" target="_blank">
                        <img src={facebook} alt="Facebook"/>
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                        <img src={instagram} alt="Instagram"/>
                    </a>
                    <a href="https://twitter.com" target="_blank">
                        <img src={twitter} alt="Twitter"/>
                    </a>
        </div>
         <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
         
        </div>
      </div>
    </>
  )
}

export default App
