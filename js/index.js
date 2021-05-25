// console.log(`Hello`)
// console.dir({name: 'Sandra'})
// console.log({name: 'Sandra'})
// console.table([{ age: 30}, {name: "Max"}])
// console.warn(`WARNING: будьте внимательны`)
// console.error(`ERROR: вы не правы`)

// ===================
// const name; // Uncaught SyntaxError: Missing initializer in const declaration
const name = 'Sandra'
let age
console.log('age:', age) // undefined
age = 30
console.log('age:', age)
age = 31
console.log('age:', age)

console.log(typeof `sandra`, 'sandra')
console.log(typeof 30, 30)
console.log(typeof true, true)
onsole.log(typeof false, false)
console.log(typeof null, null)
console.log(typeof undefined, undefined)

// alert(`Hello!`)
// let message = prompt('Enter the data')
// console.log('message:', message)
// let answer = confirm('Вам есть 18 лет?')
// console.log('answer:', answer)

// =========================
console.log({ name: 'Sandra' })
console.log([3, { name: 'Sandra' }, { name: 'Max' }])

const musicians = [
  {
    name: 'A',
    band: 'A',
    bestSong: 'A',
  },
  {
    name: 'B',
    band: 'B',
    bestSong: 'B',
  },
  {
    name: 'C',
    band: 'C',
    bestSong: 'C',
  },
  {
    name: 'D',
    band: 'D',
    bestSong: 'D',
  },
  {
    name: 'E',
    band: 'E',
    bestSong: 'E',
  },
  {
    name: 'F',
    band: 'F',
    bestSong: 'F',
  },
]
console.log(musicians)
console.log(musicians[0])
console.log(musicians[1])
console.log(musicians[2])

// додавление элементов
musicians.push(3, 2)
console.log(musicians)
musicians.unshift(3, 2)
console.log(musicians)
// удаление элементов
musicians.pop()
console.log(musicians)
musicians.shift()
console.log(musicians)
// швейцарский нож
// удаление элементов
musicians.splice(0, 1)
console.log(musicians)

// добавление и замена
musicians.splice(4, 0, {}, {})
console.log(musicians)
musicians.splice(-1, 2, {}, {})
console.log(musicians)

// копирование массива
const newMusicians = musicians.slice()
console.log(newMusicians)
console.log(newMusicians === musicians)
const emptyObjects = musicians.slice(4, 6).concat(musicians.slice(8))
console.log(emptyObjects)
const x = musicians
console.log(x)
console.log(x === musicians)

// spread & rest
const newArray = [...musicians]
console.log(newArray)
console.log(newArray === musicians)

for (let i = 0; i < musicians.length; i = i + 1) {
  if (musicians[i].band === undefined) {
    continue
  }
  console.log(musicians[i].band)
}

for (let i = 0; i < musicians.length; i = i + 1) {
  if (musicians[i].band === undefined) {
    break
  }
  console.log('break', musicians[i].band)
}

// функциональные методы массива
const mapArray = musicians.map((element) => {
  console.log(element)
  return element.band
})
console.log('mapArray', mapArray)
console.log(mapArray === musicians)

const mapArray1 = musicians.map((element) => element.bestSong)
console.log('mapArray', mapArray1)
console.log(mapArray1 === musicians)

const filteredArray = musicians.filter((element) => {
  if (element.band === undefined) return element
})
console.log(filteredArray)

const filteredArray1 = musicians.filter((element) => element.band === undefined)
console.log(filteredArray1)

const findArray = musicians.find((element) => element.band === undefined)
console.log(findArray)

const numbers = [1, 10, 20, 35, 47]
const total = numbers.reduce((total, element) => total + element, 0)
console.log(total)

const newArr = numbers.reduce((arr, elem) => {
  console.log(arr)
  console.log(elem)
  arr.push(elem + '')
  return arr
}, [])
console.log(newArr)

for (let elem of numbers) {
  console.log('цикл for of', elem + 1)
}

numbers.forEach((elem) => console.log('метод forEach', elem + 1))
