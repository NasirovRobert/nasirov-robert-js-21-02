(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.constants = void 0;
var TBODY = document.getElementById('tbody');
var LAST = document.getElementById('last');
var NEXT = document.getElementById('next');
var URL_STARTING = 'https://swapi.dev/api/people/';
var SORT1 = document.getElementById('sort1');
var SORT2 = document.getElementById('sort2');
var SORT3 = document.getElementById('sort3');
var SORT4 = document.getElementById('sort4');
exports.constants = {
    tbody: TBODY,
    last: LAST,
    next: NEXT,
    urlStarting: URL_STARTING,
    sort1: SORT1,
    sort2: SORT2,
    sort3: SORT3,
    sort4: SORT4
};

},{}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
// ------------Таблица SWAPI------------------
var const_1 = require("./const/const");
var newTable_1 = require("./newTable/newTable");
require("./sortTable/sortname");
(0, newTable_1.newTable)(const_1.constants.urlStarting);
console.log('Done!!!');

},{"./const/const":1,"./newTable/newTable":5,"./sortTable/sortname":6}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.createfetch = void 0;
function createfetch(url) { return fetch(url).then(function (response) { return response.json(); }); }
exports.createfetch = createfetch;

},{}],4:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.createTable = void 0;
var const_1 = require("../const/const");
function createTable(arrayWithResults) {
    arrayWithResults.forEach(function (elem) {
        var tr = document.createElement('tr');
        tr.innerHTML = "<td>".concat(elem.name, "</td><td>").concat(elem.height, "</td><td>").concat(elem.mass, "</td><td>").concat(elem.gender, "</td>");
        const_1.constants.tbody.append(tr);
    });
}
exports.createTable = createTable;

},{"../const/const":1}],5:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.newTable = void 0;
var const_1 = require("../const/const");
var createfetch_1 = require("./createfetch");
var createtable_1 = require("./createtable");
function newTable(url) {
    const_1.constants.tbody.innerHTML = '';
    (0, createfetch_1.createfetch)(url)
        .then(function (result) {
        (0, createtable_1.createTable)(result.results);
        if (result.next == null) {
            const_1.constants.next.style.color = 'red';
        }
        else {
            const_1.constants.next.style.color = 'black';
        }
        if (result.previous == null) {
            const_1.constants.last.style.color = 'red';
        }
        else {
            const_1.constants.last.style.color = 'black';
        }
        const_1.constants.next.onclick = function () {
            if (result.next != null) {
                newTable(result.next);
            }
        };
        const_1.constants.last.onclick = function () {
            if (result.previous != null) {
                newTable(result.previous);
            }
        };
    });
}
exports.newTable = newTable;

},{"../const/const":1,"./createfetch":3,"./createtable":4}],6:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var const_1 = require("../const/const");
var createtable_1 = require("../newTable/createtable");
const_1.constants.sort1.addEventListener('click', function () { return sortName('name'); });
const_1.constants.sort2.addEventListener('click', function () { return sortName('height'); });
const_1.constants.sort3.addEventListener('click', function () { return sortName('mass'); });
const_1.constants.sort4.addEventListener('click', function () { return sortName('gender'); });
function byField(field) {
    if (field === 'name' || field === 'gender') { //работа со строками
        return function (a, b) { return a[field] > b[field] ? 1 : -1; };
    }
    else if (field === 'height' || field === 'mass') { //работа с числами
        return function (a, b) { return a[field] - b[field]; };
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
function sortName(par) {
    var newArrFromTable = [];
    Array.from(const_1.constants.tbody.children).forEach(function (key) {
        newArrFromTable.push({
            'name': key.children[0].innerHTML,
            'height': key.children[1].innerHTML,
            'mass': key.children[2].innerHTML,
            'gender': key.children[3].innerHTML
        });
    });
    newArrFromTable.sort(byField(par));
    const_1.constants.tbody.innerHTML = '';
    (0, createtable_1.createTable)(newArrFromTable);
}

},{"../const/const":1,"../newTable/createtable":4}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29uc3QvY29uc3QudHMiLCJzcmMvbWFpbi50cyIsInNyYy9uZXdUYWJsZS9jcmVhdGVmZXRjaC50cyIsInNyYy9uZXdUYWJsZS9jcmVhdGV0YWJsZS50cyIsInNyYy9uZXdUYWJsZS9uZXdUYWJsZS50cyIsInNyYy9zb3J0VGFibGUvc29ydG5hbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNBQSxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9DLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0MsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QyxJQUFNLFlBQVksR0FBRywrQkFBK0IsQ0FBQztBQUVyRCxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9DLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0MsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRWxDLFFBQUEsU0FBUyxHQUFHO0lBQ3JCLEtBQUssRUFBRSxLQUFLO0lBQ1osSUFBSSxFQUFFLElBQUk7SUFDVixJQUFJLEVBQUUsSUFBSTtJQUNWLFdBQVcsRUFBRSxZQUFZO0lBQ3pCLEtBQUssRUFBRSxLQUFLO0lBQ1osS0FBSyxFQUFFLEtBQUs7SUFDWixLQUFLLEVBQUUsS0FBSztJQUNaLEtBQUssRUFBRSxLQUFLO0NBQ2YsQ0FBQzs7Ozs7QUNuQkYsOENBQThDO0FBQzlDLHVDQUF1QztBQUN2Qyxn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QUFDLElBQUksQ0FBQztZQUNqQixNQUFNLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQ2pDLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDbkMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNqQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1NBQ3RDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0gsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuQyxpQkFBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQy9CLElBQUEseUJBQVcsRUFBQyxlQUFlLENBQUMsQ0FBQztBQUNqQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgVEJPRFkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGJvZHknKTtcbmNvbnN0IExBU1QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdCcpO1xuY29uc3QgTkVYVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0Jyk7XG5jb25zdCBVUkxfU1RBUlRJTkcgPSAnaHR0cHM6Ly9zd2FwaS5kZXYvYXBpL3Blb3BsZS8nO1xuXG5jb25zdCBTT1JUMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3J0MScpO1xuY29uc3QgU09SVDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29ydDInKTtcbmNvbnN0IFNPUlQzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvcnQzJyk7XG5jb25zdCBTT1JUNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3J0NCcpO1xuXG5leHBvcnQgY29uc3QgY29uc3RhbnRzID0ge1xuICAgIHRib2R5OiBUQk9EWSxcbiAgICBsYXN0OiBMQVNULFxuICAgIG5leHQ6IE5FWFQsXG4gICAgdXJsU3RhcnRpbmc6IFVSTF9TVEFSVElORyxcbiAgICBzb3J0MTogU09SVDEsXG4gICAgc29ydDI6IFNPUlQyLFxuICAgIHNvcnQzOiBTT1JUMyxcbiAgICBzb3J0NDogU09SVDQsXG59O1xuXG4iLCIvLyAtLS0tLS0tLS0tLS3QotCw0LHQu9C40YbQsCBTV0FQSS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4vY29uc3QvY29uc3QnXG5pbXBvcnQge25ld1RhYmxlfSBmcm9tIFwiLi9uZXdUYWJsZS9uZXdUYWJsZVwiO1xuaW1wb3J0ICcuL3NvcnRUYWJsZS9zb3J0bmFtZSc7XG5cblxubmV3VGFibGUoY29uc3RhbnRzLnVybFN0YXJ0aW5nKTtcblxuY29uc29sZS5sb2coJ0RvbmUhISEnKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVmZXRjaCh1cmwpIHsgcmV0dXJuICBmZXRjaCh1cmwpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKX1cbiIsImltcG9ydCB7Y29uc3RhbnRzfSBmcm9tIFwiLi4vY29uc3QvY29uc3RcIjtcblxuaW50ZXJmYWNlIEFycmF5V2l0aFJlc3VsdHMge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBoZWlnaHQ6IHN0cmluZyxcbiAgICBtYXNzOiBzdHJpbmcsXG4gICAgZ2VuZGVyOiBzdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhYmxlKGFycmF5V2l0aFJlc3VsdHM6IEFycmF5PEFycmF5V2l0aFJlc3VsdHM+KSB7XG4gICAgYXJyYXlXaXRoUmVzdWx0cy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICBsZXQgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICB0ci5pbm5lckhUTUwgPSBgPHRkPiR7ZWxlbS5uYW1lfTwvdGQ+PHRkPiR7ZWxlbS5oZWlnaHR9PC90ZD48dGQ+JHtlbGVtLm1hc3N9PC90ZD48dGQ+JHtlbGVtLmdlbmRlcn08L3RkPmA7XG4gICAgICAgIGNvbnN0YW50cy50Ym9keS5hcHBlbmQodHIpXG4gICAgfSk7XG59XG4iLCJpbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3QvY29uc3QnXG5pbXBvcnQge2NyZWF0ZWZldGNofSBmcm9tIFwiLi9jcmVhdGVmZXRjaFwiO1xuaW1wb3J0IHtjcmVhdGVUYWJsZX0gZnJvbSBcIi4vY3JlYXRldGFibGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1RhYmxlKHVybDogc3RyaW5nKSB7XG4gICAgY29uc3RhbnRzLnRib2R5LmlubmVySFRNTCA9ICcnO1xuICAgIGNyZWF0ZWZldGNoKHVybClcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZVRhYmxlKHJlc3VsdC5yZXN1bHRzKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubmV4dCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3RhbnRzLm5leHQuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3RhbnRzLm5leHQuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5wcmV2aW91cyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3RhbnRzLmxhc3Quc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3RhbnRzLmxhc3Quc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3RhbnRzLm5leHQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm5leHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdUYWJsZShyZXN1bHQubmV4dClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3RhbnRzLmxhc3Qub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnByZXZpb3VzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFibGUocmVzdWx0LnByZXZpb3VzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pXG59XG4iLCJpbXBvcnQge2NvbnN0YW50c30gZnJvbSBcIi4uL2NvbnN0L2NvbnN0XCI7XG5pbXBvcnQge2NyZWF0ZVRhYmxlfSBmcm9tIFwiLi4vbmV3VGFibGUvY3JlYXRldGFibGVcIjtcblxuY29uc3RhbnRzLnNvcnQxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiBzb3J0TmFtZSgnbmFtZScpKTtcbmNvbnN0YW50cy5zb3J0Mi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4gc29ydE5hbWUoJ2hlaWdodCcpKTtcbmNvbnN0YW50cy5zb3J0My5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4gc29ydE5hbWUoJ21hc3MnKSk7XG5jb25zdGFudHMuc29ydDQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHNvcnROYW1lKCdnZW5kZXInKSk7XG5cblxuXG5mdW5jdGlvbiBieUZpZWxkKGZpZWxkOiBzdHJpbmcpIHtcbiAgICBpZiAoZmllbGQgPT09ICduYW1lJyB8fCBmaWVsZCA9PT0gJ2dlbmRlcicpIHsgLy/RgNCw0LHQvtGC0LAg0YHQviDRgdGC0YDQvtC60LDQvNC4XG4gICAgICAgIHJldHVybiAoYSwgYikgPT4gYVtmaWVsZF0gPiBiW2ZpZWxkXSA/IDEgOiAtMTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmllbGQgPT09ICdoZWlnaHQnIHx8IGZpZWxkID09PSAnbWFzcycpIHsgLy/RgNCw0LHQvtGC0LAg0YEg0YfQuNGB0LvQsNC80LhcbiAgICAgICAgcmV0dXJuIChhLCBiKSA9PiAgYVtmaWVsZF0gLSBiW2ZpZWxkXTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHNvcnROYW1lKHBhcjogc3RyaW5nKSB7XG4vLyAgICAgbGV0IG5ld0FyckZyb21UYWJsZSA9IFtdO1xuLy8gICAgIGZvciAobGV0IGtleSBvZiBjb25zdGFudHMudGJvZHkuY2hpbGRyZW4pIHtcbi8vICAgICAgICAgbmV3QXJyRnJvbVRhYmxlLnB1c2goe1xuLy8gICAgICAgICAgICAgJ25hbWUnOiBrZXkuY2hpbGRyZW5bMF0uaW5uZXJIVE1MLFxuLy8gICAgICAgICAgICAgJ2hlaWdodCc6IGtleS5jaGlsZHJlblsxXS5pbm5lckhUTUwsXG4vLyAgICAgICAgICAgICAnbWFzcyc6IGtleS5jaGlsZHJlblsyXS5pbm5lckhUTUwsXG4vLyAgICAgICAgICAgICAnZ2VuZGVyJzoga2V5LmNoaWxkcmVuWzNdLmlubmVySFRNTFxuLy8gICAgICAgICB9KVxuLy8gICAgIH1cbi8vICAgICBuZXdBcnJGcm9tVGFibGUuc29ydChieUZpZWxkKHBhcikpO1xuLy8gICAgIC8vIGNvbnNvbGUuZGlyKG5ld0FyckZyb21UYWJsZSk7XG4vLyAgICAgY29uc3RhbnRzLnRib2R5LmlubmVySFRNTCA9ICcnO1xuLy8gICAgIGNyZWF0ZVRhYmxlKG5ld0FyckZyb21UYWJsZSk7XG4vLyB9XG5cbmZ1bmN0aW9uIHNvcnROYW1lKHBhcjogc3RyaW5nKSB7XG4gICAgbGV0IG5ld0FyckZyb21UYWJsZSA9IFtdO1xuICAgIEFycmF5LmZyb20oY29uc3RhbnRzLnRib2R5LmNoaWxkcmVuKS5mb3JFYWNoKChrZXkpPT4ge1xuICAgICAgICBuZXdBcnJGcm9tVGFibGUucHVzaCh7XG4gICAgICAgICAgICAnbmFtZSc6IGtleS5jaGlsZHJlblswXS5pbm5lckhUTUwsXG4gICAgICAgICAgICAnaGVpZ2h0Jzoga2V5LmNoaWxkcmVuWzFdLmlubmVySFRNTCxcbiAgICAgICAgICAgICdtYXNzJzoga2V5LmNoaWxkcmVuWzJdLmlubmVySFRNTCxcbiAgICAgICAgICAgICdnZW5kZXInOiBrZXkuY2hpbGRyZW5bM10uaW5uZXJIVE1MXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIG5ld0FyckZyb21UYWJsZS5zb3J0KGJ5RmllbGQocGFyKSk7XG4gICAgY29uc3RhbnRzLnRib2R5LmlubmVySFRNTCA9ICcnO1xuICAgIGNyZWF0ZVRhYmxlKG5ld0FyckZyb21UYWJsZSk7XG59XG4iXX0=
