const http = new easyHTTP


// //Get Posts 

// http.get('https://jsonplaceholder.typicode.com/posts', function(err,res){
//   if(err){
//     console.log(err)
//   }else{
//     console.log(res)
//   }
// })

const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
}
//Create Post

// http.post("https://jsonplaceholder.typicode.com/posts", data, function(err, post){
//   if(err){
//     console.log(err)
//   }else{
//     console.log(post)
//   }
// })

//Update Post

// http.put("https://jsonplaceholder.typicode.com/posts/5", data, 
// function(err, post){
// if(err){
//   console.log(err)
// }else{
//   console.log(data)
// }
// })

//DELETE Post

http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, res) {
  if (err) {
    console.log(err)
  } else {
    console.log(res)
  }
})
console.log(http)