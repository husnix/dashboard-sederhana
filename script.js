let distribusiArr = [
    {'Air Besih' : '65%'},
    {'Tenda' : '60%'},
    {'Selimut' : '50%'},
    {'Pakaian' : '45%'},
    {'Obat-obatan' : '30%'}
]

let bencanaArr = [
    {'Banjir' : '80%'},
    {'Gempa' : '45%'},
    {'Gunung api' : '30%'},
    {'Longsor' : '10%'},
    {'Kekeringan' : '5%'}
]

let provinsiArr = [
    {'Sulawesi Tengah' : '75%'},
    {'Nusa Tenggara Barat' : '65%'},
    {'Jawa Tengah' : '60%'},
    {'Kalimantan Selatan' : '40%'},
    {'Nusa Tenggara Timur' : '15%'}
]

let cabangArr = [
    {'Kota Solo' : '90%'},
    {'Jakarta Timur' : '75%'},
    {'Jakarta Selatan' : '65%'},
    {'Kota Makassar' : '63%'},
    {'Jakarta Barat' : '45%'}
]

const dist = document.getElementById("distribusi")

for (let i = 0; i < distribusiArr.length; i++) {
    const data = document.createElement("div")   
    for (const key in distribusiArr[i]) {
        obj = distribusiArr[i]
        data.innerHTML += `<div class="record"><span class="name" style="width: ${obj[key]}">${key}</span><span class="value">${obj[key]}</span></div>`
    } 
    dist.appendChild(data)
}

const crisis = document.getElementById("bencana")

for (let i = 0; i < bencanaArr.length; i++) {
    const data = document.createElement("div")   
    for (const key in bencanaArr[i]) {
        obj = bencanaArr[i]
        data.innerHTML += `<div class="record"><span class="name" style="width: ${obj[key]}">${key}</span><span class="value">${obj[key]}</span></div>`
    } 
    crisis.appendChild(data)
}

const prov = document.getElementById("provinsi")

for (let i = 0; i < provinsiArr.length; i++) {
    const data = document.createElement("div")   
    for (const key in provinsiArr[i]) {
        obj = provinsiArr[i]
        data.innerHTML += `<div class="record"><span class="name" style="width: ${obj[key]}">${key}</span><span class="value">${obj[key]}</span></div>`
    } 
    prov.appendChild(data)
}

const branch = document.getElementById("cabang")

for (let i = 0; i < cabangArr.length; i++) {
    const data = document.createElement("div")   
    for (const key in cabangArr[i]) {
        obj = cabangArr[i]
        data.innerHTML += `<div class="record"><span class="name" style="width: ${obj[key]}">${key}</span><span class="value">${obj[key]}</span></div>`
    } 
    branch.appendChild(data)
}