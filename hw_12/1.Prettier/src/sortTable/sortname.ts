import { constants } from '../const/const';
import { createTable } from '../newTable/createtable';

function sortName(par: string) {
  const newArrFromTable = [];
  Array.from(constants.tbody.children).forEach((key) => {
    newArrFromTable.push({
      name: key.children[0].innerHTML,
      height: key.children[1].innerHTML,
      mass: key.children[2].innerHTML,
      gender: key.children[3].innerHTML,
    });
  });
  newArrFromTable.sort(byField(par));
  constants.tbody.innerHTML = '';
  createTable(newArrFromTable);
}

constants.sort1.addEventListener('click', () => sortName('name'));
constants.sort2.addEventListener('click', () => sortName('height'));
constants.sort3.addEventListener('click', () => sortName('mass'));
constants.sort4.addEventListener('click', () => sortName('gender'));

function byField(field: string) {
  if (field === 'name' || field === 'gender') {
    // работа со строками
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  } if (field === 'height' || field === 'mass') {
    // работа с числами
    return (a, b) => a[field] - b[field];
  }
}

// function sortName(par: string) {
//     let newArrFromTable = [];
//     for (let key of constants.tbody.children) {
//         newArrFromTable.push({
//             'name': key.children[0].innerHTML,
//             'height': key.children[1].innerHTML,
//             'mass': key.children[2].innerHTML,
//             'gender': key.children[3].innerHTML
//         })
//     }
//     newArrFromTable.sort(byField(par));
//     // console.dir(newArrFromTable);
//     constants.tbody.innerHTML = '';
//     createTable(newArrFromTable);
// }
