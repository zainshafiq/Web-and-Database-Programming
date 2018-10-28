function ValidSignup(event)
{ 
        var fNameInput = document.getElementById("fName").value;        
        var lNameInput = document.getElementById("lName").value;
	var emailInput = document.getElementById("email").value;
	var pswdInput = document.getElementById("password").value;
        var conpswdInput = document.getElementById("conpassword").value;
	var BdayInput = document.getElementById("date").value;
        var imageInput = document.getElementById("fileToUpload").value;

        
        var fNameMsg = document.getElementById("fName_S");
        var lNameMsg = document.getElementById("lName_S");
	var emailMsg = document.getElementById("email_S");
	var pswdMsg = document.getElementById("pswd_S");
	var conpswdMsg = document.getElementById("conpswd_S");
	var BdayMsg = document.getElementById("date_S");
        var imageMsg = document.getElementById("fileToUpload_S");
	
        
        fNameMsg.innerHTML = "";
        lNameMsg.innerHTML = "";        
	emailMsg.innerHTML = "";
	pswdMsg.innerHTML = "";
 	conpswdMsg.innerHTML = ""; 
	BdayMsg.innerHTML = "";
        imageMsg.innerHTML = "";
	
        var fNameCheck = /^[a-zA-Z0-9_-]+$/;
        var lNameCheck = /^[a-zA-Z0-9_-]+$/;
	var emailCheck = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	var pswdCheck = /^(\S*)?\d+(\S*)?$/;
	var BdayCheck = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
	
	var checkResult = true;
	
        
	if(fNameInput == null || fNameInput == "" || !fNameCheck.test(fNameInput))
	{
		emailMsg.innerHTML = "Please enter valid name.";
		checkResult = false;
	}
         
        if(lNameInput == null || lNameInput == "" || !lNameCheck.test(lNameInput))
	{
		emailMsg.innerHTML = "Please enter valid email.";
		checkResult = false;
	}
 
	if(emailInput == null || emailInput == "" || !emailCheck.test(emailInput))
	{
		emailMsg.innerHTML = "Please enter valid email.";
		checkResult = false;
	}
	
	if(pswdInput == null || pswdInput == "" || pswdInput.length < 8 || !pswdCheck.test(pswdInput))
	{
		pswdMsg.innerHTML = "Password must be at least 8 characters.";
		checkResult = false;
	}

 	if(conpswdInput == null || conpswdInput == "" || pswdInput != conpswdInput)
	{
		pswdMsg.innerHTML = "Password must be the same as above";
		checkResult = false;
	}

		
	if(!BdayCheck.test(BdayInput))
	{
		BdayMsg.innerHTML = "Invalid date."
		checkResult = false;
	}

        if(imageInput == null || imageInput == "")
	{
		imageMsg.innerHTML = "Please choose a photo";
		checkResult = false;
	}
	
	if(checkResult == false)
	{
		event.preventDefault();
	}
}

function SignUpForm(){ 
    	
	var result = true;
    	
	var e = document.forms.SignUp.email.value;
    	var f = document.forms.SignUp.fName.value;
    	var l = document.forms.SignUp.lName.value;
	var p = document.forms.SignUp.pswd.value;
	var c = document.forms.SignUp.pswdr.value;
        var d = document.forms.SignUp.date.value;
        var i = document.forms.SignUp.fileToUpload.value;

	// javascript regular expression 
	
        var date_v = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
       
        var email_v = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
	
	var fName_v = /^[a-zA-Z0-9_-]+$/;

        var lName_v = /^[a-zA-Z0-9_-]+$/;

	var pswd_v = /^(\S*)?\d+(\S*)?$/;
	
	
        // initialize 

        document.getElementById("email_msg").innerHTML ="";
	document.getElementById("fName_msg").innerHTML ="";
        document.getElementById("lName_msg").innerHTML ="";
	document.getElementById("pswd_msg").innerHTML ="";
	document.getElementById("pswdr_msg").innerHTML ="";
        document.getElementById("date_msg").innerHTML ="";
	document.getElementById("photo_msg").innerHTML ="";
	
  
   	// if email is left empty or email format is wrong, error message displays above email field in red color   
	if (e==null || e =="" || email_v.test(e) == false){
			
		document.getElementById("email_msg").innerHTML="Email address empty or wrong format. example: username@somewhere.sth";
		result = false;
	}
		
	
	if (f==null || f=="" ||fName_v.test(f) == false){  
	    document.getElementById("fName_msg").innerHTML="Please enter the correct format for First Name. (No leading or trailing spaces)";
	    result = false;
        }

        if (l==null || l=="" ||lName_v.test(l) == false){  
	    document.getElementById("lName_msg").innerHTML="Please enter the correct format for Last Name. (No leading or trailing spaces)";
	    result = false;
        }
	
	
	//add code here to validate password
	if (p==null || p=="" || pswd_v.test(p) == false){
	    document.getElementById("pswd_msg").innerHTML ="Please Enter the password correctly (8 characters long, at least one non-letter)";
            result = false;
        }		


	// add code here to confirm password
	if (c==null || c=="" || p != c){
            document.getElementById("pswdr_msg").innerHTML ="The confirmed password should be the same as the password above";
            result = false;
        }

        if (d==null || d =="" ){
			
		document.getElementById("date_msg").innerHTML="Date of Birthday empty. (DD/MM/YYYY)";
		result = false;
	}

        if (i==null || i =="" ){
			
		document.getElementById("photo_msg").innerHTML="Please upload a photo";
                result = false;
	}

    
}


function ResetForm(){ 

      document.getElementById("email_msg").innerHTML ="";
      
      document.getElementById("fName_msg").innerHTML ="";
      
      document.getElementById("lName_msg").innerHTML ="";
      
      document.getElementById("pswd_msg").innerHTML ="";
      
      document.getElementById("pswdr_msg").innerHTML ="";
      
      document.getElementById("date_msg").innerHTML ="";

}

function catAlert() {
    alert("The Category has been removed from your list.");
}

function proAlert() {
    alert("New Product has been added to your list.");
}

function ninjaAlert() {
    $(document).ready(function(){
     $("img").remove(".ninja");
    });

    alert("NINJA GAIDEN 3 has been removed from your list.");
}

function fifaAlert() {
    $(document).ready(function(){
     $("img").remove(".fifa");
    });

    alert("FIFA 18 has been removed from your list.");
}

function evilAlert() {
    $(document).ready(function(){
     $("img").remove(".evil");
    });

    alert("Resident Evil 5 has been removed from your list.");
}

function batmanAlert() {
    $(document).ready(function(){
     $("img").remove(".batman");
    });

    alert("Batman Arkham Knight has been removed from your list.");
}

function battleAlert() {
    $(document).ready(function(){
     $("img").remove(".battle");
    }); 

    alert("BATTLEFIELD 4 has been removed from your list.");
}

function addNinjaAlert() {
    alert("NINJA GAIDEN 3 has been added to your list.");
}

function addFifaAlert() {
    alert("FIFA 18 has been added to your list.");
}

function addBattleAlert() {
    alert("BATTLEFIELD 4 has been added to your list.");
}

// When the user clicks on div, open the popup
function myPopup() {
    var popup = document.getElementById("pop");
    popup.classList.toggle("show");
}

//Products Preview
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


