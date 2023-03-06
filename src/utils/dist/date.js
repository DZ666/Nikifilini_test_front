"use strict";
exports.__esModule = true;
exports.buildCalendar = exports.isToday = exports.isSameDate = void 0;
var moment_1 = require("moment");
function isSameDate(d1, d2) {
    return (d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate());
}
exports.isSameDate = isSameDate;
function isToday(date) {
    return isSameDate(date, new Date());
}
exports.isToday = isToday;
var getDay = function (date) {
    var d = date.getDay() - 1;
    if (d === -1)
        d = 6;
    return d;
};
var getMonthDaysCount = function (originalDate) {
    var date = new Date(originalDate);
    var c = 28;
    var initialMonth = date.getMonth();
    while (date.getMonth() === initialMonth) {
        c++;
        date.setDate(c);
    }
    c--;
    return c;
};
function buildCalendar(date, value) {
    var weeks = [];
    var now = new Date();
    var tmpDate = new Date(date);
    tmpDate.setDate(1);
    var daysCount = getMonthDaysCount(date);
    tmpDate.setMonth(date.getMonth());
    tmpDate.setDate(1);
    var monthStart = getDay(tmpDate);
    tmpDate.setDate(daysCount);
    var monthEnd = getDay(tmpDate);
    var totalDaysCount = daysCount + monthStart + (6 - monthEnd);
    var wc = 0;
    var week = [];
    for (var i = 0; i < totalDaysCount; i++) {
        var d = i - monthStart + 1;
        if (wc === 7) {
            weeks.push(week);
            week = [];
            wc = 0;
        }
        tmpDate = new Date(date);
        tmpDate.setDate(d);
        week.push({
            number: tmpDate.getDate(),
            date: new Date(tmpDate),
            alien: d <= 0 || d > daysCount,
            today: isSameDate(tmpDate, now),
            selected: value ? moment_1["default"](tmpDate).isSame(value) : false
        });
        wc++;
    }
    weeks.push(week);
    return weeks;
}
exports.buildCalendar = buildCalendar;
