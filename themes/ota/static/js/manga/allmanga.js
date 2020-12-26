const manga_api_url 	= "https://creatordesk.otamyanmar.com/manga/read.php"; 
const search			= "https://creatordesk.otamyanmar.com/manga/search.php";


const queryString = window.location.search;
  console.log(queryString);
  // ?product=shirt&color=blue&newuser&size=m
  const urlParams = new URLSearchParams(queryString);
  const key = urlParams.get('search');
  if (key !== null) {getapi(search+'?s='+key); document.getElementById("labl").innerHTML=key}else{getapi(manga_api_url);}
  
  







async function getapi(url) { 
    try {
  // Storing response 
  const response = await fetch(url); 
  
  // Storing data in form of JSON 
  var data = await response.json(); 
  console.log(data); 
  if (response) { 
     
  } 
  show2(data); 
} 
  catch(err){
pop("Manga ရှာမတွေ့ပါ")
  }
} 
// Calling that async function 


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

    <div class="allmg" onclick="location.href='/manga/?manga_id=${r.manga_id}'">
			<img class="mgthumb" src="${r.manga_cover}" >
			<h3 class="thumbtitle">${r.manga_title}</h3>
		

		</div>

`; 

  } 

   document.getElementById("allmanga").innerHTML = manga; 

}   

