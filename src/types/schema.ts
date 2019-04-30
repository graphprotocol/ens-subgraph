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

  get node(): Bytes | null {
    let value = this.get("node");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set node(value: Bytes | null) {
    if (value === null) {
      this.unset("node");
    } else {
      this.set("node", Value.fromBytes(value as Bytes));
    }
  }

  get label(): Bytes | null {
    let value = this.get("label");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set label(value: Bytes | null) {
    if (value === null) {
      this.unset("label");
    } else {
      this.set("label", Value.fromBytes(value as Bytes));
    }
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

  get domainName(): string | null {
    let value = this.get("domainName");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set domainName(value: string | null) {
    if (value === null) {
      this.unset("domainName");
    } else {
      this.set("domainName", Value.fromString(value as string));
    }
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get pastOwners(): Array<Bytes> {
    let value = this.get("pastOwners");
    return value.toBytesArray();
  }

  set pastOwners(value: Array<Bytes>) {
    this.set("pastOwners", Value.fromBytesArray(value));
  }

  get subDomains(): Array<string> {
    let value = this.get("subDomains");
    return value.toStringArray();
  }

  set subDomains(value: Array<string>) {
    this.set("subDomains", Value.fromStringArray(value));
  }
}

export class ENSEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ENSEvent entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ENSEvent entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ENSEvent", id.toString(), this);
  }

  static load(id: string): ENSEvent | null {
    return store.get("ENSEvent", id) as ENSEvent | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get node(): Bytes {
    let value = this.get("node");
    return value.toBytes();
  }

  set node(value: Bytes) {
    this.set("node", Value.fromBytes(value));
  }

  get resolver(): Bytes {
    let value = this.get("resolver");
    return value.toBytes();
  }

  set resolver(value: Bytes) {
    this.set("resolver", Value.fromBytes(value));
  }

  get a(): Bytes | null {
    let value = this.get("a");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set a(value: Bytes | null) {
    if (value === null) {
      this.unset("a");
    } else {
      this.set("a", Value.fromBytes(value as Bytes));
    }
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get contentType(): BigInt | null {
    let value = this.get("contentType");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set contentType(value: BigInt | null) {
    if (value === null) {
      this.unset("contentType");
    } else {
      this.set("contentType", Value.fromBigInt(value as BigInt));
    }
  }

  get x(): Bytes | null {
    let value = this.get("x");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set x(value: Bytes | null) {
    if (value === null) {
      this.unset("x");
    } else {
      this.set("x", Value.fromBytes(value as Bytes));
    }
  }

  get y(): Bytes | null {
    let value = this.get("y");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set y(value: Bytes | null) {
    if (value === null) {
      this.unset("y");
    } else {
      this.set("y", Value.fromBytes(value as Bytes));
    }
  }

  get indexedKey(): string | null {
    let value = this.get("indexedKey");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set indexedKey(value: string | null) {
    if (value === null) {
      this.unset("indexedKey");
    } else {
      this.set("indexedKey", Value.fromString(value as string));
    }
  }

  get key(): string | null {
    let value = this.get("key");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set key(value: string | null) {
    if (value === null) {
      this.unset("key");
    } else {
      this.set("key", Value.fromString(value as string));
    }
  }

  get hash(): Bytes | null {
    let value = this.get("hash");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set hash(value: Bytes | null) {
    if (value === null) {
      this.unset("hash");
    } else {
      this.set("hash", Value.fromBytes(value as Bytes));
    }
  }

  get interfaceID(): Bytes | null {
    let value = this.get("interfaceID");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set interfaceID(value: Bytes | null) {
    if (value === null) {
      this.unset("interfaceID");
    } else {
      this.set("interfaceID", Value.fromBytes(value as Bytes));
    }
  }

  get implementer(): Bytes | null {
    let value = this.get("implementer");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set implementer(value: Bytes | null) {
    if (value === null) {
      this.unset("implementer");
    } else {
      this.set("implementer", Value.fromBytes(value as Bytes));
    }
  }

  get owner(): Bytes | null {
    let value = this.get("owner");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes | null) {
    if (value === null) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromBytes(value as Bytes));
    }
  }

  get target(): Bytes | null {
    let value = this.get("target");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set target(value: Bytes | null) {
    if (value === null) {
      this.unset("target");
    } else {
      this.set("target", Value.fromBytes(value as Bytes));
    }
  }

  get isAuthorized(): boolean {
    let value = this.get("isAuthorized");
    return value.toBoolean();
  }

  set isAuthorized(value: boolean) {
    this.set("isAuthorized", Value.fromBoolean(value));
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
}
