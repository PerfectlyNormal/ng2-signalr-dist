/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, NgZone, InjectionToken } from '@angular/core';
import { SignalR } from '../services/signalr';
/** @type {?} */
const SIGNALR_CONFIGURATION = new InjectionToken('SIGNALR_CONFIGURATION');
/**
 * @param {?} configuration
 * @param {?} zone
 * @return {?}
 */
export function createSignalr(configuration, zone) {
    return new SignalR(configuration, zone);
}
const ɵ0 = SignalR;
export class SignalRModule {
    /**
     * @param {?} getSignalRConfiguration
     * @return {?}
     */
    static forRoot(getSignalRConfiguration) {
        return {
            ngModule: SignalRModule,
            providers: [
                {
                    provide: SIGNALR_CONFIGURATION,
                    useFactory: getSignalRConfiguration
                },
                {
                    deps: [SIGNALR_CONFIGURATION, NgZone],
                    provide: SignalR,
                    useFactory: (createSignalr)
                }
            ],
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        throw new Error("forChild method not implemented");
    }
}
SignalRModule.decorators = [
    { type: NgModule, args: [{
                providers: [{
                        provide: SignalR,
                        useValue: ɵ0
                    }]
            },] },
];
export { ɵ0 };
//# sourceMappingURL=signalr-module.js.map