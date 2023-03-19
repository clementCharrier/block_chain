pragma solidity 0.8.7;

contract financialContract{
    struct document{
        string hash;
        string date;
    }
    mapping(string => address) public usernames;
    mapping(address => document[]) public blockchain;
    string[] list_username;
    address[] list_address;

    function setUsername(string memory user) public{
        usernames[user] = msg.sender;
        list_username.push(user);
    }
    function setBlockchain(string memory username,string memory _hash, string memory _date) public{
        blockchain[usernames["admin"]].push(document(_hash,_date));
        if (bytes(username).length != bytes("admin").length){
            blockchain[usernames[username]].push(document(_hash,_date));
        }
        
    }

    function getBlockchain() public view returns(document[] memory){
        return blockchain[msg.sender];
    }

    function getUsernames() public view returns(string[] memory){
        return list_username;
    }

}