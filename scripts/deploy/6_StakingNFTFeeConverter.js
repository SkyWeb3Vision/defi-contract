const { ethers, upgrades, network  } = require('hardhat');

const { ZERO_ADDRESS } = require("@openzeppelin/test-helpers/src/constants.js");

const currentNetwork = network.name;

async function main () {

  console.log("Deploying to network:", currentNetwork);

  data = await ethers.getContractFactory("StakingNFTFeeConverter");
  StakingNFTFeeConverter = await data.deploy();
  txDeployed = await StakingNFTFeeConverter.deployed();
  console.log("StakingNFTFeeConverter: ", StakingNFTFeeConverter.address)  

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
