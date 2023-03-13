function hash(){

  var reader = new FileReader();
  var file = document.getElementById("formUpload").files[0];

  console.log("on est dans le hash");

  reader.addEventListener('load',function () {
    var hash = CryptoJS.SHA256(CryptoJS.enc.Latin1.parse(this.result));
    var md5 = hash.toString(CryptoJS.enc.Hex)
    var filename = document.getElementById("formUpload").value.split('/').pop().split('\\').pop();
    var output = "SHA256 (" + filename + ") = " + md5
    console.log(output);
    document.getElementById("uploadFile").innerText = output
  });
  reader.readAsBinaryString(document.getElementById("formUpload").files[0]);
}


