import { constants } from '../const/const';
import { createfetch } from './createfetch';
import { createTable } from './createtable';

export function newTable(url: string) {
  constants.tbody.innerHTML = '';
  createfetch(url).then((result) => {
    createTable(result.results);
    if (result.next == null) {
      constants.next.style.color = 'red';
    } else {
      constants.next.style.color = 'black';
    }
    if (result.previous == null) {
      constants.last.style.color = 'red';
    } else {
      constants.last.style.color = 'black';
    }
    constants.next.onclick = () => {
      if (result.next != null) {
        newTable(result.next);
      }
    };
    constants.last.onclick = () => {
      if (result.previous != null) {
        newTable(result.previous);
      }
    };
  });
}
