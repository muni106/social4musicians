var UserProfile = (function() {
    var getName = function () {
        const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("nickname="))
        ?.split("=")[1];
        return cookieValue;
    }

    return {
        getName: getName,
    }
}) ();

export default UserProfile;