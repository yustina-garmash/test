import {openClose} from './openClose.js';

function openTab() {
    document.querySelector('body').addEventListener("click", (e) => {
        if (e.target.closest('div').parentNode.lastChild.previousSibling) {
            let tab = e.target.closest('div').parentNode.lastChild.previousSibling;
            openClose(tab);
        }
    });
}

function openLevel() {
    document.querySelector('.catalog').addEventListener("click", (e) => {
        if (e.target.closest('div').lastChild.classList) {
            let level = e.target.closest('div').lastChild;
            openClose(level);
            if (level.classList.contains("open")) {
                e.target.firstChild.innerHTML = "&#8744 ";
            } else {
                if (level.classList.contains("close")){
                    e.target.firstChild.innerHTML = "&#62 ";
                }
            }
        }
    });
}

export {openTab, openLevel};

