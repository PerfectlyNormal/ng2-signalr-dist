/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ConnectionTransports } from './connection/connection.transports';
import { LogLevel } from '@aspnet/signalr';
export class SignalRConfiguration {
    constructor() {
        this.hubName = null;
        this.logging = LogLevel.Error;
        this.qs = null;
        this.url = null;
        this.jsonp = false;
        this.withCredentials = false;
        this.transport = ConnectionTransports.auto;
        this.executeEventsInZone = true;
        this.executeErrorsInZone = false;
        this.executeStatusChangeInZone = true;
        this.pingInterval = 300000;
        this.httpConnectionOptions = null;
    }
}
if (false) {
    /**
     * connection url to the SignalR service
     * @type {?}
     */
    SignalRConfiguration.prototype.url;
    /**
     * Allows you to specify query string parameters object when the client connects
     * @type {?}
     */
    SignalRConfiguration.prototype.qs;
    /**
     * name of the SignalR service hub to connect to
     * @type {?}
     */
    SignalRConfiguration.prototype.hubName;
    /**
     * Level of details for logging. Defaults to Error
     * @type {?}
     */
    SignalRConfiguration.prototype.logging;
    /**
     * Allows jsonp. This flag can be used to suppport CORS on older browsers
     * @type {?}
     */
    SignalRConfiguration.prototype.jsonp;
    /**
     * Allows withCredentials. This flag can be used to suppport CORS
     * @type {?}
     */
    SignalRConfiguration.prototype.withCredentials;
    /**
     * Allows pingInterval
     * @type {?}
     */
    SignalRConfiguration.prototype.pingInterval;
    /**
     * Allows you to specify transport. You can specify a fallback order if you wan't to try specific transports in order. By default selects best avaliable transport.
     * @type {?}
     */
    SignalRConfiguration.prototype.transport;
    /**
     * Allows you to run the event callback outside ngZone
     * @type {?}
     */
    SignalRConfiguration.prototype.executeEventsInZone;
    /**
     * Allows you to run the errors callback outside ngZone
     * @type {?}
     */
    SignalRConfiguration.prototype.executeErrorsInZone;
    /**
     * Allows you to run the status change in callback outside ngZone
     * @type {?}
     */
    SignalRConfiguration.prototype.executeStatusChangeInZone;
    /**
     * Allows you to pass extra options to the connection builder, for example passing in an accessTokenFactory
     * @type {?}
     */
    SignalRConfiguration.prototype.httpConnectionOptions;
}
//# sourceMappingURL=signalr.configuration.js.map