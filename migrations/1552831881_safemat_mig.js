let safe = artifacts.require("./SafeMath.sol");  
  
module.exports = function(deployer) {  
  deployer.deploy(safe);  
};