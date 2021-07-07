"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultProps = exports.getCoordinates = exports.rangeValue = void 0;
// if a value VALUE is outside the range, rangeValue(VALUE, min, max)
// will return the closest point to VALUE in the range [min, max]
var rangeValue = function (value, min, max) {
    return Math.max(min, Math.min(value, max));
};
exports.rangeValue = rangeValue;
// will return a point coord on the circle with given radius
// the coord goes clockwise as the percentage increases
var getCoordinates = function (percent, radius) {
    if (radius === void 0) { radius = 12; }
    return ({
        x: radius + radius * Math.cos((percent / 100) * 2 * Math.PI),
        y: radius + radius * Math.sin((percent / 100) * 2 * Math.PI),
    });
};
exports.getCoordinates = getCoordinates;
// default settings shared across all icons
exports.defaultProps = {
    percent: 100,
    size: 24,
    ring: 10,
    outlined: false,
    charging: false,
    color: 'inherit',
};
