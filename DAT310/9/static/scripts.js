/**
 * Assignment 9 
 */


/** Load the list of albums */
function listAlbums() {
    // TODO make an AJAX request to /albums
    // then populate the "albums_list" list with the results
    /* var xhr = new XMLHttpRequest();
    /* register an embedded function as the handler */
   /*  xhr.onreadystatechange = function () {
        /* readyState = 4 means that the response has been completed
         * status = 200 indicates that the request was successfully completed */
       /*  if (xhr.readyState == 4 && xhr.status == 200) {
            var result = JSON.parse(xhr.responseText);
            console.log(result[0]);
            
        }
    }; */
    /* send the request using GET */
    /* xhr.open("GET", "/albums", true);
    xhr.send(null); */ 

    var albumContainer = document.getElementById("albums_list");
    var fake_data = [{"id": "1", "band": "Coldplay", "title": "A Rush of Blood to the Head", "cover": "Coldplay-ARushofBlood.jpg"},
        {"id": "2", "band": "Guns N' Roses", "title": "Use Your Illusion I", "cover": "GnR-UseYourIllusion1.jpg"}];
    renderHTML(fake_data);
    
        function renderHTML(data) {
        var htmlString = "";

        for (i=0; i<data.length; i++) {
            htmlString += "<li onclick=" + showAlbum(data[i].id) + ">" + data[i].band + " - " + data[i].title + "</li>";
            albumContainer.insertAdjacentHTML("beforeend", htmlString);
        }
    }



};



/** Show details of a given album */
function showAlbum(album_id) {
    // TODO make an AJAX request to /albuminfo with the selected album_id as parameter (i.e., /albuminfo?album_id=xxx),
    // then show the album cover in the "album_cover" div and display the tracks in a table inside the "album_songs" div
};
