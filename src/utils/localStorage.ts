const getItem = (key: string) => localStorage.getItem(key);

const setItem = (key: string, value: string) =>
  localStorage.setItem(key, value);

export {getItem, setItem};
