export default class Counter {
    constructor() {
        const lastSummon = new Date('2024-09-30T10:00:00');
        let days = this._getDays(lastSummon, new Date());

        const shields = Array.from(document.querySelectorAll('.shield'));
        shields.reverse();

        days = days.toString().split('');
        days.reverse();

        days.forEach((v, i) => {
            shields[i].innerHTML = `<span class="paper">${v}</span>`;
        });
    }

    _getDays(start, end) {
        let count = 0;
        const endDate = new Date(end);

        for(let date = new Date(start); date < endDate; date.setDate(date.getDate() + 1)) {
            count++;
        }

        return count;
    }
}
