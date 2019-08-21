/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgZone, Injectable } from '@angular/core';
import { HubConnectionBuilder } from '@aspnet/signalr';
import { SignalRConfiguration } from './signalr.configuration';
import { SignalRConnection } from './connection/signalr.connection';
var SignalR = /** @class */ (function () {
    function SignalR(configuration, zone) {
        this._configuration = configuration;
        this._zone = zone;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    SignalR.prototype.createConnection = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var configuration = this.merge(options ? options : {});
        this.logConfiguration(configuration);
        // create connection object
        /** @type {?} */
        var jConnection = new HubConnectionBuilder()
            .withUrl(configuration.url, configuration.httpConnectionOptions)
            .configureLogging(configuration.logging)
            .build();
        // FIXME: jConnection.qs = configuration.qs;
        // !!! important. We need to register at least one function otherwise server callbacks will not work.
        jConnection.on('noOp', (/**
         * @return {?}
         */
        function () { }));
        return new SignalRConnection(jConnection, this._zone, configuration);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    SignalR.prototype.connect = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return this.createConnection(options).start();
    };
    /**
     * @private
     * @param {?} configuration
     * @return {?}
     */
    SignalR.prototype.logConfiguration = /**
     * @private
     * @param {?} configuration
     * @return {?}
     */
    function (configuration) {
        try {
            /** @type {?} */
            var serializedQs = JSON.stringify(configuration.qs);
            /** @type {?} */
            var serializedTransport = JSON.stringify(configuration.transport);
            if (configuration.logging) {
                console.log("Creating connecting with...");
                console.log("configuration:[url: '" + configuration.url + "'] ...");
                console.log("configuration:[hubName: '" + configuration.hubName + "'] ...");
                console.log("configuration:[qs: '" + serializedQs + "'] ...");
                console.log("configuration:[transport: '" + serializedTransport + "'] ...");
            }
        }
        catch (err) { /* */ }
    };
    /**
     * @private
     * @param {?} overrides
     * @return {?}
     */
    SignalR.prototype.merge = /**
     * @private
     * @param {?} overrides
     * @return {?}
     */
    function (overrides) {
        /** @type {?} */
        var merged = new SignalRConfiguration();
        merged.hubName = overrides.hubName || this._configuration.hubName;
        merged.url = overrides.url || this._configuration.url;
        merged.httpConnectionOptions = overrides.httpConnectionOptions || this._configuration.httpConnectionOptions;
        merged.qs = overrides.qs || this._configuration.qs;
        merged.logging = this._configuration.logging;
        merged.jsonp = overrides.jsonp || this._configuration.jsonp;
        merged.withCredentials = overrides.withCredentials || this._configuration.withCredentials;
        merged.transport = overrides.transport || this._configuration.transport;
        merged.executeEventsInZone = overrides.executeEventsInZone || this._configuration.executeEventsInZone;
        merged.executeErrorsInZone = overrides.executeErrorsInZone || this._configuration.executeErrorsInZone;
        merged.executeStatusChangeInZone = overrides.executeStatusChangeInZone || this._configuration.executeStatusChangeInZone;
        merged.pingInterval = overrides.pingInterval || this._configuration.pingInterval;
        return merged;
    };
    SignalR.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SignalR.ctorParameters = function () { return [
        { type: SignalRConfiguration },
        { type: NgZone }
    ]; };
    return SignalR;
}());
export { SignalR };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SignalR.prototype._configuration;
    /**
     * @type {?}
     * @private
     */
    SignalR.prototype._zone;
}
//# sourceMappingURL=signalr.js.map