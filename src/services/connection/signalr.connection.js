/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { BroadcastEventListener } from '../eventing/broadcast.event.listener';
import { ConnectionStatus } from './connection.status';
import { LogLevel } from '@aspnet/signalr';
import { ConnectionStatuses } from './connection.statuses';
export class SignalRConnection {
    /**
     * @param {?} jConnection
     * @param {?} zone
     * @param {?} configuration
     */
    constructor(jConnection, zone, configuration) {
        this._jConnection = jConnection;
        this._zone = zone;
        this._errors = new Subject();
        this._status = this.wireUpStatusEventsAsObservable();
        this._configuration = configuration;
        this._listeners = {};
    }
    /**
     * @return {?}
     */
    get errors() {
        return this._errors;
    }
    /**
     * @return {?}
     */
    get status() {
        return this._status;
    }
    /**
     * @return {?}
     */
    start() {
        this._status.next(ConnectionStatuses.connecting);
        /** @type {?} */
        const $promise = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this._jConnection
                .start()
                .then((/**
             * @return {?}
             */
            () => {
                this._status.next(ConnectionStatuses.connected);
                resolve(this);
            }))
                .catch((/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                this._status.next(ConnectionStatuses.disconnected);
                this.run((/**
                 * @return {?}
                 */
                () => this._errors.next(error)), this._configuration.executeErrorsInZone);
                reject('Failed to connect. Error: ' + error.message); // ex: Error during negotiation request.
            }));
        }));
        return $promise;
    }
    /**
     * @return {?}
     */
    stop() {
        this._status.next(ConnectionStatuses.disconnected);
        this._jConnection.stop();
    }
    /**
     * @param {?} method
     * @param {...?} parameters
     * @return {?}
     */
    invoke(method, ...parameters) {
        if (method == null) {
            throw new Error('SignalRConnection: Failed to invoke. Argument \'method\' can not be null');
        }
        this.log(`SignalRConnection. Start invoking \'${method}\'...`);
        /** @type {?} */
        const $promise = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this._jConnection.invoke(method, ...parameters)
                .then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => {
                this.log(`\'${method}\' invoked succesfully. Resolving promise...`);
                resolve(result);
                this.log(`Promise resolved.`);
            }))
                .catch((/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                console.log(`Invoking \'${method}\' failed. Rejecting promise...`);
                reject(err);
                console.log(`Promise rejected.`);
            }));
        }));
        return $promise;
    }
    /**
     * @template T
     * @param {?} listener
     * @return {?}
     */
    listen(listener) {
        if (listener == null) {
            throw new Error('Failed to listen. Argument \'listener\' can not be null');
        }
        /** @type {?} */
        const callback = (/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            this.run((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let casted = null;
                if (args.length > 0) {
                    casted = (/** @type {?} */ (args[0]));
                }
                this.log('SignalRConnection.proxy.on invoked. Calling listener next() ...');
                listener.next(casted);
                this.log('listener next() called.');
            }), this._configuration.executeEventsInZone);
        });
        this.setListener(callback, listener);
    }
    /**
     * @template T
     * @param {?} listener
     * @return {?}
     */
    stopListening(listener) {
        if (listener == null) {
            throw new Error('Failed to listen. Argument \'listener\' can not be null');
        }
        this.log(`SignalRConnection: Stopping listening to server event with name ${listener.event}`);
        if (!this._listeners[listener.event]) {
            this._listeners[listener.event] = [];
        }
        for (const callback of this._listeners[listener.event]) {
            this._jConnection.off(listener.event, callback);
        }
        this._listeners[listener.event] = [];
    }
    /**
     * @template T
     * @param {?} event
     * @return {?}
     */
    listenFor(event) {
        if (event == null || event === '') {
            throw new Error('Failed to listen. Argument \'event\' can not be empty');
        }
        /** @type {?} */
        const listener = new BroadcastEventListener(event);
        this.listen(listener);
        return listener;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    listenForRaw(event) {
        if (event == null || event === '') {
            throw new Error('Failed to listen. Argument \'event\' can not be empty');
        }
        /** @type {?} */
        const listener = new BroadcastEventListener(event);
        /** @type {?} */
        const callback = (/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            this.run((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let casted = [];
                if (args.length > 0) {
                    casted = args;
                }
                this.log('SignalRConnection.proxy.on invoked. Calling listener next() ...');
                listener.next(args);
                this.log('listener next() called.');
            }), this._configuration.executeEventsInZone);
        });
        this.setListener(callback, listener);
        return listener;
    }
    /**
     * @private
     * @template T
     * @param {?} callback
     * @param {?} listener
     * @return {?}
     */
    setListener(callback, listener) {
        this.log(`SignalRConnection: Starting to listen to server event with name ${listener.event}`);
        this._jConnection.on(listener.event, callback);
        if (this._listeners[listener.event] == null) {
            this._listeners[listener.event] = [];
        }
        this._listeners[listener.event].push(callback);
    }
    /**
     * @private
     * @param {?} transports
     * @return {?}
     */
    convertTransports(transports) {
        if (transports instanceof Array) {
            return transports.map((/**
             * @param {?} t
             * @return {?}
             */
            (t) => t.name));
        }
        return transports.name;
    }
    /**
     * @private
     * @return {?}
     */
    wireUpStatusEventsAsObservable() {
        /** @type {?} */
        const sStatus = new Subject();
        // aggregate all signalr connection status handlers into 1 observable.
        // handler wire up, for signalr connection status callback.
        this._jConnection.onclose((/**
         * @param {?} change
         * @return {?}
         */
        (change) => {
            this.run((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let connectionStatus = null;
                if (change && change.hasOwnProperty('newState')) {
                    connectionStatus = new ConnectionStatus(change.newState);
                }
                else if (!change || change.hasOwnProperty('message')) { // Probably an error
                    connectionStatus = ConnectionStatuses.disconnected;
                }
                sStatus.next(connectionStatus);
            }), this._configuration.executeStatusChangeInZone);
        }));
        return sStatus;
    }
    /**
     * @private
     * @template T
     * @param {?} listener
     * @param {...?} args
     * @return {?}
     */
    onBroadcastEventReceived(listener, ...args) {
        this.log('SignalRConnection.proxy.on invoked. Calling listener next() ...');
        /** @type {?} */
        let casted = null;
        if (args.length > 0) {
            casted = (/** @type {?} */ (args[0]));
        }
        this.run((/**
         * @return {?}
         */
        () => {
            listener.next(casted);
        }), this._configuration.executeEventsInZone);
        this.log('listener next() called.');
    }
    /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    log(...args) {
        if (this._configuration.logging === LogLevel.None) {
            return;
        }
        console.log(args.join(', '));
    }
    /**
     * @private
     * @param {?} func
     * @param {?} inZone
     * @return {?}
     */
    run(func, inZone) {
        if (inZone) {
            this._zone.run((/**
             * @return {?}
             */
            () => func()));
        }
        else {
            this._zone.runOutsideAngular((/**
             * @return {?}
             */
            () => func()));
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SignalRConnection.prototype._status;
    /**
     * @type {?}
     * @private
     */
    SignalRConnection.prototype._errors;
    /**
     * @type {?}
     * @private
     */
    SignalRConnection.prototype._jConnection;
    /**
     * @type {?}
     * @private
     */
    SignalRConnection.prototype._zone;
    /**
     * @type {?}
     * @private
     */
    SignalRConnection.prototype._configuration;
    /**
     * @type {?}
     * @private
     */
    SignalRConnection.prototype._listeners;
}
//# sourceMappingURL=signalr.connection.js.map