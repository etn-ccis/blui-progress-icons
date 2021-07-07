/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const rangeValue = (/**
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function (value, min, max) {
    return Math.max(min, Math.min(value, max));
});
/** @type {?} */
export const getCoordinates = (/**
 * @param {?} percent
 * @param {?=} radius
 * @return {?}
 */
function (percent, radius = 12) {
    return {
        x: radius + radius * Math.cos((percent / 100) * 2 * Math.PI),
        y: radius + radius * Math.sin((percent / 100) * 2 * Math.PI),
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy8iLCJzb3VyY2VzIjpbImxpYi91dGlsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLE9BQU8sVUFBVTs7Ozs7O0FBQUcsVUFBVSxLQUFhLEVBQUUsR0FBVyxFQUFFLEdBQVc7SUFDdkUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sY0FBYzs7Ozs7QUFBRyxVQUFVLE9BQWUsRUFBRSxNQUFNLEdBQUcsRUFBRTtJQUNoRSxPQUFPO1FBQ0gsQ0FBQyxFQUFFLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUM1RCxDQUFDLEVBQUUsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0tBQy9ELENBQUM7QUFDTixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmFuZ2VWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKHZhbHVlLCBtYXgpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb29yZGluYXRlcyA9IGZ1bmN0aW9uIChwZXJjZW50OiBudW1iZXIsIHJhZGl1cyA9IDEyKTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiByYWRpdXMgKyByYWRpdXMgKiBNYXRoLmNvcygocGVyY2VudCAvIDEwMCkgKiAyICogTWF0aC5QSSksXG4gICAgICAgIHk6IHJhZGl1cyArIHJhZGl1cyAqIE1hdGguc2luKChwZXJjZW50IC8gMTAwKSAqIDIgKiBNYXRoLlBJKSxcbiAgICB9O1xufTtcbiJdfQ==