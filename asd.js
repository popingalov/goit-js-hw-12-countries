export default class FetchObject {
  constructor(BASE_URL, ednPoint, options) {
    this.BASE_URL = BASE_URL;
    this.ednPoint = ednPoint;
    this.options = options;
    this._query = '';
    this._page = 1;
    this.perPage = 5;
  }
  get query() {
    return this._query;
  }
  set query(value) {
    return (this._query = value);
  }

  get page() {
    return this._page;
  }
  set page(value) {
    return (this._page += value);
  }
  generateMarkup(array) {
    return array
      .map(elem => {
        const {
          photographer,
          src: { tiny, original },
        } = elem;
        return `
  <li>
    <img src="${tiny}" data-src="${original}" alt="${photographer}" />
  </li>
  `;
      })
      .join('');
  }
  getFetch(listRef) {
    let params = `?query=${this._query}&per_page=${this.perPage}&page=${this._page}`;
    let url = this.BASE_URL + this.ednPoint + params;
    fetch(url, this.options)
      .then(response => response.json())
      .then(data => data.photos)
      .then(array => {
        let result = this.generateMarkup(array);
        listRef.insertAdjacentHTML('beforeend', result);
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
    //   .finally(() => formRef.reset())
  }

  getFetchBySubmit(formRef, listRef) {
    formRef.addEventListener('submit', e => {
      // console.log(e)
      e.preventDefault();
      console.dir(e.target.elements.input);
      this.query = e.target.elements.input.value; // устанавливаем новое значение через setter
      listRef.innerHTML = '';
      if (this.query) {
        this.getFetch(listRef);
      } else {
        e.target.elements.input.disabled = true;
        alert(`Enter the search value`);
      }
      formRef.reset();
    });
  }

  getFetchByClick(btnRef, listRef) {
    btnRef.addEventListener('click', () => {
      this.page = 1; // сеттер номера страницы
      this.getFetch(listRef);
    });
  }
}
