
import { useState } from 'react'
import './App.css'
function App() {
  const [curquote,changequote]=useState("hello everyone get quote by click")
  const [curnum,changenum]=useState(0)


    
    const getdate= async ()=>{
      let datas=await fetch('https://api.adviceslip.com/advice')
      let cleardata=await datas.json()
      changequote(cleardata.slip.advice)
      changenum(curnum+1)
    }


  return (
    <div className='cont'>
      <p>{curquote}</p>
      <button type='button' onClick={getdate}>Get Advice</button>
      <p>you have read {curnum} piece of quotes</p>
    </div>
  )
}

export default App
