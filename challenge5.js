const date = new Date('Dec 25, 2021');
const date1 = new Date('Dec 2, 2021');
const date2 = new Date('Dec 24, 2021 23:59:59');
const date3 = new Date('Jan 1, 2022 00:00:01');

function daysToXmas(date) {
    const XmasDate = new Date('Dec 25, 2021');
    const remain_ms = XmasDate - date;
    const days = Math.ceil(remain_ms / 86400000);

    return days;
}

console.log(daysToXmas(date));
console.log(daysToXmas(date1));
console.log(daysToXmas(date2));
console.log(daysToXmas(date3));
