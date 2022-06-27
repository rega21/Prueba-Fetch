

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

 // "https://api.themoviedb.org/3/trending/all/day?api_key=12be8542502608cdcb8f5b86efa3ee46"    //TREDINGS

//  "https://api.themoviedb.org/3/movie/popular?api_key=12be8542502608cdcb8f5b86efa3ee46"         //MOVIES


function cargarConsola(){

    fetch("https://api.themoviedb.org/3/movie/popular?api_key=12be8542502608cdcb8f5b86efa3ee46")
    .then((response) =>response.json())
    .then((json)=>console.log(json));
}






function cargarPosts(){

    fetch("https://api.themoviedb.org/3/movie/popular?api_key=12be8542502608cdcb8f5b86efa3ee46")      
    .then((response) =>response.json())
    .then((json)=>mostrarDatos(json))
    // .catch( ()=> alert("servidor caido"))
}




function mostrarDatos(data){

    const div = document.getElementById("appContainer");
    data.results.forEach(blogPost => {

        const divPost = document.createElement("div");
  
        divPost.innerHTML = `<p>${blogPost.original_title}</p>
                             <p>${blogPost.popularity}</p>
                             
                             <div>
                             <img src='${blogPost.poster_path}' />
                             </div>
                               
                             <hr/> 
        `
        div.appendChild(divPost)
       
    });
}

