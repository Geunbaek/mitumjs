import { Version, NetworkID, Config } from "./config";
import { block, node, operation } from "../api";
import { Generator } from "../types";
import { Assert, ECODE, MitumError } from "../error";
export { Version, NetworkID, Config, };
export class Node extends Generator {
    constructor(api, delegateIP) {
        super("", api, delegateIP);
    }
    async getNodeInfo() {
        Assert.check(this.api !== undefined || this.api !== null, MitumError.detail(ECODE.NO_API, "no api"));
        return await node.getNode(this.api, this.delegateIP);
    }
}
export class Block extends Generator {
    constructor(api, delegate) {
        super("", api, delegate);
    }
    async getAllBlocks() {
        Assert.check(this.api !== undefined || this.api !== null, MitumError.detail(ECODE.NO_API, "no api"));
        return await block.getBlocks(this.api, this.delegateIP);
    }
    async getBlockByHash(hash) {
        Assert.check(this.api !== undefined || this.api !== null, MitumError.detail(ECODE.NO_API, "no api"));
        return await block.getBlockByHash(this.api, hash, this.delegateIP);
    }
    async getBlockByHeight(height) {
        Assert.check(this.api !== undefined || this.api !== null, MitumError.detail(ECODE.NO_API, "no api"));
        return await block.getBlockByHeight(this.api, height, this.delegateIP);
    }
    async getOperationsByHash(hash) {
        Assert.check(this.api !== undefined || this.api !== null, MitumError.detail(ECODE.NO_API, "no api"));
        return await operation.getBlockOperationsByHash(this.api, hash, this.delegateIP);
    }
    async getOperationsByHeight(height) {
        Assert.check(this.api !== undefined || this.api !== null, MitumError.detail(ECODE.NO_API, "no api"));
        return await operation.getBlockOperationsByHeight(this.api, height, this.delegateIP);
    }
}
//# sourceMappingURL=index.js.map