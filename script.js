// const conspiratorList = ['Brutus', 'Antony', 'Cassius', 'Calpurnia', 'Portia',]

// const conspiratorHtml = [] 

// for (let i = 0; i < conspiratorList.length; i++){
//     conspiratorHtml.push(`<div class="box">${conspiratorList[i]}</div>`)
// }

// document.getElementById('list').innerHTML = conspiratorHtml


// ===== MAPPING A LOOP #1 =====
const conspiratorList = ['Brutus', 'Antony', 'Cassius', 'Calpurnia', 'Portia',]



const conspiratorHtml = conspiratorList.map(function(conArray) {
  return `<div class="box">${conArray}</div>`
})

document.getElementById("list").innerHTML = conspiratorHtml.join("")
