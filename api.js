
function search(){
var Search=document.getElementById("txtSearch").value;
// alert(Search);
// const apiSearch = `https://api.github.com/users/${Search}/repos`;
// fetch(apiSearch);

const API_REPO = `https://api.github.com/users/${Search}/repos`;
alert(API_REPO);
fetch(API_REPO)
  .then((response) => {return response.json()})
  .then((data) => {
    // for(let i = 0; i < data.length; i++){
    //   let repo = document.createElement('div')
    //   repo.innerHTML =``
      
    //     <h6>${data[i].name}</h6>
    //     <p>HTML, CSS & Javascript</p>
      
    //   reposDiv.appendChild(repo)
    //   repo.className = 'repo'
    // }
//   }
});
}