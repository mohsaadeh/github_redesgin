function search(){
var txtSearch=document.getElementById("txtSearch").value;

// alert(Search);
// const apiSearch = `https://api.github.com/users/${Search}/repos`;
// fetch(apiSearch);
// const API_REPO = `https://api.github.com/users/${txtSearch}/repos`;

// var txtSearch='mohsaadeh';

const keys=`11744465f88736ae4a1b3d79ec2ead236991959d`;
const clientID=`cbb5c74c990905782e74`;

const API_REPO = `https://api.github.com/search/users?q=${txtSearch}&client_id=${clientID}&client_secret=${keys}`;

fetch(API_REPO,{
    Headers : {
        'Accept' : 'application/vnd.gethub.v3+json'
    }})
    .then (Response => Response.json())
    .then (data => {
        const profileName =document.querySelector('#profile-name');
        profileName.innerHTML = `<a href=${data.html_url}>${data.items[0].login} </a>`
        document.getElementById("profile-img").src = data.items[0].avatar_url;

        // const repos =document.querySelector('#repos-all');
        // repos.innerHTML = `<a href='#'>hello </a>`
        
    })
    .catch (error=console.error());




    // Repos
    
    let publicBox='<p class="public-box">public</p>'
    let reType=`<div><span></span><p>HTML</p></div>`
    fetch(`https://api.github.com/users/${txtSearch}/repos`,{
        Headers : {
            'Accept' : 'application/vnd.gethub.v3+json'
        }})
        .then (Response => Response.json())
        .then (data => {

           
            let parent = document.querySelector('#repos-all');
            parent.innerHTML = '';
            for (let i = 1; i <= 6; i++) {
                let divRepo = document.createElement('div');
                divRepo.className='repo-card';
                divRepo.innerHTML = `<div class="repo-card-header"><a href=${data[i].html_url}>${data[i].name} </a> 
                ${publicBox}</div>
                <div style="    display: flex;
                gap: 5px;"><span class="repo-type"></span><p>${data[i].language}</p></div>` ;
                parent.appendChild(divRepo);
            }
        })
        .catch (error=console.error());
}

