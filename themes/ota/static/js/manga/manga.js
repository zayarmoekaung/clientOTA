const queryString = window.location.search;
  console.log(queryString);
  // ?product=shirt&color=blue&newuser&size=m
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('manga_id');
  mf(id);









async function mf(id){
  const mg1_api_url = 
  "http://creatordesk.otamyanmar.com/manga/read_one.php?manga_id="+id;
  
  const chpt_api_url = 
  'http://creatordesk.otamyanmar.com/manga/read_Chpt.php?manga_id='+id;

   const response2 = await  fetch(mg1_api_url);
   const response3 = await  fetch(chpt_api_url); 
  
  // Storing data in form of JSON 
  var data = await response2.json();
  var data2 = await response3.json(); 
   


	try {
 

    let mg=`
    <img class="backbtn" src="/rback.png" onclick="history.back()">  
    <div class="singel">
  <img src="${data.manga_cover}" class="mgcover"> 
<div class="blur">
<h3 class="title">${data.manga_title}</h3>
<p class="mglb">${data.manga_disp}</p>
</div>  
</div>

    `;
 for (let r of data2.chpts) { 
    mg += `

   <div class="chp" onclick="location.href='/mangachpt/?chpt_id=${r.chpt_id}'">
      <img src="${r.chpt_thumb}" class="thumb">
      <h3 class="chpsum">${r.chpt_sum}</h3>
    </div>

`; 

  }   


  document.getElementById("manga").innerHTML = mg; 
  }
  catch(err){

  }

}
