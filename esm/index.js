import { Generator } from "./types";
import { Block, Node, NetworkID } from "./node";
import { Account, Currency, Contract, NFT, DAO, KYC, STO, TimeStamp, Credential, Token, Point, Operation, Signer, } from "./operation";
export class Mitum extends Generator {
    _node;
    _account;
    _currency;
    _contract;
    _block;
    _operation;
    _signer;
    _nft;
    _credential;
    _timestamp;
    _sto;
    _kyc;
    _dao;
    _token;
    _point;
    constructor(api, delegateIP) {
        super(NetworkID.get(), api, delegateIP);
        this._node = new Node(this.api, this.delegateIP);
        this._account = new Account(this.networkID, this.api, this.delegateIP);
        this._currency = new Currency(this.networkID, this.api, this.delegateIP);
        this._block = new Block(this.api, this.delegateIP);
        this._operation = new Operation(this.networkID, this.api, this.delegateIP);
        this._signer = new Signer(this.networkID, this.api);
        this._contract = new Contract(this.networkID, this.api, this.delegateIP);
        this._nft = new NFT(this.networkID, this.api, this.delegateIP);
        this._credential = new Credential(this.networkID, this.api, this.delegateIP);
        this._timestamp = new TimeStamp(this.networkID, this.api, this.delegateIP);
        this._sto = new STO(this.networkID, this.api, this.delegateIP);
        this._kyc = new KYC(this.networkID, this.api, this.delegateIP);
        this._dao = new DAO(this.networkID, this.api, this.delegateIP);
        this._token = new Token(this.networkID, this.api, this.delegateIP);
        this._point = new Point(this.networkID, this.api, this.delegateIP);
    }
    refresh() {
        this._node = new Node(this.api, this.delegateIP);
        this._account = new Account(this.networkID, this.api, this.delegateIP);
        this._currency = new Currency(this.networkID, this.api, this.delegateIP);
        this._block = new Block(this.api, this.delegateIP);
        this._operation = new Operation(this.networkID, this.api, this.delegateIP);
        this._contract = new Contract(this.networkID, this.api, this.delegateIP);
        this._nft = new NFT(this.networkID, this.api, this.delegateIP);
        this._credential = new Credential(this.networkID, this.api, this.delegateIP);
        this._timestamp = new TimeStamp(this.networkID, this.api, this.delegateIP);
        this._sto = new STO(this.networkID, this.api, this.delegateIP);
        this._kyc = new KYC(this.networkID, this.api, this.delegateIP);
        this._dao = new DAO(this.networkID, this.api, this.delegateIP);
        this._token = new Token(this.networkID, this.api, this.delegateIP);
        this._point = new Point(this.networkID, this.api, this.delegateIP);
    }
    get node() {
        return this._node;
    }
    get account() {
        return this._account;
    }
    get currency() {
        return this._currency;
    }
    get block() {
        return this._block;
    }
    get operation() {
        return this._operation;
    }
    get signer() {
        return this._signer;
    }
    get contract() {
        return this._contract;
    }
    get nft() {
        return this._nft;
    }
    get credential() {
        return this._credential;
    }
    get timestamp() {
        return this._timestamp;
    }
    get sto() {
        return this._sto;
    }
    get kyc() {
        return this._kyc;
    }
    get dao() {
        return this._dao;
    }
    get token() {
        return this._token;
    }
    get point() {
        return this._point;
    }
    /**
     * @deprecated use setAPI(api?: string | IP)
     */
    setNode(api) {
        this.setAPI(api);
    }
    setAPI(api) {
        super.setAPI(api);
        this.refresh();
    }
    setDelegate(delegateIP) {
        super.setDelegate(delegateIP);
        this.refresh();
    }
    getDelegate() {
        return this.delegateIP.toString();
    }
    /**
     * @deprecated use .api (get)
     */
    getNode() {
        return this.api.toString();
    }
    getAPI() {
        return this.api.toString();
    }
    getChain() {
        return this.networkID;
    }
    setChain(networkID) {
        super.setNetworkID(networkID);
        this.refresh();
    }
}
export default Mitum;
//# sourceMappingURL=index.js.map