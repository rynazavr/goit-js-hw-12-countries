import fetchCountries from './apilogic';
import countryCards from '../templates/markup.hbs';
import countriesSrcList from '../templates/markupallcountries.hbs';
import debounce from 'lodash.debounce';
import {
  alert,
  notice,
  info,
  success,
  error,
  defaultModules,
} from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
// import 'material-design-icons/iconfont/material-icons.css';
// import '@pnotify/core/dist/Material.css';
// import { defaults } from '@pnotify/core';
// defaults.styling = 'material';
// defaults.icons = 'material';

const ulList = document.querySelector('.ul_list_countries');
const inputSearch = document.querySelector('#input-name');
// console.log(countryCards);
inputSearch.addEventListener('input', debounce(countryFiller, 800));

function countryFiller(event) {
  const input = event.target.value;
  // console.log(input);
  if (input) {
    fetchCountries(input).then(data => {
      console.log(data[0]);
      console.log(data.length);

      if (data.length === 1) {
        ulList.innerHTML = countryCards(data[0]);
        return;
      } else if (data.length > 1 && data.length < 10) {
        ulList.innerHTML = countriesSrcList(data);
        console.log(data);
        return;
      } else if (data.length >= 10) {
        return error({
          title: 'Too many matches found.',
          text: 'Please, enter a more specific query!',
        });
      }
    });
  }
}

////////////
// fetch('https://restcountries.eu/rest/v2/name/${searchResult}')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     const allLi = markup(data);
//     ulList.insertAdjacentHTML('beforeend', allLi);
//   })
//   .catch(err => console.log(err));

// function markup(countryList) {
//   return countryList.map(item => `<li>${item.name}</li>`).join('');
// }

// function markup(countryList) {
//   return countryList.map(item => countryCards(item)).join('');
// }
