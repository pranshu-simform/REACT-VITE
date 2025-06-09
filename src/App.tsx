import { useState } from 'react';
import viteImg from '/vite.svg'
import Button from './components/Button';

function App() {
    const [count, setCount]=useState(0);

    function handleClick() {
        setCount((prevCount)=>{
            return prevCount+1;
        })
    }

    return (
        <div className='maincontainer'>
            <h1>React Vite</h1>
            <img className='viteImage' src={viteImg} alt="vite image" />
            <h2 className='counter'>Count: {count}</h2>
            <Button className='btn' onClickHandler={handleClick}/>
        </div>
    );
}

export default App; 