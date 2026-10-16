// // import { useState } from 'react'
// // import heroImg from './assets/hero.png'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from './assets/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <section id="center">
// //         <div className="hero">
// //           <img src={heroImg} className="base" width="170" height="179" alt="" />
// //           <img src={reactLogo} className="framework" alt="React logo" />
// //           <img src={viteLogo} className="vite" alt="Vite logo" />
// //         </div>
// //         <div>
// //           <h1>Get started</h1>
// //           <p>
// //             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
// //           </p>
// //         </div>
// //         <button
// //           type="button"
// //           className="counter"
// //           onClick={() => setCount((count) => count + 1)}
// //         >
// //           Count is {count}
// //         </button>
// //       </section>

// //       <div className="ticks"></div>

// //       <section id="next-steps">
// //         <div id="docs">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#documentation-icon"></use>
// //           </svg>
// //           <h2>Documentation</h2>
// //           <p>Your questions, answered</p>
// //           <ul>
// //             <li>
// //               <a href="https://vite.dev/" target="_blank">
// //                 <img className="logo" src={viteLogo} alt="" />
// //                 Explore Vite
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://react.dev/" target="_blank">
// //                 <img className="button-icon" src={reactLogo} alt="" />
// //                 Learn more
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //         <div id="social">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#social-icon"></use>
// //           </svg>
// //           <h2>Connect with us</h2>
// //           <p>Join the Vite community</p>
// //           <ul>
// //             <li>
// //               <a href="https://github.com/Absarprogrammer" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#github-icon"></use>
// //                 </svg>
// //                 GitHub
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://chat.vite.dev/" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#linkedin-icon"></use>
// //                 </svg>
// //                 Discord
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://x.com/vite_js" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#x-icon"></use>
// //                 </svg>
// //                 X.com
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://bsky.app/profile/vite.dev" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#bluesky-icon"></use>
// //                 </svg>
// //                 Bluesky
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //       </section>

// //       <div className="ticks"></div>
// //       <section id="spacer"></section>
// //     </>
// //   )
// // }

// // export default App
import React,{useEffect,useState} from 'react';
import './App.css';
// import bike from  './assets/bike.png';
// import Button from './components/ui/button/index.jsx';
const App=() =>{
  // const [count,setC]=useState(0);
  // return(
  //   <div className="greet">
  //     <button className='btnContainer'>Click me!</button><br/><br/>
  //     <img src={bike} className='image'/><br/><br/>
  //     <Button name={"Hello"} onClick={()=>{alert('Button is clicked')
  //       console.log("Button clicked")}
  //     } className='btnContainer'/>
  //     <Button name={"Increment"} onClick={()=>setC(count+1)}></Button>
  //     <label>{count}</label>
  //     <Button name={"Decrement"} onClick={()=>setC(count-1)}/>
  //   <h1 style={{color:'aqua'}}>Hello,vite+React!</h1>
  //   </div>
  // );
  const [count,setCount]=useState(0);
  const [data,setData]=useState([]);
  const [form, setform] = useState({Name: "",email: ""});
  const [submitted, setSubmitted] = useState(false);

  useEffect(()=>{
    const fetchData=async()=>{
      const res=await fetch("https://jsonplaceholder.typicode.com/users");
      const data=await res.json();
   
    
      setData(data);
    }
    fetchData();
  },[])
  const handleChange = (e) => {
    const { name, value } = e.target;

    setform((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handlesubmit=(e)=>{
    data.push(e);
    e.preventDefault();
    setSubmitted(true);
  }

  console.log(data,"Data");
  return(
    <div>
    <div className='header'><h1>Users datasets</h1></div>
    <input name="Name" value={form.Name} onChange={handleChange} placeholder="Enter name"/>
        <br /><br />

      <input name="email" value={form.email} onChange={handleChange} placeholder="Enter email"/>
        <br /><br />
      {/* <input name="age" value={form.age} onChange={handleChange} placeholder="Enter age"/>
        <br /><br /> */}
        

<button onClick={handlesubmit}>Submit</button>
     
    <div className='container'>
      
      {data?.map((item,key)=>{
        return(
          
          <div className='greet' key={key}>
            <fieldset>
            <legend><h1>{item?.name}</h1></legend>
            <h3>Email:</h3><p>{item?.email}</p  >
            {/* <h3>Address:</h3>
            <p>   Street:{item.address.street}</p>
            <p>   Suite:{item.address.suite}</p>
            <p>   City:{item.address.city}</p>
            <p>   Zip:{item.address.zipcode}</p>
            <p>   Geo:</p>
            <p>     Lat:{item.address.geo.lat}</p>
            <p>     Lng:{item.address.geo.lng}</p>
            <h3>Phone:</h3><p>{item?.phone}</p>
            <h3>Website:</h3><p>{item?.website}</p>
            <h3>Company:</h3>
            <p>   Name:{item.company.name}</p>
            <p>   CatchPhrase{item.company.catchPhrase}</p>
            <p>   BS:{item.company.bs}</p> */}
            </fieldset>
            
          </div>
          )
      })}
    </div>
    <div className='greet'>  <fieldset>    
         {submitted && (
        <>
          <legend><h3><label>{form.Name}</label></h3></legend>
          <br />
          <label><h3>Email:</h3> <p>{form.email}</p></label>
          <br />
          {/* <label>Age: {form.age}</label> */}
        </>)}
        </fieldset>
        </div>
    </div>
  )
  

  
  // const handlesubmit = (e) => {
  //   e.preventDefault();
  //   setSubmitted(true);
  // };

//   return (
//     <>
    
        
//       )}
//     </>
//   );
// }
}
export default App;
