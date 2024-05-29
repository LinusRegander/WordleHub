function setCookie(value) {
    const date = new Date();
    date.setHours(24, 0, 0, 0);
    const expiration = "; expires=" + date.toUTCString();
    document.cookie = "Points" + "=" + (value || "") + expiration + "; path=/";

}

function getCookie() {
    const name = "Points=";
    const cookieArr = decodeURIComponent(document.cookie).split(';');

    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return null;
}

export {
    setCookie,
    getCookie
}