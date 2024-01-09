const { ethers, upgrades, network  } = require('hardhat');

const { ZERO_ADDRESS } = require("@openzeppelin/test-helpers/src/constants.js");

const currentNetwork = network.name;

async function main () {

  console.log("Deploying to network:", currentNetwork);

  const wbnb = ethers.utils.getAddress("0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270") 
  const nft = ethers.utils.getAddress("0xBf598Fd11E19F2e2BBCFbE834d00c4ef15702B14")

  data = await ethers.getContractFactory("MasterChef");
  MasterChef = await data.deploy(wbnb, nft);
  txDeployed = await MasterChef.deployed();
  console.log("Masterchef: ", MasterChef.address)

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
