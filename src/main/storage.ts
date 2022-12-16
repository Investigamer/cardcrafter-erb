interface Schema {
  autoloadFrame: boolean;
}

export function setValue(key: string, value: unknown) {
  console.log(value);
  return true;
}

export function getValue(key: string) {
  console.log(key);
  return key;
}
