
function search(){
// var txtSearch=document.getElementById("txtSearch").value;
var txtSearch='mohsaadeh';

// alert(Search);
// const apiSearch = `https://api.github.com/users/${Search}/repos`;
// fetch(apiSearch);
const keys=`11744465f88736ae4a1b3d79ec2ead236991959d`;
const clientID=`cbb5c74c990905782e74`;

// const API_REPO = `https://api.github.com/users/${txtSearch}/repos`;
const API_REPO = `https://api.github.com/search/users?q=${txtSearch}&client_id=${clientID}&client_secret=${keys}`;
fetch(API_REPO,{
    Headers : {
        'Accept' : 'application/vnd.gethub.v3+json'
    }})
    .then (Response => Response.json())
    .then (data => {
        const root =document.querySelector('#root');
        root.innerHTML = `
        <a href=${data.html_url}>Name : ${data.items[0].login} </a>`
        // <p>Followers : ${data.items[0]/followers}</p>` 
    })
    .catch (error=console.error());
    console.log(API_REPO);

// alert(API_REPO);
// fetch(API_REPO)
//   .then((response) => {return response.json()})
//   .then((data) => {
//     // for(let i = 0; i < data.length; i++){
//     //   let repo = document.createElement('div')
//     //   repo.innerHTML =``
      
//     //     <h6>${data[i].name}</h6>
//     //     <p>HTML, CSS & Javascript</p>
      
//     //   reposDiv.appendChild(repo)
//     //   repo.className = 'repo'
//     // }
// //   }
// });
}