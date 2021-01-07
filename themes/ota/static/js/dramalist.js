const search      = "https://creatordesk.otamyanmar.com/drama/search.php";
const Dramalist = "https://creatordesk.otamyanmar.com/drama/read.php";

const queryString = window.location.search;
  console.log(queryString);
  // ?product=shirt&color=blue&newuser&size=m
  const urlParams = new URLSearchParams(queryString);
  const key = urlParams.get('search');
  if (key !== null) {getapi(search+'?s='+key); console.log("lee"); document.getElementById("labl").innerHTML=key;}else{getapi(Dramalist);}
  
  







async function getapi(url) { 
  
  // Storing response 
  const response = await fetch(url); 
  
  
  // Storing data in form of JSON 
  var data = await response.json(); 
   
  console.log(data); 
  if (response) { 
     
  } 
  showKdrama(data); 
} 

function showKdrama(data){
var i = 0;
let drama = `
	

	`;



for (let r of data.drama) { 
i ++;
drama += `
<div class="serie" onclick="location.href='/anime/?id=${r.drama_id}'">
			<img class="serithumb" src="${r.drama_cover}">
			<label class="title">${r.drama_title}</label>
		</div>

`;



}
drama += `	</div>`
document.getElementById("drama").innerHTML = drama;	
} 	

function showcat(){
  var cat = document.getElementById('cat');
  var element = document.querySelector('.catbar');
  var dis = element.style.display;
  
  if (dis == 'none') {
    
    cat.style.display = 'flex';

  }else if (dis == 'flex'){
    cat.style.display = 'none';
  }else{
    cat.style.display = 'flex';
  }
    
  
}

