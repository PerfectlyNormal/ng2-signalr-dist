/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ConnectionTransport {
    /**
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} name
     */
    constructor(name) {
        if (name == null || name === "") {
            throw new Error("Failed to create ConnectionTransport. Argument 'name' can not be null or empty.");
        }
        this._name = name;
    }
    /**
     * @return {?}
     */
    toString() {
        return this._name;
    }
    /**
     * @param {?} other
     * @return {?}
     */
    equals(other) {
        if (other == null) {
            return false;
        }
        return this._name === other.name;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConnectionTransport.prototype._name;
}
//# sourceMappingURL=connection.transport.js.map