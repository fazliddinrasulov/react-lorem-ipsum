import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    let amount = parseInt(count);
    if(amount<1){
      setText(data.slice(0,1))
    }else{
      setText(data.slice(0, amount))
    }
  }
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum</h3>
      <form className='lorem-forum' onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs: </label>
        <input
          type="number"
          name='amount'
          id='amount'
          value={count}
          onChange={(event) => setCount(event.target.value)} />
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {
          text.map((element, index) => {
            return <p key={index}>{element}</p>
          })
        }
      </article>
    </section>
  )
}

export default App;
