/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ConnectionTransport } from './connection.transport';
// @dynamic
var ConnectionTransports = /** @class */ (function () {
    function ConnectionTransports() {
    }
    Object.defineProperty(ConnectionTransports, "foreverFrame", {
        get: /**
         * @return {?}
         */
        function () {
            return ConnectionTransports.transports[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionTransports, "longPolling", {
        get: /**
         * @return {?}
         */
        function () {
            return ConnectionTransports.transports[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionTransports, "serverSentEvents", {
        get: /**
         * @return {?}
         */
        function () {
            return ConnectionTransports.transports[2];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionTransports, "webSockets", {
        get: /**
         * @return {?}
         */
        function () {
            return ConnectionTransports.transports[3];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionTransports, "auto", {
        get: /**
         * @return {?}
         */
        function () {
            return ConnectionTransports.transports[4];
        },
        enumerable: true,
        configurable: true
    });
    ConnectionTransports.transports = [
        new ConnectionTransport("foreverFrame"),
        new ConnectionTransport("longPolling"),
        new ConnectionTransport("serverSentEvents"),
        new ConnectionTransport("webSockets"),
        new ConnectionTransport("auto"),
    ];
    return ConnectionTransports;
}());
export { ConnectionTransports };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConnectionTransports.transports;
}
//# sourceMappingURL=connection.transports.js.map