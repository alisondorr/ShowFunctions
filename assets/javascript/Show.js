const mainElement = document.querySelector('main')

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
//Show me the Kata project team members :
//Group 4:
//James Rojas
////Andrew Brown
//Zachary Deutsch
//Alison Dorr

//Kata Code

//Display the numbers from 1 to 20. (1, 2, 3, …,19, 20)
const kata1Header = document.createElement('h1')
kata1Header.append('Kata 1')
mainElement.append(kata1Header)
let Kata1 = []
let counter1 = 1
while (counter1 <= 20) {
    Kata1.push(counter1)
    counter1 += 1
}
mainElement.append(Kata1)

//Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)
const kata2Header = document.createElement('h1')
kata2Header.append('Kata 2')
mainElement.append(kata2Header)
let kata2 = []
let counter2 = 2
while (counter2 <= 20) {
    kata2.push(counter2)
    counter2 += 2
}
mainElement.append(kata2)
//Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)
const kata3Header = document.createElement('h1')
kata3Header.append('Kata 3')
mainElement.append(kata3Header)
let kata3 = []
let counter3 = 1
while (counter3 <= 20) {
    kata3.push(counter3)
    counter3 += 2
}
mainElement.append(kata3)
//Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)
const kata4Header = document.createElement('h1')
kata4Header.append('Kata 4')
mainElement.append(kata4Header)
let kata4 = []
let counter4 = 5
while (counter4 <= 100) {
    kata4.push(counter4)
    counter4 += 5
}
mainElement.append(kata4)
//Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)
const kata5Header = document.createElement('h1')
kata5Header.append('Kata 5')
mainElement.append(kata5Header)
let kata5 = []
let counter5 = 1
let counterSq = 0
while (counter5 <= 10) {
    counterSq = (counter5 * counter5)
    kata5.push(counterSq)
    counter5 += 1
}
mainElement.append(kata5)
//Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)
const kata6Header = document.createElement('h1')
kata6Header.append('Kata 6')
mainElement.append(kata6Header)
let kata6 = []
let counter6 = 20
while (counter6 >= 1) {
    kata6.push(counter6)
    counter6 -= 1
}
mainElement.append(kata6)
//Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)
const kata7Header = document.createElement('h1')
kata7Header.append('Kata 7')
mainElement.append(kata7Header)
let kata7 = []
let counter7 = 20
while (counter7 >= 2) {
    kata7.push(counter7)
    counter7 -= 2
}
mainElement.append(kata7)
//Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)
const kata8Header = document.createElement('h1')
kata8Header.append('Kata 8')
mainElement.append(kata8Header)
let kata8 = []
let counter8 = 19
while (counter8 >= 1) {
    kata8.push(counter8)
    counter8 -= 2
}
mainElement.append(kata8)
//Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)
const kata9Header = document.createElement('h1')
kata9Header.append('Kata 9')
mainElement.append(kata9Header)
let kata9 = []
let counter9 = 100
while (counter9 >= 5) {
    kata9.push(counter9)
    counter9 -= 5
}
mainElement.append(kata9)
//Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)
const kata10Header = document.createElement('h1')
kata10Header.append('Kata 10')
mainElement.append(kata10Header)
let kata10 = []
let counter10 = 10
while (counter10 >= 1) {
    counterBsq = (counter10 * counter10)
    kata10.push(counterBsq)
    counter10 -= 1
}
mainElement.append(kata10)
//Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
const kata11Header = document.createElement('h1')
kata11Header.append('Kata 11')
mainElement.append(kata11Header)
let counter11 = 0
while (counter11 <= sampleArray.length) {
    //kata11Header.push(sampleArray)
    mainElement.append(sampleArray)
}
//Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
const kata12Header = document.createElement('h1')
kata12Header.append('Kata 12')
mainElement.append(kata12Header)
let kata12 = []
let counter12 = 0
let remainder = 0
while (counter12 <= sampleArray.length) {
    remainder = (sampleArray[counter12] % 2)
    if (remainder = 0) {
        kata12.push(sampleArray[counter12])
        counter12 += 1
        remainder = 0
    } else {
        counter12 += 1
        remainder = 0
    }
}
mainElement.append(kata12)

//Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
const kata13Header = document.createElement('h1')
kata13Header.append('Kata 13')
mainElement.append(kata13Header)
let kata13 = []
let counter13 = 0
//let remainder = 0
while (counter13 <= sampleArray.length) {
    remainder = (sampleArray[counter13] % 2)
    if (remainder > 0, remainder > 0) {
        kata13.push(sampleArray)
        counter13 += 1
        remainder = 0
    } else {
        counter13 += 1
        remainder = 0
    }
}
mainElement.append(kata13)

//Display the square of each element in sampleArray. (219961, 570025, …, 222784)
const kata14Header = document.createElement('h1')
kata14Header.append('Kata 14')
mainElement.append(kata14Header)
let kata14 = []
//let counter14 = 0
//let counterSq = 0
while (counter14 = 0, counter14 <= sampleArray.length, counter14 += 1) {
    counterSq = (sampleArray[counter14] * sampleArray[counter14])
    kata14.push(counterSq)
}
mainElement.append(kata14)
//Display the sum of all the numbers from 1 to 20.
const kata15Header = document.createElement('h1')
kata15Header.append('Kata 15')
mainElement.append(kata15Header)
let counter15 = 0
let total = 0
let kata15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
while (counter15 <= 20) {
    total = total + kata15[counter15]
    counter15 += 1
}
mainElement.append(total)

//Display the sum of all the elements in sampleArray.
const kata16Header = document.createElement('h1')
kata16Header.append('Kata 16')
mainElement.append(kata16Header)
let counter16 = 0
//let total = 0

while (counter16 <= sampleArray.length) {
    total = total + sampleArray[counter16]
    counter16 += 1
}
//Display the smallest element in sampleArray.
const kata17Header = document.createElement('h1')
kata17Header.append('Kata 17')
mainElement.append(kata17Header)
let kata17 = 0
let counter17 = 0
while (counter17 <= sampleArray.length) {
    while (kata17 = sampleArray[counter17], kata17 >= sampleArray[counter17 + 1], counter17 += 1) {
        kata17 = sampleArray[counter17 + 1]
    }
}
mainElement.append(kata17)
//Display the largest element in sampleArray
const kata18Header = document.createElement('h1')
kata18Header.append('Kata 18')
mainElement.append(kata18Header)
let kata18 = 0
let counter18 = 0
while (counter18 <= sampleArray.length) {
    while (kata18 = sampleArray[counter18], kata18 <= sampleArray[counter18 + 1], counter18 += 1) {
        kata18 = sampleArray[counter18 + 1]
    }
}
mainElement.append(kata18)








