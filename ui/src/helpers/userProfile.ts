var UserProfile = (function() {
    var full_name = "";
    var getName = function () {
        return full_name;
    }

    var setName = function(nome:string) {
        full_name = nome;
    }

    return {
        getName: getName,
        setName: setName
    }
}) ();

export default UserProfile;