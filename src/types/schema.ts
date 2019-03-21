import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt
} from "@graphprotocol/graph-ts";

export class Domain extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Domain entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Domain entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Domain", id.toString(), this);
  }

  static load(id: string): Domain | null {
    return store.get("Domain", id) as Domain | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get labelhash(): Bytes | null {
    let value = this.get("labelhash");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set labelhash(value: Bytes | null) {
    if (value === null) {
      this.unset("labelhash");
    } else {
      this.set("labelhash", Value.fromBytes(value as Bytes));
    }
  }

  get parent(): string | null {
    let value = this.get("parent");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set parent(value: string | null) {
    if (value === null) {
      this.unset("parent");
    } else {
      this.set("parent", Value.fromString(value as string));
    }
  }

  get subdomains(): Array<string> {
    let value = this.get("subdomains");
    return value.toStringArray();
  }

  set subdomains(value: Array<string>) {
    this.set("subdomains", Value.fromStringArray(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get resolver(): Bytes | null {
    let value = this.get("resolver");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set resolver(value: Bytes | null) {
    if (value === null) {
      this.unset("resolver");
    } else {
      this.set("resolver", Value.fromBytes(value as Bytes));
    }
  }

  get ttl(): i32 {
    let value = this.get("ttl");
    return value.toI32();
  }

  set ttl(value: i32) {
    this.set("ttl", Value.fromI32(value));
  }
}

export class Account extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Account entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Account entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Account", id.toString(), this);
  }

  static load(id: string): Account | null {
    return store.get("Account", id) as Account | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get domains(): Array<string> {
    let value = this.get("domains");
    return value.toStringArray();
  }

  set domains(value: Array<string>) {
    this.set("domains", Value.fromStringArray(value));
  }
}

export class AuctionedName extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AuctionedName entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AuctionedName entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AuctionedName", id.toString(), this);
  }

  static load(id: string): AuctionedName | null {
    return store.get("AuctionedName", id) as AuctionedName | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get registrationDate(): i32 {
    let value = this.get("registrationDate");
    return value.toI32();
  }

  set registrationDate(value: i32) {
    this.set("registrationDate", Value.fromI32(value));
  }

  get winningBidder(): string {
    let value = this.get("winningBidder");
    return value.toString();
  }

  set winningBidder(value: string) {
    this.set("winningBidder", Value.fromString(value));
  }

  get maxBid(): BigInt | null {
    let value = this.get("maxBid");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set maxBid(value: BigInt | null) {
    if (value === null) {
      this.unset("maxBid");
    } else {
      this.set("maxBid", Value.fromBigInt(value as BigInt));
    }
  }

  get secondBid(): BigInt | null {
    let value = this.get("secondBid");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set secondBid(value: BigInt | null) {
    if (value === null) {
      this.unset("secondBid");
    } else {
      this.set("secondBid", Value.fromBigInt(value as BigInt));
    }
  }

  get bidCount(): i32 {
    let value = this.get("bidCount");
    return value.toI32();
  }

  set bidCount(value: i32) {
    this.set("bidCount", Value.fromI32(value));
  }

  get state(): string | null {
    let value = this.get("state");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set state(value: string | null) {
    if (value === null) {
      this.unset("state");
    } else {
      this.set("state", Value.fromString(value as string));
    }
  }
}
