class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()

  constructor(title, detail){
    this.title = title
    this.detail = detail
  }
  addTitle=()=>{
    var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
  }
  addDescription=()=>{
    var Description = document.createElement('p');
    Description.setAttribute("id","blog-description");
    document.getElementById('card-text').appendChild(Description);
    Description.innerHTML += this.detail
    }
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`



// 1 method:

let click = 0;
function helperAddPost(){
if(click%2==0){
  document.getElementById("popupContact").style.display="block";
  click++;
}
else{
  document.getElementById("popupContact").style.display="none";
  click++
}
}


//2nd method
// let flag = true;
// function helperAddPost(){
//   if(flag==true){
//     document.getElementById("popupContact").style.display = "block"
//     flag=!flag
//   }
//   else{
//     document.getElementById("popupContact").style.display = "none"
//     flag=!flag
//   }
// }

function helperPost(){
  let title = document.getElementById("title").value
  let discription = document.getElementById("detail").value
  var blog = new Blog(title,discription)
  blog.addDescription()
  blog.addTitle()
  document.getElementById("popupContact").style.display = "none"
}


