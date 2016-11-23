/* Föll sem reikna út gengi gjaldmiðla út frá innslætti tölu í input glugga */
document.addEventListener('DOMContentLoaded', function(){
  init();
});

var isk, usd, gbp, eur, cad, dkk, nok, sek, chf, jpy, xdr, aud, zar, hkd, nzd, pln, sgd, cny, gvt;

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
  console.log(isk, usd, gbp, eur, cad, dkk, nok, sek, chf, jpy, xdr, aud, zar, hkd, nzd, pln, sgd, cny, gvt);
}

function iskfunc() {
  usd.value = isk.value/usd.placeholder;
  gbp.value = isk.value/gbp.placeholder;
  eur.value = isk.value/eur.placeholder;
  cad.value = isk.value/cad.placeholder;
  dkk.value = isk.value/dkk.placeholder;
  nok.value = isk.value/nok.placeholder;
  sek.value = isk.value/sek.placeholder;
  chf.value = isk.value/chf.placeholder;
  jpy.value = isk.value/jpy.placeholder;
  xdr.value = isk.value/xdr.placeholder;
  aud.value = isk.value/aud.placeholder;
  zar.value = isk.value/zar.placeholder;
  hkd.value = isk.value/hkd.placeholder;
  nzd.value = isk.value/nzd.placeholder;
  pln.value = isk.value/pln.placeholder;
  sgd.value = isk.value/sgd.placeholder;
  cny.value = isk.value/cny.placeholder;
  gvt.value = isk.value/gvt.placeholder;
}

function usdfunc() {
  isk.value = usd.value*usd.placeholder;
  gbp.value = usd.value*usd.placeholder/gbp.placeholder;
  eur.value = usd.value*usd.placeholder/eur.placeholder;
  cad.value = usd.value*usd.placeholder/cad.placeholder;
  dkk.value = usd.value*usd.placeholder/dkk.placeholder;
  nok.value = usd.value*usd.placeholder/nok.placeholder;
  sek.value = usd.value*usd.placeholder/sek.placeholder;
  chf.value = usd.value*usd.placeholder/chf.placeholder;
  jpy.value = usd.value*usd.placeholder/jpy.placeholder;
  xdr.value = usd.value*usd.placeholder/xdr.placeholder;
  aud.value = usd.value*usd.placeholder/aud.placeholder;
  zar.value = usd.value*usd.placeholder/zar.placeholder;
  hkd.value = usd.value*usd.placeholder/hkd.placeholder;
  nzd.value = usd.value*usd.placeholder/nzd.placeholder;
  pln.value = usd.value*usd.placeholder/pln.placeholder;
  sgd.value = usd.value*usd.placeholder/sgd.placeholder;
  cny.value = usd.value*usd.placeholder/cny.placeholder;
  gvt.value = usd.value*usd.placeholder/gvt.placeholder;
}

function gbpfunc() {
  isk.value = gbp.value*gbp.placeholder;
  usd.value = gbp.value*gbp.placeholder/usd.placeholder;
  eur.value = gbp.value*gbp.placeholder/eur.placeholder;
  cad.value = gbp.value*gbp.placeholder/cad.placeholder;
  dkk.value = gbp.value*gbp.placeholder/dkk.placeholder;
  nok.value = gbp.value*gbp.placeholder/nok.placeholder;
  sek.value = gbp.value*gbp.placeholder/sek.placeholder;
  chf.value = gbp.value*gbp.placeholder/chf.placeholder;
  jpy.value = gbp.value*gbp.placeholder/jpy.placeholder;
  xdr.value = gbp.value*gbp.placeholder/xdr.placeholder;
  aud.value = gbp.value*gbp.placeholder/aud.placeholder;
  zar.value = gbp.value*gbp.placeholder/zar.placeholder;
  hkd.value = gbp.value*gbp.placeholder/hkd.placeholder;
  nzd.value = gbp.value*gbp.placeholder/nzd.placeholder;
  pln.value = gbp.value*gbp.placeholder/pln.placeholder;
  sgd.value = gbp.value*gbp.placeholder/sgd.placeholder;
  cny.value = gbp.value*gbp.placeholder/cny.placeholder;
  gvt.value = gbp.value*gbp.placeholder/gvt.placeholder;
}
