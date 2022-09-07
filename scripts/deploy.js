async function main() {
    const moodContractFactory = await hre.ethers.getContractFactory("MoodDiary")
    const mood = await moodContractFactory.deploy()
    await mood.deployed()
    console.log("contract deployed to:", mood.address)
}

main()
    .then(() => {
        process.exit(0)
    })
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
