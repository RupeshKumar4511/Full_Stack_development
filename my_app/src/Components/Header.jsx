import React from 'react'
import { Link } from "react-router-dom";

//Props are used to pass data from a parent component to a child component and here Header is child components and App is parent component which is described in App.jsx.
export default function Header(props) {
  return (
    
// In React anchor is replaced with Link and we need to import the Link function from react-router-dom module . 
// and href is replaced with to. 
// class is replaced with className
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
   
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    
  )
}


Header.defaultProps ={
title:"your title here",

}



// Header.propTypes ={
//   title:PropTypes.string.isRequired  // This means that we can pass only string value to title but if we pass a number then in console it shows error but prints in the navbar. 
// };




