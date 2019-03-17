let adress = artifacts.require("./AddressUtils.sol");  
  
module.exports = function(deployer) {  
  deployer.deploy(adress);  
};