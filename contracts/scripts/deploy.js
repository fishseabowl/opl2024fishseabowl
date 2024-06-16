async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const LoginNFT = await ethers.getContractFactory("LoginNFT");
    const loginNFT = await LoginNFT.deploy();
  
    console.log("LoginNFT deployed to:", loginNFT.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });