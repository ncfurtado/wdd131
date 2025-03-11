const navMenuButton = document.querySelector('.navMenuButton');
const navList = document.querySelector('.navList');
function openNavMenu(){
    navList.classList.toggle("hidden");
}
function handleResize(){
    if (window.innerWidth > 1000){
        navList.classList.add("hidden");
    }
    else{
        navList.classList.remove("hidden");
    }
}
function viewerTemplate(pic, alt) {
  return `<div class="viewer">
  <button class="close-viewer">X</button>
  <img src="norris-full.jpeg" alt="alt description"></img>
</div>`;
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
const event = event.target();
	// get the src attribute from that element and 'split' it on the "-"
const source_img = document.querySelector('')
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))

	// add a listener to the close button (X) that calls a function called closeViewer when clicked

}
window.addEventListener('resize', handleResize)
navMenuButton.addEventListener('click', openNavMenu);
