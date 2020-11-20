	// api url 
const manga_api_url = 
  "http://localhost/api/manga/readtip.php"; 
const art_api_url = "http://localhost/api/article/readtip.php";  
const nv_api_url ="http://localhost/api/lightnovel/readtip.php";
// Defining async function 
async function getapi(url) { 
  
  // Storing response 
  const response = await fetch(url); 
  
  // Storing data in form of JSON 
  var data = await response.json(); 
  console.log(data); 
  if (response) { 
     
  } 
  show2(data); 
} 
// Calling that async function 
getapi(manga_api_url); 

// Function to hide the loader 
function hideloader() { 
  document.getElementById('loading').style.display = 'none'; 
} 
// Function to define innerHTML for HTML table 
function show2(data) { 
  let manga=``;
  
  
  // Loop to access all rows 
  for (let r of data.records) { 
    manga += `

    <div class="mg" onclick="location.href='/manga/?manga_id=${r.manga_id}'">
			<img class="mgthumb" src="${r.manga_cover}" >
			<h3 class="thumbtitle">${r.manga_title}</h3>
			

		</div>

`; 

  } 

   document.getElementById("manga").innerHTML = manga; 

}
async function getapi3(url) { 
  
  // Storing response 
  const response = await fetch(url); 
  
  // Storing data in form of JSON 
  var data = await response.json(); 
  console.log(data); 
  if (response) { 
     
  } 
  show4(data); 
} 
// Calling that async function 
getapi3(nv_api_url); 

// Function to hide the loader 
function hideloader() { 
  document.getElementById('loading').style.display = 'none'; 
} 
// Function to define innerHTML for HTML table 
function show4(data) { 
  let lightnovel=``;
  
  
  // Loop to access all rows 
  for (let r of data.records) { 
    lightnovel += `

    <div class="mg" onclick="location.href='/lightnovel/?lnv_id=${r.lightnovel_id}'">
      <img class="mgthumb" src="${r.lightnovel_cover}" >
      <h3 class="thumbtitle">${r.lightnovel_title}</h3>
     

    </div>

`; 

  } 

   document.getElementById("lightnovel").innerHTML = lightnovel; 

}  

async function getartapi(url) { 
  
  // Storing response 
  const response = await fetch(url); 
  
  // Storing data in form of JSON 
  var data = await response.json(); 
  console.log(data); 
  if (response) { 
     
  } 
  show3(data); 
} 
// Calling that async function 
getartapi(art_api_url); 

// Function to hide the loader 
function hideloader() { 
  document.getElementById('loading').style.display = 'none'; 
} 
// Function to define innerHTML for HTML table 
function show3(data) { 
  let article=``;
  
  
  // Loop to access all rows 
  for (let r of data.articles) { 
    article += `

    <div class="articon" onclick="location.href='/article/?id=${r.art_id}'">
<img src="${r.art_thumb}" class="arthumb">
<h2 class="artitle">${r.art_title}</h2>
<p class="artsum">${r.art_sum}</p> 
</div>  


`; 

  } 

   document.getElementById("art").innerHTML = article; 

} 





//

//

function showhome(){
	document.getElementById('home').style.display = 'block';
  document.getElementById('chpt').style.display = 'none'; 
	document.getElementById('stage').style.display = 'none'; 
}



