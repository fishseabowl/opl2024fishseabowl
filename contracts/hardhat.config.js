require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    campNetwork: {
      url: "https://rpc-camp-network-4xje7wy105.t.conduit.xyz",
      chainId: 90354,
      accounts: [`0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`] // Replace YOUR_PRIVATE_KEY with your actual private key
    }
  }
};
