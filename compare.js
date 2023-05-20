
// let userData=[];
// function getData(strText){
//     const API_REPO = `https://api.github.com/users/${strText}`;
//     fetch(API_REPO,{
//         Headers : {
//             'Accept' : 'application/vnd.gethub.v3+json'
//         }})
//         .then (Response => Response.json())
//         .then (data => {
//            let val1=data.public_repos;
//             let val2=data.login;
//             // console.log(userData);
//               return  val1,val2;
//         })
//         .catch (error=console.error());
// }

function getPlayer1(){
   let Serach1=document.getElementById('txtSearch1').value;
   const API_REPO = `https://api.github.com/users/${Serach1}`;
   fetch(API_REPO,{
       Headers : {
           'Accept' : 'application/vnd.gethub.v3+json'
       }})
       .then (Response => Response.json())
       .then (data => {
          let val1=data.public_repos;
           let val2=data.login;
           let img=data.avatar_url;

           const profileName =document.querySelector('#username1');
           profileName.innerHTML = val2;

           const score =document.querySelector('#score1');
           score.innerHTML = val1;

           document.getElementById("img1").src = img;
           let score1 =parseInt(document.getElementById("score1").innerHTML);
           let score2=parseInt(document.getElementById("score2").innerHTML);

           if(score1!=0 && score2!=0){
            if(score1==score2){
                const result1 =document.querySelector('#result1');
                result1.innerHTML = "Drow";

                const result2 =document.querySelector('#result2');
                result2.innerHTML = "Drow";

            }
            else if(score1>score2){
                
                const result1 =document.querySelector('#result1');
                result1.style.color = "green";
                result1.innerHTML = "Winner";

                const result2 =document.querySelector('#result2');
                result2.innerHTML = "Loser";
                result2.style.color = "red";
            }
            else{
                const result2 =document.querySelector('#result2');
                result2.innerHTML = "Winner";
                result2.style.color = "green";

                const result1 =document.querySelector('#result1');
                result1.innerHTML = "Loser";
                result1.style.color = "red";
            }
           }
           // console.log(userData);

            //  console.log(val1,val2);
       })
       .catch (error=console.error());
//   let arr= getData(document.getElementById('txtSearch1').value);

//   console.log(arr);
}

function getPlayer2(){
    let Serach2=document.getElementById('txtSearch2').value;
    const API_REPO = `https://api.github.com/users/${Serach2}`;
    fetch(API_REPO,{
        Headers : {
            'Accept' : 'application/vnd.gethub.v3+json'
        }})
        .then (Response => Response.json())
        .then (data => {
           let val1=data.public_repos;
            let val2=data.login;
            let img=data.avatar_url;

            const profileName =document.querySelector('#username2');
            profileName.innerHTML = val2;

            const score =document.querySelector('#score2');
            score.innerHTML = val1;

            document.getElementById("img2").src = img;

            let score1 =parseInt(document.getElementById("score1").innerHTML);
            let score2=parseInt(document.getElementById("score2").innerHTML);

                  if(score1!=0 && score2!=0){
            if(score1==score2){
                const result1 =document.querySelector('#result1');
                result1.innerHTML = "Drow";

                const result2 =document.querySelector('#result2');
                result2.innerHTML = "Drow";

            }
            else if(score1>score2){
                
                const result1 =document.querySelector('#result1');
                result1.style.color = "green";
                result1.innerHTML = "Winner";

                const result2 =document.querySelector('#result2');
                result2.innerHTML = "Loser";
                result2.style.color = "red";
            }
            else{
                const result2 =document.querySelector('#result2');
                result2.innerHTML = "Winner";
                result2.style.color = "green";

                const result1 =document.querySelector('#result1');
                result1.innerHTML = "Loser";
                result1.style.color = "red";
            }}
            // console.log(userData);
            //   console.log(val1,val2);
        })
        .catch (error=console.error());




 //   let arr= getData(document.getElementById('txtSearch1').value);
 
 //   console.log(arr);

    // let arr= getData(document.getElementById('txtSearch2').value);
    // console.log(arr);
  }
  






