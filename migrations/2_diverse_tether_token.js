const DiverseTetherTokenContract = artifacts.require("DiverseTetherToken");

module.exports = async function(deployer) {
  const contract = await deployer.deploy(DiverseTetherTokenContract,web3.utils.toWei("10000000000",'ether'));
  // console.log(`Diverse Tether Token Address : ${contract.address}`);
};
