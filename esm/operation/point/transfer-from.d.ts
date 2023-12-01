/// <reference types="node" />
import { PointFact } from "./fact";
import { FactJson } from "../base";
import { Big } from "../../types";
import { Address } from "../../key";
import { CurrencyID } from "../../common";
export declare class TransferFromFact extends PointFact {
    readonly receiver: Address;
    readonly target: Address;
    readonly amount: Big;
    constructor(token: string, sender: string | Address, contract: string | Address, currency: string | CurrencyID, receiver: string | Address, target: string | Address, amount: string | number | Big);
    toBuffer(): Buffer;
    toHintedObject(): FactJson;
    get operationHint(): string;
}
