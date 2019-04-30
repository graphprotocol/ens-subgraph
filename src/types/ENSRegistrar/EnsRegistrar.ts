import {
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Transfer extends EthereumEvent {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NewOwner extends EthereumEvent {
  get params(): NewOwner__Params {
    return new NewOwner__Params(this);
  }
}

export class NewOwner__Params {
  _event: NewOwner;

  constructor(event: NewOwner) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get label(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class NewResolver extends EthereumEvent {
  get params(): NewResolver__Params {
    return new NewResolver__Params(this);
  }
}

export class NewResolver__Params {
  _event: NewResolver;

  constructor(event: NewResolver) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get resolver(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NewTTL extends EthereumEvent {
  get params(): NewTTL__Params {
    return new NewTTL__Params(this);
  }
}

export class NewTTL__Params {
  _event: NewTTL;

  constructor(event: NewTTL) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get ttl(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class EnsRegistrar extends SmartContract {
  static bind(address: Address): EnsRegistrar {
    return new EnsRegistrar("EnsRegistrar", address);
  }
}
