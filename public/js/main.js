(() => {
	console.log("fired!");


let lightBox = document.querySelector('.welcome'),
close = document.querySelector('.close');




function closeWelcome(event) {
    event.preventDefault();
    console.log('should show nav dropdown');
    // make the lightbox close
    lightBox.classList.add('close-lightbox');
    console.log('should show nav dropdown');
  }


  close.addEventListener("click", closeWelcome);

})();