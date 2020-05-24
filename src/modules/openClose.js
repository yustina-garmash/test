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

export {openClose};