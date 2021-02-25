import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anowar', 'Jafor', 'Salman', 'Shuvo', 'Bappi']
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$90.99'},
    {name: 'pdf reader', price: '$90.99'},
    {name: 'Premiere El', price: '$290.99'}
]

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
          {
            products.map(product => <Product product= {product}></Product>)
          }

        {
          nayoks.map(nayok => <Person nayok= {nayok}></Person>)
        }
        <Person name = {nayoks[0]}></Person>
        <Person name= {nayoks[1]}></Person>
        <Person name= {nayoks[2]}></Person>
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove= {() => setCount(count-1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    marginBottom: '50px'
  }
  const {name, price} = props.product;
  return (
    <div style ={productStyle}>
        <h2>name: </h2>
        <h4>Price:</h4>
        <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  const personStyle= {
    border: '2px solid red', 
    margin: '10px'
  }
  return (
  <div style= {personStyle}>
    <h1>Name: {props.name}</h1>
    <h3>Hero of the year</h3>
  </div>
  )
}

export default App;
