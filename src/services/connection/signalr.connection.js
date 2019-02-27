/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { BroadcastEventListener } from '../eventing/broadcast.event.listener';
import { ConnectionStatus } from './connection.status';
import { LogLevel } from '@aspnet/signalr';
import { ConnectionStatuses } from './connection.statuses';
var SignalRConnection = /** @class */ (function () {
    function SignalRConnection(jConnection, zone, configuration) {
        this._jConnection = jConnection;
        this._zone = zone;
        this._errors = new Subject();
        this._status = this.wireUpStatusEventsAsObservable();
        this._configuration = configuration;
        this._listeners = {};
    }
    Object.defineProperty(SignalRConnection.prototype, "errors", {
        get: /**
         * @return {?}
         */
        function () {
            return this._errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignalRConnection.prototype, "status", {
        get: /**
         * @return {?}
         */
        function () {
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SignalRConnection.prototype.start = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._status.next(ConnectionStatuses.connecting);
        /** @type {?} */
        var $promise = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this._jConnection
                .start()
                .then((/**
             * @return {?}
             */
            function () {
                _this._status.next(ConnectionStatuses.connected);
                resolve(_this);
            }))
                .catch((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this._status.next(ConnectionStatuses.disconnected);
                _this.run((/**
                 * @return {?}
                 */
                function () { return _this._errors.next(error); }), _this._configuration.executeErrorsInZone);
                reject('Failed to connect. Error: ' + error.message); // ex: Error during negotiation request.
            }));
        }));
        return $promise;
    };
    /**
     * @return {?}
     */
    SignalRConnection.prototype.stop = /**
     * @return {?}
     */
    function () {
        this._status.next(ConnectionStatuses.disconnected);
        this._jConnection.stop();
    };
    /**
     * @param {?} method
     * @param {...?} parameters
     * @return {?}
     */
    SignalRConnection.prototype.invoke = /**
     * @param {?} method
     * @param {...?} parameters
     * @return {?}
     */
    function (method) {
        var _this = this;
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        if (method == null) {
            throw new Error('SignalRConnection: Failed to invoke. Argument \'method\' can not be null');
        }
        this.log("SignalRConnection. Start invoking '" + method + "'...");
        /** @type {?} */
        var $promise = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            var _a;
            (_a = _this._jConnection).invoke.apply(_a, [method].concat(parameters)).then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                _this.log("'" + method + "' invoked succesfully. Resolving promise...");
                resolve(result);
                _this.log("Promise resolved.");
            }))
                .catch((/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                console.log("Invoking '" + method + "' failed. Rejecting promise...");
                reject(err);
                console.log("Promise rejected.");
            }));
        }));
        return $promise;
    };
    /**
     * @template T
     * @param {?} listener
     * @return {?}
     */
    SignalRConnection.prototype.listen = /**
     * @template T
     * @param {?} listener
     * @return {?}
     */
    function (listener) {
        var _this = this;
        if (listener == null) {
            throw new Error('Failed to listen. Argument \'listener\' can not be null');
        }
        /** @type {?} */
        var callback = (/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.run((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var casted = null;
                if (args.length > 0) {
                    casted = (/** @type {?} */ (args[0]));
                }
                _this.log('SignalRConnection.proxy.on invoked. Calling listener next() ...');
                listener.next(casted);
                _this.log('listener next() called.');
            }), _this._configuration.executeEventsInZone);
        });
        this.setListener(callback, listener);
    };
    /**
     * @template T
     * @param {?} listener
     * @return {?}
     */
    SignalRConnection.prototype.stopListening = /**
     * @template T
     * @param {?} listener
     * @return {?}
     */
    function (listener) {
        if (listener == null) {
            throw new Error('Failed to listen. Argument \'listener\' can not be null');
        }
        this.log("SignalRConnection: Stopping listening to server event with name " + listener.event);
        if (!this._listeners[listener.event]) {
            this._listeners[listener.event] = [];
        }
        for (var _i = 0, _a = this._listeners[listener.event]; _i < _a.length; _i++) {
            var callback = _a[_i];
            this._jConnection.off(listener.event, callback);
        }
        this._listeners[listener.event] = [];
    };
    /**
     * @template T
     * @param {?} event
     * @return {?}
     */
    SignalRConnection.prototype.listenFor = /**
     * @template T
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event == null || event === '') {
            throw new Error('Failed to listen. Argument \'event\' can not be empty');
        }
        /** @type {?} */
        var listener = new BroadcastEventListener(event);
        this.listen(listener);
        return listener;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SignalRConnection.prototype.listenForRaw = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (event == null || event === '') {
            throw new Error('Failed to listen. Argument \'event\' can not be empty');
        }
        /** @type {?} */
        var listener = new BroadcastEventListener(event);
        /** @type {?} */
        var callback = (/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.run((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var casted = [];
                if (args.length > 0) {
                    casted = args;
                }
                _this.log('SignalRConnection.proxy.on invoked. Calling listener next() ...');
                listener.next(args);
                _this.log('listener next() called.');
            }), _this._configuration.executeEventsInZone);
        });
        this.setListener(callback, listener);
        return listener;
    };
    /**
     * @private
     * @template T
     * @param {?} callback
     * @param {?} listener
     * @return {?}
     */
    SignalRConnection.prototype.setListener = /**
     * @private
     * @template T
     * @param {?} callback
     * @param {?} listener
     * @return {?}
     */
    function (callback, listener) {
        this.log("SignalRConnection: Starting to listen to server event with name " + listener.event);
        this._jConnection.on(listener.event, callback);
        if (this._listeners[listener.event] == null) {
            this._listeners[listener.event] = [];
        }
        this._listeners[listener.event].push(callback);
    };
    /**
     * @private
     * @param {?} transports
     * @return {?}
     */
    SignalRConnection.prototype.convertTransports = /**
     * @private
     * @param {?} transports
     * @return {?}
     */
    function (transports) {
        if (transports instanceof Array) {
            return transports.map((/**
             * @param {?} t
             * @return {?}
             */
            function (t) { return t.name; }));
        }
        return transports.name;
    };
    /**
     * @private
     * @return {?}
     */
    SignalRConnection.prototype.wireUpStatusEventsAsObservable = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var sStatus = new Subject();
        // aggregate all signalr connection status handlers into 1 observable.
        // handler wire up, for signalr connection status callback.
        this._jConnection.onclose((/**
         * @param {?} change
         * @return {?}
         */
        function (change) {
            _this.run((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var connectionStatus = null;
                if (change.hasOwnProperty('newState'))
                    connectionStatus = new ConnectionStatus(change.newState);
                else if (change.hasOwnProperty('message')) // Probably an error
                    connectionStatus = ConnectionStatuses.disconnected;
                sStatus.next(connectionStatus);
            }), _this._configuration.executeStatusChangeInZone);
        }));
        return sStatus;
    };
    /**
     * @private
     * @template T
     * @param {?} listener
     * @param {...?} args
     * @return {?}
     */
    SignalRConnection.prototype.onBroadcastEventReceived = /**
     * @private
     * @template T
     * @param {?} listener
     * @param {...?} args
     * @return {?}
     */
    function (listener) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.log('SignalRConnection.proxy.on invoked. Calling listener next() ...');
        /** @type {?} */
        var casted = null;
        if (args.length > 0) {
            casted = (/** @type {?} */ (args[0]));
        }
        this.run((/**
         * @return {?}
         */
        function () {
            listener.next(casted);
        }), this._configuration.executeEventsInZone);
        this.log('listener next() called.');
    };
    /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    SignalRConnection.prototype.log = /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._configuration.logging === LogLevel.None) {
            return;
        }
        console.log(args.join(', '));
    };
    /**
     * @private
     * @param {?} func
     * @param {?} inZone
     * @return {?}
     */
    SignalRConnection.prototype.run = /**
     * @private
     * @param {?} func
     * @param {?} inZone
     * @return {?}
     */
    function (func, inZone) {
        if (inZone) {
            this._zone.run((/**
             * @return {?}
             */
            function () { return func(); }));
        }
        else {
            this._zone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return func(); }));
        }
    };
    return SignalRConnection;
}());
export { SignalRConnection };
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