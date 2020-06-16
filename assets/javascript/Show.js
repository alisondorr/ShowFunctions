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
//console.log(Kata1)
// //Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)
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
//console.log(Kata2)
// //Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)
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
//console.log(Kata3)
// //Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)
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
//console.log(Kata4)
// //Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)
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
//console.log(Kata5)
// //Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)
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
//console.log(Kata6)
// //Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)
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
//console.log(Kata7)
// //Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)
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
//console.log(Kata8)
// //Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)
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
//console.log(Kata9)
// //Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)
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
//console.log(Kata10)
//Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
const kata11Header = document.createElement('h1')
kata11Header.append('Kata 11')
mainElement.append(kata11Header)
let kata11 = []
for (let counter11 = 0; counter11 <= sampleArray.length; counter11 += 1) {
    kata11.push(sampleArray[counter11])
}
mainElement.append(kata11)
//console.log(Kata11)
// // //Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
const kata12Header = document.createElement('h1')
kata12Header.append('Kata 12')
mainElement.append(kata12Header)
let kata12 = []
let checkNum = 0
let remainder = 0
for (let counter12 = 0; counter12 < sampleArray.length; counter12 += 1) {
    remainder = 0
    checkNum = sampleArray[counter12]
    //console.log('checkNum is: ' + checkNum)
    remainder = (checkNum % 2)
    //console.log('remainder is:' + remainder)
    if (remainder === 0) {
        // kata12.push(sampleArray[counter12])
        kata12.push(checkNum)
        //  console.log('kata12 is: ' + kata12)
    }
}
mainElement.append(kata12)
//console.log(kata12)
// //Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
const kata13Header = document.createElement('h1')
kata13Header.append('Kata 13')
mainElement.append(kata13Header)
let kata13 = []
let remainder13 = 0
for (let counter13 = 0; counter13 < sampleArray.length; counter13 += 1) {
    remainder13 = 0
    remainder13 = (sampleArray[counter13] % 2)
    if (remainder13 !== 0) {
        kata13.push(sampleArray[counter13])

    } else { }
}
mainElement.append(kata13)
//console.log(kata13)
// //Display the square of each element in sampleArray. (219961, 570025, …, 222784)
const kata14Header = document.createElement('h1')
kata14Header.append('Kata 14')
mainElement.append(kata14Header)
let kata14 = []
let counter14 = 0
let counterSampleSq = 0
for (let counter14 = 0; counter14 < sampleArray.length; counter14 += 1) {
    counterSampleSq = (sampleArray[counter14] * sampleArray[counter14])
    kata14.push(counterSampleSq)
}
mainElement.append(kata14)
//console.log(kata14)
// //Display the sum of all the numbers from 1 to 20.
const kata15Header = document.createElement('h1')
kata15Header.append('Kata 15')
mainElement.append(kata15Header)
let counter15 = 0
let total = 0
let kata15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (let counter15 = 0; counter15 < 20; counter15 += 1) {
    total = total + kata15[counter15]
}
mainElement.append(total)
//console.log(total)
// //Display the sum of all the elements in sampleArray.
const kata16Header = document.createElement('h1')
kata16Header.append('Kata 16')
mainElement.append(kata16Header)
let counter16 = 0
let total16 = 0
for (total16 = 0; counter16 < sampleArray.length; counter16 += 1) {
    total16 = total16 + sampleArray[counter16]
}
mainElement.append(total16)
//console.log(total16)
// //Display the smallest element in sampleArray.
const kata17Header = document.createElement('h1')
kata17Header.append('Kata 17')
mainElement.append(kata17Header)
let kata17 = 0
for (let counter17 = 0; counter17 < sampleArray.length; counter17 += 1) {
    if (sampleArray[counter17] >= sampleArray[counter17 + 1]) {
        kata17 = (sampleArray[counter17 + 1])
    }
}
mainElement.append(kata17)
//console.log(kata17)
// //Display the largest element in sampleArray
const kata18Header = document.createElement('h1')
kata18Header.append('Kata 18')
mainElement.append(kata18Header)
let kata18 = 0
let counter18 = 0
for (let counter18 = 0; counter18 < sampleArray.length; counter18 += 1) {
    if (sampleArray[counter18] < sampleArray[counter18 + 1]) {
        kata18 = (sampleArray[counter18 + 1])
    }
}
mainElement.append(kata18)
//console.log(kata18)







