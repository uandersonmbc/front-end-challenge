function storage(key: string) {
  return {
    get: () => JSON.parse(sessionStorage.getItem(key) ?? "[]"),
    set: <T>(value: T) => sessionStorage.setItem(key, JSON.stringify(value)),
    clear: () => sessionStorage.removeItem(key),
  };
}

export const storedGenres = storage("storedGenres");

export default storage;
