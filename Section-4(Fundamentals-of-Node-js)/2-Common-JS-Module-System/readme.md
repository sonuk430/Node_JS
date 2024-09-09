# Common JS Module System

- require ka typeof ek Function hota he.
  ex = console.log(typeof require) // output=> function

- Note:require function ki return value module.exports hoat he.

* NOTE:-

- 1. require ek function he jo ki ek string argument leta he or jo string hm pass krte he uske argument me o ek vilid path hona chamiye nahi to ye app ko error show krega.

- 2. require function me jo hm file ki path denge(argument) use file me ja kr line by line sare code ko execute krega or uske bad module.exports ki return value ko return kr dega.
