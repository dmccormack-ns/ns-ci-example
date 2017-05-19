define(["require", "exports", "intern!object", "intern/chai!assert", "../main"], function (require, exports, registerSuite, assert, Hello) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    registerSuite({
        name: 'Sample',
        'Hello Method': function () {
            var h = new Hello.Hello();
            var str = "Dan";
            var msg = h.hello(str);
            assert.strictEqual(msg, "Hello from " + str);
        }
    });
});
