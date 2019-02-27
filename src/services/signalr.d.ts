import { NgZone } from '@angular/core';
import { ISignalRConnection } from './connection/i.signalr.connection';
import { SignalRConfiguration } from './signalr.configuration';
import { SignalRConnection } from './connection/signalr.connection';
import { IConnectionOptions } from './connection/connection.options';
export declare class SignalR {
    private _configuration;
    private _zone;
    constructor(configuration: SignalRConfiguration, zone: NgZone);
    createConnection(options?: IConnectionOptions): SignalRConnection;
    connect(options?: IConnectionOptions): Promise<ISignalRConnection>;
    private logConfiguration;
    private merge;
}
