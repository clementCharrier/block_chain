// async function papa(){
//     var username = document.getElementById("username").value;
//     var address = document.getElementById("address").value;
//     console.log(username,address);
//     const number=await
//     contract.methods.setUsername(username).send({from: address})
//     .on('transactionHash', function(hash){
//   // 
//     })
//     .on('receipt', function(receipt){
//     })
//     .on('confirmation', function(confirmationNumber, receipt){ 
//       console.log("c'est bon ca marche")
//     })
//     .on('error', console.error); // If a out of gas error, the second parameter is the receipt.
//     }
async function fungetNumber(){
    var username = document.getElementById("username").value;
    var address = document.getElementById("address").value;
    const number=await
    contract.methods.setUsername(username).send({from: address})
    .on('transactionHash', function(hash){
  // 
    })
    .on('receipt', function(receipt){
    })
    .on('confirmation', function(confirmationNumber, receipt){ 
      console.log("c'est bon ca marche")
      functionGet();
    })
    .on('error', console.error); // If a out of gas error, the second parameter is the receipt.
    
  }