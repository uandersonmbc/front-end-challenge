class Storage {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  async get() {
    return sessionStorage.getItem(this.key);
  }

  set(value: any) {
    const stringValue = JSON.stringify(value);
    return sessionStorage.setItem(this.key, stringValue);
  }

  clear() {
    return sessionStorage.removeItem(this.key);
  }
}

export const storedGenres = new Storage("storedGenres");

export const storedPage = new Storage("storedPage");

export default Storage;
