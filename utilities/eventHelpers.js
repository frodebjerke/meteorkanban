EventHelpers = {

    eventIsBlurOrKeypressEnter : function (event) {
        if (event.type == "blur") {
            return true;
        }
        else if (event.type == "keypress" && event.keyCode == 13) {
            return true;
        }
        else {
            return false;
        }
    },

    isBlur : function (type) {
        return type == "blur";
    },

    isKeypress : function (type) {
      return type == "keypress";
    },

    keypressIsEnter : function (keyCode) {
        return keyCode == 13;
    }
};