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

# Flexbox

container & elements
no type (mlock & inline)
block to row
margin не выпадает и не схлопывается
автоматические вертикальные отступы

main axis === row, column

<!-- задаем контейнер -->

display: flex

<!-- задаем направляющуую ось -->

flex-direction: row, column
            row-reverse, column-reverse

<!-- задаем перенос, если нужно -->

flex-wrap: nowrap, wrap, wrap-reverse

<!-- альтернатива
flex-direction & flex-wrap-->

flex-flow: row wrap, column wrap

<!-- по горизонтали -->

justify-content: flex-start,
flex-end
center
space-between
space-evenly
space-around

<!-- по вертикали -->

align-items: stretch,
flex-start - прижмем картинку к верху, если она меньше, чем элемент рядом
flex-end
center
baseline

<!-- сетка -->

ul {
display: flex;
flex-wrap: wrap;
margin-left: -10px;
margin-top: -10px;
}
li {
margin-left: 10px;
margin-top: 10px;
flex-basis: calc((100% - 30px) / 3);
<!-- or -->
width: 100px
}
align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch

flex-grow: 2 - увеличить вдвое по возможности

разделить хедер на 
aside и div flex-grow: 1;

flex-shrink: - сместить по вертикали элемент в контейнере

order - задать отличный порядновый номер элемента в контейнере, исходя из его порядка в html