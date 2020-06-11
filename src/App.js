import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    console.log('useEffect is called');
    fetchAdvice();
  });

  async function fetchAdvice() {
    // axios
    //   .get('https://api.adviceslip.com/advice')
    //   .then((response) => console.log(response.data.slip.advice))
    //   .catch((err) => console.log(err));
    try {
      console.log('called the API');
      const res = await axios.get('https://api.adviceslip.com/advice');
      console.log(res.data.slip.advice);
      const { advice } = res.data.slip;
      setAdvice(advice);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='app'>
      <div className='card'>
        <h1 className='heading'>{advice}</h1>
        <button className='button' onClick={() => fetchAdvice()}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
