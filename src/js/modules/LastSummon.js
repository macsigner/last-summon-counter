export default class LastSummon {
    constructor() {
        const lastSummon = new Date('2024-10-03T10:00:00');
        let days = this._getDays(lastSummon, new Date());

        const boardItems = Array.from(document.querySelectorAll('.board__item'));
        boardItems.reverse();

        days = days.toString().split('');
        days.reverse();


        days.forEach((v, i) => {
            boardItems[i].innerHTML = `
                <span class="paper" style="--rand:${Math.random()}">
                    <span class="paper__inner">${v}</span>
                </span>`;
        });

        fetch('https://randomlovecraft.com/api/sentences?limit=1')
            .then(resp => {
                if(!resp.ok) {
                    throw new Error('Could not fetch quote!');
                }

                return resp.json();
            })
            .then(json => {
                const data = json.data[0];

                this._setLetter({
                    quote: data.sentence,
                    author: 'H.P. Lovecraft',
                    book: data.book.name,
                });
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

    _setLetter(content) {
        const letter = document.createElement('div');
        letter.classList.add('letter-wrapper');

        letter.innerHTML = `
            <dl class="letter">
                <dt class="letter__content">${content.quote}</dt>
                <dd class="letter__book">${content.book}
                    <span class="letter__author">${content.author}</span>
                </dd>
            </dl>
        `;
        document.querySelector('.room__floor').appendChild(letter);
    }
}
