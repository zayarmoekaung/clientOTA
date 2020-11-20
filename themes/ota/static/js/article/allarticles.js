const manga_api_url 	= "http://localhost/api/article/read.php"; 
const search			= "http://localhost/api/article/search.php";


const queryString = window.location.search;
  console.log(queryString);
  // ?product=shirt&color=blue&newuser&size=m
  const urlParams = new URLSearchParams(queryString);
  const key = urlParams.get('search');
  if (key !== null) {getartapi(search+'?s='+key); document.getElementById("labl").innerHTML=key}else{getartapi(manga_api_url);}
  
  



async function getartapi(url) { 
      try {
  // Storing response 
  const response = await fetch(url); 
  
  // Storing data in form of JSON 
  var data = await response.json(); 
  console.log(data); 
  if (response) { 
     
  } 
  show3(data); 
  } 
  catch(err){
pop(" Article ရှာမတွေ့ပါ")
  }
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

   document.getElementById("allarticle").innerHTML = article; 

} 