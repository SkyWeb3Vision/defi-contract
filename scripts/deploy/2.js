const { ethers, upgrades, network  } = require('hardhat');

const { ZERO_ADDRESS } = require("@openzeppelin/test-helpers/src/constants.js");

const currentNetwork = network.name;

async function main () {

    // deployed on v1 
    const ve = ethers.utils.getAddress("0x8b02f1AEdcc242246ca169b96F4222F2C3819AC0")
    const pairFactory = ethers.utils.getAddress("0x0b7795bCC47594E53c376e56c148F5fF40E97fdD")
    const permissionsRegistry = ethers.utils.getAddress("0xC39791f251F96Fd5ACFEC64f9217594514F27228")
    const bribeFactoryV3 = ethers.utils.getAddress("0x4630CF6dB1dCb7a9390f69CAf2762D38F5e169Da")
    const owner = ethers.utils.getAddress("0xDf11D7fa07749BE119E630DbB7a043127c28Fb4a")

    console.log("Deploying to network:", currentNetwork);

    // GAUGE FACTORY
    data = await ethers.getContractFactory("GaugeFactoryV2");
    input = [permissionsRegistry]
    GaugeFactoryV2 = await upgrades.deployProxy(data,input, {initializer: 'initialize'});
    txDeployed = await GaugeFactoryV2.deployed();
    console.log("GaugeFactoryV2: ", GaugeFactoryV2.address)

    // GAUGE FACTORY _ CL
    data = await ethers.getContractFactory("GaugeFactoryV2_CL");
    input = [permissionsRegistry, owner]
    GaugeFactoryV2_CL = await upgrades.deployProxy(data,input, {initializer: 'initialize'});
    txDeployed = await GaugeFactoryV2_CL.deployed();
    console.log("GaugeFactoryV2_CL: ", GaugeFactoryV2_CL.address)

    // VOTER
    data = await ethers.getContractFactory("VoterV3");
    input = [ve, pairFactory , GaugeFactoryV2.address,bribeFactoryV3]
    VoterV3 = await upgrades.deployProxy(data,input, {initializer: 'initialize'});
    txDeployed = await VoterV3.deployed();
    console.log("VoterV3: ", VoterV3.address)

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
