// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe('storyTime', () => {
  it('takes in an array of objects and returns an array with a sentence about each person with their name capitalized', () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    const peopleOutput = [
      "Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."
    ]

    const peopleTwo = [
      { name: 'billy bob mcgee', occupation: 'a farmer' },
      { name: 'james issac neutron', occupation: 'a boy genius' }
    ]
    const peopleTwoOutput = [
      'Billy Bob Mcgee is a farmer.',
      'James Issac Neutron is a boy genius.'
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(storyTime(people)).toEqual(peopleOutput)
    // testing people with middle names
    expect(storyTime(peopleTwo)).toEqual(peopleTwoOutput)
  })
})

// ● storyTime › takes in an array of objects and returns an array with a sentence about each person with their name capitalized
// ReferenceError: storyTime is not defined

// b) Create the function that makes the test pass.

// create a function named storyTime
// storyTime is going to take an array
// we are going to loop over the array
// since each element is an object, we can use dot notation to pull out the values we want
// for the name, we can split at spaces then we will have a first and a last name
// we can capitalize the first character in each word
// we can make a sentence for the person using their capitalized name and their occupation
// we will add each sentence to an array
// we will return the array of sentences

const storyTime = arr => {
  return arr.map(val => {
    const { name, occupation } = val
    const capitalizedName = name.split(' ').map(n => n[0].toUpperCase() + n.slice(1)).join(' ')
    return `${capitalizedName} is ${occupation}.`
  })
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe('remainders', () => {
  it('takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3', () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge1Output = [2, 0, -1, 0]
    // Expected output: [ 2, 0, -1, 0 ]

    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    const hodgepodge2Output = [2, 1, -1]
    // Expected output: [ 2, 1, -1 ]

    expect(remainders(hodgepodge1)).toEqual(hodgepodge1Output)
    expect(remainders(hodgepodge2)).toEqual(hodgepodge2Output)
  })
})

// ● remainders › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
// ReferenceError: remainders is not defined

// b) Create the function that makes the test pass.

// create a function named remainders
// remainders will take in an array of mixed data
// we will have to filter anything in the array that is not a number
// we can loop over the filtered array and make a new array containing the remainder of that number divided by 3
// we can then return the new array

const remainders = arr => arr.filter(val => typeof val === 'number').map(val => val % 3)

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe('cubedSum', () => {
  it('takes in an array of numbers and returns the sum of all the numbers cubed', () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum1Output = 99
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    const cubeAndSum2Output = 1125
    // Expected output: 1125

    expect(cubedSum(cubeAndSum1)).toEqual(cubeAndSum1Output)
    expect(cubedSum(cubeAndSum2)).toEqual(cubeAndSum2Output)
  })
})

// ● cubedSum › takes in an array of numbers and returns the sum of all the numbers cubed
// ReferenceError: cubedSum is not defined

// b) Create the function that makes the test pass.

// create a function named cubedSum
// cubedSum will take in an array of numbers
// we can loop over the array and cube each number and add it to a new array
// we can then loop over that array and find the sum of all the cubed numbers
// we can then return the sum

const cubedSum = arr => arr.map(val => val ** 3).reduce((a, b) => a + b)
