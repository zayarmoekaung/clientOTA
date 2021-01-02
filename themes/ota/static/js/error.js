 

function pop(text){
   let bb =`
   		
 		<div class="pbox">
	<p class="message">${text}</p>
	<img class="closebtn" src="/close.png" onclick="closebox()">
	<img class="peek" src="/peek.png">
</div>

   
  `;


 


}

function closebox(bo){
document.getElementById('mask').style.display = 'none';  
history.back(); 
}

