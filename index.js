const app = "I don't do much.";

new Promise(function(resolve,reject){...})

let ifTrue = new Promise(function(resolveCallback, rejectCallback){
  let condition = true;

  if (condition ===true){
    resolveCallback(true);
  } else {
    rejectCallback(false);
  }
})


ifTrue = new Promise(function(resolveCallback,rejectCallback){
  setTimeout(function(){
    resolveCallback('alex')
  },5000)
})

ifTrue.then(function(name){
  console.log(name)
}, function(err){console.error(err)})

--- OR ---
ifTrue.then(function(name){
  console.log(name)
}.catch(function(err){console.error(err)})
