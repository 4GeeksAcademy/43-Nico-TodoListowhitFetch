import React from 'react';

import Card from "./card.jsx"

const Home = () => {
	async function getCharacters() {
		try {
		  const API_URL = "https://rickandmortyapi.com/api";
		  const requestConfig = {
			method: "GET",
			headers: {
			  "Content-type": "application/json"
			}
		  };
		  const response = await fetch(API_URL + "/character", requestConfig);
		  if (response.status !== 200) {
			console.log("Error en la solicitud", response.status);
			return;
		  }
		  const body = await response.json();
		  console.log(body);
		} catch (error) {
		  console.log(error);
		}
	  }
	  
	  getCharacters();
	  
	return(
		<div>
			<Card />
		</div>
	);
};

export default Home