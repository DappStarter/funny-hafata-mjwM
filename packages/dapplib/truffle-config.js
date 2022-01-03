require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture story cost office company gentle light army gift'; 
let testAccounts = [
"0xcb88d9d252daddd725cf292dca5f2fd1b4b24a27e96c07c5605d5fc0ed2821c1",
"0x3619867d263d420997c1fc56e622da396fcb0758a302fb3562b998392e0909cb",
"0x9a1d04db396b4ec8626aa6309c73654d4788514ee2e1d4c84fcb324c7d581a8f",
"0x0229d820f2771a865874d58f2ad6b65a7e08d2db927a5728bc7fe547e6ac929c",
"0x30b16d1c15b5bb35e8a47bf5b48dacf2359cb7832c1881084d480d03bc0d74b7",
"0xb19074e8ad78242241943c1e97aa9f3f4a88284be130a8d4a239cef2753b4b6a",
"0xc23fc2b5ca3339d07206af668e905de874a8064b5b5871ae0e7278be4881cd54",
"0x26d8d137a0eee7dc4caf8a64830b92cdafc16ab5758024acc355863bcf632152",
"0x15cbbba53f593bffe7a5b5318e08244dec9190aa2f1022fc4337c14579d552e3",
"0xd9bd4768e185163bd2ba34065c612b7d4a8186c9136edcc0819ea88b22e2bff6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


