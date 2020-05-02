const getItem = (key) => localStorage.getItem(key); 

const setItem = (key, value) => localStorage.setItem(key, value);

export {
  getItem,
  setItem,
}