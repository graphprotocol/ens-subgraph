import {
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Transfer extends EthereumEvent {
  get params(): TransferParams {
    return new TransferParams(this);
  }
}

export class TransferParams {
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
  get params(): NewOwnerParams {
    return new NewOwnerParams(this);
  }
}

export class NewOwnerParams {
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
  get params(): NewResolverParams {
    return new NewResolverParams(this);
  }
}

export class NewResolverParams {
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
  get params(): NewTTLParams {
    return new NewTTLParams(this);
  }
}

export class NewTTLParams {
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
