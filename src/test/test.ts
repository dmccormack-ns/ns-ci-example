import registerSuite = require('intern!object');
import assert = require('intern/chai!assert');
import * as Hello from "../main";

registerSuite({
    name: 'Sample',
    'Hello Method' () {
        const h: Hello.Hello = new Hello.Hello();
        const str: string = "Dan";
        const msg: string = h.hello(str);
        assert.strictEqual(msg, `Hello from ${str}`);
    }
});
