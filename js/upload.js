async function getUsers(address){
  const number=await
  contract.methods.getUsernames().call({from: address})
  .then(function(result){
      hash(address,result);
  });
}

function hash(address,users){
  var reader = new FileReader();
  var file = document.getElementById("formUpload").files[0];
  var date = document.getElementById("date").value;
  var username = document.getElementById("userDestinataire").value;
  var ok = 0;
  for (let i of users){
    console.log(i);
    if(username == i){
      ok = 1;
    }
  }
  if (!ok){
    console.log("pas le bon user");
    return 0;
  }

  reader.addEventListener('load',function () {
    var hash = CryptoJS.SHA256(CryptoJS.enc.Latin1.parse(this.result));
    var sha256 = hash.toString(CryptoJS.enc.Hex)
    var filename = document.getElementById("formUpload").value.split('/').pop().split('\\').pop();
    var output = "SHA256 (" + filename + ") = " + sha256
    console.log(output);
    document.getElementById("uploadFile").innerText = output
    AddToBlockchain(username,sha256,date,address);
  });
  reader.readAsBinaryString(document.getElementById("formUpload").files[0]);
}
async function AddToBlockchain(username,sha256,date,address){
  const number=await
  contract.methods.setBlockchain(username,sha256,date).send({from: address})
  .on('transactionHash', function(hash){
// 
  })
  .on('receipt', function(receipt){
  })
  .on('confirmation', function(confirmationNumber, receipt){ 
    console.log("c'est upload")
  })
  .on('error', console.error); // If a out of gas error, the second parameter is the receipt.
}