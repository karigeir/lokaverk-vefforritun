/* Keyra init þegar síðan er tilbúin */
document.addEventListener('DOMContentLoaded', function(){
  init();
});

/* Skilgreina breytur */
let isk, usd, gbp, eur, cad, dkk, nok, sek, chf, jpy, xdr, aud, zar, hkd, nzd, pln, sgd, cny, gvt;

/* Frumstillir breytur sem input glugga */
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

/* Föll sem reikna út gengi gjaldmiðla út frá innslætti tölu í input glugga */
function iskfunc() {
  usd.value = (isk.value/usd.placeholder).toFixed(2);
  gbp.value = (isk.value/gbp.placeholder).toFixed(2);
  eur.value = (isk.value/eur.placeholder).toFixed(2);
  cad.value = (isk.value/cad.placeholder).toFixed(2);
  dkk.value = (isk.value/dkk.placeholder).toFixed(2);
  nok.value = (isk.value/nok.placeholder).toFixed(2);
  sek.value = (isk.value/sek.placeholder).toFixed(2);
  chf.value = (isk.value/chf.placeholder).toFixed(2);
  jpy.value = (isk.value/jpy.placeholder).toFixed(2);
  xdr.value = (isk.value/xdr.placeholder).toFixed(2);
  aud.value = (isk.value/aud.placeholder).toFixed(2);
  zar.value = (isk.value/zar.placeholder).toFixed(2);
  hkd.value = (isk.value/hkd.placeholder).toFixed(2);
  nzd.value = (isk.value/nzd.placeholder).toFixed(2);
  pln.value = (isk.value/pln.placeholder).toFixed(2);
  sgd.value = (isk.value/sgd.placeholder).toFixed(2);
  cny.value = (isk.value/cny.placeholder).toFixed(2);
  gvt.value = (isk.value/gvt.placeholder).toFixed(2);
}

function usdfunc() {
  isk.value = (usd.value*usd.placeholder).toFixed(2);
  gbp.value = (usd.value*usd.placeholder/gbp.placeholder).toFixed(2);
  eur.value = (usd.value*usd.placeholder/eur.placeholder).toFixed(2);
  cad.value = (usd.value*usd.placeholder/cad.placeholder).toFixed(2);
  dkk.value = (usd.value*usd.placeholder/dkk.placeholder).toFixed(2);
  nok.value = (usd.value*usd.placeholder/nok.placeholder).toFixed(2);
  sek.value = (usd.value*usd.placeholder/sek.placeholder).toFixed(2);
  chf.value = (usd.value*usd.placeholder/chf.placeholder).toFixed(2);
  jpy.value = (usd.value*usd.placeholder/jpy.placeholder).toFixed(2);
  xdr.value = (usd.value*usd.placeholder/xdr.placeholder).toFixed(2);
  aud.value = (usd.value*usd.placeholder/aud.placeholder).toFixed(2);
  zar.value = (usd.value*usd.placeholder/zar.placeholder).toFixed(2);
  hkd.value = (usd.value*usd.placeholder/hkd.placeholder).toFixed(2);
  nzd.value = (usd.value*usd.placeholder/nzd.placeholder).toFixed(2);
  pln.value = (usd.value*usd.placeholder/pln.placeholder).toFixed(2);
  sgd.value = (usd.value*usd.placeholder/sgd.placeholder).toFixed(2);
  cny.value = (usd.value*usd.placeholder/cny.placeholder).toFixed(2);
  gvt.value = (usd.value*usd.placeholder/gvt.placeholder).toFixed(2);
}

function gbpfunc() {
  isk.value = (gbp.value*gbp.placeholder).toFixed(2);
  usd.value = (gbp.value*gbp.placeholder/usd.placeholder).toFixed(2);
  eur.value = (gbp.value*gbp.placeholder/eur.placeholder).toFixed(2);
  cad.value = (gbp.value*gbp.placeholder/cad.placeholder).toFixed(2);
  dkk.value = (gbp.value*gbp.placeholder/dkk.placeholder).toFixed(2);
  nok.value = (gbp.value*gbp.placeholder/nok.placeholder).toFixed(2);
  sek.value = (gbp.value*gbp.placeholder/sek.placeholder).toFixed(2);
  chf.value = (gbp.value*gbp.placeholder/chf.placeholder).toFixed(2);
  jpy.value = (gbp.value*gbp.placeholder/jpy.placeholder).toFixed(2);
  xdr.value = (gbp.value*gbp.placeholder/xdr.placeholder).toFixed(2);
  aud.value = (gbp.value*gbp.placeholder/aud.placeholder).toFixed(2);
  zar.value = (gbp.value*gbp.placeholder/zar.placeholder).toFixed(2);
  hkd.value = (gbp.value*gbp.placeholder/hkd.placeholder).toFixed(2);
  nzd.value = (gbp.value*gbp.placeholder/nzd.placeholder).toFixed(2);
  pln.value = (gbp.value*gbp.placeholder/pln.placeholder).toFixed(2);
  sgd.value = (gbp.value*gbp.placeholder/sgd.placeholder).toFixed(2);
  cny.value = (gbp.value*gbp.placeholder/cny.placeholder).toFixed(2);
  gvt.value = (gbp.value*gbp.placeholder/gvt.placeholder).toFixed(2);
}

function eurfunc() {
  isk.value = (eur.value*eur.placeholder).toFixed(2);
  usd.value = (eur.value*eur.placeholder/usd.placeholder).toFixed(2);
  gbp.value = (eur.value*eur.placeholder/gbp.placeholder).toFixed(2);
  cad.value = (eur.value*eur.placeholder/cad.placeholder).toFixed(2);
  dkk.value = (eur.value*eur.placeholder/dkk.placeholder).toFixed(2);
  nok.value = (eur.value*eur.placeholder/nok.placeholder).toFixed(2);
  sek.value = (eur.value*eur.placeholder/sek.placeholder).toFixed(2);
  chf.value = (eur.value*eur.placeholder/chf.placeholder).toFixed(2);
  jpy.value = (eur.value*eur.placeholder/jpy.placeholder).toFixed(2);
  xdr.value = (eur.value*eur.placeholder/xdr.placeholder).toFixed(2);
  aud.value = (eur.value*eur.placeholder/aud.placeholder).toFixed(2);
  zar.value = (eur.value*eur.placeholder/zar.placeholder).toFixed(2);
  hkd.value = (eur.value*eur.placeholder/hkd.placeholder).toFixed(2);
  nzd.value = (eur.value*eur.placeholder/nzd.placeholder).toFixed(2);
  pln.value = (eur.value*eur.placeholder/pln.placeholder).toFixed(2);
  sgd.value = (eur.value*eur.placeholder/sgd.placeholder).toFixed(2);
  cny.value = (eur.value*eur.placeholder/cny.placeholder).toFixed(2);
  gvt.value = (eur.value*eur.placeholder/gvt.placeholder).toFixed(2);
}

function cadfunc() {
  isk.value = (cad.value*cad.placeholder).toFixed(2);
  usd.value = (cad.value*cad.placeholder/usd.placeholder).toFixed(2);
  gbp.value = (cad.value*cad.placeholder/gbp.placeholder).toFixed(2);
  eur.value = (cad.value*cad.placeholder/eur.placeholder).toFixed(2);
  dkk.value = (cad.value*cad.placeholder/dkk.placeholder).toFixed(2);
  nok.value = (cad.value*cad.placeholder/nok.placeholder).toFixed(2);
  sek.value = (cad.value*cad.placeholder/sek.placeholder).toFixed(2);
  chf.value = (cad.value*cad.placeholder/chf.placeholder).toFixed(2);
  jpy.value = (cad.value*cad.placeholder/jpy.placeholder).toFixed(2);
  xdr.value = (cad.value*cad.placeholder/xdr.placeholder).toFixed(2);
  aud.value = (cad.value*cad.placeholder/aud.placeholder).toFixed(2);
  zar.value = (cad.value*cad.placeholder/zar.placeholder).toFixed(2);
  hkd.value = (cad.value*cad.placeholder/hkd.placeholder).toFixed(2);
  nzd.value = (cad.value*cad.placeholder/nzd.placeholder).toFixed(2);
  pln.value = (cad.value*cad.placeholder/pln.placeholder).toFixed(2);
  sgd.value = (cad.value*cad.placeholder/sgd.placeholder).toFixed(2);
  cny.value = (cad.value*cad.placeholder/cny.placeholder).toFixed(2);
  gvt.value = (cad.value*cad.placeholder/gvt.placeholder).toFixed(2);
}

function dkkfunc() {
  isk.value = (dkk.value*dkk.placeholder).toFixed(2);
  usd.value = (dkk.value*dkk.placeholder/usd.placeholder).toFixed(2);
  gbp.value = (dkk.value*dkk.placeholder/gbp.placeholder).toFixed(2);
  eur.value = (dkk.value*dkk.placeholder/eur.placeholder).toFixed(2);
  cad.value = (dkk.value*dkk.placeholder/cad.placeholder).toFixed(2);
  nok.value = (dkk.value*dkk.placeholder/nok.placeholder).toFixed(2);
  sek.value = (dkk.value*dkk.placeholder/sek.placeholder).toFixed(2);
  chf.value = (dkk.value*dkk.placeholder/chf.placeholder).toFixed(2);
  jpy.value = (dkk.value*dkk.placeholder/jpy.placeholder).toFixed(2);
  xdr.value = (dkk.value*dkk.placeholder/xdr.placeholder).toFixed(2);
  aud.value = (dkk.value*dkk.placeholder/aud.placeholder).toFixed(2);
  zar.value = (dkk.value*dkk.placeholder/zar.placeholder).toFixed(2);
  hkd.value = (dkk.value*dkk.placeholder/hkd.placeholder).toFixed(2);
  nzd.value = (dkk.value*dkk.placeholder/nzd.placeholder).toFixed(2);
  pln.value = (dkk.value*dkk.placeholder/pln.placeholder).toFixed(2);
  sgd.value = (dkk.value*dkk.placeholder/sgd.placeholder).toFixed(2);
  cny.value = (dkk.value*dkk.placeholder/cny.placeholder).toFixed(2);
  gvt.value = (dkk.value*dkk.placeholder/gvt.placeholder).toFixed(2);
}

function nokfunc() {
  isk.value = (nok.value*nok.placeholder).toFixed(2);
  usd.value = (nok.value*nok.placeholder/usd.placeholder).toFixed(2);
  gbp.value = (nok.value*nok.placeholder/gbp.placeholder).toFixed(2);
  eur.value = (nok.value*nok.placeholder/eur.placeholder).toFixed(2);
  cad.value = (nok.value*nok.placeholder/cad.placeholder).toFixed(2);
  dkk.value = (nok.value*nok.placeholder/dkk.placeholder).toFixed(2);
  sek.value = (nok.value*nok.placeholder/sek.placeholder).toFixed(2);
  chf.value = (nok.value*nok.placeholder/chf.placeholder).toFixed(2);
  jpy.value = (nok.value*nok.placeholder/jpy.placeholder).toFixed(2);
  xdr.value = (nok.value*nok.placeholder/xdr.placeholder).toFixed(2);
  aud.value = (nok.value*nok.placeholder/aud.placeholder).toFixed(2);
  zar.value = (nok.value*nok.placeholder/zar.placeholder).toFixed(2);
  hkd.value = (nok.value*nok.placeholder/hkd.placeholder).toFixed(2);
  nzd.value = (nok.value*nok.placeholder/nzd.placeholder).toFixed(2);
  pln.value = (nok.value*nok.placeholder/pln.placeholder).toFixed(2);
  sgd.value = (nok.value*nok.placeholder/sgd.placeholder).toFixed(2);
  cny.value = (nok.value*nok.placeholder/cny.placeholder).toFixed(2);
  gvt.value = (nok.value*nok.placeholder/gvt.placeholder).toFixed(2);
}

function sekfunc() {
  isk.value = (sek.value*sek.placeholder).toFixed(2);
  usd.value = (sek.value*sek.placeholder/usd.placeholder).toFixed(2);
  gbp.value = (sek.value*sek.placeholder/gbp.placeholder).toFixed(2);
  eur.value = (sek.value*sek.placeholder/eur.placeholder).toFixed(2);
  cad.value = (sek.value*sek.placeholder/cad.placeholder).toFixed(2);
  dkk.value = (sek.value*sek.placeholder/dkk.placeholder).toFixed(2);
  nok.value = (sek.value*sek.placeholder/nok.placeholder).toFixed(2);
  chf.value = (sek.value*sek.placeholder/chf.placeholder).toFixed(2);
  jpy.value = (sek.value*sek.placeholder/jpy.placeholder).toFixed(2);
  xdr.value = (sek.value*sek.placeholder/xdr.placeholder).toFixed(2);
  aud.value = (sek.value*sek.placeholder/aud.placeholder).toFixed(2);
  zar.value = (sek.value*sek.placeholder/zar.placeholder).toFixed(2);
  hkd.value = (sek.value*sek.placeholder/hkd.placeholder).toFixed(2);
  nzd.value = (sek.value*sek.placeholder/nzd.placeholder).toFixed(2);
  pln.value = (sek.value*sek.placeholder/pln.placeholder).toFixed(2);
  sgd.value = (sek.value*sek.placeholder/sgd.placeholder).toFixed(2);
  cny.value = (sek.value*sek.placeholder/cny.placeholder).toFixed(2);
  gvt.value = (sek.value*sek.placeholder/gvt.placeholder).toFixed(2);
}

function chffunc() {
  isk.value = (chf.value*chf.placeholder).toFixed(2);
  usd.value = (chf.value*chf.placeholder/usd.placeholder).toFixed(2);
  gbp.value = (chf.value*chf.placeholder/gbp.placeholder).toFixed(2);
  eur.value = (chf.value*chf.placeholder/eur.placeholder).toFixed(2);
  cad.value = (chf.value*chf.placeholder/cad.placeholder).toFixed(2);
  dkk.value = (chf.value*chf.placeholder/dkk.placeholder).toFixed(2);
  nok.value = (chf.value*chf.placeholder/nok.placeholder).toFixed(2);
  sek.value = (chf.value*chf.placeholder/sek.placeholder).toFixed(2);
  jpy.value = (chf.value*chf.placeholder/jpy.placeholder).toFixed(2);
  xdr.value = (chf.value*chf.placeholder/xdr.placeholder).toFixed(2);
  aud.value = (chf.value*chf.placeholder/aud.placeholder).toFixed(2);
  zar.value = (chf.value*chf.placeholder/zar.placeholder).toFixed(2);
  hkd.value = (chf.value*chf.placeholder/hkd.placeholder).toFixed(2);
  nzd.value = (chf.value*chf.placeholder/nzd.placeholder).toFixed(2);
  pln.value = (chf.value*chf.placeholder/pln.placeholder).toFixed(2);
  sgd.value = (chf.value*chf.placeholder/sgd.placeholder).toFixed(2);
  cny.value = (chf.value*chf.placeholder/cny.placeholder).toFixed(2);
  gvt.value = (chf.value*chf.placeholder/gvt.placeholder).toFixed(2);
}

function jpyfunc() {
  isk.value = (jpy.value*jpy.placeholder).toFixed(2);
  usd.value = (jpy.value*jpy.placeholder/usd.placeholder).toFixed(2);
  gbp.value = (jpy.value*jpy.placeholder/gbp.placeholder).toFixed(2);
  eur.value = (jpy.value*jpy.placeholder/eur.placeholder).toFixed(2);
  cad.value = (jpy.value*jpy.placeholder/cad.placeholder).toFixed(2);
  dkk.value = (jpy.value*jpy.placeholder/dkk.placeholder).toFixed(2);
  nok.value = (jpy.value*jpy.placeholder/nok.placeholder).toFixed(2);
  sek.value = (jpy.value*jpy.placeholder/sek.placeholder).toFixed(2);
  chf.value = (jpy.value*jpy.placeholder/chf.placeholder).toFixed(2);
  xdr.value = (jpy.value*jpy.placeholder/xdr.placeholder).toFixed(2);
  aud.value = (jpy.value*jpy.placeholder/aud.placeholder).toFixed(2);
  zar.value = (jpy.value*jpy.placeholder/zar.placeholder).toFixed(2);
  hkd.value = (jpy.value*jpy.placeholder/hkd.placeholder).toFixed(2);
  nzd.value = (jpy.value*jpy.placeholder/nzd.placeholder).toFixed(2);
  pln.value = (jpy.value*jpy.placeholder/pln.placeholder).toFixed(2);
  sgd.value = (jpy.value*jpy.placeholder/sgd.placeholder).toFixed(2);
  cny.value = (jpy.value*jpy.placeholder/cny.placeholder).toFixed(2);
  gvt.value = (jpy.value*jpy.placeholder/gvt.placeholder).toFixed(2);
}

function xdrfunc() {
  isk.value = (xdr.value*xdr.placeholder).toFixed(2);
  usd.value = (xdr.value*xdr.placeholder/usd.placeholder).toFixed(2);
  gbp.value = (xdr.value*xdr.placeholder/gbp.placeholder).toFixed(2);
  eur.value = (xdr.value*xdr.placeholder/eur.placeholder).toFixed(2);
  cad.value = (xdr.value*xdr.placeholder/cad.placeholder).toFixed(2);
  dkk.value = (xdr.value*xdr.placeholder/dkk.placeholder).toFixed(2);
  nok.value = (xdr.value*xdr.placeholder/nok.placeholder).toFixed(2);
  sek.value = (xdr.value*xdr.placeholder/sek.placeholder).toFixed(2);
  chf.value = (xdr.value*xdr.placeholder/chf.placeholder).toFixed(2);
  jpy.value = (xdr.value*xdr.placeholder/jpy.placeholder).toFixed(2);
  aud.value = (xdr.value*xdr.placeholder/aud.placeholder).toFixed(2);
  zar.value = (xdr.value*xdr.placeholder/zar.placeholder).toFixed(2);
  hkd.value = (xdr.value*xdr.placeholder/hkd.placeholder).toFixed(2);
  nzd.value = (xdr.value*xdr.placeholder/nzd.placeholder).toFixed(2);
  pln.value = (xdr.value*xdr.placeholder/pln.placeholder).toFixed(2);
  sgd.value = (xdr.value*xdr.placeholder/sgd.placeholder).toFixed(2);
  cny.value = (xdr.value*xdr.placeholder/cny.placeholder).toFixed(2);
  gvt.value = (xdr.value*xdr.placeholder/gvt.placeholder).toFixed(2);
}

function audfunc() {
  isk.value = (aud.value*aud.placeholder).toFixed(2);
  usd.value = (aud.value*aud.placeholder/usd.placeholder).toFixed(2);
  gbp.value = (aud.value*aud.placeholder/gbp.placeholder).toFixed(2);
  eur.value = (aud.value*aud.placeholder/eur.placeholder).toFixed(2);
  cad.value = (aud.value*aud.placeholder/cad.placeholder).toFixed(2);
  dkk.value = (aud.value*aud.placeholder/dkk.placeholder).toFixed(2);
  nok.value = (aud.value*aud.placeholder/nok.placeholder).toFixed(2);
  sek.value = (aud.value*aud.placeholder/sek.placeholder).toFixed(2);
  chf.value = (aud.value*aud.placeholder/chf.placeholder).toFixed(2);
  jpy.value = (aud.value*aud.placeholder/jpy.placeholder).toFixed(2);
  xdr.value = (aud.value*aud.placeholder/xdr.placeholder).toFixed(2);
  zar.value = (aud.value*aud.placeholder/zar.placeholder).toFixed(2);
  hkd.value = (aud.value*aud.placeholder/hkd.placeholder).toFixed(2);
  nzd.value = (aud.value*aud.placeholder/nzd.placeholder).toFixed(2);
  pln.value = (aud.value*aud.placeholder/pln.placeholder).toFixed(2);
  sgd.value = (aud.value*aud.placeholder/sgd.placeholder).toFixed(2);
  cny.value = (aud.value*aud.placeholder/cny.placeholder).toFixed(2);
  gvt.value = (aud.value*aud.placeholder/gvt.placeholder).toFixed(2);
}

function zarfunc() {
  isk.value = (zar.value*zar.placeholder).toFixed(2);
  usd.value = (zar.value*zar.placeholder/usd.placeholder).toFixed(2);
  gbp.value = (zar.value*zar.placeholder/gbp.placeholder).toFixed(2);
  eur.value = (zar.value*zar.placeholder/eur.placeholder).toFixed(2);
  cad.value = (zar.value*zar.placeholder/cad.placeholder).toFixed(2);
  dkk.value = (zar.value*zar.placeholder/dkk.placeholder).toFixed(2);
  nok.value = (zar.value*zar.placeholder/nok.placeholder).toFixed(2);
  sek.value = (zar.value*zar.placeholder/sek.placeholder).toFixed(2);
  chf.value = (zar.value*zar.placeholder/chf.placeholder).toFixed(2);
  jpy.value = (zar.value*zar.placeholder/jpy.placeholder).toFixed(2);
  xdr.value = (zar.value*zar.placeholder/xdr.placeholder).toFixed(2);
  aud.value = (zar.value*zar.placeholder/aud.placeholder).toFixed(2);
  hkd.value = (zar.value*zar.placeholder/hkd.placeholder).toFixed(2);
  nzd.value = (zar.value*zar.placeholder/nzd.placeholder).toFixed(2);
  pln.value = (zar.value*zar.placeholder/pln.placeholder).toFixed(2);
  sgd.value = (zar.value*zar.placeholder/sgd.placeholder).toFixed(2);
  cny.value = (zar.value*zar.placeholder/cny.placeholder).toFixed(2);
  gvt.value = (zar.value*zar.placeholder/gvt.placeholder).toFixed(2);
}

function hkdfunc() {
  isk.value = (hkd.value*hkd.placeholder).toFixed(2);
  usd.value = (hkd.value*hkd.placeholder/usd.placeholder).toFixed(2);
  gbp.value = (hkd.value*hkd.placeholder/gbp.placeholder).toFixed(2);
  eur.value = (hkd.value*hkd.placeholder/eur.placeholder).toFixed(2);
  cad.value = (hkd.value*hkd.placeholder/cad.placeholder).toFixed(2);
  dkk.value = (hkd.value*hkd.placeholder/dkk.placeholder).toFixed(2);
  nok.value = (hkd.value*hkd.placeholder/nok.placeholder).toFixed(2);
  sek.value = (hkd.value*hkd.placeholder/sek.placeholder).toFixed(2);
  chf.value = (hkd.value*hkd.placeholder/chf.placeholder).toFixed(2);
  jpy.value = (hkd.value*hkd.placeholder/jpy.placeholder).toFixed(2);
  xdr.value = (hkd.value*hkd.placeholder/xdr.placeholder).toFixed(2);
  aud.value = (hkd.value*hkd.placeholder/aud.placeholder).toFixed(2);
  zar.value = (hkd.value*hkd.placeholder/zar.placeholder).toFixed(2);
  nzd.value = (hkd.value*hkd.placeholder/nzd.placeholder).toFixed(2);
  pln.value = (hkd.value*hkd.placeholder/pln.placeholder).toFixed(2);
  sgd.value = (hkd.value*hkd.placeholder/sgd.placeholder).toFixed(2);
  cny.value = (hkd.value*hkd.placeholder/cny.placeholder).toFixed(2);
  gvt.value = (hkd.value*hkd.placeholder/gvt.placeholder).toFixed(2);
}

function nzdfunc() {
  isk.value = (nzd.value*nzd.placeholder).toFixed(2);
  usd.value = (nzd.value*nzd.placeholder/usd.placeholder).toFixed(2);
  gbp.value = (nzd.value*nzd.placeholder/gbp.placeholder).toFixed(2);
  eur.value = (nzd.value*nzd.placeholder/eur.placeholder).toFixed(2);
  cad.value = (nzd.value*nzd.placeholder/cad.placeholder).toFixed(2);
  dkk.value = (nzd.value*nzd.placeholder/dkk.placeholder).toFixed(2);
  nok.value = (nzd.value*nzd.placeholder/nok.placeholder).toFixed(2);
  sek.value = (nzd.value*nzd.placeholder/sek.placeholder).toFixed(2);
  chf.value = (nzd.value*nzd.placeholder/chf.placeholder).toFixed(2);
  jpy.value = (nzd.value*nzd.placeholder/jpy.placeholder).toFixed(2);
  xdr.value = (nzd.value*nzd.placeholder/xdr.placeholder).toFixed(2);
  aud.value = (nzd.value*nzd.placeholder/aud.placeholder).toFixed(2);
  zar.value = (nzd.value*nzd.placeholder/zar.placeholder).toFixed(2);
  hkd.value = (nzd.value*nzd.placeholder/hkd.placeholder).toFixed(2);
  pln.value = (nzd.value*nzd.placeholder/pln.placeholder).toFixed(2);
  sgd.value = (nzd.value*nzd.placeholder/sgd.placeholder).toFixed(2);
  cny.value = (nzd.value*nzd.placeholder/cny.placeholder).toFixed(2);
  gvt.value = (nzd.value*nzd.placeholder/gvt.placeholder).toFixed(2);
}

function plnfunc() {
  isk.value = (pln.value*pln.placeholder).toFixed(2);
  usd.value = (pln.value*pln.placeholder/usd.placeholder).toFixed(2);
  gbp.value = (pln.value*pln.placeholder/gbp.placeholder).toFixed(2);
  eur.value = (pln.value*pln.placeholder/eur.placeholder).toFixed(2);
  cad.value = (pln.value*pln.placeholder/cad.placeholder).toFixed(2);
  dkk.value = (pln.value*pln.placeholder/dkk.placeholder).toFixed(2);
  nok.value = (pln.value*pln.placeholder/nok.placeholder).toFixed(2);
  sek.value = (pln.value*pln.placeholder/sek.placeholder).toFixed(2);
  chf.value = (pln.value*pln.placeholder/chf.placeholder).toFixed(2);
  jpy.value = (pln.value*pln.placeholder/jpy.placeholder).toFixed(2);
  xdr.value = (pln.value*pln.placeholder/xdr.placeholder).toFixed(2);
  aud.value = (pln.value*pln.placeholder/aud.placeholder).toFixed(2);
  zar.value = (pln.value*pln.placeholder/zar.placeholder).toFixed(2);
  hkd.value = (pln.value*pln.placeholder/hkd.placeholder).toFixed(2);
  nzd.value = (pln.value*pln.placeholder/nzd.placeholder).toFixed(2);
  sgd.value = (pln.value*pln.placeholder/sgd.placeholder).toFixed(2);
  cny.value = (pln.value*pln.placeholder/cny.placeholder).toFixed(2);
  gvt.value = (pln.value*pln.placeholder/gvt.placeholder).toFixed(2);
}

function sgdfunc() {
  isk.value = (sgd.value*sgd.placeholder).toFixed(2);
  usd.value = (sgd.value*sgd.placeholder/usd.placeholder).toFixed(2);
  gbp.value = (sgd.value*sgd.placeholder/gbp.placeholder).toFixed(2);
  eur.value = (sgd.value*sgd.placeholder/eur.placeholder).toFixed(2);
  cad.value = (sgd.value*sgd.placeholder/cad.placeholder).toFixed(2);
  dkk.value = (sgd.value*sgd.placeholder/dkk.placeholder).toFixed(2);
  nok.value = (sgd.value*sgd.placeholder/nok.placeholder).toFixed(2);
  sek.value = (sgd.value*sgd.placeholder/sek.placeholder).toFixed(2);
  chf.value = (sgd.value*sgd.placeholder/chf.placeholder).toFixed(2);
  jpy.value = (sgd.value*sgd.placeholder/jpy.placeholder).toFixed(2);
  xdr.value = (sgd.value*sgd.placeholder/xdr.placeholder).toFixed(2);
  aud.value = (sgd.value*sgd.placeholder/aud.placeholder).toFixed(2);
  zar.value = (sgd.value*sgd.placeholder/zar.placeholder).toFixed(2);
  hkd.value = (sgd.value*sgd.placeholder/hkd.placeholder).toFixed(2);
  nzd.value = (sgd.value*sgd.placeholder/nzd.placeholder).toFixed(2);
  pln.value = (sgd.value*sgd.placeholder/pln.placeholder).toFixed(2);
  cny.value = (sgd.value*sgd.placeholder/cny.placeholder).toFixed(2);
  gvt.value = (sgd.value*sgd.placeholder/gvt.placeholder).toFixed(2);
}

function cnyfunc() {
  isk.value = (cny.value*cny.placeholder).toFixed(2);
  usd.value = (cny.value*cny.placeholder/usd.placeholder).toFixed(2);
  gbp.value = (cny.value*cny.placeholder/gbp.placeholder).toFixed(2);
  eur.value = (cny.value*cny.placeholder/eur.placeholder).toFixed(2);
  cad.value = (cny.value*cny.placeholder/cad.placeholder).toFixed(2);
  dkk.value = (cny.value*cny.placeholder/dkk.placeholder).toFixed(2);
  nok.value = (cny.value*cny.placeholder/nok.placeholder).toFixed(2);
  sek.value = (cny.value*cny.placeholder/sek.placeholder).toFixed(2);
  chf.value = (cny.value*cny.placeholder/chf.placeholder).toFixed(2);
  jpy.value = (cny.value*cny.placeholder/jpy.placeholder).toFixed(2);
  xdr.value = (cny.value*cny.placeholder/xdr.placeholder).toFixed(2);
  aud.value = (cny.value*cny.placeholder/aud.placeholder).toFixed(2);
  zar.value = (cny.value*cny.placeholder/zar.placeholder).toFixed(2);
  hkd.value = (cny.value*cny.placeholder/hkd.placeholder).toFixed(2);
  nzd.value = (cny.value*cny.placeholder/nzd.placeholder).toFixed(2);
  pln.value = (cny.value*cny.placeholder/pln.placeholder).toFixed(2);
  sgd.value = (cny.value*cny.placeholder/sgd.placeholder).toFixed(2);
  gvt.value = (cny.value*cny.placeholder/gvt.placeholder).toFixed(2);
}

function gvtfunc() {
  isk.value = (gvt.value*gvt.placeholder).toFixed(2);
  usd.value = (gvt.value*gvt.placeholder/usd.placeholder).toFixed(2);
  gbp.value = (gvt.value*gvt.placeholder/gbp.placeholder).toFixed(2);
  eur.value = (gvt.value*gvt.placeholder/eur.placeholder).toFixed(2);
  cad.value = (gvt.value*gvt.placeholder/cad.placeholder).toFixed(2);
  dkk.value = (gvt.value*gvt.placeholder/dkk.placeholder).toFixed(2);
  nok.value = (gvt.value*gvt.placeholder/nok.placeholder).toFixed(2);
  sek.value = (gvt.value*gvt.placeholder/sek.placeholder).toFixed(2);
  chf.value = (gvt.value*gvt.placeholder/chf.placeholder).toFixed(2);
  jpy.value = (gvt.value*gvt.placeholder/jpy.placeholder).toFixed(2);
  xdr.value = (gvt.value*gvt.placeholder/xdr.placeholder).toFixed(2);
  aud.value = (gvt.value*gvt.placeholder/aud.placeholder).toFixed(2);
  zar.value = (gvt.value*gvt.placeholder/zar.placeholder).toFixed(2);
  hkd.value = (gvt.value*gvt.placeholder/hkd.placeholder).toFixed(2);
  nzd.value = (gvt.value*gvt.placeholder/nzd.placeholder).toFixed(2);
  pln.value = (gvt.value*gvt.placeholder/pln.placeholder).toFixed(2);
  sgd.value = (gvt.value*gvt.placeholder/sgd.placeholder).toFixed(2);
  cny.value = (gvt.value*gvt.placeholder/cny.placeholder).toFixed(2);
}
