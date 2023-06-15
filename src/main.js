//const { response } = require("express")

const elem = document.getElementById('title')
elem.innerHTML = 'rodando o node com webopack'

const list = document.getElementById('list')
const api = 'http://localhost:3001/contact'

//fetch api
fetch( api, {method: 'get'} )
   .then( (response)=> response.json())
   .then( function(data){
    data.map( contact => {
        let li = document.createElement('li')
        li.innerHTML = contact.name
        list.appendChild(li)
    })
   })

