"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProposeFact = void 0;
const fact_1 = require("./fact");
const alias_1 = require("../../alias");
class ProposeFact extends fact_1.DAOFact {
    constructor(token, sender, contract, proposalID, proposal, currency) {
        super(alias_1.HINT.DAO.PROPOSE.FACT, token, sender, contract, proposalID, currency);
        this.proposal = proposal;
        this._hash = this.hashing();
    }
    toBuffer() {
        return Buffer.concat([
            super.toBuffer(),
            this.proposal.toBuffer(),
            this.currency.toBuffer(),
        ]);
    }
    toHintedObject() {
        return Object.assign(Object.assign({}, super.toHintedObject()), { proposal: this.proposal.toHintedObject() });
    }
    get operationHint() {
        return alias_1.HINT.DAO.PROPOSE.OPERATION;
    }
}
exports.ProposeFact = ProposeFact;
//# sourceMappingURL=propose.js.map