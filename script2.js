

programarMenuInicial();

const mainContainer = document.getElementById("appContainer");

function programarMenuInicial(){

    programarBotonPrevie();

}

function  programarBotonPrevie(){

    const btn = document.getElementById("ver")
    btn.addEventListener("click", ()=>{

        cargarConsola();
        cargarPosts()
    })
}


function cargarConsola(){

    fetch("https://api.themoviedb.org/3/person/popular?api_key=12be8542502608cdcb8f5b86efa3ee46")
    .then((response) =>response.json())
    .then((json)=>console.log(json));
}




function cargarPosts(){
 
  //  fetch("https://api.themoviedb.org/3/trending/all/day?api_key=12be8542502608cdcb8f5b86efa3ee46") //TREDINGS

    fetch("https://api.themoviedb.org/3/person/popular?api_key=12be8542502608cdcb8f5b86efa3ee46")      //PERSONAS POPULAR
    .then((response) =>response.json())
    .then((json)=>mostrarDatos(json))
    // .catch( ()=> alert("servidor caido"))
}





function mostrarDatos(data){

    const div = document.getElementById("appContainer");
    data.forEach(blogPost => {
        
        const divPost = document.createElement("div");
        divPost.innerHTML = `<p>${blogPost.name}</p>
                             <p>${blogPost.popularity}</p>
                             <hr/> 
        `
        div.appendChild(divPost)
    });

}

