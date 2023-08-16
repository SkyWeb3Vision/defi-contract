const { ethers, upgrades, network  } = require('hardhat');

const { ZERO_ADDRESS } = require("@openzeppelin/test-helpers/src/constants.js");

const currentNetwork = network.name;

async function main () {

    // deployed on v1 
    const ve = ethers.utils.getAddress("0xa7b412eAB2CF9947E5159A9D5f9292161db8B285")
    const pairFactory = ethers.utils.getAddress("0xdf9239DD84Fff03DB61ec270F34E9bBDd6dFb19D")
    const permissionsRegistry = ethers.utils.getAddress("0xCf8894361Eb6A953c7C47A004EEA565CD01B9881")
    const bribeFactoryV3 = ethers.utils.getAddress("0x64278EF484Cb64AE6AC999772022294F099deB27")

    console.log("Deploying to network:", currentNetwork);
    
    // GAUGE FACTORY
    data = await ethers.getContractFactory("GaugeFactoryV2");
    input = [permissionsRegistry]
    GaugeFactoryV2 = await upgrades.deployProxy(data,input, {initializer: 'initialize'});
    txDeployed = await GaugeFactoryV2.deployed();
    console.log("GaugeFactoryV2: ", GaugeFactoryV2.address)

    // GAUGE FACTORY _ CL
    data = await ethers.getContractFactory("GaugeFactoryV2_CL");
    input = [permissionsRegistry, '0x993Ae2b514677c7AC52bAeCd8871d2b362A9D693']
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
