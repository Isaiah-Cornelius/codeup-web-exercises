"use strict";

import {Octokit} from "https://cdn.skypack.dev/@octokit/core";
// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({
    auth: gitHubKey
});

await octokit.request('GET /users/{username}/events/public', {
    username: 'Isaiah-Cornelius'
}).then(function (data){
    console.log(data)
    console.log("Git user Isaiah-Cornelius last commit: " + data.data[0].created_at.substring(0, 10))
})

// fetch('https://api.github.com/users', {headers: {gitHubKey}})

function wait(num){
    return new Promise(function (resolve){
      setTimeout(function (){
          resolve(`Resolved at ${num} milliseconds`)
      }, num)
    })

}

wait(1000).then(message=>console.log(`You'll see this after 1 seconds.`, message))
wait(3000).then(message=>console.log(`You'll see this after 3 seconds.`, message))