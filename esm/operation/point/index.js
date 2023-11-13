"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
const register_point_1 = require("./register-point");
const mint_1 = require("./mint");
const burn_1 = require("./burn");
const transfer_1 = require("./transfer");
const approve_1 = require("./approve");
const transfer_from_1 = require("./transfer-from");
const base_1 = require("../base");
const api_1 = require("../../api");
const types_1 = require("../../types");
class Point extends base_1.ContractGenerator {
    constructor(networkID, api) {
        super(networkID, api);
    }
    registerPoint(contractAddr, sender, currency, name, symbol, initialSupply) {
        return new base_1.Operation(this.networkID, new register_point_1.RegisterPointFact(types_1.TimeStamp.new().UTC(), sender, contractAddr, currency, symbol, name, initialSupply ?? 0));
    }
    mint(contractAddr, sender, currency, receiver, amount) {
        return new base_1.Operation(this.networkID, new mint_1.MintFact(types_1.TimeStamp.new().UTC(), sender, contractAddr, currency, receiver, amount));
    }
    burn(contractAddr, sender, currency, target, amount) {
        return new base_1.Operation(this.networkID, new burn_1.BurnFact(types_1.TimeStamp.new().UTC(), sender, contractAddr, currency, target, amount));
    }
    transfer(contractAddr, sender, currency, receiver, amount) {
        return new base_1.Operation(this.networkID, new transfer_1.TransferFact(types_1.TimeStamp.new().UTC(), sender, contractAddr, currency, receiver, amount));
    }
    transferFrom(contractAddr, sender, currency, receiver, target, amount) {
        return new base_1.Operation(this.networkID, new transfer_from_1.TransferFromFact(types_1.TimeStamp.new().UTC(), sender, contractAddr, currency, receiver, target, amount));
    }
    approve(contractAddr, sender, currency, approved, amount) {
        return new base_1.Operation(this.networkID, new approve_1.ApproveFact(types_1.TimeStamp.new().UTC(), sender, contractAddr, currency, approved, amount));
    }
    async getPointInfo(contractAddr) {
        const data = await (0, api_1.getAPIData)(() => api_1.contract.point.getPoint(this.api, contractAddr));
        return data ? data._embedded : null;
    }
    async getAllowance(contractAddr, owner, spender) {
        const data = await (0, api_1.getAPIData)(() => api_1.contract.point.getPoint(this.api, contractAddr));
        if (data) {
            const approve_list = data._embedded.policy.approve_list;
            let amount;
            for (let i = 0; i < approve_list.length; i++) {
                if (approve_list[i].account === owner) {
                    const approved = approve_list[i].approved;
                    for (let j = 0; j < approved.length; j++) {
                        if (approved[j].account === spender) {
                            amount = {
                                'amount': approved[j].amount
                            };
                        }
                    }
                }
            }
            return amount;
        }
        else {
            return null;
        }
    }
    async getPointBalance(contractAddr, owner) {
        const data = await (0, api_1.getAPIData)(() => api_1.contract.point.getPointBalance(this.api, contractAddr, owner));
        return data ? data._embedded : null;
    }
}
exports.Point = Point;
//# sourceMappingURL=index.js.map