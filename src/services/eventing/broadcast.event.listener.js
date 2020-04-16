/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/**
 * @template T
 */
export class BroadcastEventListener extends Subject {
    /**
     * @param {?} event
     */
    constructor(event) {
        super();
        this.event = event;
        if (event == null || event === '') {
            throw new Error('Failed to create BroadcastEventListener. Argument \'event\' can not be empty');
        }
    }
}
if (false) {
    /** @type {?} */
    BroadcastEventListener.prototype.event;
}
//# sourceMappingURL=broadcast.event.listener.js.map