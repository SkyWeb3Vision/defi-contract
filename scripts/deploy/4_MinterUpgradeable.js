const { ethers, upgrades, network  } = require('hardhat');

const { ZERO_ADDRESS } = require("@openzeppelin/test-helpers/src/constants.js");

const currentNetwork = network.name;

async function main () {

  console.log("Deploying to network:", currentNetwork);

  const ve = '0xa7b412eAB2CF9947E5159A9D5f9292161db8B285'
  const voter = '0xee45cE9B945f581aE3561E8BBBE7a61404f8BFbe'
  const rewDistro = '0x1Fb075CBDF3f0117D69E2967Cc25539C786355cE'

  data = await ethers.getContractFactory("MinterUpgradeable");
  input = [voter, ve, rewDistro]
  minter = await upgrades.deployProxy(data,input, {initializer: 'initialize'});
  console.log("Minter: ", minter.address)

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
