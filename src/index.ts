import { Cow } from './cow';
import * as icon from './img/icon.png';
import './sass/main.scss';

const muu: Cow = new Cow();
const message: string = 'is great';

document.querySelector('#box').innerHTML = muu.say(`Webpack with Babel ${message}!`);
document.querySelector("#icon").innerHTML = `<img src=${icon} />`;