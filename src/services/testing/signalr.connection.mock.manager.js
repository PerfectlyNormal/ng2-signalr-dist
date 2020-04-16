/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { SignalRConnectionMock } from './signalr.connection.mock';
export class SignalRConnectionMockManager {
    constructor() {
        this._errors$ = new Subject();
        this._status$ = new Subject();
        this._listeners = {};
        this._object = new SignalRConnectionMock(this._errors$, this._status$, this._listeners);
    }
    /**
     * @return {?}
     */
    get mock() {
        return this._object;
    }
    /**
     * @return {?}
     */
    get errors$() {
        return this._errors$;
    }
    /**
     * @return {?}
     */
    get status$() {
        return this._status$;
    }
    /**
     * @return {?}
     */
    get listeners() {
        return this._listeners;
    }
}
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