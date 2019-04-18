/**
 * Assignment 9 
 */


/** Load the list of albums */
function listAlbums() {
    // TODO make an AJAX request to /albums
    // then populate the "albums_list" list with the results
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = JSON.parse(xhr.responseText);
            console.log(result);
            
            var albumContainer = document.getElementById("albums_list");
            var htmlString = "";
            for (i=0; i<result.length; i++) {
                htmlString += "<li id='" + result[i].id + "'>" + result[i].band + " - " + result[i].title + "</li>";
                };
            albumContainer.insertAdjacentHTML("beforeend", htmlString);
            for (i=0; i<result.length; i++) {
                document.getElementById(result[i].id).addEventListener("onclick", 
                showAlbum(result[i].id, result[i].cover));
            };
        
        };
    };
    xhr.open("GET", "/albums", true);
    xhr.send(null); 
};



/** Show details of a given album */
function showAlbum(album_id, cover_img) {
    // TODO make an AJAX request to /albuminfo with the selected album_id as parameter (i.e., /albuminfo?album_id=xxx),
    // then show the album cover in the "album_cover" div and display the tracks in a table inside the "album_songs" div
    console.log(typeof album_id)
    console.log(typeof cover_img)

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        console.log("been here");
        ;
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = JSON.parse(xhr.responseText);
            console.log(result[0]);

            //var imgString = "<img src='/static/images/" + cover_img + "'" + "/>";
            //document.getElementById("album_cover").innerHTML = imgString;

            /* var albumContainer = document.getElementById("albums_songs");
            var htmlString = "";
            for (i=0; i<result.length; i++) {
                htmlString += "<li onclick=" + "showAlbum(" + result[i].id + ");" + ">" + result[i].band + " - " + result[i].title + "</li>";
                }
            albumContainer.insertAdjacentHTML("beforeend", htmlString); */
        
        };
    };
    xhr.open("GET", "/albuminfo?album_id=" + album_id, true);
    xhr.send(null);
};
