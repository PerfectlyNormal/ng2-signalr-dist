/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgZone, Injectable } from '@angular/core';
import { HubConnectionBuilder } from '@aspnet/signalr';
import { SignalRConfiguration } from './signalr.configuration';
import { SignalRConnection } from './connection/signalr.connection';
export class SignalR {
    /**
     * @param {?} configuration
     * @param {?} zone
     */
    constructor(configuration, zone) {
        this._configuration = configuration;
        this._zone = zone;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    createConnection(options) {
        /** @type {?} */
        const configuration = this.merge(options ? options : {});
        this.logConfiguration(configuration);
        // create connection object
        /** @type {?} */
        const jConnection = new HubConnectionBuilder()
            .withUrl(configuration.url, configuration.httpConnectionOptions)
            .configureLogging(configuration.logging)
            .build();
        // FIXME: jConnection.qs = configuration.qs;
        // !!! important. We need to register at least one function otherwise server callbacks will not work.
        jConnection.on('noOp', (/**
         * @return {?}
         */
        () => { }));
        return new SignalRConnection(jConnection, this._zone, configuration);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    connect(options) {
        return this.createConnection(options).start();
    }
    /**
     * @private
     * @param {?} configuration
     * @return {?}
     */
    logConfiguration(configuration) {
        try {
            /** @type {?} */
            const serializedQs = JSON.stringify(configuration.qs);
            /** @type {?} */
            const serializedTransport = JSON.stringify(configuration.transport);
            if (configuration.logging) {
                console.log(`Creating connecting with...`);
                console.log(`configuration:[url: '${configuration.url}'] ...`);
                console.log(`configuration:[hubName: '${configuration.hubName}'] ...`);
                console.log(`configuration:[qs: '${serializedQs}'] ...`);
                console.log(`configuration:[transport: '${serializedTransport}'] ...`);
            }
        }
        catch (err) { /* */ }
    }
    /**
     * @private
     * @param {?} overrides
     * @return {?}
     */
    merge(overrides) {
        /** @type {?} */
        const merged = new SignalRConfiguration();
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
    }
}
SignalR.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SignalR.ctorParameters = () => [
    { type: SignalRConfiguration },
    { type: NgZone }
];
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