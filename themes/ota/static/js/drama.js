const queryString = window.location.search;
  console.log(queryString);
  // ?product=shirt&color=blue&newuser&size=m
  const urlParams = new URLSearchParams(queryString);
  const dramadd = urlParams.get('id');
  console.log(dramadd)
  showone(dramadd)
  var dramaid = 0;	
 




			
 function showone(id){
  const oneDrama = "https://creatordesk.otamyanmar.com/drama/read_one.php/?drama_id="+id;
  
  
  getapi(oneDrama);
  async function getapi(oneDrama) { 
  
  // Storing response 
    console.log(oneDrama); 
  const responsedrama = await fetch(oneDrama); 
 
  // Storing data in form of JSON 
  var dramadata = await responsedrama.json();
 

  if (responsedrama) { 
     
  } 
  showOneKdrama(dramadata); 
}  	
function showOneKdrama(dramadata ){
dramaid = dramadata.drama_id;
let drama=``;

 	drama += `
 	<article>   <div id="drama-details" class="block wrapper">   <figure class="drama-thumbnail"><img width="220" height="320" style="height: auto; /* Make sure images are scaled correctly. */
	max-width: 100%;"  class="lazy wp-post-image " alt="" src="${dramadata.drama_cover}" style=""></a>
					</figure> <!-- post- thumbnail-->				
		<div class="drama-details wrapper">
			<h1 class="entry-header"><h1>${dramadata.drama_title}</h1><div class="entry-meta">
					Posted on November 22, 2020				</div>
			</h1>
						<div class="synopsis">
				<span>Synopsis:</span>
				<p></p>
<p></p><p>${dramadata.drama_summary}</p>
<p></p>

			<p class="status">
								<span>Status: </span>${dramadata.status}
							</p>
			<p class="release-year">
				<strong>Release Date: </strong> ${dramadata.release_date}	</p>
						
</article>

`;


 document.getElementById("drama").innerHTML = drama;	

}


 }




const Episodes = "https://creatordesk.otamyanmar.com/drama/readEpisode.php/?drama_id="+dramadd ;
 
  getep( Episodes);
  async function getep( Episodes) { 
  
  // Storing response 

const response2 = await fetch(Episodes); 
var episode = await response2.json(); 
 if (response2) { 
  } 
showeplist(episode); 
}   


function showeplist(episode){
  let epi = `<label class="Episodes">All Episodes</label>`;
for (let r of episode.episodes) { 
epi += `
<a style="display:block;" href="/watch/?s=${r.ep_id}&d=${dramaid}" >${r.ep_title}</a>
`;

}
document.getElementById("ep").innerHTML = epi;  
}
