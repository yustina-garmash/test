import {sendAJAX} from './sendAJAX.js';

function createUser(id, name, tab) {
    let inset = document.querySelector(tab);
    let user = document.createElement('div');
    let container = document.createElement('div');
    let point = document.createElement('span');

    point.innerHTML = "&#62 ";
    user.innerText = name;
    user.classList.add("user", "user_" + id);
    inset.append(user);
    user.prepend(point);

    container.classList.add("user__albums", "user"+ id +"__albums", "close");
    user.append(container);
}

function createAlbum(userId, id, title) {
    let user = document.querySelector('.user'+ userId +'__albums');
    let album = document.createElement('div');
    let container = document.createElement('div');
    let point = document.createElement('span');

    point.innerHTML = "&#62 ";
    album.innerText = title;
    album.classList.add("album_" + id);
    user.append(album);
    album.prepend(point);

    container.classList.add("album__photos", "album_" + id + "__photos", "close");
    album.append(container);
}

function createPhoto(albumId, id, title, thumbnailUrl) {
    let album = document.querySelector(albumId);
    let photo = document.createElement('div');
    let like = document.createElement('span');

    photo.innerHTML = '<img src=' + thumbnailUrl + ' alt="" />';
    photo.classList.add("photo");
    photo.id = id;
    photo.firstChild.title = title;
    like.innerHTML = "&#9733";
    like.classList.add("photo__like");
    if (localStorage.getItem(id, id)) {
        like.classList.add("active");
    }

    album.append(photo);
    photo.append(like);
}

function send() {
    sendAJAX('https://json.medrating.org/users/').then(response => {
        for (let {id, name} of response) {
            if (name) {
                createUser(id, name, ".catalog");
            }
        }
    });

    sendAJAX('https://json.medrating.org/albums/').then(response => {
        for (let {userId, id, title} of response) {
            if(title != undefined) {
                createAlbum(userId, id, title);
            }
        }
    });
}

function loadingPhoto() {
    let loadPhoto = new Array();
    document.querySelector('.catalog').addEventListener("click", (e) => {
        
        if (e.target.closest('div').classList[0].split("_")[0] == 'album') {
            let album = e.target.classList[0].split("_")[1];
            if(!loadPhoto[album]) {
                loadPhoto[album] = false;
            }

            if (loadPhoto[album] == false) {
                sendAJAX('https://json.medrating.org/photos/').then(response => {
                    for (let {albumId, id, title, thumbnailUrl} of response) {
                        if (albumId == album) {
                            albumId = ".album_" + albumId + "__photos";
                            createPhoto(albumId, id, title, thumbnailUrl);
                        }
                    }
                });
                loadPhoto[album] = true;
            }
        }
        
    });
}

export {loadingPhoto, send, createPhoto};
