/*
 * Skilgreina breytur
 */
let isk;
let usd;
let gbp;
let eur;
let cad;
let dkk;
let nok;
let sek;
let chf;
let jpy;
let xdr;
let aud;
let zar;
let hkd;
let nzd;
let pln;
let sgd;
let cny;
let gvt;

/*
 * Frumstillir breytur sem input glugga
 */
/* eslint-disable no-undef */
function init() {
  isk = document.getElementById('ISK');
  usd = document.getElementById('USD');
  gbp = document.getElementById('GBP');
  eur = document.getElementById('EUR');
  cad = document.getElementById('CAD');
  dkk = document.getElementById('DKK');
  nok = document.getElementById('NOK');
  sek = document.getElementById('SEK');
  chf = document.getElementById('CHF');
  jpy = document.getElementById('JPY');
  xdr = document.getElementById('XDR');
  aud = document.getElementById('AUD');
  zar = document.getElementById('ZAR');
  hkd = document.getElementById('HKD');
  nzd = document.getElementById('NZD');
  pln = document.getElementById('PLN');
  sgd = document.getElementById('SGD');
  cny = document.getElementById('CNY');
  gvt = document.getElementById('GVT');
}
/* eslint-enable no-undef */

/*
 * Fall sem setur tölurnar sem koma úr reikningnum á formið '1.234,56'
 */
function formatNum(input) {
  input += '';
  const x = input.split('.');
  let x1 = x[0];
  let x2 = x.length > 1 ? '.' + x[1] : '';
  const regex = /(\d+)(\d{3})/;
  while (regex.test(x1)) {
    x1 = x1.replace(regex, '$1' + '.' + '$2');
  }
  x2 = x2.replace('.', ',');
  return x1 + x2;
}

/*
 * Föll sem reikna út gengi gjaldmiðla út frá innslætti tölu í input glugga
 */
/* eslint-disable no-unused-vars */
function iskfunc() {
  usd.value = formatNum((isk.value / usd.placeholder).toFixed(2));
  gbp.value = formatNum((isk.value / gbp.placeholder).toFixed(2));
  eur.value = formatNum((isk.value / eur.placeholder).toFixed(2));
  cad.value = formatNum((isk.value / cad.placeholder).toFixed(2));
  dkk.value = formatNum((isk.value / dkk.placeholder).toFixed(2));
  nok.value = formatNum((isk.value / nok.placeholder).toFixed(2));
  sek.value = formatNum((isk.value / sek.placeholder).toFixed(2));
  chf.value = formatNum((isk.value / chf.placeholder).toFixed(2));
  jpy.value = formatNum((isk.value / jpy.placeholder).toFixed(2));
  xdr.value = formatNum((isk.value / xdr.placeholder).toFixed(2));
  aud.value = formatNum((isk.value / aud.placeholder).toFixed(2));
  zar.value = formatNum((isk.value / zar.placeholder).toFixed(2));
  hkd.value = formatNum((isk.value / hkd.placeholder).toFixed(2));
  nzd.value = formatNum((isk.value / nzd.placeholder).toFixed(2));
  pln.value = formatNum((isk.value / pln.placeholder).toFixed(2));
  sgd.value = formatNum((isk.value / sgd.placeholder).toFixed(2));
  cny.value = formatNum((isk.value / cny.placeholder).toFixed(2));
  gvt.value = formatNum((isk.value / gvt.placeholder).toFixed(2));
}

function usdfunc() {
  isk.value = formatNum((usd.value * usd.placeholder).toFixed(2));
  gbp.value = formatNum(((usd.value * usd.placeholder) / gbp.placeholder).toFixed(2));
  eur.value = formatNum(((usd.value * usd.placeholder) / eur.placeholder).toFixed(2));
  cad.value = formatNum(((usd.value * usd.placeholder) / cad.placeholder).toFixed(2));
  dkk.value = formatNum(((usd.value * usd.placeholder) / dkk.placeholder).toFixed(2));
  nok.value = formatNum(((usd.value * usd.placeholder) / nok.placeholder).toFixed(2));
  sek.value = formatNum(((usd.value * usd.placeholder) / sek.placeholder).toFixed(2));
  chf.value = formatNum(((usd.value * usd.placeholder) / chf.placeholder).toFixed(2));
  jpy.value = formatNum(((usd.value * usd.placeholder) / jpy.placeholder).toFixed(2));
  xdr.value = formatNum(((usd.value * usd.placeholder) / xdr.placeholder).toFixed(2));
  aud.value = formatNum(((usd.value * usd.placeholder) / aud.placeholder).toFixed(2));
  zar.value = formatNum(((usd.value * usd.placeholder) / zar.placeholder).toFixed(2));
  hkd.value = formatNum(((usd.value * usd.placeholder) / hkd.placeholder).toFixed(2));
  nzd.value = formatNum(((usd.value * usd.placeholder) / nzd.placeholder).toFixed(2));
  pln.value = formatNum(((usd.value * usd.placeholder) / pln.placeholder).toFixed(2));
  sgd.value = formatNum(((usd.value * usd.placeholder) / sgd.placeholder).toFixed(2));
  cny.value = formatNum(((usd.value * usd.placeholder) / cny.placeholder).toFixed(2));
  gvt.value = formatNum(((usd.value * usd.placeholder) / gvt.placeholder).toFixed(2));
}

function gbpfunc() {
  isk.value = formatNum((gbp.value * gbp.placeholder).toFixed(2));
  usd.value = formatNum(((gbp.value * gbp.placeholder) / usd.placeholder).toFixed(2));
  eur.value = formatNum(((gbp.value * gbp.placeholder) / eur.placeholder).toFixed(2));
  cad.value = formatNum(((gbp.value * gbp.placeholder) / cad.placeholder).toFixed(2));
  dkk.value = formatNum(((gbp.value * gbp.placeholder) / dkk.placeholder).toFixed(2));
  nok.value = formatNum(((gbp.value * gbp.placeholder) / nok.placeholder).toFixed(2));
  sek.value = formatNum(((gbp.value * gbp.placeholder) / sek.placeholder).toFixed(2));
  chf.value = formatNum(((gbp.value * gbp.placeholder) / chf.placeholder).toFixed(2));
  jpy.value = formatNum(((gbp.value * gbp.placeholder) / jpy.placeholder).toFixed(2));
  xdr.value = formatNum(((gbp.value * gbp.placeholder) / xdr.placeholder).toFixed(2));
  aud.value = formatNum(((gbp.value * gbp.placeholder) / aud.placeholder).toFixed(2));
  zar.value = formatNum(((gbp.value * gbp.placeholder) / zar.placeholder).toFixed(2));
  hkd.value = formatNum(((gbp.value * gbp.placeholder) / hkd.placeholder).toFixed(2));
  nzd.value = formatNum(((gbp.value * gbp.placeholder) / nzd.placeholder).toFixed(2));
  pln.value = formatNum(((gbp.value * gbp.placeholder) / pln.placeholder).toFixed(2));
  sgd.value = formatNum(((gbp.value * gbp.placeholder) / sgd.placeholder).toFixed(2));
  cny.value = formatNum(((gbp.value * gbp.placeholder) / cny.placeholder).toFixed(2));
  gvt.value = formatNum(((gbp.value * gbp.placeholder) / gvt.placeholder).toFixed(2));
}

function eurfunc() {
  isk.value = formatNum((eur.value * eur.placeholder).toFixed(2));
  usd.value = formatNum(((eur.value * eur.placeholder) / usd.placeholder).toFixed(2));
  gbp.value = formatNum(((eur.value * eur.placeholder) / gbp.placeholder).toFixed(2));
  cad.value = formatNum(((eur.value * eur.placeholder) / cad.placeholder).toFixed(2));
  dkk.value = formatNum(((eur.value * eur.placeholder) / dkk.placeholder).toFixed(2));
  nok.value = formatNum(((eur.value * eur.placeholder) / nok.placeholder).toFixed(2));
  sek.value = formatNum(((eur.value * eur.placeholder) / sek.placeholder).toFixed(2));
  chf.value = formatNum(((eur.value * eur.placeholder) / chf.placeholder).toFixed(2));
  jpy.value = formatNum(((eur.value * eur.placeholder) / jpy.placeholder).toFixed(2));
  xdr.value = formatNum(((eur.value * eur.placeholder) / xdr.placeholder).toFixed(2));
  aud.value = formatNum(((eur.value * eur.placeholder) / aud.placeholder).toFixed(2));
  zar.value = formatNum(((eur.value * eur.placeholder) / zar.placeholder).toFixed(2));
  hkd.value = formatNum(((eur.value * eur.placeholder) / hkd.placeholder).toFixed(2));
  nzd.value = formatNum(((eur.value * eur.placeholder) / nzd.placeholder).toFixed(2));
  pln.value = formatNum(((eur.value * eur.placeholder) / pln.placeholder).toFixed(2));
  sgd.value = formatNum(((eur.value * eur.placeholder) / sgd.placeholder).toFixed(2));
  cny.value = formatNum(((eur.value * eur.placeholder) / cny.placeholder).toFixed(2));
  gvt.value = formatNum(((eur.value * eur.placeholder) / gvt.placeholder).toFixed(2));
}

function cadfunc() {
  isk.value = formatNum((cad.value * cad.placeholder).toFixed(2));
  usd.value = formatNum(((cad.value * cad.placeholder) / usd.placeholder).toFixed(2));
  gbp.value = formatNum(((cad.value * cad.placeholder) / gbp.placeholder).toFixed(2));
  eur.value = formatNum(((cad.value * cad.placeholder) / eur.placeholder).toFixed(2));
  dkk.value = formatNum(((cad.value * cad.placeholder) / dkk.placeholder).toFixed(2));
  nok.value = formatNum(((cad.value * cad.placeholder) / nok.placeholder).toFixed(2));
  sek.value = formatNum(((cad.value * cad.placeholder) / sek.placeholder).toFixed(2));
  chf.value = formatNum(((cad.value * cad.placeholder) / chf.placeholder).toFixed(2));
  jpy.value = formatNum(((cad.value * cad.placeholder) / jpy.placeholder).toFixed(2));
  xdr.value = formatNum(((cad.value * cad.placeholder) / xdr.placeholder).toFixed(2));
  aud.value = formatNum(((cad.value * cad.placeholder) / aud.placeholder).toFixed(2));
  zar.value = formatNum(((cad.value * cad.placeholder) / zar.placeholder).toFixed(2));
  hkd.value = formatNum(((cad.value * cad.placeholder) / hkd.placeholder).toFixed(2));
  nzd.value = formatNum(((cad.value * cad.placeholder) / nzd.placeholder).toFixed(2));
  pln.value = formatNum(((cad.value * cad.placeholder) / pln.placeholder).toFixed(2));
  sgd.value = formatNum(((cad.value * cad.placeholder) / sgd.placeholder).toFixed(2));
  cny.value = formatNum(((cad.value * cad.placeholder) / cny.placeholder).toFixed(2));
  gvt.value = formatNum(((cad.value * cad.placeholder) / gvt.placeholder).toFixed(2));
}

function dkkfunc() {
  isk.value = formatNum((dkk.value * dkk.placeholder).toFixed(2));
  usd.value = formatNum(((dkk.value * dkk.placeholder) / usd.placeholder).toFixed(2));
  gbp.value = formatNum(((dkk.value * dkk.placeholder) / gbp.placeholder).toFixed(2));
  eur.value = formatNum(((dkk.value * dkk.placeholder) / eur.placeholder).toFixed(2));
  cad.value = formatNum(((dkk.value * dkk.placeholder) / cad.placeholder).toFixed(2));
  nok.value = formatNum(((dkk.value * dkk.placeholder) / nok.placeholder).toFixed(2));
  sek.value = formatNum(((dkk.value * dkk.placeholder) / sek.placeholder).toFixed(2));
  chf.value = formatNum(((dkk.value * dkk.placeholder) / chf.placeholder).toFixed(2));
  jpy.value = formatNum(((dkk.value * dkk.placeholder) / jpy.placeholder).toFixed(2));
  xdr.value = formatNum(((dkk.value * dkk.placeholder) / xdr.placeholder).toFixed(2));
  aud.value = formatNum(((dkk.value * dkk.placeholder) / aud.placeholder).toFixed(2));
  zar.value = formatNum(((dkk.value * dkk.placeholder) / zar.placeholder).toFixed(2));
  hkd.value = formatNum(((dkk.value * dkk.placeholder) / hkd.placeholder).toFixed(2));
  nzd.value = formatNum(((dkk.value * dkk.placeholder) / nzd.placeholder).toFixed(2));
  pln.value = formatNum(((dkk.value * dkk.placeholder) / pln.placeholder).toFixed(2));
  sgd.value = formatNum(((dkk.value * dkk.placeholder) / sgd.placeholder).toFixed(2));
  cny.value = formatNum(((dkk.value * dkk.placeholder) / cny.placeholder).toFixed(2));
  gvt.value = formatNum(((dkk.value * dkk.placeholder) / gvt.placeholder).toFixed(2));
}

function nokfunc() {
  isk.value = formatNum((nok.value * nok.placeholder).toFixed(2));
  usd.value = formatNum(((nok.value * nok.placeholder) / usd.placeholder).toFixed(2));
  gbp.value = formatNum(((nok.value * nok.placeholder) / gbp.placeholder).toFixed(2));
  eur.value = formatNum(((nok.value * nok.placeholder) / eur.placeholder).toFixed(2));
  cad.value = formatNum(((nok.value * nok.placeholder) / cad.placeholder).toFixed(2));
  dkk.value = formatNum(((nok.value * nok.placeholder) / dkk.placeholder).toFixed(2));
  sek.value = formatNum(((nok.value * nok.placeholder) / sek.placeholder).toFixed(2));
  chf.value = formatNum(((nok.value * nok.placeholder) / chf.placeholder).toFixed(2));
  jpy.value = formatNum(((nok.value * nok.placeholder) / jpy.placeholder).toFixed(2));
  xdr.value = formatNum(((nok.value * nok.placeholder) / xdr.placeholder).toFixed(2));
  aud.value = formatNum(((nok.value * nok.placeholder) / aud.placeholder).toFixed(2));
  zar.value = formatNum(((nok.value * nok.placeholder) / zar.placeholder).toFixed(2));
  hkd.value = formatNum(((nok.value * nok.placeholder) / hkd.placeholder).toFixed(2));
  nzd.value = formatNum(((nok.value * nok.placeholder) / nzd.placeholder).toFixed(2));
  pln.value = formatNum(((nok.value * nok.placeholder) / pln.placeholder).toFixed(2));
  sgd.value = formatNum(((nok.value * nok.placeholder) / sgd.placeholder).toFixed(2));
  cny.value = formatNum(((nok.value * nok.placeholder) / cny.placeholder).toFixed(2));
  gvt.value = formatNum(((nok.value * nok.placeholder) / gvt.placeholder).toFixed(2));
}

function sekfunc() {
  isk.value = formatNum((sek.value * sek.placeholder).toFixed(2));
  usd.value = formatNum(((sek.value * sek.placeholder) / usd.placeholder).toFixed(2));
  gbp.value = formatNum(((sek.value * sek.placeholder) / gbp.placeholder).toFixed(2));
  eur.value = formatNum(((sek.value * sek.placeholder) / eur.placeholder).toFixed(2));
  cad.value = formatNum(((sek.value * sek.placeholder) / cad.placeholder).toFixed(2));
  dkk.value = formatNum(((sek.value * sek.placeholder) / dkk.placeholder).toFixed(2));
  nok.value = formatNum(((sek.value * sek.placeholder) / nok.placeholder).toFixed(2));
  chf.value = formatNum(((sek.value * sek.placeholder) / chf.placeholder).toFixed(2));
  jpy.value = formatNum(((sek.value * sek.placeholder) / jpy.placeholder).toFixed(2));
  xdr.value = formatNum(((sek.value * sek.placeholder) / xdr.placeholder).toFixed(2));
  aud.value = formatNum(((sek.value * sek.placeholder) / aud.placeholder).toFixed(2));
  zar.value = formatNum(((sek.value * sek.placeholder) / zar.placeholder).toFixed(2));
  hkd.value = formatNum(((sek.value * sek.placeholder) / hkd.placeholder).toFixed(2));
  nzd.value = formatNum(((sek.value * sek.placeholder) / nzd.placeholder).toFixed(2));
  pln.value = formatNum(((sek.value * sek.placeholder) / pln.placeholder).toFixed(2));
  sgd.value = formatNum(((sek.value * sek.placeholder) / sgd.placeholder).toFixed(2));
  cny.value = formatNum(((sek.value * sek.placeholder) / cny.placeholder).toFixed(2));
  gvt.value = formatNum(((sek.value * sek.placeholder) / gvt.placeholder).toFixed(2));
}

function chffunc() {
  isk.value = formatNum((chf.value * chf.placeholder).toFixed(2));
  usd.value = formatNum(((chf.value * chf.placeholder) / usd.placeholder).toFixed(2));
  gbp.value = formatNum(((chf.value * chf.placeholder) / gbp.placeholder).toFixed(2));
  eur.value = formatNum(((chf.value * chf.placeholder) / eur.placeholder).toFixed(2));
  cad.value = formatNum(((chf.value * chf.placeholder) / cad.placeholder).toFixed(2));
  dkk.value = formatNum(((chf.value * chf.placeholder) / dkk.placeholder).toFixed(2));
  nok.value = formatNum(((chf.value * chf.placeholder) / nok.placeholder).toFixed(2));
  sek.value = formatNum(((chf.value * chf.placeholder) / sek.placeholder).toFixed(2));
  jpy.value = formatNum(((chf.value * chf.placeholder) / jpy.placeholder).toFixed(2));
  xdr.value = formatNum(((chf.value * chf.placeholder) / xdr.placeholder).toFixed(2));
  aud.value = formatNum(((chf.value * chf.placeholder) / aud.placeholder).toFixed(2));
  zar.value = formatNum(((chf.value * chf.placeholder) / zar.placeholder).toFixed(2));
  hkd.value = formatNum(((chf.value * chf.placeholder) / hkd.placeholder).toFixed(2));
  nzd.value = formatNum(((chf.value * chf.placeholder) / nzd.placeholder).toFixed(2));
  pln.value = formatNum(((chf.value * chf.placeholder) / pln.placeholder).toFixed(2));
  sgd.value = formatNum(((chf.value * chf.placeholder) / sgd.placeholder).toFixed(2));
  cny.value = formatNum(((chf.value * chf.placeholder) / cny.placeholder).toFixed(2));
  gvt.value = formatNum(((chf.value * chf.placeholder) / gvt.placeholder).toFixed(2));
}

function jpyfunc() {
  isk.value = formatNum((jpy.value * jpy.placeholder).toFixed(2));
  usd.value = formatNum(((jpy.value * jpy.placeholder) / usd.placeholder).toFixed(2));
  gbp.value = formatNum(((jpy.value * jpy.placeholder) / gbp.placeholder).toFixed(2));
  eur.value = formatNum(((jpy.value * jpy.placeholder) / eur.placeholder).toFixed(2));
  cad.value = formatNum(((jpy.value * jpy.placeholder) / cad.placeholder).toFixed(2));
  dkk.value = formatNum(((jpy.value * jpy.placeholder) / dkk.placeholder).toFixed(2));
  nok.value = formatNum(((jpy.value * jpy.placeholder) / nok.placeholder).toFixed(2));
  sek.value = formatNum(((jpy.value * jpy.placeholder) / sek.placeholder).toFixed(2));
  chf.value = formatNum(((jpy.value * jpy.placeholder) / chf.placeholder).toFixed(2));
  xdr.value = formatNum(((jpy.value * jpy.placeholder) / xdr.placeholder).toFixed(2));
  aud.value = formatNum(((jpy.value * jpy.placeholder) / aud.placeholder).toFixed(2));
  zar.value = formatNum(((jpy.value * jpy.placeholder) / zar.placeholder).toFixed(2));
  hkd.value = formatNum(((jpy.value * jpy.placeholder) / hkd.placeholder).toFixed(2));
  nzd.value = formatNum(((jpy.value * jpy.placeholder) / nzd.placeholder).toFixed(2));
  pln.value = formatNum(((jpy.value * jpy.placeholder) / pln.placeholder).toFixed(2));
  sgd.value = formatNum(((jpy.value * jpy.placeholder) / sgd.placeholder).toFixed(2));
  cny.value = formatNum(((jpy.value * jpy.placeholder) / cny.placeholder).toFixed(2));
  gvt.value = formatNum(((jpy.value * jpy.placeholder) / gvt.placeholder).toFixed(2));
}

function xdrfunc() {
  isk.value = formatNum((xdr.value * xdr.placeholder).toFixed(2));
  usd.value = formatNum(((xdr.value * xdr.placeholder) / usd.placeholder).toFixed(2));
  gbp.value = formatNum(((xdr.value * xdr.placeholder) / gbp.placeholder).toFixed(2));
  eur.value = formatNum(((xdr.value * xdr.placeholder) / eur.placeholder).toFixed(2));
  cad.value = formatNum(((xdr.value * xdr.placeholder) / cad.placeholder).toFixed(2));
  dkk.value = formatNum(((xdr.value * xdr.placeholder) / dkk.placeholder).toFixed(2));
  nok.value = formatNum(((xdr.value * xdr.placeholder) / nok.placeholder).toFixed(2));
  sek.value = formatNum(((xdr.value * xdr.placeholder) / sek.placeholder).toFixed(2));
  chf.value = formatNum(((xdr.value * xdr.placeholder) / chf.placeholder).toFixed(2));
  jpy.value = formatNum(((xdr.value * xdr.placeholder) / jpy.placeholder).toFixed(2));
  aud.value = formatNum(((xdr.value * xdr.placeholder) / aud.placeholder).toFixed(2));
  zar.value = formatNum(((xdr.value * xdr.placeholder) / zar.placeholder).toFixed(2));
  hkd.value = formatNum(((xdr.value * xdr.placeholder) / hkd.placeholder).toFixed(2));
  nzd.value = formatNum(((xdr.value * xdr.placeholder) / nzd.placeholder).toFixed(2));
  pln.value = formatNum(((xdr.value * xdr.placeholder) / pln.placeholder).toFixed(2));
  sgd.value = formatNum(((xdr.value * xdr.placeholder) / sgd.placeholder).toFixed(2));
  cny.value = formatNum(((xdr.value * xdr.placeholder) / cny.placeholder).toFixed(2));
  gvt.value = formatNum(((xdr.value * xdr.placeholder) / gvt.placeholder).toFixed(2));
}

function audfunc() {
  isk.value = formatNum((aud.value * aud.placeholder).toFixed(2));
  usd.value = formatNum(((aud.value * aud.placeholder) / usd.placeholder).toFixed(2));
  gbp.value = formatNum(((aud.value * aud.placeholder) / gbp.placeholder).toFixed(2));
  eur.value = formatNum(((aud.value * aud.placeholder) / eur.placeholder).toFixed(2));
  cad.value = formatNum(((aud.value * aud.placeholder) / cad.placeholder).toFixed(2));
  dkk.value = formatNum(((aud.value * aud.placeholder) / dkk.placeholder).toFixed(2));
  nok.value = formatNum(((aud.value * aud.placeholder) / nok.placeholder).toFixed(2));
  sek.value = formatNum(((aud.value * aud.placeholder) / sek.placeholder).toFixed(2));
  chf.value = formatNum(((aud.value * aud.placeholder) / chf.placeholder).toFixed(2));
  jpy.value = formatNum(((aud.value * aud.placeholder) / jpy.placeholder).toFixed(2));
  xdr.value = formatNum(((aud.value * aud.placeholder) / xdr.placeholder).toFixed(2));
  zar.value = formatNum(((aud.value * aud.placeholder) / zar.placeholder).toFixed(2));
  hkd.value = formatNum(((aud.value * aud.placeholder) / hkd.placeholder).toFixed(2));
  nzd.value = formatNum(((aud.value * aud.placeholder) / nzd.placeholder).toFixed(2));
  pln.value = formatNum(((aud.value * aud.placeholder) / pln.placeholder).toFixed(2));
  sgd.value = formatNum(((aud.value * aud.placeholder) / sgd.placeholder).toFixed(2));
  cny.value = formatNum(((aud.value * aud.placeholder) / cny.placeholder).toFixed(2));
  gvt.value = formatNum(((aud.value * aud.placeholder) / gvt.placeholder).toFixed(2));
}

function zarfunc() {
  isk.value = formatNum((zar.value * zar.placeholder).toFixed(2));
  usd.value = formatNum(((zar.value * zar.placeholder) / usd.placeholder).toFixed(2));
  gbp.value = formatNum(((zar.value * zar.placeholder) / gbp.placeholder).toFixed(2));
  eur.value = formatNum(((zar.value * zar.placeholder) / eur.placeholder).toFixed(2));
  cad.value = formatNum(((zar.value * zar.placeholder) / cad.placeholder).toFixed(2));
  dkk.value = formatNum(((zar.value * zar.placeholder) / dkk.placeholder).toFixed(2));
  nok.value = formatNum(((zar.value * zar.placeholder) / nok.placeholder).toFixed(2));
  sek.value = formatNum(((zar.value * zar.placeholder) / sek.placeholder).toFixed(2));
  chf.value = formatNum(((zar.value * zar.placeholder) / chf.placeholder).toFixed(2));
  jpy.value = formatNum(((zar.value * zar.placeholder) / jpy.placeholder).toFixed(2));
  xdr.value = formatNum(((zar.value * zar.placeholder) / xdr.placeholder).toFixed(2));
  aud.value = formatNum(((zar.value * zar.placeholder) / aud.placeholder).toFixed(2));
  hkd.value = formatNum(((zar.value * zar.placeholder) / hkd.placeholder).toFixed(2));
  nzd.value = formatNum(((zar.value * zar.placeholder) / nzd.placeholder).toFixed(2));
  pln.value = formatNum(((zar.value * zar.placeholder) / pln.placeholder).toFixed(2));
  sgd.value = formatNum(((zar.value * zar.placeholder) / sgd.placeholder).toFixed(2));
  cny.value = formatNum(((zar.value * zar.placeholder) / cny.placeholder).toFixed(2));
  gvt.value = formatNum(((zar.value * zar.placeholder) / gvt.placeholder).toFixed(2));
}

function hkdfunc() {
  isk.value = formatNum((hkd.value * hkd.placeholder).toFixed(2));
  usd.value = formatNum(((hkd.value * hkd.placeholder) / usd.placeholder).toFixed(2));
  gbp.value = formatNum(((hkd.value * hkd.placeholder) / gbp.placeholder).toFixed(2));
  eur.value = formatNum(((hkd.value * hkd.placeholder) / eur.placeholder).toFixed(2));
  cad.value = formatNum(((hkd.value * hkd.placeholder) / cad.placeholder).toFixed(2));
  dkk.value = formatNum(((hkd.value * hkd.placeholder) / dkk.placeholder).toFixed(2));
  nok.value = formatNum(((hkd.value * hkd.placeholder) / nok.placeholder).toFixed(2));
  sek.value = formatNum(((hkd.value * hkd.placeholder) / sek.placeholder).toFixed(2));
  chf.value = formatNum(((hkd.value * hkd.placeholder) / chf.placeholder).toFixed(2));
  jpy.value = formatNum(((hkd.value * hkd.placeholder) / jpy.placeholder).toFixed(2));
  xdr.value = formatNum(((hkd.value * hkd.placeholder) / xdr.placeholder).toFixed(2));
  aud.value = formatNum(((hkd.value * hkd.placeholder) / aud.placeholder).toFixed(2));
  zar.value = formatNum(((hkd.value * hkd.placeholder) / zar.placeholder).toFixed(2));
  nzd.value = formatNum(((hkd.value * hkd.placeholder) / nzd.placeholder).toFixed(2));
  pln.value = formatNum(((hkd.value * hkd.placeholder) / pln.placeholder).toFixed(2));
  sgd.value = formatNum(((hkd.value * hkd.placeholder) / sgd.placeholder).toFixed(2));
  cny.value = formatNum(((hkd.value * hkd.placeholder) / cny.placeholder).toFixed(2));
  gvt.value = formatNum(((hkd.value * hkd.placeholder) / gvt.placeholder).toFixed(2));
}

function nzdfunc() {
  isk.value = formatNum((nzd.value * nzd.placeholder).toFixed(2));
  usd.value = formatNum(((nzd.value * nzd.placeholder) / usd.placeholder).toFixed(2));
  gbp.value = formatNum(((nzd.value * nzd.placeholder) / gbp.placeholder).toFixed(2));
  eur.value = formatNum(((nzd.value * nzd.placeholder) / eur.placeholder).toFixed(2));
  cad.value = formatNum(((nzd.value * nzd.placeholder) / cad.placeholder).toFixed(2));
  dkk.value = formatNum(((nzd.value * nzd.placeholder) / dkk.placeholder).toFixed(2));
  nok.value = formatNum(((nzd.value * nzd.placeholder) / nok.placeholder).toFixed(2));
  sek.value = formatNum(((nzd.value * nzd.placeholder) / sek.placeholder).toFixed(2));
  chf.value = formatNum(((nzd.value * nzd.placeholder) / chf.placeholder).toFixed(2));
  jpy.value = formatNum(((nzd.value * nzd.placeholder) / jpy.placeholder).toFixed(2));
  xdr.value = formatNum(((nzd.value * nzd.placeholder) / xdr.placeholder).toFixed(2));
  aud.value = formatNum(((nzd.value * nzd.placeholder) / aud.placeholder).toFixed(2));
  zar.value = formatNum(((nzd.value * nzd.placeholder) / zar.placeholder).toFixed(2));
  hkd.value = formatNum(((nzd.value * nzd.placeholder) / hkd.placeholder).toFixed(2));
  pln.value = formatNum(((nzd.value * nzd.placeholder) / pln.placeholder).toFixed(2));
  sgd.value = formatNum(((nzd.value * nzd.placeholder) / sgd.placeholder).toFixed(2));
  cny.value = formatNum(((nzd.value * nzd.placeholder) / cny.placeholder).toFixed(2));
  gvt.value = formatNum(((nzd.value * nzd.placeholder) / gvt.placeholder).toFixed(2));
}

function plnfunc() {
  isk.value = formatNum((pln.value * pln.placeholder).toFixed(2));
  usd.value = formatNum(((pln.value * pln.placeholder) / usd.placeholder).toFixed(2));
  gbp.value = formatNum(((pln.value * pln.placeholder) / gbp.placeholder).toFixed(2));
  eur.value = formatNum(((pln.value * pln.placeholder) / eur.placeholder).toFixed(2));
  cad.value = formatNum(((pln.value * pln.placeholder) / cad.placeholder).toFixed(2));
  dkk.value = formatNum(((pln.value * pln.placeholder) / dkk.placeholder).toFixed(2));
  nok.value = formatNum(((pln.value * pln.placeholder) / nok.placeholder).toFixed(2));
  sek.value = formatNum(((pln.value * pln.placeholder) / sek.placeholder).toFixed(2));
  chf.value = formatNum(((pln.value * pln.placeholder) / chf.placeholder).toFixed(2));
  jpy.value = formatNum(((pln.value * pln.placeholder) / jpy.placeholder).toFixed(2));
  xdr.value = formatNum(((pln.value * pln.placeholder) / xdr.placeholder).toFixed(2));
  aud.value = formatNum(((pln.value * pln.placeholder) / aud.placeholder).toFixed(2));
  zar.value = formatNum(((pln.value * pln.placeholder) / zar.placeholder).toFixed(2));
  hkd.value = formatNum(((pln.value * pln.placeholder) / hkd.placeholder).toFixed(2));
  nzd.value = formatNum(((pln.value * pln.placeholder) / nzd.placeholder).toFixed(2));
  sgd.value = formatNum(((pln.value * pln.placeholder) / sgd.placeholder).toFixed(2));
  cny.value = formatNum(((pln.value * pln.placeholder) / cny.placeholder).toFixed(2));
  gvt.value = formatNum(((pln.value * pln.placeholder) / gvt.placeholder).toFixed(2));
}

function sgdfunc() {
  isk.value = formatNum((sgd.value * sgd.placeholder).toFixed(2));
  usd.value = formatNum(((sgd.value * sgd.placeholder) / usd.placeholder).toFixed(2));
  gbp.value = formatNum(((sgd.value * sgd.placeholder) / gbp.placeholder).toFixed(2));
  eur.value = formatNum(((sgd.value * sgd.placeholder) / eur.placeholder).toFixed(2));
  cad.value = formatNum(((sgd.value * sgd.placeholder) / cad.placeholder).toFixed(2));
  dkk.value = formatNum(((sgd.value * sgd.placeholder) / dkk.placeholder).toFixed(2));
  nok.value = formatNum(((sgd.value * sgd.placeholder) / nok.placeholder).toFixed(2));
  sek.value = formatNum(((sgd.value * sgd.placeholder) / sek.placeholder).toFixed(2));
  chf.value = formatNum(((sgd.value * sgd.placeholder) / chf.placeholder).toFixed(2));
  jpy.value = formatNum(((sgd.value * sgd.placeholder) / jpy.placeholder).toFixed(2));
  xdr.value = formatNum(((sgd.value * sgd.placeholder) / xdr.placeholder).toFixed(2));
  aud.value = formatNum(((sgd.value * sgd.placeholder) / aud.placeholder).toFixed(2));
  zar.value = formatNum(((sgd.value * sgd.placeholder) / zar.placeholder).toFixed(2));
  hkd.value = formatNum(((sgd.value * sgd.placeholder) / hkd.placeholder).toFixed(2));
  nzd.value = formatNum(((sgd.value * sgd.placeholder) / nzd.placeholder).toFixed(2));
  pln.value = formatNum(((sgd.value * sgd.placeholder) / pln.placeholder).toFixed(2));
  cny.value = formatNum(((sgd.value * sgd.placeholder) / cny.placeholder).toFixed(2));
  gvt.value = formatNum(((sgd.value * sgd.placeholder) / gvt.placeholder).toFixed(2));
}

function cnyfunc() {
  isk.value = formatNum((cny.value * cny.placeholder).toFixed(2));
  usd.value = formatNum(((cny.value * cny.placeholder) / usd.placeholder).toFixed(2));
  gbp.value = formatNum(((cny.value * cny.placeholder) / gbp.placeholder).toFixed(2));
  eur.value = formatNum(((cny.value * cny.placeholder) / eur.placeholder).toFixed(2));
  cad.value = formatNum(((cny.value * cny.placeholder) / cad.placeholder).toFixed(2));
  dkk.value = formatNum(((cny.value * cny.placeholder) / dkk.placeholder).toFixed(2));
  nok.value = formatNum(((cny.value * cny.placeholder) / nok.placeholder).toFixed(2));
  sek.value = formatNum(((cny.value * cny.placeholder) / sek.placeholder).toFixed(2));
  chf.value = formatNum(((cny.value * cny.placeholder) / chf.placeholder).toFixed(2));
  jpy.value = formatNum(((cny.value * cny.placeholder) / jpy.placeholder).toFixed(2));
  xdr.value = formatNum(((cny.value * cny.placeholder) / xdr.placeholder).toFixed(2));
  aud.value = formatNum(((cny.value * cny.placeholder) / aud.placeholder).toFixed(2));
  zar.value = formatNum(((cny.value * cny.placeholder) / zar.placeholder).toFixed(2));
  hkd.value = formatNum(((cny.value * cny.placeholder) / hkd.placeholder).toFixed(2));
  nzd.value = formatNum(((cny.value * cny.placeholder) / nzd.placeholder).toFixed(2));
  pln.value = formatNum(((cny.value * cny.placeholder) / pln.placeholder).toFixed(2));
  sgd.value = formatNum(((cny.value * cny.placeholder) / sgd.placeholder).toFixed(2));
  gvt.value = formatNum(((cny.value * cny.placeholder) / gvt.placeholder).toFixed(2));
}

function gvtfunc() {
  isk.value = formatNum((gvt.value * gvt.placeholder).toFixed(2));
  usd.value = formatNum(((gvt.value * gvt.placeholder) / usd.placeholder).toFixed(2));
  gbp.value = formatNum(((gvt.value * gvt.placeholder) / gbp.placeholder).toFixed(2));
  eur.value = formatNum(((gvt.value * gvt.placeholder) / eur.placeholder).toFixed(2));
  cad.value = formatNum(((gvt.value * gvt.placeholder) / cad.placeholder).toFixed(2));
  dkk.value = formatNum(((gvt.value * gvt.placeholder) / dkk.placeholder).toFixed(2));
  nok.value = formatNum(((gvt.value * gvt.placeholder) / nok.placeholder).toFixed(2));
  sek.value = formatNum(((gvt.value * gvt.placeholder) / sek.placeholder).toFixed(2));
  chf.value = formatNum(((gvt.value * gvt.placeholder) / chf.placeholder).toFixed(2));
  jpy.value = formatNum(((gvt.value * gvt.placeholder) / jpy.placeholder).toFixed(2));
  xdr.value = formatNum(((gvt.value * gvt.placeholder) / xdr.placeholder).toFixed(2));
  aud.value = formatNum(((gvt.value * gvt.placeholder) / aud.placeholder).toFixed(2));
  zar.value = formatNum(((gvt.value * gvt.placeholder) / zar.placeholder).toFixed(2));
  hkd.value = formatNum(((gvt.value * gvt.placeholder) / hkd.placeholder).toFixed(2));
  nzd.value = formatNum(((gvt.value * gvt.placeholder) / nzd.placeholder).toFixed(2));
  pln.value = formatNum(((gvt.value * gvt.placeholder) / pln.placeholder).toFixed(2));
  sgd.value = formatNum(((gvt.value * gvt.placeholder) / sgd.placeholder).toFixed(2));
  cny.value = formatNum(((gvt.value * gvt.placeholder) / cny.placeholder).toFixed(2));
}
/* eslint-enable no-unused-vars */

/*
 * Keyra init þegar síðan er tilbúin
 */
/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  init();
});
/* eslint-enable no-undef */
