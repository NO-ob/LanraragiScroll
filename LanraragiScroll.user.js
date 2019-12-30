// ==UserScript==
// @name       Lanraragi Scroll View
// @version    1.0
// @description Makes all gallery images load on a single page
// @noframes
// @include *:3000/reader?id=*
// ==/UserScript==
displayToggleButton();
loadImages();

function displayToggleButton(){

    var scrollerToggle = document.createElement("BUTTON");
    scrollerToggle.innerText = "Toggle Scroller";
    scrollerToggle.id = "scrollerToggle";
    scrollerToggle.className = "stdbtn";
    document.getElementById('i2').appendChild(scrollerToggle);
    document.getElementById("scrollerToggle").addEventListener("click", toggle);

}

function loadImages(){
    if (localStorage.scrollerEnabled == 1){
        for (var i = 1; i < pageNumber; i++){
            var img = loadImage(pages.pages[currentPage+i], canvasCallback);
            img.className="reader-image";
            if (localStorage.scaletoview === 'true'){
                img.style="max-height: 90vh;";
            }
            document.getElementById('display').appendChild(img);
        }
    }
}
function toggle(){

        if (localStorage.scrollerEnabled == 1){
            localStorage.scrollerEnabled = 0;location.reload();
        } else {
            localStorage.scrollerEnabled = 1; loadImages();
        }

 }

