require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`0x${process.env.ROPSTEN_PRIVATE_KEY}`],
    },
  },
};
