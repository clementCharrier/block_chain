
let web3=new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
var contract=new web3.eth.Contract(
	[
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "username",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_hash",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_date",
					"type": "string"
				}
			],
			"name": "setBlockchain",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "user",
					"type": "string"
				}
			],
			"name": "setUsername",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "blockchain",
			"outputs": [
				{
					"internalType": "string",
					"name": "hash",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "date",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getBlockchain",
			"outputs": [
				{
					"components": [
						{
							"internalType": "string",
							"name": "hash",
							"type": "string"
						},
						{
							"internalType": "string",
							"name": "date",
							"type": "string"
						}
					],
					"internalType": "struct financialContract.document[]",
					"name": "",
					"type": "tuple[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getUsernames",
			"outputs": [
				{
					"internalType": "string[]",
					"name": "",
					"type": "string[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"name": "usernames",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	],"0x6057B83c8a140d35FB69Dd9089537d27A079f616",{gas:'6721975'})