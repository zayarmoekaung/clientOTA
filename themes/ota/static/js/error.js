 

function pop(text){
   let bb =`
   		
 		<div class="pbox">
	<p class="message">${text}</p>
	<img class="closebtn" src="/close.png" onclick="closebox()">
	<img class="peek" src="/peek.png">
</div>

   
  `;

document.getElementById('mask').style.display = 'block'; 
document.getElementById("mask").innerHTML = bb;  


}

function closebox(bo){
document.getElementById('mask').style.display = 'none';  
history.back(); 
}

