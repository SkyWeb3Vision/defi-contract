const { ethers, upgrades, network  } = require('hardhat');

const { ZERO_ADDRESS } = require("@openzeppelin/test-helpers/src/constants.js");

const currentNetwork = network.name;

async function main () {

  console.log("Deploying to network:", currentNetwork);

  const veSky = '0x8b02f1AEdcc242246ca169b96F4222F2C3819AC0'

  data = await ethers.getContractFactory("RewardsDistributorV2");
  RewardsDistributorV2 = await data.deploy(veSky);
  txDeployed = await RewardsDistributorV2.deployed();
  console.log("RewardsDistributorV2: ", RewardsDistributorV2.address)

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


