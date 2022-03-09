const diverseTetherToken = artifacts.require("DiverseTetherToken");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Diverse Tether Token - dUSDT", function (/* accounts */) {

  it("Checking Diverse Tether Token - Decimals,Name,TotalSupply", async function () {
    const tokenInstance = await diverseTetherToken.deployed();

    assert.equal(await tokenInstance.decimals(),6,"Decimal is not equal");
    assert.equal(await tokenInstance.name(),"dTether USD","Name is not equal");
    assert.equal(await tokenInstance.symbol(),"dUSDT","Symbol is not equal");
  });

  it("Checking Diverse Tether Token - Initial Supply", async function () {
    const tokenInstance = await diverseTetherToken.deployed();

    assert.equal(await tokenInstance.totalSupply(),web3.utils.toWei("10000000000",'ether'),"Initial Total Supply is not equal");
  });

});
