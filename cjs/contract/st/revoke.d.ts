/// <reference types="node" />
import { OperationFact } from "../../types/fact.js";
import { HintedObject } from "../../types/interface.js";
import { STItem } from "./item.js";
import { Address } from "../../account/address.js";
import { Partition } from "./partition.js";
export declare class RevokeOperatorsItem extends STItem {
    readonly operator: Address;
    readonly partition: Partition;
    constructor(contract: string, serviceID: string, operator: string, partition: string, currency: string);
    toBuffer(): Buffer;
    toString(): string;
    toHintedObject(): HintedObject;
}
export declare class RevokeOperatorsFact extends OperationFact<RevokeOperatorsItem> {
    constructor(token: string, sender: string, items: RevokeOperatorsItem[]);
    get operationHint(): string;
}
