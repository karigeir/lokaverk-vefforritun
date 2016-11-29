# lokaverk-vefforritun

## Uppsetning
Til að setja upp locally skal fara í möppu verkefnis eftir að hafa hlaðið verkefninu niður og skrifa 'npm install' í skel.

## Keyrsla
Til að keyra síðu locally skal vera í möppu verkefnis og skrifa 'npm start' í skel. Síðan kemur þá upp á localhost:3000.

Til að linta bakenda skal vera í möppu verkefnis og skrifa 'npm run lint -s' í skel.

Til að linta framenda þarf að breyta package.json. Breyta þarf línunni '"lint": "node ./node_modules/eslint/bin/eslint.js ./src/\*.js"' í '"lint": "node ./node_modules/eslint/bin/eslint.js ./src/public/javascripts/\*.js"' og keyra síðan sömu skipun og fyrir bakenda.

## Slóð síðu
Síðan er aðgengileg á netinu undir léninu:
https://myntbreytir.herokuapp.com

## Höfundar
Kári Geir Gunnarsson, kgg5@hi.is

Sævar Ingi Sigurðsson, sis108@hi.is
