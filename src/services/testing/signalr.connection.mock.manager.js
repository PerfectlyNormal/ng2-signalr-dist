/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { SignalRConnectionMock } from './signalr.connection.mock';
var SignalRConnectionMockManager = /** @class */ (function () {
    function SignalRConnectionMockManager() {
        this._errors$ = new Subject();
        this._status$ = new Subject();
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
export { SignalRConnectionMockManager };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SignalRConnectionMockManager.prototype._listeners;
    /**
     * @type {?}
     * @private
     */
    SignalRConnectionMockManager.prototype._status$;
    /**
     * @type {?}
     * @private
     */
    SignalRConnectionMockManager.prototype._errors$;
    /**
     * @type {?}
     * @private
     */
    SignalRConnectionMockManager.prototype._object;
}
//# sourceMappingURL=signalr.connection.mock.manager.js.map