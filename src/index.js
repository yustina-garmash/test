import {likePhoto, loadingFavourites} from './modules/favourites.js';
import {loadingPhoto, send} from'./modules/createLevel.js';
import {openTab, openLevel} from'./modules/openLevel.js';
import {closePopUp, openPhoto} from'./modules/popUp.js';

openTab();
openLevel();
closePopUp();
openPhoto();
likePhoto();
loadingPhoto();
loadingFavourites();
send();