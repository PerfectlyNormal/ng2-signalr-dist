/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ConnectionTransport } from './connection.transport';
// @dynamic
export class ConnectionTransports {
    /**
     * @return {?}
     */
    static get foreverFrame() {
        return ConnectionTransports.transports[0];
    }
    /**
     * @return {?}
     */
    static get longPolling() {
        return ConnectionTransports.transports[1];
    }
    /**
     * @return {?}
     */
    static get serverSentEvents() {
        return ConnectionTransports.transports[2];
    }
    /**
     * @return {?}
     */
    static get webSockets() {
        return ConnectionTransports.transports[3];
    }
    /**
     * @return {?}
     */
    static get auto() {
        return ConnectionTransports.transports[4];
    }
}
ConnectionTransports.transports = [
    new ConnectionTransport("foreverFrame"),
    new ConnectionTransport("longPolling"),
    new ConnectionTransport("serverSentEvents"),
    new ConnectionTransport("webSockets"),
    new ConnectionTransport("auto"),
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConnectionTransports.transports;
}
//# sourceMappingURL=connection.transports.js.map