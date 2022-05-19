export function createfetch(url) {
  return fetch(url).then((response) => response.json());
}
