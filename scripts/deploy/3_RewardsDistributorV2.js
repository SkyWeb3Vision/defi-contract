const { ethers, upgrades, network  } = require('hardhat');

const { ZERO_ADDRESS } = require("@openzeppelin/test-helpers/src/constants.js");

const currentNetwork = network.name;

async function main () {

  console.log("Deploying to network:", currentNetwork);

  const veSky = '0xa7b412eAB2CF9947E5159A9D5f9292161db8B285'

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


