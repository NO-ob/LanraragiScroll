// ==UserScript==
// @name       Lanraragi Scroll View
// @version    1.0
// @description Makes all gallery images load on a single page
// @noframes
// @include *:3000/reader?id=*
// ==/UserScript==

function loadImages(){
    var pageCount = document.getElementsByClassName("max-page")[0].innerText;
    console.log( window.getComputedStyle(document.getElementById("img")));

    for (var i = 1; i < pageCount; i++){
        var img = loadImage(pages.pages[currentPage+i], canvasCallback);
        img.className="reader-image";
        if (localStorage.scaletoview === 'true'){
            img.style="max-height: 90vh;";
        }
        document.getElementById('display').appendChild(img);
    }
}
loadImages();


