import getRefs from './js/startrefs';
import countriesListTpl from './plagin/countriesList.hbs';
import countryCardTpl from './plagin/countryCard.hbs';
import API from './js/fetchCountries';
const refs = getRefs();
var debounce = require('lodash.debounce');
import { alert, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});
import { defaults } from '@pnotify/core';
defaults.width = '400px';
defaults.delay = '3000';
defaults.minHeight = '86px';

refs.searchForm.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
  if (e.target.value.trim().length === 0) {
    alert({ text: 'Для тебя страна пустое место?!!!Нужны букавки!' });
    e.target.value = '';
    return;
  }
  API.fetchCountry(e.target.value).then(quantityCheckCountries).catch(onFetchError);
}

function quantityCheckCountries(country) {
  console.log(country);
  if (country.status === 404) {
    refs.cardContainer.innerHTML = '';
    alert({ text: 'Can you be norm?!!' });
    return;
  } else if (country.length > 10) {
    refs.cardContainer.innerHTML = '';
    error({ text: 'Please enter a more specific query!' });
    return;
  } else if (country.length > 1) {
    refs.cardContainer.innerHTML = countriesListTpl(country);
    clickBylist();
    return;
  }
  console.log(countryCardTpl(country));
  refs.cardContainer.innerHTML = countryCardTpl(country);
}
function onFetchError(err) {
  refs.cardContainer.innerHTML = '';
  alert({ text: 'Come on baby, press the button!!' });
}

////

/* const newPromis = () => {
  return fetch(document.querySelector('.list-group'));
}; */

const clickBylist = function () {
  const promise = new Promise(resolve => {
    resolve(document.querySelector('.list-group'));
  });

  promise.then(data => {
    data.addEventListener('click', tryThis);
    function tryThis(e) {
      if (e.target.localName === 'li') {
        refs.searchForm.value = e.target.textContent;
        API.fetchCountry(e.target.textContent).then(quantityCheckCountries);

        return;
      }
      return;
    }
  });
};
