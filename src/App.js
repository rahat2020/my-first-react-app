import logo from './logo.svg';
import './App.css';
import { Component, useEffect, useState } from 'react';

function App() {
  //   let person ={
  //     name:"rahat",
  //     job:"professional web developer"
  //   }
  //   let person2 ={
  //     name:"rdx",
  //     job:"'professional cyber security expert'",
  //     passion:"-hacking"
  //   }
  // let colorCls = {
  //   color:'white',
  //   backgroundColor:'green',
  //  textTransform:'capitalize'
  // }
  const nayoks = ['anwar', 'jafor', 'alomgir', 'sakib khan'];
  const products = [
    {name:' huawei i5',price:'$99.09'},
    {name:'apache fz5',price:'$990.09'},
    {name:'yamaha v4',price:'$9900.09'},
    {name:'bmw r1000',price:'$9630.09'},
  ]
  ///to see the value of array or object////////////
  // const productNames = products.map (product => product.name)
  // console.log(productNames);
  // const nayoksName = nayoks.map(nayok => nayok)
  // console.log(nayoksName);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter count></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>) //////// to see the dynamic value of array////
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {/* <h2 className="" style={colorCls}> Biodata:- {person2.name+" "+person2.job+" "+ person2.passion}</h2>
        <h3 style={{backgroundColor:'cyan', color:'red',  textAlign:'center', textTransform:'capitalize'}}>Heading:- {person.name + " "+ person.job}</h3> */}
        {
        products.map(product => <Product product={product}></Product>)
        }
        
        {/* <Product name="i phone" price="$55"></Product> */}
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        {/* <Product name={products[0]}> </Product> */}
        <Product product={products[0]} ></Product>
        <Product product={products[1]} ></Product>

        <Person name="rubel gong" passion="actor"></Person>
        <Person name="ali baba" passion="chori kora"></Person>
        <Person name="bapparaj" passion="cheka kaowa"></Person>
        <Person name={nayoks[3]} passion="cheka kaowa"></Person>
      </header>
    </div>

  );
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // console.log('calling Effect')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []); //// [] this sign is used for to stop the repeating of data, when you consoled.
  return (
    <div>
      <h3>dynamic Users: {users.length}</h3>
      <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
      {
        users.map(user => <li>{user.email}</li>)
      }
      </ul>
    </div>
  )
}
// increase decrease number////////////
function Counter() {
  const [count, setCount] = useState(15)
  const handleIncrease = () => setCount( count + 1);
    // const newCount = count + 1;
    // setCount(newCount);
  
  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={()=> setCount(count - 1)}> Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
////this is product function//////////////
function Product(props) {
  const productStyle = {
    color: '2px solid gray',
    borderRadius: '5px',
    border:'2px solid gold',
    backgroundColor:'gray',
    width:'300px',
    height:'200px',
    float:'left'
}
// const {name, price}= {name:'I phone',price:'$99.09'};
const {name, price}= props.product;
console.log(name,price)

  return <div style={productStyle}>
    <h4>name:{name} </h4>
    <p>price: {price}</p>
    <button style={{backgroundColor:'green',color:'white', fontSize:'bold',padding:'5px 5px 5px 5px'}}>buy now</button>
  </div>
  // return <div style={productStyle}>
  //   <h4>name:{props.name} </h4>
  //   <p>price: {props.price}</p>
  //   <button style={{backgroundColor:'green',color:'white', fontSize:'bold',padding:'5px 5px 5px 5px'}}>buy now</button>
  // </div>
}

//this is person function///////////////

function Person(props) {
  // const HeaderTagStyle ={
  //     color:'red',
  //     textTransform:'capitalize',
  //     }
  return (
    <div style={{ border: '1px solid red', padding: '5px', margin: '5px', width: '600px' }}>
      {/* <h3 style={HeaderTagStyle}>name: rahat</h3> */}
      {/* <h3>name: rahat</h3> */}
      <h3>name: {props.name}</h3>
      <p>profession: {props.passion}</p>

      {/* <p>i am a cricket lover</p> */}

    </div>
  )
}

export default App;
