import { LoggerTransportOptions, LoggerTransportResult, LoggerTransport } from '@simplyhexagonal/logger/src';
export { version } from '../package.json';
export declare class Multipart {
    boundary: string;
    multipart: string;
    constructor(...data: {
        name: string;
        data: string;
        fileName?: string;
    }[]);
    append(name: string, data: string, fileName?: string): void;
}
export default class DiscordTransport extends LoggerTransport {
    static version: string;
    readonly destination: string;
    private readonly _axios?;
    constructor(options: LoggerTransportOptions['options']);
    debug([prefixes, ...message]: unknown[]): Promise<LoggerTransportResult>;
    info([prefixes, ...message]: unknown[]): Promise<LoggerTransportResult>;
    warn([prefixes, ...message]: unknown[]): Promise<LoggerTransportResult>;
    error([prefixes, ...message]: unknown[]): Promise<LoggerTransportResult>;
    fatal([prefixes, ...message]: unknown[]): Promise<LoggerTransportResult>;
    all([prefixes, ...message]: unknown[]): Promise<LoggerTransportResult>;
    raw([prefixes, ...message]: unknown[]): Promise<LoggerTransportResult>;
    private postToWebhook;
}
