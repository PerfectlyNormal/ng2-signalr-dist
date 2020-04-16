/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ConnectionStatus } from './connection.status';
// @dynamic
export class ConnectionStatuses {
    /**
     * @return {?}
     */
    static get connecting() {
        return ConnectionStatuses.statuses[0];
    }
    /**
     * @return {?}
     */
    static get connected() {
        return ConnectionStatuses.statuses[1];
    }
    /**
     * @return {?}
     */
    static get reconnecting() {
        return ConnectionStatuses.statuses[2];
    }
    /**
     * @return {?}
     */
    static get disconnected() {
        return ConnectionStatuses.statuses[3];
    }
}
ConnectionStatuses.statuses = [
    new ConnectionStatus(0),
    new ConnectionStatus(1),
    new ConnectionStatus(2),
    new ConnectionStatus(4)
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConnectionStatuses.statuses;
}
//# sourceMappingURL=connection.statuses.js.map