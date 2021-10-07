require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "KEY";

const ROPSTEN_PRIVATE_KEY = "ROPSTEN_PRIVATE_KEY";

module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    },
  },
};
