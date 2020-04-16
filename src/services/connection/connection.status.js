/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ConnectionStatus {
    /**
     * @param {?} value
     */
    constructor(value) {
        if (value == null || value < 0) {
            throw new Error("Failed to create ConnectionStatus. Argument 'name' can not be null or empty.");
        }
        this._value = value;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    get name() {
        return ConnectionStatus.names[Number.parseInt(this._value.toString(), 10)];
    }
    /**
     * @return {?}
     */
    toString() {
        return this.name;
    }
    /**
     * @param {?} other
     * @return {?}
     */
    equals(other) {
        if (other == null) {
            return false;
        }
        return this._value === other.value;
    }
}
ConnectionStatus.names = ['connecting', 'connected', 'reconnecting', '', 'disconnected'];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConnectionStatus.names;
    /**
     * @type {?}
     * @private
     */
    ConnectionStatus.prototype._value;
}
//# sourceMappingURL=connection.status.js.map