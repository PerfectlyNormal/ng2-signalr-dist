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
export { ConnectionStatus };
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