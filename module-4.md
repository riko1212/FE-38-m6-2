## Изображения
контентные в html (img)- несут смысловую нагрузку
декоративные - css (background, ::after, ::before)- фоны, псевдоэлементы - для красоты

## background
background-color
background-image

background-repeat - повторение
background-position - позиция в элементе
background-attachment - фиксация или прокрутка
background-size - размер

img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: auto;
}
.img-wrapper {
    overflow: fidden;
    width: 1200px;
}

## псевдоэлементы (до и после)
selector::before,
selector::after {
    content: "";
    display: inline-block; block;
    width: px, %;
    height: px, %;
}
### эффект наведения 
selector:hover::before,
selector:hover::after {
    <!-- properties -->
}

## ГРАДИЕНТЫ
linear-gradient(to, color-1, color-2, ..., color-n)
linear-gradient(90deg, #f598a8, #f6edb2);
linear-gradient(90deg, #69b7eb, #b3dbd3, #f4d6db);
linear-gradient(3deg, #e6d16c, #16014c);
###
linear-gradient(rgba(135, 60, 255, 0.4), rgba(135, 60, 255, 0.0) 80%),
		linear-gradient(-45deg, rgba(120, 155, 255, 0.9) 25%, rgba(255, 160, 65, 0.9) 75%);
###
linear-gradient(limegreen, transparent),
		linear-gradient(90deg, skyblue, transparent),
		linear-gradient(-90deg, coral, transparent);
###
linear-gradient(#c6e4ee 0%, #c6e4ee 40%, #fed1ae 60%, #faa0b9 70%, #cb7dcb 80%, #757ecb 100%);
###
linear-gradient(to right, #f00, #ffa500, #ff0, #008000, #00f, #4b0082, #ee82ee);
###
linear-gradient(45deg, #F17C58, #E94584, #24AADB, #27DBB1, #FFDC18, #FF3706);

###
radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #FDB931 8%, #9f7928 30%, #8a6e2f 40%, transparent 80%),
		radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
###
background-blend-mode: screen;
	background-blend-mode: multiply;
	background-blend-mode: overlay;
	background-blend-mode: darken;
	background-blend-mode: soft-light;
	background-blend-mode: luminosity;	
	background:
		linear-gradient(red, transparent),
		linear-gradient(to top left, lime, transparent),
		linear-gradient(to top right, blue, transparent);
## генераторы градиентов
https://active-vision.ru/icon/gradient/
https://cssgradient.io/
http://flatonika.ru/css-gradient-generator-onlajn/
https://www.colorzilla.com/gradient-editor/

## ТЕНИ 
box-shadow: горизонт вертикаль размытие площадь цвет
можно много через запятую, но лень

## генераторы теней
https://tamali.net/instrument/html-css/css-box-shadow/
https://i-leon.ru/tools/box-shadow

## ВЕКТОРЫ .svg
для иконок

viewBox="горизонт вертикаль ширина высота"
fill - альтернатива color

background & <img> - без ховера и фокуса

ДЛЯ ХОВЕРА И ФОКУСА ЮЗАТЬ и СПРАЙТЫ тоже
<svg>
<use href="./images/icons/sprite.svg#ID"></use>
</svg>


## РАСТР 
.jpeg, .jpg, etc.
для картинок

.png - для картинок, с прозрачным или изменяемым фоном

https://seeklogo.com/vector-logo/357693/tiktok-icon
