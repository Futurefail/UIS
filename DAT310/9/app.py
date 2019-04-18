"""
Assignment #9: AJAX
"""

from flask import Flask, request, g
import json

app = Flask(__name__)


class Albums():
    """Class representing a collection of albums."""

    def __init__(self, albums_file, tracks_file):
        self.__albums = {}
        self.__tracks = {}
        self.__load_albums(albums_file)
        self.__load_tracks(tracks_file)

    def __load_albums(self, albums_file):
        """Loads a list of albums from a file."""
        # TODO complete
        album_list = []
        with open(albums_file) as f:
            for line in f:
                line = line.split("\t")
                album_list.append({"id": line[0], "band": line[1], "title": line[2], "cover": line[3]})
        self.__albums = album_list
        pass

    def __load_tracks(self, tracks_file):
        """Loads a list of tracks from a file."""
        # TODO complete
        song_list = []
        with open(tracks_file) as f:
            for line in f:
                line = line.split("\t")
                song_list.append({"id_s": line[0], "song": line[1], "time": line[2]})
        self.__tracks = song_list
        pass

    def get_albums(self):
        """Returns a list of all albums, with album_id, artist and title."""
        # TODO complete
        the_albums = self.__albums
        return the_albums

    def get_album(self, album_id):
        """Returns all details of an album."""
        # TODO complete
        album = self.__tracks
        print(album)
        album_details = filter(lambda x: int(x["id_s"]) == album_id, album)
        return list(album_details)


# the Albums class is instantiated and stored in a config variable
# it's not the cleanest thing ever, but makes sure that the we load the text files only once
app.config["albums"] = Albums("data/albums.txt", "data/tracks.txt")


@app.route("/albums")
def albums():
    """Returns a list of albums (with album_id, author, and title) in JSON."""
    albums = app.config["albums"].get_albums()
    # TODO complete (return albums.get_albums() in JSON format)
    formatted_albums = json.dumps(albums)
    return formatted_albums


@app.route("/albuminfo/<string:album_id>")
def albuminfo():
    albums = app.config["albums"].__tracks
    album_id = request.args.get("album_id", None)
    if album_id:
        # TODO complete (return albums.get_album(album_id) in JSON format)
        album_details = json.dumps(albums.get_album(int(album_id))
        return album_details
    return ""


@app.route("/sample")
def sample():
    return app.send_static_file("index_static.html")


@app.route("/")
def index():
    return app.send_static_file("index.html")


if __name__ == "__main__":
    app.run()
    