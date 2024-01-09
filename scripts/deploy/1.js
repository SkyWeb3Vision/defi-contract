const { ethers, upgrades, network  } = require('hardhat');

const { ZERO_ADDRESS } = require("@openzeppelin/test-helpers/src/constants.js");

const currentNetwork = network.name;

async function main () {

    // deployed on v1 
    console.log("Deploying to network:", currentNetwork);
     
    // BRIBE FACTORY
    data = await ethers.getContractFactory("BribeFactoryV3");
    input = [ZERO_ADDRESS, "0xC39791f251F96Fd5ACFEC64f9217594514F27228"]
    BribeFactoryV3 = await upgrades.deployProxy(data,input, {initializer: 'initialize'});
    txDeployed = await BribeFactoryV3.deployed();
    console.log("BribeFactoryV3: ", BribeFactoryV3.address)

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
