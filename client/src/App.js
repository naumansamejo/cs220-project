import React, { useState, useEffect } from "react";

import './App.css';

import Menu from "./components/menu/menu";
import Products from './products';
import Product from './product';


// SERVICES
// import productService from './services/productService';

import {
	BrowserRouter,
	Switch,
	Route,
	useParams
} from "react-router-dom";


function App() {
	
	useEffect(()=>(
		document.title = "DBS Store"
	));

	return (
		
		<BrowserRouter>
	
			<Menu />
			
			
			
			<div className='content-main'>
				
				<Switch>
					
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
					
					<Route path="/products/:category" component={Products} ></Route>
					
					<Route path="/product/:id" component={Product}></Route>


					<Route exact path="/" component={Home} />
					<Route>
						Error 404
					</Route>
					

				</Switch>

			</div>
		
		</BrowserRouter>
	);
}





function Register() {
	return <div>Register!!</div>;
}
function Login() {
	return <div>Login!!</div>;
}
function Home(){
	return <div>Cool stuff will be here, soon.</div>;
}




export default App;
