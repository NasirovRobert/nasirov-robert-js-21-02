(function () {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = 'function' == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw ((a.code = 'MODULE_NOT_FOUND'), a);
                }
                var p = (n[i] = { exports: {} });
                e[i][0].call(
                    p.exports,
                    function (r) {
                        var n = e[i][1][r];
                        return o(n || r);
                    },
                    p,
                    p.exports,
                    r,
                    e,
                    n,
                    t
                );
            }
            return n[i].exports;
        }

        for (var u = 'function' == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o;
    }

    return r;
})()(
    {
        1: [
            function (require, module, exports) {
                'use strict';
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
            },
            {}
        ],
        2: [
            function (require, module, exports) {
                'use strict';
                exports.__esModule = true;
                // ------------Таблица SWAPI------------------
                var const_1 = require('./const/const');
                var newTable_1 = require('./newTable/newTable');
                require('./sortTable/sortname');
                var array = ['123', '123', '123'];
                (0, newTable_1.newTable)(const_1.constants.urlStarting);
                console.log('Done hw_12');
            },
            { './const/const': 1, './newTable/newTable': 5, './sortTable/sortname': 6 }
        ],
        3: [
            function (require, module, exports) {
                'use strict';
                exports.__esModule = true;
                exports.createfetch = void 0;

                function createfetch(url) {
                    return fetch(url).then(function (response) {
                        return response.json();
                    });
                }

                exports.createfetch = createfetch;
            },
            {}
        ],
        4: [
            function (require, module, exports) {
                'use strict';
                exports.__esModule = true;
                exports.createTable = void 0;
                var const_1 = require('../const/const');

                function createTable(arrayWithResults) {
                    arrayWithResults.forEach(function (elem) {
                        var tr = document.createElement('tr');
                        tr.innerHTML = '<td>'
                            .concat(elem.name, '</td><td>')
                            .concat(elem.height, '</td><td>')
                            .concat(elem.mass, '</td><td>')
                            .concat(elem.gender, '</td>');
                        const_1.constants.tbody.append(tr);
                    });
                }

                exports.createTable = createTable;
            },
            { '../const/const': 1 }
        ],
        5: [
            function (require, module, exports) {
                'use strict';
                exports.__esModule = true;
                exports.newTable = void 0;
                var const_1 = require('../const/const');
                var createfetch_1 = require('./createfetch');
                var createtable_1 = require('./createtable');

                function newTable(url) {
                    const_1.constants.tbody.innerHTML = '';
                    (0, createfetch_1.createfetch)(url).then(function (result) {
                        (0, createtable_1.createTable)(result.results);
                        if (result.next == null) {
                            const_1.constants.next.style.color = 'red';
                        } else {
                            const_1.constants.next.style.color = 'black';
                        }
                        if (result.previous == null) {
                            const_1.constants.last.style.color = 'red';
                        } else {
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
            },
            { '../const/const': 1, './createfetch': 3, './createtable': 4 }
        ],
        6: [
            function (require, module, exports) {
                'use strict';
                exports.__esModule = true;
                var const_1 = require('../const/const');
                var createtable_1 = require('../newTable/createtable');
                const_1.constants.sort1.addEventListener('click', function () {
                    return sortName('name');
                });
                const_1.constants.sort2.addEventListener('click', function () {
                    return sortName('height');
                });
                const_1.constants.sort3.addEventListener('click', function () {
                    return sortName('mass');
                });
                const_1.constants.sort4.addEventListener('click', function () {
                    return sortName('gender');
                });

                function byField(field) {
                    if (field === 'name' || field === 'gender') {
                        //работа со строками
                        return function (a, b) {
                            return a[field] > b[field] ? 1 : -1;
                        };
                    } else if (field === 'height' || field === 'mass') {
                        //работа с числами
                        return function (a, b) {
                            return a[field] - b[field];
                        };
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
                            name: key.children[0].innerHTML,
                            height: key.children[1].innerHTML,
                            mass: key.children[2].innerHTML,
                            gender: key.children[3].innerHTML
                        });
                    });
                    newArrFromTable.sort(byField(par));
                    const_1.constants.tbody.innerHTML = '';
                    (0, createtable_1.createTable)(newArrFromTable);
                }
            },
            { '../const/const': 1, '../newTable/createtable': 4 }
        ]
    },
    {},
    [2]
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29uc3QvY29uc3QudHMiLCJzcmMvbWFpbi50cyIsInNyYy9uZXdUYWJsZS9jcmVhdGVmZXRjaC50cyIsInNyYy9uZXdUYWJsZS9jcmVhdGV0YWJsZS50cyIsInNyYy9uZXdUYWJsZS9uZXdUYWJsZS50cyIsInNyYy9zb3J0VGFibGUvc29ydG5hbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNBQSxJQUFNLEtBQUssR0FDUCxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ3BDLElBQU0sSUFBSSxHQUNOLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDbkMsSUFBTSxJQUFJLEdBQ04sUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNuQyxJQUFNLFlBQVksR0FDZCwrQkFBK0IsQ0FBQTtBQUVuQyxJQUFNLEtBQUssR0FDUCxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ3BDLElBQU0sS0FBSyxHQUNQLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDcEMsSUFBTSxLQUFLLEdBQ1AsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUNwQyxJQUFNLEtBQUssR0FDUCxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBRXZCLFFBQUEsU0FBUyxHQUFHO0lBQ3JCLEtBQUssRUFBRSxLQUFLO0lBQ1osSUFBSSxFQUFFLElBQUk7SUFDVixJQUFJLEVBQUUsSUFBSTtJQUNWLFdBQVcsRUFBRSxZQUFZO0lBQ3pCLEtBQUssRUFBRSxLQUFLO0lBQ1osS0FBSyxFQUFFLEtBQUs7SUFDWixLQUFLLEVBQUUsS0FBSztJQUNaLEtBQUssRUFBRSxLQUFLO0NBQ2YsQ0FBQTs7Ozs7QUMzQkQsOENBQThDO0FBQzlDLHVDQUF5QztBQUN6Qyxn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QUFJLENBQ04saUJBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUMzQixDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7UUFDVixlQUFlLENBQUMsSUFBSSxDQUFDO1lBQ2pCLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDaEIsU0FBUztZQUNkLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDbEIsU0FBUztZQUNkLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDaEIsU0FBUztZQUNkLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDbEIsU0FBUztTQUNqQixDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDbEMsaUJBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQTtJQUM5QixJQUFBLHlCQUFXLEVBQUMsZUFBZSxDQUFDLENBQUE7QUFDaEMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IFRCT0RZID1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGJvZHknKVxuY29uc3QgTEFTVCA9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhc3QnKVxuY29uc3QgTkVYVCA9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKVxuY29uc3QgVVJMX1NUQVJUSU5HID1cbiAgICAnaHR0cHM6Ly9zd2FwaS5kZXYvYXBpL3Blb3BsZS8nXG5cbmNvbnN0IFNPUlQxID1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29ydDEnKVxuY29uc3QgU09SVDIgPVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3J0MicpXG5jb25zdCBTT1JUMyA9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvcnQzJylcbmNvbnN0IFNPUlQ0ID1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29ydDQnKVxuXG5leHBvcnQgY29uc3QgY29uc3RhbnRzID0ge1xuICAgIHRib2R5OiBUQk9EWSxcbiAgICBsYXN0OiBMQVNULFxuICAgIG5leHQ6IE5FWFQsXG4gICAgdXJsU3RhcnRpbmc6IFVSTF9TVEFSVElORyxcbiAgICBzb3J0MTogU09SVDEsXG4gICAgc29ydDI6IFNPUlQyLFxuICAgIHNvcnQzOiBTT1JUMyxcbiAgICBzb3J0NDogU09SVDQsXG59XG4iLCIvLyAtLS0tLS0tLS0tLS3QotCw0LHQu9C40YbQsCBTV0FQSS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi9jb25zdC9jb25zdCdcbmltcG9ydCB7IG5ld1RhYmxlIH0gZnJvbSAnLi9uZXdUYWJsZS9uZXdUYWJsZSdcbmltcG9ydCAnLi9zb3J0VGFibGUvc29ydG5hbWUnXG5cbmxldCBhcnJheTogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAnMTIzJyxcbiAgICAnMTIzJyxcbiAgICAnMTIzJyxcbl1cblxubmV3VGFibGUoY29uc3RhbnRzLnVybFN0YXJ0aW5nKVxuXG5jb25zb2xlLmxvZyhcIkRvbmUgaHdfMTJcIilcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVmZXRjaCh1cmwpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsKS50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgICAgcmVzcG9uc2UuanNvbigpXG4gICAgKVxufVxuIiwiaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi4vY29uc3QvY29uc3QnXG5cbmludGVyZmFjZSBBcnJheVdpdGhSZXN1bHRzIHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBoZWlnaHQ6IHN0cmluZ1xuICAgIG1hc3M6IHN0cmluZ1xuICAgIGdlbmRlcjogc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWJsZShcbiAgICBhcnJheVdpdGhSZXN1bHRzOiBBcnJheTxBcnJheVdpdGhSZXN1bHRzPlxuKSB7XG4gICAgYXJyYXlXaXRoUmVzdWx0cy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIGxldCB0ciA9XG4gICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpXG4gICAgICAgIHRyLmlubmVySFRNTCA9IGA8dGQ+JHtlbGVtLm5hbWV9PC90ZD48dGQ+JHtlbGVtLmhlaWdodH08L3RkPjx0ZD4ke2VsZW0ubWFzc308L3RkPjx0ZD4ke2VsZW0uZ2VuZGVyfTwvdGQ+YFxuICAgICAgICBjb25zdGFudHMudGJvZHkuYXBwZW5kKHRyKVxuICAgIH0pXG59XG4iLCJpbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuLi9jb25zdC9jb25zdCdcbmltcG9ydCB7IGNyZWF0ZWZldGNoIH0gZnJvbSAnLi9jcmVhdGVmZXRjaCdcbmltcG9ydCB7IGNyZWF0ZVRhYmxlIH0gZnJvbSAnLi9jcmVhdGV0YWJsZSdcblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1RhYmxlKHVybDogc3RyaW5nKSB7XG4gICAgY29uc3RhbnRzLnRib2R5LmlubmVySFRNTCA9ICcnXG4gICAgY3JlYXRlZmV0Y2godXJsKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY3JlYXRlVGFibGUocmVzdWx0LnJlc3VsdHMpXG4gICAgICAgIGlmIChyZXN1bHQubmV4dCA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdGFudHMubmV4dC5zdHlsZS5jb2xvciA9XG4gICAgICAgICAgICAgICAgJ3JlZCdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0YW50cy5uZXh0LnN0eWxlLmNvbG9yID1cbiAgICAgICAgICAgICAgICAnYmxhY2snXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5wcmV2aW91cyA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdGFudHMubGFzdC5zdHlsZS5jb2xvciA9XG4gICAgICAgICAgICAgICAgJ3JlZCdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0YW50cy5sYXN0LnN0eWxlLmNvbG9yID1cbiAgICAgICAgICAgICAgICAnYmxhY2snXG4gICAgICAgIH1cbiAgICAgICAgY29uc3RhbnRzLm5leHQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubmV4dCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbmV3VGFibGUocmVzdWx0Lm5leHQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3RhbnRzLmxhc3Qub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICByZXN1bHQucHJldmlvdXMgIT0gbnVsbFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgbmV3VGFibGUoXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wcmV2aW91c1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG4iLCJpbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuLi9jb25zdC9jb25zdCdcbmltcG9ydCB7IGNyZWF0ZVRhYmxlIH0gZnJvbSAnLi4vbmV3VGFibGUvY3JlYXRldGFibGUnXG5cbmNvbnN0YW50cy5zb3J0MS5hZGRFdmVudExpc3RlbmVyKFxuICAgICdjbGljaycsXG4gICAgKCkgPT4gc29ydE5hbWUoJ25hbWUnKVxuKVxuY29uc3RhbnRzLnNvcnQyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2NsaWNrJyxcbiAgICAoKSA9PiBzb3J0TmFtZSgnaGVpZ2h0JylcbilcbmNvbnN0YW50cy5zb3J0My5hZGRFdmVudExpc3RlbmVyKFxuICAgICdjbGljaycsXG4gICAgKCkgPT4gc29ydE5hbWUoJ21hc3MnKVxuKVxuY29uc3RhbnRzLnNvcnQ0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2NsaWNrJyxcbiAgICAoKSA9PiBzb3J0TmFtZSgnZ2VuZGVyJylcbilcblxuZnVuY3Rpb24gYnlGaWVsZChmaWVsZDogc3RyaW5nKSB7XG4gICAgaWYgKFxuICAgICAgICBmaWVsZCA9PT0gJ25hbWUnIHx8XG4gICAgICAgIGZpZWxkID09PSAnZ2VuZGVyJ1xuICAgICkge1xuICAgICAgICAvL9GA0LDQsdC+0YLQsCDRgdC+INGB0YLRgNC+0LrQsNC80LhcbiAgICAgICAgcmV0dXJuIChhLCBiKSA9PlxuICAgICAgICAgICAgYVtmaWVsZF0gPiBiW2ZpZWxkXSA/IDEgOiAtMVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGZpZWxkID09PSAnaGVpZ2h0JyB8fFxuICAgICAgICBmaWVsZCA9PT0gJ21hc3MnXG4gICAgKSB7XG4gICAgICAgIC8v0YDQsNCx0L7RgtCwINGBINGH0LjRgdC70LDQvNC4XG4gICAgICAgIHJldHVybiAoYSwgYikgPT5cbiAgICAgICAgICAgIGFbZmllbGRdIC0gYltmaWVsZF1cbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHNvcnROYW1lKHBhcjogc3RyaW5nKSB7XG4vLyAgICAgbGV0IG5ld0FyckZyb21UYWJsZSA9IFtdO1xuLy8gICAgIGZvciAobGV0IGtleSBvZiBjb25zdGFudHMudGJvZHkuY2hpbGRyZW4pIHtcbi8vICAgICAgICAgbmV3QXJyRnJvbVRhYmxlLnB1c2goe1xuLy8gICAgICAgICAgICAgJ25hbWUnOiBrZXkuY2hpbGRyZW5bMF0uaW5uZXJIVE1MLFxuLy8gICAgICAgICAgICAgJ2hlaWdodCc6IGtleS5jaGlsZHJlblsxXS5pbm5lckhUTUwsXG4vLyAgICAgICAgICAgICAnbWFzcyc6IGtleS5jaGlsZHJlblsyXS5pbm5lckhUTUwsXG4vLyAgICAgICAgICAgICAnZ2VuZGVyJzoga2V5LmNoaWxkcmVuWzNdLmlubmVySFRNTFxuLy8gICAgICAgICB9KVxuLy8gICAgIH1cbi8vICAgICBuZXdBcnJGcm9tVGFibGUuc29ydChieUZpZWxkKHBhcikpO1xuLy8gICAgIC8vIGNvbnNvbGUuZGlyKG5ld0FyckZyb21UYWJsZSk7XG4vLyAgICAgY29uc3RhbnRzLnRib2R5LmlubmVySFRNTCA9ICcnO1xuLy8gICAgIGNyZWF0ZVRhYmxlKG5ld0FyckZyb21UYWJsZSk7XG4vLyB9XG5cbmZ1bmN0aW9uIHNvcnROYW1lKHBhcjogc3RyaW5nKSB7XG4gICAgbGV0IG5ld0FyckZyb21UYWJsZSA9IFtdXG4gICAgQXJyYXkuZnJvbShcbiAgICAgICAgY29uc3RhbnRzLnRib2R5LmNoaWxkcmVuXG4gICAgKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgbmV3QXJyRnJvbVRhYmxlLnB1c2goe1xuICAgICAgICAgICAgbmFtZToga2V5LmNoaWxkcmVuWzBdXG4gICAgICAgICAgICAgICAgLmlubmVySFRNTCxcbiAgICAgICAgICAgIGhlaWdodDoga2V5LmNoaWxkcmVuWzFdXG4gICAgICAgICAgICAgICAgLmlubmVySFRNTCxcbiAgICAgICAgICAgIG1hc3M6IGtleS5jaGlsZHJlblsyXVxuICAgICAgICAgICAgICAgIC5pbm5lckhUTUwsXG4gICAgICAgICAgICBnZW5kZXI6IGtleS5jaGlsZHJlblszXVxuICAgICAgICAgICAgICAgIC5pbm5lckhUTUwsXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBuZXdBcnJGcm9tVGFibGUuc29ydChieUZpZWxkKHBhcikpXG4gICAgY29uc3RhbnRzLnRib2R5LmlubmVySFRNTCA9ICcnXG4gICAgY3JlYXRlVGFibGUobmV3QXJyRnJvbVRhYmxlKVxufVxuIl19
