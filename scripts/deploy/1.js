const { ethers, upgrades, network  } = require('hardhat');

const { ZERO_ADDRESS } = require("@openzeppelin/test-helpers/src/constants.js");

const currentNetwork = network.name;

async function main () {

    // deployed on v1 
    const ve = ethers.utils.getAddress("0xa7b412eAB2CF9947E5159A9D5f9292161db8B285")
    const pairFactory = ethers.utils.getAddress("0xdf9239DD84Fff03DB61ec270F34E9bBDd6dFb19D")
    
    console.log("Deploying to network:", currentNetwork);
     
    // PERMISSION REGISTRY
    data = await ethers.getContractFactory("PermissionsRegistry");
    PermissionsRegistry = await data.deploy();
    txDeployed = await PermissionsRegistry.deployed();
    console.log("PermissionsRegistry: ", PermissionsRegistry.address)

    // BRIBE FACTORY
    data = await ethers.getContractFactory("BribeFactoryV3");
    input = [ZERO_ADDRESS, PermissionsRegistry.address]
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
