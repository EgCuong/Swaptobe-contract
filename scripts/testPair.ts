import { ethers } from "hardhat";
import { SwaptobeFactory } from "../typechain-types";

async function main() {
  const [ owner ] = await ethers.getSigners();
  const tokenA = await ethers.getContract("TokenA");
  const tokenB = await ethers.getContract("TokenB");
  const factory = await ethers.getContract("SwaptobeFactory") as SwaptobeFactory;

  const pair = await ethers.getContractAt("SwaptobePair", await factory.getPair(await tokenA.getAddress(), await tokenB.getAddress()));

  console.log("factory:", await factory.getAddress());
  console.log("tokenA:", await tokenA.getAddress());
  console.log("tokenB:", await tokenB.getAddress());
  console.log("pair:", await pair.getAddress());

  console.log("factory address from pair:", await pair.factory());
  console.log("pair bytecode:", await pair.getDeployedCode());

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});