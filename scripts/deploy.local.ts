import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("🚀 Deploying BTCMINT with account:", deployer.address);

  const balance = await deployer.getBalance();
  console.log("💰 Account balance:", ethers.utils.formatEther(balance), "ETH");

  const BTCMINT = await ethers.getContractFactory("BTCMINT");
  const token = await BTCMINT.deploy();

  await token.deployed();
  console.log("✅ BTCMINT deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });
