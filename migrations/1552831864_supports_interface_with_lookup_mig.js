let support = artifacts.require("./SupportsInterfaceWithLookup.sol");  
  
module.exports = function(deployer) {  
  deployer.deploy(support);  
};