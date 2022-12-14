"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let hasAtLeastThreeLanguages = users.filter(function (user){
    return user.languages.length >= 3;
})

// Use .map to create an array of strings where each element is a user's email address
let emailsArray = users.map(function (user){
    return user.email
})

// Use .reduce to get the total years of experience from the list of users.
let totalYearsOfExperience = users.reduce(function (accum, user){
    return accum + user.yearsOfExperience
}, 0)

// Once you get the total of years you can use the result to calculate the average.
let averageYearsOfExperience = totalYearsOfExperience / users.length

//     Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce(function (accum, user){
    if (user.email.split("").length > accum.split("").length){
        accum = user.email
    }
    return accum
}, '')

//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let usersNames = users.reduce(function (accum, user){
    if (users.indexOf(user) !== users.length -1){
        accum += user.name + ", "
    } else {
        accum += user.name + "."
    }
    return accum
},"Your instructors are : ")

// Use .reduce to get the unique list of languages from the list of users.
let uniqueUserLanguages = users.reduce(function (accum, user){
    for(let language of user.languages){
        if (accum.indexOf(language) == -1){
            accum.push(language)
        }
    }
    accum.sort();
    return accum
}, [])