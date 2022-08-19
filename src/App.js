import React, { useState } from 'react';
import './App.css';

function App() {
  const [hori, sethori] = useState(10)
  const [veri, setveri] = useState(10)
  const [blur, setblur] = useState(10)
  const [color, setcolor] = useState('black')
  const [check, setcheck] = useState(false)
  return (
    <div className='yellow darken-1 black-text'>
      <h2 ><center>BOX SHADOW GENERATOR</center></h2>
      <div className="App ">
        <div className="controls">
          <label><h5>Horizontal length</h5></label>

          <input type="range" min="-200" max="200" value={hori} onChange={(e) => sethori(e.target.value)} />
          <label><h5>Vertical length</h5></label>
          <input type="range" min="-200" max="200" value={veri} onChange={(e) => setveri(e.target.value)} />
          <label><h5>Blurr</h5></label>
          <input type="range" min="0" max="200" value={blur} onChange={(e) => setblur(e.target.value)} />
          <label><h5>Colorr</h5></label>
          <input type="color" value={color} onChange={(e) => setcolor(e.target.value)} />
          <br/>
          <br/>
          <div className="switch">
            <label>
              <h5>Outline</h5>
              <input type="checkbox" checked={check} onChange={()=>setcheck(!check)}/>
                <span className="lever"></span>
                <h5>Inset</h5>
            </label>
          </div>
        </div>
        <div className="output">
          <div className='box' style={{ boxShadow: `${check?"inset":""} ${hori}px ${veri}px ${blur}px ${color} ` }}>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
