 const d = document
 let en = d.querySelector("#en")
 let es = d.querySelector("#es")
 let btn_en = d.querySelector("#btn-en")
 let en_text = d.querySelector("#en-text")
 

 en.addEventListener("keyup" , e =>{
	en_text.innerHTML = en.value
	
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': '9c7658e5e3msh6211ef11f5e0a20p14924djsnc7b1bf1cb3e2',
			'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
		},
		body: `{"q": "${en_text.textContent}","source":"en","target":"es"}`
	};
  
	   fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
		.then(response => response.json())
		.then(response => {
			// console.log(response)
	  
			arr = {...response}
			let res = arr.data.translations.translatedText
			// console.log(res)
			es.innerHTML = res
		})
		.catch(err => console.error(err));
 })


  /*const options = {
  	method: 'POST',
  	headers: {
  		'content-type': 'application/json',
  		'X-RapidAPI-Key': '9c7658e5e3msh6211ef11f5e0a20p14924djsnc7b1bf1cb3e2',
  		'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
  	},
  	body: `{"q": "hello","source":"en","target":"es"}`
  };

     fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
  	.then(response => response.json())
  	.then(response => {
  		console.log(response)
	
  		arr = {...response}
  		let res = arr.data.translations.translatedText
  		console.log(res)
  	})
  	.catch(err => console.error(err));*/