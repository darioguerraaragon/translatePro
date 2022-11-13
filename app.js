 const d = document
 let en = d.querySelector("#en")
 let es = d.querySelector("#es")
 let btn_en = d.querySelector("#btn-en")
 let en_text = d.querySelector("#en-text")

//  variables para cambiar el idioma

// rama para cambiar el idioma 
const change = d.querySelector("#change")
let es_title = d.querySelector(".es_title")
let en_title = d.querySelector(".en_title")

let espanol = "es"
let ingles = "en"

let lang = "es-ES"

change.addEventListener("click" , (e)=>{
	if(es_title.textContent === "Spanish"){
		es_title.textContent = "English"
		en_title.textContent = "Spanish"

		espanol = "en"
		ingles = "es"
		lang = "es-ES"
	}else{
		es_title.textContent = "Spanish"
		en_title.textContent = "English"

		espanol = "es"
		ingles = "en"
		lang = "en-EN"
	}
	
}) 
// 

// speaker-branch ...=>
// variables
const speaker_en = d.querySelector(".speaker-en")

speaker_en.addEventListener("click" , e =>{
	const synth = window.speechSynthesis
	const utterThis = new SpeechSynthesisUtterance(en_text.textContent)
	utterThis.rate = 0.3
	
	utterThis.lang = lang
	synth.speak(utterThis)
})

// 

// copy-branch =>
// variables
const btnCopy = d.querySelector("#copy")
const btnCopy2 = d.querySelector("#copy2")
const copied = d.querySelector("#copied")
const copied2 = d.querySelector("#copied2")

btnCopy.addEventListener("click" , e =>{
	// console.log(navigator.clipboard)
	let content = en_text.textContent

	// evento para el input en ingles
	navigator.clipboard.writeText(content)
		.then(() =>{
			console.log("text copied !")
			copied.classList.remove("d-none")

			const copy = () => {
				copied.classList.add("d-none")
			}

			setTimeout(copy , 3000)
		})

		.catch((err)=>{
			console.log("something went wrong")
		})

})

// evento para el input en espanol
btnCopy2.addEventListener("click" , e =>{
	let content2 = es.textContent

	navigator.clipboard.writeText(content2)
		.then(()=>{
			console.log("text copied !")
			copied2.classList.remove("d-none")

			const copy = () => {
				copied2.classList.add("d-none")
			}

			setTimeout(copy , 3000)
		})

		.catch((err)=>{
			console.log("something went wrong")
		})
})

// 

en.addEventListener("keyup" , e =>{

	console.log(espanol)
	
	en_text.innerHTML = en.value
	
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': '9c7658e5e3msh6211ef11f5e0a20p14924djsnc7b1bf1cb3e2',
			'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
		},
		body: `{"q": "${en_text.textContent}","source":"${ingles}","target":"${espanol}"}`
	};
  
	   fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
		.then(response => response.json())
		.then(response => {
			// console.log(response)
			console.log(espanol)
	  
			arr = {...response}
			let res = arr.data.translations.translatedText
			// console.log(res)
			es.innerHTML = res
		})
		.catch(err => console.error(err));

	})
