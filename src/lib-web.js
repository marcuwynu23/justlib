const $reload = () =>{ window.location.reload() }

const $getLocation = (fn) => {
  if (!navigator.geolocation) {
    alert("Geolocation Error!")
	} else {
		navigator.geolocation.getCurrentPosition( (position) => {
			let { latitude, longitude } = position.coords
			fn(latitude,longitude)
		})
	}
}

const $sendJSONData = (url,data) => {
  fetch(url,{
  method: "post",
  headers: {"Content-Type" : "application/json"},
  body: JSON.stringify(data) 
})
  .then(res=>res.text())
  .then(text=>console.log(text))
  .catch(err=>console.error(err))
}


const $sendData = (url,data) =>{
  fetch(url,{
  method: "post",
  body: new URLSearchParams(data)
})
  .then(res=>res.text())
  .then(text=>console.log(text))
  .catch(err=>console.error(err))
}


