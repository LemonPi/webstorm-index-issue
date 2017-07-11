const assert = require("assert");
// entire library
// NodeJS 6.9.4 enabled
const dp = require("../dist/dp");
// individual methods
const {point, norm} = require("../dist/dp");

describe("#by requiring the entire library", function () {
    it("should resolve functions exported by it", function () {
        // here Webstorm 2017.1.4 is saying Unresolved function or method point
        const p1 = dp.point(10, 5);
        const p2 = dp.point(10, 9);
        assert.strictEqual(p1.x, p2.x);
        // here as well for norm
        assert.strictEqual(dp.norm(dp.point(0, 1)), 1);
    });
});
describe("#by requiring the individual functions", function () {
    it("should resolve functions exported by it", function () {
        // here it doesn't complain about unresolved function, but go to declaration just
        // goes to the top of the file where I require it, instead of the source or
        // bundle where it's defined
        const p1 = point(10, 5);
        const p2 = point(10, 9);
        // x here is unresovled (not so above)
        assert.strictEqual(p1.x, p2.x);
        assert.strictEqual(norm(point(0, 1)), 1);
    });
});
