async function getFile(address){
    const number=await
    contract.methods.getBlockchain().call({from: address})
    .then(function(result){
        console.log(result[0][0]);
        console.log(result[1][0]);
        updatetable(result);
    });
}
function updatetable(result){
    var table = document.getElementById("mytable");
    for(let i of result){
        console.log(i);
        let new_line = table.insertRow(-1);
        let new_cell_1 = new_line.insertCell(0);
        let new_cell_2 = new_line.insertCell(1);
        let new_hash = document.createTextNode(i[0]);
        let new_date = document.createTextNode(i[1]);
        new_cell_1.appendChild(new_hash);
        new_cell_2.appendChild(new_date);
    }
}
async function getUsers(address){
    const number=await
    contract.methods.getUsernames().call({from: address})
    .then(function(result){
        updatetable_user(result);
    });
}
function updatetable_user(result){
    var table = document.getElementById("tableUser");
    for(let i of result){
        console.log(i);
        let new_line = table.insertRow(-1);
        let new_cell_1 = new_line.insertCell(0);
        let new_user = document.createTextNode(i);
        new_cell_1.appendChild(new_user);

    }
}