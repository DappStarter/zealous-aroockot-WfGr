require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney climb force ten fire note magic evil hunt brave swift truth'; 
let testAccounts = [
"0x1f14e0310fd62a45c232675d0b02b22ef61c7744c5948a62333d9421a7076286",
"0x66c549fd1b551f6bb59e2b40335d604ed85669ea81cf1db70b07e1aaf55b46ba",
"0x21cd18c5d41f09cf14fc5e7f95a5105e03f133b4fbb63dcf6b9ef631a81a537f",
"0x1aeb1b3dd59b697056461e67f0972fe1466086bb1a0877b0b1b091d5ed7b1002",
"0x7ddd3fa8d8c09ad8b7d8c1b66adf5bc1acb50180143d22e0e0d2cc05b9312411",
"0xb5f3f1bbfc9d223f7c52b2273c3e9506b560fc83d261ee395fd95f5683f8be0a",
"0x4761e7ecff5d4dba7c879f0b3ff78791271bab2009ff3e8de096b0b2b4685f5c",
"0xf5b9afd0eda268ded405b1122d6981481e259666dc97938cd29ad6be1a18ec97",
"0x41625a1d01c5d4c787c2ec5b87a8121371d9f0552553643c52f8fcf4497c7af8",
"0x0b8fa62e07a5fd0e57c5f3cfe7f375b9eb2f48a5ff5bce642439554e39aedcdb"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

