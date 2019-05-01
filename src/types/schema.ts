import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Domain extends Entity {
  constructor(id: string) {
    super();
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

  get labelName(): string | null {
    let value = this.get("labelName");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set labelName(value: string | null) {
    if (value === null) {
      this.unset("labelName");
    } else {
      this.set("labelName", Value.fromString(value as string));
    }
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

  get ttl(): BigInt | null {
    let value = this.get("ttl");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set ttl(value: BigInt | null) {
    if (value === null) {
      this.unset("ttl");
    } else {
      this.set("ttl", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Name extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Name entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Name entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Name", id.toString(), this);
  }

  static load(id: string): Name | null {
    return store.get("Name", id) as Name | null;
  }

  get labelName(): string | null {
    let value = this.get("labelName");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set labelName(value: string | null) {
    if (value === null) {
      this.unset("labelName");
    } else {
      this.set("labelName", Value.fromString(value as string));
    }
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
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
    super();
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

  get domain(): string | null {
    let value = this.get("domain");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set domain(value: string | null) {
    if (value === null) {
      this.unset("domain");
    } else {
      this.set("domain", Value.fromString(value as string));
    }
  }

  get registrationDate(): i32 {
    let value = this.get("registrationDate");
    return value.toI32();
  }

  set registrationDate(value: i32) {
    this.set("registrationDate", Value.fromI32(value));
  }

  get releaseDate(): i32 {
    let value = this.get("releaseDate");
    return value.toI32();
  }

  set releaseDate(value: i32) {
    this.set("releaseDate", Value.fromI32(value));
  }

  get winningBidder(): string | null {
    let value = this.get("winningBidder");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set winningBidder(value: string | null) {
    if (value === null) {
      this.unset("winningBidder");
    } else {
      this.set("winningBidder", Value.fromString(value as string));
    }
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

export class Resolver extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Resolver entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Resolver entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Resolver", id.toString(), this);
  }

  static load(id: string): Resolver | null {
    return store.get("Resolver", id) as Resolver | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get domain(): Bytes {
    let value = this.get("domain");
    return value.toBytes();
  }

  set domain(value: Bytes) {
    this.set("domain", Value.fromBytes(value));
  }

  get resolverEvents(): Array<string> {
    let value = this.get("resolverEvents");
    return value.toStringArray();
  }

  set resolverEvents(value: Array<string>) {
    this.set("resolverEvents", Value.fromStringArray(value));
  }
}

export class ResolverEventCount extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ResolverEventCount entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ResolverEventCount entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ResolverEventCount", id.toString(), this);
  }

  static load(id: string): ResolverEventCount | null {
    return store.get("ResolverEventCount", id) as ResolverEventCount | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }
}

export class AddrChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AddrChanged entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AddrChanged entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AddrChanged", id.toString(), this);
  }

  static load(id: string): AddrChanged | null {
    return store.get("AddrChanged", id) as AddrChanged | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get resolver(): Bytes {
    let value = this.get("resolver");
    return value.toBytes();
  }

  set resolver(value: Bytes) {
    this.set("resolver", Value.fromBytes(value));
  }

  get node(): Bytes {
    let value = this.get("node");
    return value.toBytes();
  }

  set node(value: Bytes) {
    this.set("node", Value.fromBytes(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }
}

export class NameChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save NameChanged entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save NameChanged entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("NameChanged", id.toString(), this);
  }

  static load(id: string): NameChanged | null {
    return store.get("NameChanged", id) as NameChanged | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get resolver(): Bytes {
    let value = this.get("resolver");
    return value.toBytes();
  }

  set resolver(value: Bytes) {
    this.set("resolver", Value.fromBytes(value));
  }

  get node(): Bytes {
    let value = this.get("node");
    return value.toBytes();
  }

  set node(value: Bytes) {
    this.set("node", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }
}

export class AbiChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AbiChanged entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AbiChanged entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AbiChanged", id.toString(), this);
  }

  static load(id: string): AbiChanged | null {
    return store.get("AbiChanged", id) as AbiChanged | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get resolver(): Bytes {
    let value = this.get("resolver");
    return value.toBytes();
  }

  set resolver(value: Bytes) {
    this.set("resolver", Value.fromBytes(value));
  }

  get node(): Bytes {
    let value = this.get("node");
    return value.toBytes();
  }

  set node(value: Bytes) {
    this.set("node", Value.fromBytes(value));
  }

  get contentType(): BigInt {
    let value = this.get("contentType");
    return value.toBigInt();
  }

  set contentType(value: BigInt) {
    this.set("contentType", Value.fromBigInt(value));
  }
}

export class PubkeyChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PubkeyChanged entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PubkeyChanged entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PubkeyChanged", id.toString(), this);
  }

  static load(id: string): PubkeyChanged | null {
    return store.get("PubkeyChanged", id) as PubkeyChanged | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get resolver(): Bytes {
    let value = this.get("resolver");
    return value.toBytes();
  }

  set resolver(value: Bytes) {
    this.set("resolver", Value.fromBytes(value));
  }

  get node(): Bytes {
    let value = this.get("node");
    return value.toBytes();
  }

  set node(value: Bytes) {
    this.set("node", Value.fromBytes(value));
  }

  get x(): Bytes {
    let value = this.get("x");
    return value.toBytes();
  }

  set x(value: Bytes) {
    this.set("x", Value.fromBytes(value));
  }

  get y(): Bytes {
    let value = this.get("y");
    return value.toBytes();
  }

  set y(value: Bytes) {
    this.set("y", Value.fromBytes(value));
  }
}

export class TextChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TextChanged entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TextChanged entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TextChanged", id.toString(), this);
  }

  static load(id: string): TextChanged | null {
    return store.get("TextChanged", id) as TextChanged | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get resolver(): Bytes {
    let value = this.get("resolver");
    return value.toBytes();
  }

  set resolver(value: Bytes) {
    this.set("resolver", Value.fromBytes(value));
  }

  get node(): Bytes {
    let value = this.get("node");
    return value.toBytes();
  }

  set node(value: Bytes) {
    this.set("node", Value.fromBytes(value));
  }

  get indexedKey(): string {
    let value = this.get("indexedKey");
    return value.toString();
  }

  set indexedKey(value: string) {
    this.set("indexedKey", Value.fromString(value));
  }

  get key(): string {
    let value = this.get("key");
    return value.toString();
  }

  set key(value: string) {
    this.set("key", Value.fromString(value));
  }
}

export class ContenthashChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ContenthashChanged entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ContenthashChanged entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ContenthashChanged", id.toString(), this);
  }

  static load(id: string): ContenthashChanged | null {
    return store.get("ContenthashChanged", id) as ContenthashChanged | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get resolver(): Bytes {
    let value = this.get("resolver");
    return value.toBytes();
  }

  set resolver(value: Bytes) {
    this.set("resolver", Value.fromBytes(value));
  }

  get node(): Bytes {
    let value = this.get("node");
    return value.toBytes();
  }

  set node(value: Bytes) {
    this.set("node", Value.fromBytes(value));
  }

  get hash(): Bytes {
    let value = this.get("hash");
    return value.toBytes();
  }

  set hash(value: Bytes) {
    this.set("hash", Value.fromBytes(value));
  }
}

export class InterfaceChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save InterfaceChanged entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save InterfaceChanged entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("InterfaceChanged", id.toString(), this);
  }

  static load(id: string): InterfaceChanged | null {
    return store.get("InterfaceChanged", id) as InterfaceChanged | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get resolver(): Bytes {
    let value = this.get("resolver");
    return value.toBytes();
  }

  set resolver(value: Bytes) {
    this.set("resolver", Value.fromBytes(value));
  }

  get node(): Bytes {
    let value = this.get("node");
    return value.toBytes();
  }

  set node(value: Bytes) {
    this.set("node", Value.fromBytes(value));
  }

  get interfaceID(): Bytes {
    let value = this.get("interfaceID");
    return value.toBytes();
  }

  set interfaceID(value: Bytes) {
    this.set("interfaceID", Value.fromBytes(value));
  }

  get implementer(): Bytes {
    let value = this.get("implementer");
    return value.toBytes();
  }

  set implementer(value: Bytes) {
    this.set("implementer", Value.fromBytes(value));
  }
}

export class AuthorisationChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save AuthorisationChanged entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AuthorisationChanged entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AuthorisationChanged", id.toString(), this);
  }

  static load(id: string): AuthorisationChanged | null {
    return store.get("AuthorisationChanged", id) as AuthorisationChanged | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get resolver(): Bytes {
    let value = this.get("resolver");
    return value.toBytes();
  }

  set resolver(value: Bytes) {
    this.set("resolver", Value.fromBytes(value));
  }

  get node(): Bytes {
    let value = this.get("node");
    return value.toBytes();
  }

  set node(value: Bytes) {
    this.set("node", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get target(): Bytes {
    let value = this.get("target");
    return value.toBytes();
  }

  set target(value: Bytes) {
    this.set("target", Value.fromBytes(value));
  }

  get isAuthorized(): boolean {
    let value = this.get("isAuthorized");
    return value.toBoolean();
  }

  set isAuthorized(value: boolean) {
    this.set("isAuthorized", Value.fromBoolean(value));
  }
}
