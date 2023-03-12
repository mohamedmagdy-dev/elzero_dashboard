// Start Settings Pages 
	// Start General-Info
	let changeEmail =document.querySelector(".General-Info form .row #email");
	let changeBtn =document.querySelector(".General-Info form .row a");
	changeBtn.onclick = _=> {
		changeEmail.removeAttribute("disabled");
		changeEmail.style.cssText = "background-color: white";
	}
	// End General-Info
// End Settings Pages 