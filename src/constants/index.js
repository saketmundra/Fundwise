export const WALLET1_ADDRESS = "0xB608920e5C7e229F4df98bf380EFBA5857F18268";
export const CONTRACT_ADDRESS = "0x39319e290bFEbcBc7A5c47D59d48651B90490cE0";
export const abi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "companyMap",
    "outputs": [
      {
        "internalType": "string",
        "name": "id",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "eoa",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "assignedAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "target",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "raised",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isComplete",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "counterCompanyMap",
    "outputs": [
      {
        "internalType": "string",
        "name": "id",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "eoa",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "assignedAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "target",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "raised",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isComplete",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_id",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_target",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "_assignedAddress",
        "type": "address"
      }
    ],
    "name": "createCompany",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_companyAddress",
        "type": "address"
      }
    ],
    "name": "investIn",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
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
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "investedIn",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "profit",
        "type": "uint256"
      }
    ],
    "name": "profitGained",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]
export const walletAbi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_companyAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_InvestAddress",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "InvestContract",
    "outputs": [
      {
        "internalType": "contract InvestInterface",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "completeTarget",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_sendTo",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "sendMoney",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]

export const walletBytecode = "0x608060405234801561001057600080fd5b50604051610a4f380380610a4f8339818101604052810190610032919061011d565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505061015d565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100ea826100bf565b9050919050565b6100fa816100df565b811461010557600080fd5b50565b600081519050610117816100f1565b92915050565b60008060408385031215610134576101336100ba565b5b600061014285828601610108565b925050602061015385828601610108565b9150509250929050565b6108e38061016c6000396000f3fe60806040526004361061004e5760003560e01c806312065fe0146103475780638da5cb5b14610372578063905fe3f71461039d578063ee438517146103c8578063ee4ae2c9146103df576101cd565b366101cd57600260149054906101000a900460ff16156101cb5760003490506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16826040516100b59061059c565b60006040518083038185875af1925050503d80600081146100f2576040519150601f19603f3d011682016040523d82523d6000602084013e6100f7565b606091505b505090508061013b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101329061060e565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638db2af9e836040518263ffffffff1660e01b81526004016101969190610647565b600060405180830381600087803b1580156101b057600080fd5b505af11580156101c4573d6000803e3d6000fd5b5050505050505b005b600260149054906101000a900460ff16156103455760003490506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168260405161022f9061059c565b60006040518083038185875af1925050503d806000811461026c576040519150601f19603f3d011682016040523d82523d6000602084013e610271565b606091505b50509050806102b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ac9061060e565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638db2af9e836040518263ffffffff1660e01b81526004016103109190610647565b600060405180830381600087803b15801561032a57600080fd5b505af115801561033e573d6000803e3d6000fd5b5050505050505b005b34801561035357600080fd5b5061035c610408565b6040516103699190610647565b60405180910390f35b34801561037e57600080fd5b50610387610410565b60405161039491906106a3565b60405180910390f35b3480156103a957600080fd5b506103b2610434565b6040516103bf919061071d565b60405180910390f35b3480156103d457600080fd5b506103dd61045a565b005b3480156103eb57600080fd5b5061040660048036038101906104019190610795565b610477565b005b600047905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6001600260146101000a81548160ff021916908315150217905550565b804710156104ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b190610821565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff16826040516104e09061059c565b60006040518083038185875af1925050503d806000811461051d576040519150601f19603f3d011682016040523d82523d6000602084013e610522565b606091505b5050905080610566576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055d9061088d565b60405180910390fd5b505050565b600081905092915050565b50565b600061058660008361056b565b915061059182610576565b600082019050919050565b60006105a782610579565b9150819050919050565b600082825260208201905092915050565b7f50726f66697420636f756c64276e742062652073656e74000000000000000000600082015250565b60006105f86017836105b1565b9150610603826105c2565b602082019050919050565b60006020820190508181036000830152610627816105eb565b9050919050565b6000819050919050565b6106418161062e565b82525050565b600060208201905061065c6000830184610638565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061068d82610662565b9050919050565b61069d81610682565b82525050565b60006020820190506106b86000830184610694565b92915050565b6000819050919050565b60006106e36106de6106d984610662565b6106be565b610662565b9050919050565b60006106f5826106c8565b9050919050565b6000610707826106ea565b9050919050565b610717816106fc565b82525050565b6000602082019050610732600083018461070e565b92915050565b600080fd5b61074681610682565b811461075157600080fd5b50565b6000813590506107638161073d565b92915050565b6107728161062e565b811461077d57600080fd5b50565b60008135905061078f81610769565b92915050565b600080604083850312156107ac576107ab610738565b5b60006107ba85828601610754565b92505060206107cb85828601610780565b9150509250929050565b7f4e6f7420656e6f75676820457468657200000000000000000000000000000000600082015250565b600061080b6010836105b1565b9150610816826107d5565b602082019050919050565b6000602082019050818103600083015261083a816107fe565b9050919050565b7f436f756c64276e742073656e6420457468657200000000000000000000000000600082015250565b60006108776013836105b1565b915061088282610841565b602082019050919050565b600060208201905081810360008301526108a68161086a565b905091905056fea264697066735822122027584d1d980dc25db18ff6ec5e7677d3eef111061562d471f00dddf52f06127864736f6c63430008090033"