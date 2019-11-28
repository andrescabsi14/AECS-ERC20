var ACToken = artifacts.require("AndresToken");

module.exports = function(deployer) {
	deployer.deploy(ACToken, "ACToken", "AECS", 0, 1000000);
};
