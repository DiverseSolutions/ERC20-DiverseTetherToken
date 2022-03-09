const DiverseTetherTokenContract = artifacts.require("DiverseTetherToken");

module.exports = async function(deployer) {
  const contract = await deployer.deploy(DiverseTetherTokenContract);
  // console.log(`Diverse Tether Token Address : ${contract.address}`);
};
