const { ethers, upgrades, network  } = require('hardhat');

const { ZERO_ADDRESS } = require("@openzeppelin/test-helpers/src/constants.js");

const currentNetwork = network.name;

async function main () {

  console.log("Deploying to network:", currentNetwork);

  const ve = '0x8b02f1AEdcc242246ca169b96F4222F2C3819AC0'
  const voter = '0xb6e5152608c1a6516cAb51edc4A1a2B67F27F6Eb'
  const rewDistro = '0xd36593b502e1E7076F5F6c89c7886529708d30AB'

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
