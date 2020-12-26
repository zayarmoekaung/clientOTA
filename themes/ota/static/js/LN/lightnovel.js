const queryString = window.location.search;
  console.log(queryString);
  // ?product=shirt&color=blue&newuser&size=m
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('lnv_id');
  nvchapter(id);



//show light novel chapters
async function nvchapter(id){
  try {
const nv1_api_url = 
  "http://creatordesk.otamyanmar.com/lightnovel/readone.php?lightnovel_id="+id;
  
  const nvchpt_api_url = 
  'http://creatordesk.otamyanmar.com/lightnovel/read_Chpt.php?lightnovel_id='+id;

   const response2 = await  fetch(nv1_api_url);
   const response3 = await  fetch(nvchpt_api_url); 
  
  // Storing data in form of JSON 
  var data = await response2.json();
  var data2 = await response3.json(); 
   
  if (response2) { 
   
  } 

    let mg=`
    <img class="backbtn" src="/rback.png" onclick="history.back()">  
    <div class="singel">
  <img src="${data.lightnovel_cover}" class="mgcover"> 
<div class="blur">
<h3 class="title">${data.lightnovel_title}</h3>
<p class="mglb">${data.lightnovel_disp}</p>
</div>  
</div>

    `;
 for (let r of data2.chpts) { 
    mg += `

   <div class="chp" onclick="location.href='/lightnovelchpt/?chpt_id=${r.chpt_id}'">
      <img src="${r.chpt_thumb}" class="thumb">
      <h3 class="chpsum">${r.chpt_sum}</h3>
    </div>

`; 

  }   


  document.getElementById("lightnovel").innerHTML = mg; 
  }
  catch(err){
pop("content တွေမထည့်ရသေးပါ")
  }

}