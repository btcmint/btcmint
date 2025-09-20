import "dotenv/config";
import { ethers } from "hardhat";

console.log("→ RPC URL =", process.env.AMOY_RPC_URL);
console.log("→ PRIVATE_KEY (prefix) =", process.env.PRIVATE_KEY?.slice(0, 6) + "…");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("🚀 Deploying with address:", deployer.address);

  const MintSandbox = await ethers.getContractFactory("MintSandbox");

  const contract = await MintSandbox.deploy(deployer.address, {
    gasLimit: 3000000,
    gasPrice: ethers.utils.parseUnits("50", "gwei"),
  });

  await contract.deployed(); // ← Ethers v5 kompatibel
  console.log("✅ Contract deployed to:", contract.address);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exit(1);
});

