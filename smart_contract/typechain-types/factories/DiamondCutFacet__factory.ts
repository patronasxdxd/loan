/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DiamondCutFacet,
  DiamondCutFacetInterface,
} from "../DiamondCutFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        indexed: false,
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "DiamondCut",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "diamondCut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611572806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631f931c1c14610030575b600080fd5b61004361003e366004610fc2565b610045565b005b61004d61009e565b61009761005a85876112f8565b8484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061011a92505050565b5050505050565b6000805160206114d1833981519152600401546001600160a01b031633146101185760405162461bcd60e51b815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201526132b960f11b60648201526084015b60405180910390fd5b565b60005b835181101561037d57600084828151811061014857634e487b7160e01b600052603260045260246000fd5b60200260200101516020015190506000600281111561017757634e487b7160e01b600052602160045260246000fd5b81600281111561019757634e487b7160e01b600052602160045260246000fd5b1415610202576101fd8583815181106101c057634e487b7160e01b600052603260045260246000fd5b6020026020010151600001518684815181106101ec57634e487b7160e01b600052603260045260246000fd5b6020026020010151604001516103c8565b61036a565b600181600281111561022457634e487b7160e01b600052602160045260246000fd5b141561028a576101fd85838151811061024d57634e487b7160e01b600052603260045260246000fd5b60200260200101516000015186848151811061027957634e487b7160e01b600052603260045260246000fd5b60200260200101516040015161054b565b60028160028111156102ac57634e487b7160e01b600052602160045260246000fd5b1415610312576101fd8583815181106102d557634e487b7160e01b600052603260045260246000fd5b60200260200101516000015186848151811061030157634e487b7160e01b600052603260045260246000fd5b6020026020010151604001516106e7565b60405162461bcd60e51b815260206004820152602760248201527f4c69624469616d6f6e644375743a20496e636f727265637420466163657443756044820152663a20b1ba34b7b760c91b606482015260840161010f565b508061037581611462565b91505061011d565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb6738383836040516103b1939291906110b6565b60405180910390a16103c38282610813565b505050565b60008151116103e95760405162461bcd60e51b815260040161010f906111cc565b6000805160206114d18339815191526001600160a01b03831661041e5760405162461bcd60e51b815260040161010f90611217565b6001600160a01b03831660009081526001820160205260409020546001600160601b038116610451576104518285610a20565b60005b835181101561009757600084828151811061047f57634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b0316801561051d5760405162461bcd60e51b815260206004820152603560248201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f6044820152746e207468617420616c72656164792065786973747360581b606482015260840161010f565b6105298583868a610a8a565b836105338161147d565b9450505050808061054390611462565b915050610454565b600081511161056c5760405162461bcd60e51b815260040161010f906111cc565b6000805160206114d18339815191526001600160a01b0383166105a15760405162461bcd60e51b815260040161010f90611217565b6001600160a01b03831660009081526001820160205260409020546001600160601b0381166105d4576105d48285610a20565b60005b835181101561009757600084828151811061060257634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b039081169087168114156106ae5760405162461bcd60e51b815260206004820152603860248201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60448201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000606482015260840161010f565b6106b9858284610b2a565b6106c58583868a610a8a565b836106cf8161147d565b945050505080806106df90611462565b9150506105d7565b60008151116107085760405162461bcd60e51b815260040161010f906111cc565b6000805160206114d18339815191526001600160a01b0383161561078d5760405162461bcd60e51b815260206004820152603660248201527f4c69624469616d6f6e644375743a2052656d6f76652066616365742061646472604482015275657373206d757374206265206164647265737328302960501b606482015260840161010f565b60005b825181101561080d5760008382815181106107bb57634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160e01b031981166000908152918590526040909120549091506001600160a01b03166107f8848284610b2a565b5050808061080590611462565b915050610790565b50505050565b6001600160a01b03821661089a578051156108965760405162461bcd60e51b815260206004820152603c60248201527f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860448201527f3029206275745f63616c6c64617461206973206e6f7420656d70747900000000606482015260840161010f565b5050565b60008151116109115760405162461bcd60e51b815260206004820152603d60248201527f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460448201527f7920627574205f696e6974206973206e6f742061646472657373283029000000606482015260840161010f565b6001600160a01b038216301461094357610943826040518060600160405280602881526020016114f160289139610f3e565b600080836001600160a01b03168360405161095e919061109a565b600060405180830381855af49150503d8060008114610999576040519150601f19603f3d011682016040523d82523d6000602084013e61099e565b606091505b50915091508161080d578051156109c9578060405162461bcd60e51b815260040161010f91906111b2565b60405162461bcd60e51b815260206004820152602660248201527f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e2072656044820152651d995c9d195960d21b606482015260840161010f565b610a428160405180606001604052806024815260200161151960249139610f3e565b6002820180546001600160a01b0390921660008181526001948501602090815260408220860185905594840183559182529290200180546001600160a01b0319169091179055565b6001600160e01b0319831660008181526020868152604080832080546001600160601b03909716600160a01b026001600160a01b0397881617815594909516808352600180890183529583208054968701815583528183206008870401805460e09890981c60046007909816979097026101000a96870263ffffffff9097021990971695909517909555529290915281546001600160a01b031916179055565b6001600160a01b038216610ba65760405162461bcd60e51b815260206004820152603760248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360448201527f74696f6e207468617420646f65736e2774206578697374000000000000000000606482015260840161010f565b6001600160a01b038216301415610c165760405162461bcd60e51b815260206004820152602e60248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560448201526d3a30b1363290333ab731ba34b7b760911b606482015260840161010f565b6001600160e01b03198116600090815260208481526040808320546001600160a01b0386168452600180880190935290832054600160a01b9091046001600160601b03169291610c65916112e1565b9050808214610d73576001600160a01b03841660009081526001860160205260408120805483908110610ca857634e487b7160e01b600052603260045260246000fd5b600091825260208083206008830401546001600160a01b038916845260018a019091526040909220805460079092166004026101000a90920460e01b925082919085908110610d0757634e487b7160e01b600052603260045260246000fd5b600091825260208083206008830401805463ffffffff60079094166004026101000a938402191660e09590951c929092029390931790556001600160e01b03199290921682528690526040902080546001600160a01b0316600160a01b6001600160601b038516021790555b6001600160a01b03841660009081526001860160205260409020805480610daa57634e487b7160e01b600052603160045260246000fd5b60008281526020808220600860001990940193840401805463ffffffff600460078716026101000a0219169055919092556001600160e01b031985168252869052604081205580610097576002850154600090610e09906001906112e1565b6001600160a01b0386166000908152600180890160205260409091200154909150808214610ed4576000876002018381548110610e5657634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546002890180546001600160a01b039092169250829184908110610e9557634e487b7160e01b600052603260045260246000fd5b600091825260208083209190910180546001600160a01b0319166001600160a01b03948516179055929091168152600189810190925260409020018190555b86600201805480610ef557634e487b7160e01b600052603160045260246000fd5b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b0388168252600189810190915260408220015550505050505050565b813b818161080d5760405162461bcd60e51b815260040161010f91906111b2565b80356001600160a01b0381168114610f7657600080fd5b919050565b60008083601f840112610f8c578182fd5b50813567ffffffffffffffff811115610fa3578182fd5b602083019150836020828501011115610fbb57600080fd5b9250929050565b600080600080600060608688031215610fd9578081fd5b853567ffffffffffffffff80821115610ff0578283fd5b818801915088601f830112611003578283fd5b813581811115611011578384fd5b8960208260051b8501011115611025578384fd5b6020830197508096505061103b60208901610f5f565b94506040880135915080821115611050578283fd5b5061105d88828901610f7b565b969995985093965092949392505050565b60008151808452611086816020860160208601611436565b601f01601f19169290920160200192915050565b600082516110ac818460208701611436565b9190910192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b01875b8481101561118257898403607f19018652815180516001600160a01b0316855283810151898601906003811061112257634e487b7160e01b8c52602160045260248cfd5b868601526040918201519186018a9052815190819052908401908a90898701905b8083101561116d5783516001600160e01b0319168252928601926001929092019190860190611143565b509785019795505050908201906001016110de565b50506001600160a01b038a169088015286810360408801526111a4818961106e565b9a9950505050505050505050565b6020815260006111c5602083018461106e565b9392505050565b6020808252602b908201527f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660408201526a1858d95d081d1bc818dd5d60aa1b606082015260800190565b6020808252602c908201527f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260408201526b65206164647265737328302960a01b606082015260800190565b6040516060810167ffffffffffffffff81118282101715611286576112866114ba565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156112b5576112b56114ba565b604052919050565b600067ffffffffffffffff8211156112d7576112d76114ba565b5060051b60200190565b6000828210156112f3576112f36114a4565b500390565b600061130b611306846112bd565b61128c565b838152602080820191908460053688821b83011115611328578586fd5b855b8881101561142957823567ffffffffffffffff80821115611349578889fd5b818a0191506060823603121561135d578889fd5b611365611263565b61136e83610f5f565b81528683013560038110611380578a8bfd5b8188015260408381013583811115611396578b8cfd5b939093019236601f8501126113a9578a8bfd5b833592506113b9611306846112bd565b83815288810190858a0136868a1b88018c0111156113d5578d8efd5b8d96505b8587101561140c5780356001600160e01b0319811681146113f8578e8ffd5b835260019690960195918a01918a016113d9565b50918301919091525088525050948301949183019160010161132a565b5092979650505050505050565b60005b83811015611451578181015183820152602001611439565b8381111561080d5750506000910152565b6000600019821415611476576114766114a4565b5060010190565b60006001600160601b038083168181141561149a5761149a6114a4565b6001019392505050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfec8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465a264697066735822122024cddf873a0451823942481cafe19685d1107897ac2ced07cb6aba6d1f3c0fea64736f6c63430008040033";

type DiamondCutFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondCutFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiamondCutFacet__factory extends ContractFactory {
  constructor(...args: DiamondCutFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DiamondCutFacet> {
    return super.deploy(overrides || {}) as Promise<DiamondCutFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DiamondCutFacet {
    return super.attach(address) as DiamondCutFacet;
  }
  connect(signer: Signer): DiamondCutFacet__factory {
    return super.connect(signer) as DiamondCutFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondCutFacetInterface {
    return new utils.Interface(_abi) as DiamondCutFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondCutFacet {
    return new Contract(address, _abi, signerOrProvider) as DiamondCutFacet;
  }
}
