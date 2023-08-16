const { ethers, upgrades, network  } = require('hardhat');

const { ZERO_ADDRESS } = require("@openzeppelin/test-helpers/src/constants.js");

const currentNetwork = network.name;

async function main () {

  console.log("Deploying to network:", currentNetwork);

  const wbnb = ethers.utils.getAddress("0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd") 
  const nft = ethers.utils.getAddress("0x3138BDE8C3906FE54f65092760606574F74C77B6")

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
