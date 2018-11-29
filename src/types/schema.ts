import {
  TypedMap,
  Entity,
  Value,
  Address,
  Bytes,
  BigInt
} from "@graphprotocol/graph-ts";

export class Domain extends Entity {
  get id(): string {
    let value = this.get("id");
    if (value === null) {
      return null;
    } else {
      return value.toString() as string;
    }
  }

  set id(value: string) {
    if (value === null) {
      this.unset("id");
    } else {
      this.set("id", Value.fromString(value as string));
    }
  }

  get labelhash(): Bytes {
    let value = this.get("labelhash");
    if (value === null) {
      return null;
    } else {
      return value.toBytes() as Bytes;
    }
  }

  set labelhash(value: Bytes) {
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
      return value.toString() as string | null;
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
    if (value === null) {
      return null;
    } else {
      return value.toStringArray() as Array<string>;
    }
  }

  set subdomains(value: Array<string>) {
    if (value === null) {
      this.unset("subdomains");
    } else {
      this.set("subdomains", Value.fromStringArray(value as Array<string>));
    }
  }

  get owner(): Bytes {
    let value = this.get("owner");
    if (value === null) {
      return null;
    } else {
      return value.toBytes() as Bytes;
    }
  }

  set owner(value: Bytes) {
    if (value === null) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromBytes(value as Bytes));
    }
  }

  get resolver(): Bytes | null {
    let value = this.get("resolver");
    if (value === null) {
      return null;
    } else {
      return value.toBytes() as Bytes | null;
    }
  }

  set resolver(value: Bytes | null) {
    if (value === null) {
      this.unset("resolver");
    } else {
      this.set("resolver", Value.fromBytes(value as Bytes));
    }
  }

  get ttl(): i32 | null {
    let value = this.get("ttl");
    if (value === null) {
      return null;
    } else {
      return value.toI32() as i32 | null;
    }
  }

  set ttl(value: i32 | null) {
    if (value === null) {
      this.unset("ttl");
    } else {
      this.set("ttl", Value.fromI32(value as i32));
    }
  }
}
