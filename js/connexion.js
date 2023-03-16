async function fungetNumber(){
  username = document.getElementById("username").value;
  address = document.getElementById("address").value;
  const number=await
  contract.methods.setUsername(username).send({from: address})
  .on('transactionHash', function(hash){
// 
  })
  .on('receipt', function(receipt){
  })
  .on('confirmation', function(confirmationNumber, receipt){ 
    console.log(username,address);
  })
  .on('error', console.error); // If a out of gas error, the second parameter is the receipt.
}
