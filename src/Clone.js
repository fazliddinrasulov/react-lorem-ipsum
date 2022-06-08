import React, { useState } from "react";
import data from './data';

const Clone = () => {
    const [text, setText] = useState([]);
    const [count, setCount] = useState(0);
    const handleSubmit = (event) => {
        event.preventDefault();
        let amount = parseInt(count);
        if (amount<1) {
            setText(data.slice(0, 1));

        }else{
            setText(data.slice(0,amount));
        }
    }
    return (
        <section className='section-center'>
            <h3>tired of boring lorem ipsum</h3>
            <form className="lorem-forum" >
                <label htmlFor="amount">paragraphs</label>
                <input
                    type="number" 
                    name="amount"
                    id="amount" 
                    value = {count}
                    onChange={(event)=>setCount(event.target.value)}/>
                <button type="submit" className="btn" onClick={handleSubmit}>generate</button>
            </form>
            <article>
                {
                    text.map((element, index) => <p key={index}>{element}</p>)
                }
                </article>
        </section>
    )
}

export default Clone