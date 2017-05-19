define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Hello = (function () {
        function Hello() {
        }
        ;
        Hello.prototype.hello = function (compiler) {
            return "Hello from " + compiler;
        };
        return Hello;
    }());
    exports.Hello = Hello;
});
