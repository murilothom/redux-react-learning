export default function getLocalStorage(key, initial) {
  return window.localStorage.getItem(key) || initial
}