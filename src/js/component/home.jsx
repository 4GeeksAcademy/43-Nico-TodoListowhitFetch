import React from 'react';

import Todo from "./todo.jsx"

const Home = () => {

	// function Tasks(){
	// 	try {
	// 		let response = fetch('https://assets.breatheco.de/apis/fake/todos/user/Nico-43', {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json"
    //   }});
	// 	} catch (error) {
	// 		console.log(error)
	// 	} finally{

	// 	}
	// }

	return(
		<div>
			<Todo />
		</div>
	);
};

export default Home