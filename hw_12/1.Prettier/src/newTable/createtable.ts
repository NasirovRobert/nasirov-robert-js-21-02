import { constants } from '../const/const';

interface ArrayWithResults {
    name: string;
    height: string;
    mass: string;
    gender: string;
}

export function createTable(arrayWithResults: Array<ArrayWithResults>) {
  arrayWithResults.forEach((elem) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${elem.name}</td><td>${elem.height}</td><td>${elem.mass}</td><td>${elem.gender}</td>`;
    constants.tbody.append(tr);
  });
}
