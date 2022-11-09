 const d = document
 let en = d.querySelector("#en")
 let es = d.querySelector("#es")
 let btn_en = d.querySelector("#btn-en")
 let en_text = d.querySelector("#en-text")

//  variables para cambiar el idioma

// rama para cambiar el idioma 
const change = d.querySelector("#change")
let espanol = "es"
let ingles = "en"
 

en.addEventListener("keyup" , e =>{
	let es_title = d.querySelector(".es_title")
	let en_title = d.querySelector(".en_title")

	/*change.addEventListener("click" , e =>{
		
		if(es_title.textContent === "Spanish"){
			es_title.textContent = "English"
			en_title.textContent = "Spanish"
	
			espanol.textContent = "en"
			ingles.textContent = "es"
			
		}else{
			es_title.textContent = "English"
			en_title.textContent = "Spanish"
	
			espanol.textContent = "es"
			ingles.textContent = "en"
		}
	})*/

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
			console.log(response)
	  
			arr = {...response}
			let res = arr.data.translations.translatedText
			// console.log(res)
			es.innerHTML = res
		})
		.catch(err => console.error(err));

	})