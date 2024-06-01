
fetch('http://localhost:4000/desserts')
.then(responce => responce.text())
.then(result => Function(JSON.parse(result)));

async function Function(){
    let i = 0;
    document.getElementsByClassName("cake-name").forEach(e => {
        e.innerHTML = result.deserts[i].name;
        i++
    })
}
