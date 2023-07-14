import { Assert, MitumError, ECODE } from "../../utils/error.js";
import { OperationFact } from "../../types/fact.js";
import { Address } from "../../account/address.js";
import { KYCItem } from "./item.js";
const AddControllersItemHint = "mitum-kyc-add-controllers-item";
const AddControllersFactHint = "mitum-kyc-add-controllers-operation-fact";
const AddControllersHint = "mitum-kyc-add-controllers-operation";
const MaxAddControllersItems = 10;
export class AddControllersItem extends KYCItem {
    constructor(contract, serviceID, controller, currency) {
        super(AddControllersItemHint, contract, serviceID, currency);
        this.controller = new Address(controller);
    }
    toBuffer() {
        return Buffer.concat([
            super.toBuffer(),
            this.controller.toBuffer(),
            this.currency.toBuffer(),
        ]);
    }
    toString() {
        return this.controller.toString();
    }
    toHintedObject() {
        return {
            ...super.toHintedObject(),
            controller: this.controller.toString(),
        };
    }
}
export class AddControllersFact extends OperationFact {
    constructor(token, sender, items) {
        super(AddControllersFactHint, token, sender, items);
        items.forEach((item) => {
            Assert.check(item instanceof AddControllersItem, MitumError.detail(ECODE.INVALID_PARAMETER, "The type of items is incorrect."));
            Assert.check(item.contract.toString() !== sender, MitumError.detail(ECODE.INVALID_PARAMETER, "The contract address is the same as the sender address."));
        });
        Assert.check(items.length <= MaxAddControllersItems, MitumError.detail(ECODE.INVALID_PARAMETER, "The number of elements in items is too many."));
        const iSet = new Set(items.map((item) => item.toString()));
        Assert.check(iSet.size === items.length, MitumError.detail(ECODE.INVALID_PARAMETER, "There are duplicate elements in items."));
    }
    get operationHint() {
        return AddControllersHint;
    }
}
//# sourceMappingURL=addController.js.map