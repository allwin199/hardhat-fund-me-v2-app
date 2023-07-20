// we are copying the abi from FundMe project
// by running yarn hardhat node we are getting the deployed address

export const contractAddress = "0xCF7F0bde4c268B8b4cf464f481e2ff27Dac31397";

export const abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_priceFeed",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "FundMe__NOT_ENOUGH_ETH",
        type: "error",
    },
    {
        inputs: [],
        name: "FundMe__NOT_OWNER",
        type: "error",
    },
    {
        inputs: [],
        name: "FundMe__WITHDRAW_FAILED",
        type: "error",
    },
    {
        inputs: [],
        name: "fund",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_fundingAddress",
                type: "address",
            },
        ],
        name: "getAddressToAmountFunded",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256",
            },
        ],
        name: "getFunder",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getMinimumUsd",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "getOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getPriceFeedAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];

// export const abi = [
//     {
//         inputs: [
//             {
//                 internalType: "address",
//                 name: "priceFeedAddress",
//                 type: "address",
//             },
//         ],
//         stateMutability: "nonpayable",
//         type: "constructor",
//     },
//     {
//         inputs: [],
//         name: "FundMe__NotOwner",
//         type: "error",
//     },
//     {
//         stateMutability: "payable",
//         type: "fallback",
//     },
//     {
//         inputs: [],
//         name: "MINIMUM_USD",
//         outputs: [
//             {
//                 internalType: "uint256",
//                 name: "",
//                 type: "uint256",
//             },
//         ],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "cheaperWithdraw",
//         outputs: [],
//         stateMutability: "payable",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "fund",
//         outputs: [],
//         stateMutability: "payable",
//         type: "function",
//     },
//     {
//         inputs: [
//             {
//                 internalType: "address",
//                 name: "funder",
//                 type: "address",
//             },
//         ],
//         name: "getAddressToAmountFunded",
//         outputs: [
//             {
//                 internalType: "uint256",
//                 name: "",
//                 type: "uint256",
//             },
//         ],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [
//             {
//                 internalType: "uint256",
//                 name: "index",
//                 type: "uint256",
//             },
//         ],
//         name: "getFunder",
//         outputs: [
//             {
//                 internalType: "address",
//                 name: "",
//                 type: "address",
//             },
//         ],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "getOwner",
//         outputs: [
//             {
//                 internalType: "address",
//                 name: "",
//                 type: "address",
//             },
//         ],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "getPriceFeed",
//         outputs: [
//             {
//                 internalType: "contract AggregatorV3Interface",
//                 name: "",
//                 type: "address",
//             },
//         ],
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         inputs: [],
//         name: "withdraw",
//         outputs: [],
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         stateMutability: "payable",
//         type: "receive",
//     },
// ];
