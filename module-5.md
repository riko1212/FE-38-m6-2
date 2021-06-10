##

POSITION:

static - статичное (block, flex)

relative - относительно
absolute - абсолютное

fixed - фиксированное

sticky - залипание относительно элемента, в скроллах

inherit - наследуемое от родителя

##

top -

right -

bottom -

left -

##

z-index - порядковый номер слоя элмента в отрыве от основного потока документа

##

overflow - сокрытие вложенного контента

## TRANSFORMATIONS for opacity & transform

transform: type-of-transform

types:

### perspective(100px)

translate(x, y)
translateX(x)
translateY(y)

<!--  -->

<!--  -->

1 - 100%

### scale(x, y)

scaleX(x)
scaleY(y)

<!--  -->

.masters-list-item:hover,
.masters-list-item:focus {
box-shadow: 10px 0 20px 10px black;
transform: scale(1.1);
}

<!--  -->

### rotate(90deg)

<!--  -->

.hero aside {
transform: rotate(-90deg);
}

<!--  -->

### skew(90deg)

<!--  -->

.features-list li:hover{
transform: skew(10deg);
}

<!--  -->

transform-origin: top right
center center
bottom left

<!--  -->

@keyframes rotateWithOrigin {
0% {
transform: rotate3d(0, 0, 1, 0deg);
}

100% {
transform: rotate3d(0, 0, 1, 360deg);
}
}

<!--  -->

## Transitions https://habr.com/ru/post/220715/

### transition: type ms linear 0

### transition-property: type || all
transition-duration: time (s || ms)

### transition-timing-function: linear || cubic-bezier(0, 0, 1, 1)

<!-- ///cubic-bezier(x1, y1, x2, y2) -->

ease == cubic-bezier(.25, .1, .25, 1);
ease-in == cubic-bezier(.42, 0, 1, 1);
ease-out == cubic-bezier(0, 0, .58, 1);
ease-in-out == cubic-bezier(.42, 0, .58, 1);

### transition-delay:num

## ANIMATION

### @keyframes animation-NAME {
0% {
PROP
}
50% {
PROP
}
100% {
PROP
}
}

### animation-name: name;
### animation-duration: 300ms;
### animation-timing-function: linear;
### animation-delay: 1000ms;
### animation-iteration-count: 5 || infinite 
### animation-direction: normal (-> ->) 
                     reverse (<- <-)
                     alternate (-> <-);
                     alternate-reverse (<- ->)

### animation-fill-mode: none | forwards | backwards | both

### animation-play-state: paused при hover