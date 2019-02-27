/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ConnectionStatus } from './connection.status';
// @dynamic
var ConnectionStatuses = /** @class */ (function () {
    function ConnectionStatuses() {
    }
    Object.defineProperty(ConnectionStatuses, "connecting", {
        get: /**
         * @return {?}
         */
        function () {
            return ConnectionStatuses.statuses[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionStatuses, "connected", {
        get: /**
         * @return {?}
         */
        function () {
            return ConnectionStatuses.statuses[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionStatuses, "reconnecting", {
        get: /**
         * @return {?}
         */
        function () {
            return ConnectionStatuses.statuses[2];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionStatuses, "disconnected", {
        get: /**
         * @return {?}
         */
        function () {
            return ConnectionStatuses.statuses[3];
        },
        enumerable: true,
        configurable: true
    });
    ConnectionStatuses.statuses = [
        new ConnectionStatus(0),
        new ConnectionStatus(1),
        new ConnectionStatus(2),
        new ConnectionStatus(4)
    ];
    return ConnectionStatuses;
}());
export { ConnectionStatuses };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConnectionStatuses.statuses;
}
//# sourceMappingURL=connection.statuses.js.map