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

  get labelhash(): Bytes {
    let value = this.get("labelhash");
    return value.toBytes();
  }

  set labelhash(value: Bytes) {
    this.set("labelhash", Value.fromBytes(value));
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

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
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
