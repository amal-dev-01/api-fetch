
import './App.css';
import { useEffect, useState } from 'react';



function App() {
const [count,setCount]=useState([])
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(count => setCount(count.splice(0,10)))
  .catch(console.error("error"))
  console.log(count);

},[]);


  return (
    <div className="App">
    <h1>Fetch data</h1>
   {count.map((quote) => (
    <div key={quote.id}>
        <h1 style={{backgroundColor:"aqua"}} >{quote.title}</h1>
        <h3 style={{backgroundColor:"yellow"}}>{quote.body}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
