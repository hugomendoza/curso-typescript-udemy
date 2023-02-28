"use strict";
(function () {
    var fullName = function (firstname) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstname, " ").concat(restArgs.join(" "));
    };
    var superman = fullName("Clark", "Joseph", "Kent");
    var batman = fullName("Bruce", "wayne");
    console.log({ superman: superman, batman: batman });
})();
//# sourceMappingURL=args-rest.js.map