import {sendAJAX} from './sendAJAX.js';

function openPhoto() {
    document.querySelector('body').addEventListener("click", (e) => {
        if (e.target.closest('img')) {
            let photo = e.target.closest('img').parentNode;
            sendAJAX('https://json.medrating.org/photos/').then(response => {
                for (let {id, url} of response) {
                    if (id == photo.id) {
                        createPopUp(id, url);
                    }
                }
            });
        }
    });
}

function createPopUp(id, url) {
    let body = document.querySelector('body');
    let photo = document.createElement('div');
    let wrapper = document.createElement('div');
    let close = document.createElement('div');

    body.append(wrapper);

    photo.innerHTML = '<img src=' + url + ' alt="" id="' + id + '"/>';
    wrapper.classList.add("bigPhoto");
    close.innerText = "закрыть";
    close.classList.add("open", "bigPhoto__close");
    document.body.style.overflow = 'hidden';

    wrapper.append(close);
    wrapper.append(photo);
}

function closePopUp() {
    document.querySelector('body').addEventListener("click", (e) => {
        let close = e.target.closest('div');
        if (close.classList.contains("bigPhoto__close")) {
            close.parentNode.remove();
            document.body.style.overflow = 'scroll';
        } 
    });
}

export {closePopUp, openPhoto};

