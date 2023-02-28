"use strict";
(function () {
    var fullName = function (firstname, lastname, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstname, " ").concat(lastname || "--").toUpperCase();
        }
        else {
            return "".concat(firstname, " ").concat(lastname || "--");
        }
    };
    var name = fullName("Tony", "Stark");
    console.log(name);
})();
//# sourceMappingURL=args-default.js.map