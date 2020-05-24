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

export {sendAJAX};