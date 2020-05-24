/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_favourites_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/favourites.js */ "./src/modules/favourites.js");
/* harmony import */ var _modules_createLevel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createLevel.js */ "./src/modules/createLevel.js");
/* harmony import */ var _modules_openLevel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/openLevel.js */ "./src/modules/openLevel.js");
/* harmony import */ var _modules_popUp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popUp.js */ "./src/modules/popUp.js");





Object(_modules_openLevel_js__WEBPACK_IMPORTED_MODULE_2__["openTab"])();
Object(_modules_openLevel_js__WEBPACK_IMPORTED_MODULE_2__["openLevel"])();
Object(_modules_popUp_js__WEBPACK_IMPORTED_MODULE_3__["closePopUp"])();
Object(_modules_popUp_js__WEBPACK_IMPORTED_MODULE_3__["openPhoto"])();
Object(_modules_favourites_js__WEBPACK_IMPORTED_MODULE_0__["likePhoto"])();
Object(_modules_createLevel_js__WEBPACK_IMPORTED_MODULE_1__["loadingPhoto"])();
Object(_modules_favourites_js__WEBPACK_IMPORTED_MODULE_0__["loadingFavourites"])();
Object(_modules_createLevel_js__WEBPACK_IMPORTED_MODULE_1__["send"])();

/***/ }),

/***/ "./src/modules/createLevel.js":
/*!************************************!*\
  !*** ./src/modules/createLevel.js ***!
  \************************************/
/*! exports provided: loadingPhoto, send, createPhoto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingPhoto", function() { return loadingPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPhoto", function() { return createPhoto; });
/* harmony import */ var _sendAJAX_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendAJAX.js */ "./src/modules/sendAJAX.js");


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
    Object(_sendAJAX_js__WEBPACK_IMPORTED_MODULE_0__["sendAJAX"])('https://json.medrating.org/users/').then(response => {
        for (let {id, name} of response) {
            if (name) {
                createUser(id, name, ".catalog");
            }
        }
    });

    Object(_sendAJAX_js__WEBPACK_IMPORTED_MODULE_0__["sendAJAX"])('https://json.medrating.org/albums/').then(response => {
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
                Object(_sendAJAX_js__WEBPACK_IMPORTED_MODULE_0__["sendAJAX"])('https://json.medrating.org/photos/').then(response => {
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




/***/ }),

/***/ "./src/modules/favourites.js":
/*!***********************************!*\
  !*** ./src/modules/favourites.js ***!
  \***********************************/
/*! exports provided: likePhoto, loadingFavourites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likePhoto", function() { return likePhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingFavourites", function() { return loadingFavourites; });
/* harmony import */ var _sendAJAX_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendAJAX.js */ "./src/modules/sendAJAX.js");
/* harmony import */ var _createLevel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createLevel.js */ "./src/modules/createLevel.js");



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
    Object(_sendAJAX_js__WEBPACK_IMPORTED_MODULE_0__["sendAJAX"])('https://json.medrating.org/photos/').then(response => {
        for (let {id, title, thumbnailUrl} of response) {
            if ((localStorage.getItem(id)) && ((!likeId) || (id == likeId))) {
                Object(_createLevel_js__WEBPACK_IMPORTED_MODULE_1__["createPhoto"])(".favourites", id, title, thumbnailUrl);
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





/***/ }),

/***/ "./src/modules/openClose.js":
/*!**********************************!*\
  !*** ./src/modules/openClose.js ***!
  \**********************************/
/*! exports provided: openClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openClose", function() { return openClose; });
function openClose(elem) {
    if (elem.classList.contains("close")) {
        elem.classList.remove("close");
        elem.classList.add("open");
    } else {
        if (elem.classList.contains("open")) {
            elem.classList.remove("open");
            elem.classList.add("close");
        }
    }
}



/***/ }),

/***/ "./src/modules/openLevel.js":
/*!**********************************!*\
  !*** ./src/modules/openLevel.js ***!
  \**********************************/
/*! exports provided: openTab, openLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openTab", function() { return openTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLevel", function() { return openLevel; });
/* harmony import */ var _openClose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openClose.js */ "./src/modules/openClose.js");


function openTab() {
    document.querySelector('body').addEventListener("click", (e) => {
        if (e.target.closest('div').parentNode.lastChild.previousSibling) {
            let tab = e.target.closest('div').parentNode.lastChild.previousSibling;
            Object(_openClose_js__WEBPACK_IMPORTED_MODULE_0__["openClose"])(tab);
        }
    });
}

function openLevel() {
    document.querySelector('.catalog').addEventListener("click", (e) => {
        if (e.target.closest('div').lastChild.classList) {
            let level = e.target.closest('div').lastChild;
            Object(_openClose_js__WEBPACK_IMPORTED_MODULE_0__["openClose"])(level);
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





/***/ }),

/***/ "./src/modules/popUp.js":
/*!******************************!*\
  !*** ./src/modules/popUp.js ***!
  \******************************/
/*! exports provided: closePopUp, openPhoto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closePopUp", function() { return closePopUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openPhoto", function() { return openPhoto; });
/* harmony import */ var _sendAJAX_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendAJAX.js */ "./src/modules/sendAJAX.js");


function openPhoto() {
    document.querySelector('body').addEventListener("click", (e) => {
        if (e.target.closest('img')) {
            let photo = e.target.closest('img').parentNode;
            Object(_sendAJAX_js__WEBPACK_IMPORTED_MODULE_0__["sendAJAX"])('https://json.medrating.org/photos/').then(response => {
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





/***/ }),

/***/ "./src/modules/sendAJAX.js":
/*!*********************************!*\
  !*** ./src/modules/sendAJAX.js ***!
  \*********************************/
/*! exports provided: sendAJAX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendAJAX", function() { return sendAJAX; });
function sendAJAX(url) {
    return new Promise((resolve, reject) => {
        let xrh = new XMLHttpRequest();

        xrh.open('GET', url, true);
        xrh.responseType = 'json';

        xrh.onload = function() {
            resolve(xrh.response);
        };
        xrh.send();
    });
}



/***/ })

/******/ });
//# sourceMappingURL=main.js.map