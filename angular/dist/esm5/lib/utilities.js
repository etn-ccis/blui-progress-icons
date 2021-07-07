/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var rangeValue = (/**
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function (value, min, max) {
    return Math.max(min, Math.min(value, max));
});
/** @type {?} */
export var getCoordinates = (/**
 * @param {?} percent
 * @param {?=} radius
 * @return {?}
 */
function (percent, radius) {
    if (radius === void 0) { radius = 12; }
    return {
        x: radius + radius * Math.cos((percent / 100) * 2 * Math.PI),
        y: radius + radius * Math.sin((percent / 100) * 2 * Math.PI),
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy8iLCJzb3VyY2VzIjpbImxpYi91dGlsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLEtBQU8sVUFBVTs7Ozs7O0FBQUcsVUFBVSxLQUFhLEVBQUUsR0FBVyxFQUFFLEdBQVc7SUFDdkUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQTs7QUFFRCxNQUFNLEtBQU8sY0FBYzs7Ozs7QUFBRyxVQUFVLE9BQWUsRUFBRSxNQUFXO0lBQVgsdUJBQUEsRUFBQSxXQUFXO0lBQ2hFLE9BQU87UUFDSCxDQUFDLEVBQUUsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzVELENBQUMsRUFBRSxNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7S0FDL0QsQ0FBQztBQUNOLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByYW5nZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4odmFsdWUsIG1heCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENvb3JkaW5hdGVzID0gZnVuY3Rpb24gKHBlcmNlbnQ6IG51bWJlciwgcmFkaXVzID0gMTIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHJhZGl1cyArIHJhZGl1cyAqIE1hdGguY29zKChwZXJjZW50IC8gMTAwKSAqIDIgKiBNYXRoLlBJKSxcbiAgICAgICAgeTogcmFkaXVzICsgcmFkaXVzICogTWF0aC5zaW4oKHBlcmNlbnQgLyAxMDApICogMiAqIE1hdGguUEkpLFxuICAgIH07XG59O1xuIl19