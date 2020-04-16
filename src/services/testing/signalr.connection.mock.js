/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BroadcastEventListener } from '../eventing/broadcast.event.listener';
/**
 * @record
 */
export function IListenerCollection() { }
export class SignalRConnectionMock {
    /**
     * @param {?} _mockErrors$
     * @param {?} _mockStatus$
     * @param {?} _listeners
     */
    constructor(_mockErrors$, _mockStatus$, _listeners) {
        this._mockErrors$ = _mockErrors$;
        this._mockStatus$ = _mockStatus$;
        this._listeners = _listeners;
    }
    /**
     * @return {?}
     */
    get errors() {
        return this._mockErrors$;
    }
    /**
     * @return {?}
     */
    get status() {
        return this._mockStatus$.asObservable();
    }
    /**
     * @return {?}
     */
    get id() {
        return 'xxxxxxxx-xxxx-xxxx-xxxxxxxxx';
    }
    /**
     * @return {?}
     */
    stop() {
        //
    }
    /**
     * @return {?}
     */
    start() {
        return Promise.resolve(null); // TODO: implement
    }
    /**
     * @param {?} method
     * @param {...?} parameters
     * @return {?}
     */
    invoke(method, ...parameters) {
        return Promise.resolve(null);
    }
    /**
     * @template T
     * @param {?} listener
     * @return {?}
     */
    listen(listener) {
        this._listeners[listener.event] = listener;
    }
    /**
     * @template T
     * @param {?} event
     * @return {?}
     */
    listenFor(event) {
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
        /** @type {?} */
        const listener = new BroadcastEventListener(event);
        this._listeners[listener.event] = listener;
        return listener;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SignalRConnectionMock.prototype._mockErrors$;
    /**
     * @type {?}
     * @private
     */
    SignalRConnectionMock.prototype._mockStatus$;
    /**
     * @type {?}
     * @private
     */
    SignalRConnectionMock.prototype._listeners;
}
//# sourceMappingURL=signalr.connection.mock.js.map