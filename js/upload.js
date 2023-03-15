function hash(){

  var reader = new FileReader();
  var file = document.getElementById("formUpload").files[0];

  console.log("on est dans le hash");

  reader.addEventListener('load',function () {
    var hash = CryptoJS.SHA256(CryptoJS.enc.Latin1.parse(this.result));
    var sha256 = hash.toString(CryptoJS.enc.Hex)
    var filename = document.getElementById("formUpload").value.split('/').pop().split('\\').pop();
    var output = "SHA256 (" + filename + ") = " + sha256
    console.log(output);
    document.getElementById("uploadFile").innerText = output
    AddToBlockchain(sha256);
  });
  reader.readAsBinaryString(document.getElementById("formUpload").files[0]);
}
async function AddToBlockchain(sha256){
  const number=await
  contract.methods.setBlockchain("thomas",sha256,"AAAAAAAAAAAAAA").send({from: "0x51D5952F3F03B216232Bd65d117b81Ecec2b899B"})
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
