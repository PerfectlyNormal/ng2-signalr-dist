(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@aspnet/signalr'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', 'rxjs', '@aspnet/signalr', '@angular/core'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng['ng2-signalr'] = {}), global.rxjs, global.signalr, global.core));
}(this, function (exports, rxjs, signalr, core) { 'use strict';

    var __extends = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    /**
     * @template T
     */
    var  /**
     * @template T
     */
    BroadcastEventListener = /** @class */ (function (_super) {
        __extends(BroadcastEventListener, _super);
        function BroadcastEventListener(event) {
            var _this = _super.call(this) || this;
            _this.event = event;
            if (event == null || event === '') {
                throw new Error('Failed to create BroadcastEventListener. Argument \'event\' can not be empty');
            }
            return _this;
        }
        return BroadcastEventListener;
    }(rxjs.Subject));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SignalRConnectionMock = /** @class */ (function () {
        function SignalRConnectionMock(_mockErrors$, _mockStatus$, _listeners) {
            this._mockErrors$ = _mockErrors$;
            this._mockStatus$ = _mockStatus$;
            this._listeners = _listeners;
        }
        Object.defineProperty(SignalRConnectionMock.prototype, "errors", {
            get: /**
             * @return {?}
             */
            function () {
                return this._mockErrors$;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignalRConnectionMock.prototype, "status", {
            get: /**
             * @return {?}
             */
            function () {
                return this._mockStatus$.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignalRConnectionMock.prototype, "id", {
            get: /**
             * @return {?}
             */
            function () {
                return 'xxxxxxxx-xxxx-xxxx-xxxxxxxxx';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SignalRConnectionMock.prototype.stop = /**
         * @return {?}
         */
        function () {
            //
        };
        /**
         * @return {?}
         */
        SignalRConnectionMock.prototype.start = /**
         * @return {?}
         */
        function () {
            return Promise.resolve(null); // TODO: implement
        };
        /**
         * @param {?} method
         * @param {...?} parameters
         * @return {?}
         */
        SignalRConnectionMock.prototype.invoke = /**
         * @param {?} method
         * @param {...?} parameters
         * @return {?}
         */
        function (method) {
            var parameters = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                parameters[_i - 1] = arguments[_i];
            }
            return Promise.resolve(null);
        };
        /**
         * @template T
         * @param {?} listener
         * @return {?}
         */
        SignalRConnectionMock.prototype.listen = /**
         * @template T
         * @param {?} listener
         * @return {?}
         */
        function (listener) {
            this._listeners[listener.event] = listener;
        };
        /**
         * @template T
         * @param {?} event
         * @return {?}
         */
        SignalRConnectionMock.prototype.listenFor = /**
         * @template T
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var listener = new BroadcastEventListener(event);
            this.listen(listener);
            return listener;
        };
        /**
         * @param {?} event
         * @return {?}
         */
        SignalRConnectionMock.prototype.listenForRaw = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var listener = new BroadcastEventListener(event);
            this._listeners[listener.event] = listener;
            return listener;
        };
        return SignalRConnectionMock;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SignalRConnectionMockManager = /** @class */ (function () {
        function SignalRConnectionMockManager() {
            this._errors$ = new rxjs.Subject();
            this._status$ = new rxjs.Subject();
            this._listeners = {};
            this._object = new SignalRConnectionMock(this._errors$, this._status$, this._listeners);
        }
        Object.defineProperty(SignalRConnectionMockManager.prototype, "mock", {
            get: /**
             * @return {?}
             */
            function () {
                return this._object;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignalRConnectionMockManager.prototype, "errors$", {
            get: /**
             * @return {?}
             */
            function () {
                return this._errors$;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignalRConnectionMockManager.prototype, "status$", {
            get: /**
             * @return {?}
             */
            function () {
                return this._status$;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignalRConnectionMockManager.prototype, "listeners", {
            get: /**
             * @return {?}
             */
            function () {
                return this._listeners;
            },
            enumerable: true,
            configurable: true
        });
        return SignalRConnectionMockManager;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConnectionStatus = /** @class */ (function () {
        function ConnectionStatus(value) {
            if (value == null || value < 0) {
                throw new Error("Failed to create ConnectionStatus. Argument 'name' can not be null or empty.");
            }
            this._value = value;
        }
        Object.defineProperty(ConnectionStatus.prototype, "value", {
            get: /**
             * @return {?}
             */
            function () {
                return this._value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ConnectionStatus.prototype, "name", {
            get: /**
             * @return {?}
             */
            function () {
                return ConnectionStatus.names[Number.parseInt(this._value.toString())];
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ConnectionStatus.prototype.toString = /**
         * @return {?}
         */
        function () {
            return this.name;
        };
        /**
         * @param {?} other
         * @return {?}
         */
        ConnectionStatus.prototype.equals = /**
         * @param {?} other
         * @return {?}
         */
        function (other) {
            if (other == null) {
                return false;
            }
            return this._value === other.value;
        };
        ConnectionStatus.names = ['connecting', 'connected', 'reconnecting', '', 'disconnected'];
        return ConnectionStatus;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SignalRConnection = /** @class */ (function () {
        function SignalRConnection(jConnection, zone, configuration) {
            this._jConnection = jConnection;
            this._zone = zone;
            this._errors = new rxjs.Subject();
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
            var sStatus = new rxjs.Subject();
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
            if (this._configuration.logging === signalr.LogLevel.None) {
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConnectionTransport = /** @class */ (function () {
        function ConnectionTransport(name) {
            if (name == null || name === "") {
                throw new Error("Failed to create ConnectionTransport. Argument 'name' can not be null or empty.");
            }
            this._name = name;
        }
        Object.defineProperty(ConnectionTransport.prototype, "name", {
            get: /**
             * @return {?}
             */
            function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ConnectionTransport.prototype.toString = /**
         * @return {?}
         */
        function () {
            return this._name;
        };
        /**
         * @param {?} other
         * @return {?}
         */
        ConnectionTransport.prototype.equals = /**
         * @param {?} other
         * @return {?}
         */
        function (other) {
            if (other == null) {
                return false;
            }
            return this._name === other.name;
        };
        return ConnectionTransport;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SignalRConfiguration = /** @class */ (function () {
        function SignalRConfiguration() {
            this.hubName = null;
            this.logging = signalr.LogLevel.Error;
            this.qs = null;
            this.url = null;
            this.jsonp = false;
            this.withCredentials = false;
            this.transport = ConnectionTransports.auto;
            this.executeEventsInZone = true;
            this.executeErrorsInZone = false;
            this.executeStatusChangeInZone = true;
            this.pingInterval = 300000;
        }
        return SignalRConfiguration;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            var jConnection = new signalr.HubConnectionBuilder()
                .withUrl(configuration.url)
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
            { type: core.Injectable },
        ];
        /** @nocollapse */
        SignalR.ctorParameters = function () { return [
            { type: SignalRConfiguration },
            { type: core.NgZone }
        ]; };
        return SignalR;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SIGNALR_CONFIGURATION = new core.InjectionToken('SIGNALR_CONFIGURATION');
    /**
     * @param {?} configuration
     * @param {?} zone
     * @return {?}
     */
    function createSignalr(configuration, zone) {
        return new SignalR(configuration, zone);
    }
    var ɵ0 = SignalR;
    var SignalRModule = /** @class */ (function () {
        function SignalRModule() {
        }
        /**
         * @param {?} getSignalRConfiguration
         * @return {?}
         */
        SignalRModule.forRoot = /**
         * @param {?} getSignalRConfiguration
         * @return {?}
         */
        function (getSignalRConfiguration) {
            return {
                ngModule: SignalRModule,
                providers: [
                    {
                        provide: SIGNALR_CONFIGURATION,
                        useFactory: getSignalRConfiguration
                    },
                    {
                        deps: [SIGNALR_CONFIGURATION, core.NgZone],
                        provide: SignalR,
                        useFactory: (createSignalr)
                    }
                ],
            };
        };
        /**
         * @return {?}
         */
        SignalRModule.forChild = /**
         * @return {?}
         */
        function () {
            throw new Error("forChild method not implemented");
        };
        SignalRModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [{
                                provide: SignalR,
                                useValue: ɵ0
                            }]
                    },] },
        ];
        return SignalRModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.SignalRConnectionMock = SignalRConnectionMock;
    exports.SignalRConnectionMockManager = SignalRConnectionMockManager;
    exports.ConnectionStatus = ConnectionStatus;
    exports.ConnectionStatuses = ConnectionStatuses;
    exports.BroadcastEventListener = BroadcastEventListener;
    exports.SignalRConnection = SignalRConnection;
    exports.ConnectionTransport = ConnectionTransport;
    exports.ConnectionTransports = ConnectionTransports;
    exports.SignalR = SignalR;
    exports.SignalRConfiguration = SignalRConfiguration;
    exports.SignalRModule = SignalRModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));