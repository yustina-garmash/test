import {sendAJAX} from './sendAJAX.js';
import {createPhoto} from './createLevel.js';

function likePhoto() {
    document.querySelector('body').addEventListener("click", (e) => {
        let like = e.target.closest('span');
        if (like) {
            if (like.classList.contains("photo__like")) {
                addLike(like);
            } 
        }
    });
}

function addLike(like) {
    let id = like.parentNode.id;
    if (like.classList.contains("active")) {
        like.classList.remove("active");
        localStorage.removeItem(id);
        deleteFavorites(id);
    } else {
        like.classList.add("active");
        localStorage.setItem(id, id);
        loadingFavourites(like.parentNode.id);
    }
}

function loadingFavourites(likeId) {
    sendAJAX('https://json.medrating.org/photos/').then(response => {
        for (let {id, title, thumbnailUrl} of response) {
            if ((localStorage.getItem(id)) && ((!likeId) || (id == likeId))) {
                createPhoto(".favourites", id, title, thumbnailUrl);
            }
        }
    });
}

function deleteFavorites(id) {
    let elem = document.querySelector('.favourites').childNodes;
    elem.forEach(function(item) {
        if(item.id == id) {
            item.remove();
        };
    });
    if (document.getElementById(id)){
        document.getElementById(id).lastChild.classList.remove("active");
    }
}

export {likePhoto, loadingFavourites};

