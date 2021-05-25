## box-sizing: border-box & content-box

content
padding
margin схлопывание верхних и выпадение

margin - 100
ul
<!-- margin - 200 -->
li li li
li li li
margin - 200
/ul
margin - 100

border
радиус и типы линий solid, dashed и dotted.

width & height

## normalize.css
CDN https://cdnjs.com/libraries/normalize
local normalize

## block, 
.container
width
margin: 0 auto
padding: 0 20px

## inline width и height от контента, нет вертикальныхотступов

## inline-block

## display: none

## псевдоклассы
.nav-list li:first-child {}
:last-child

:not(:last-child)) {}

:nth-child(5) - только 5й

:nth-child(an+b)
(2n) - все четные: 2, 4, 6й и так далее
(2n+1) - все нечетные: 1, 3, 5й и так далее
(n+4) - каждый, начиная с 4го
(-n+4) - каждый, до 4го включительно
(4n + 1) - 1, 5, 9, каждый 4й, с 1го

:nth-last-child(an+b) - то же самое, но с конца