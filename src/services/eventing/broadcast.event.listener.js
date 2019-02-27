var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/**
 * @template T
 */
var /**
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
}(Subject));
/**
 * @template T
 */
export { BroadcastEventListener };
if (false) {
    /** @type {?} */
    BroadcastEventListener.prototype.event;
}
//# sourceMappingURL=broadcast.event.listener.js.map