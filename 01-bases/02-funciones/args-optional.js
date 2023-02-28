"use strict";
(function () {
    var fullName = function (firstname, lastname) {
        return "".concat(firstname, " ").concat(lastname || "--");
    };
    var name = fullName("Tony");
    console.log(name);
})();
//# sourceMappingURL=args-optional.js.map