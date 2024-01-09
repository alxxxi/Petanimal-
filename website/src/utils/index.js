import AdoptionABI from '../../../blockchain/build/contracts/Adoption.json'
import AnimalABI from '../../../blockchain/build/contracts/Animal.json'
import Web3 from "web3";

const AdoptionContract = () => {
    const web3 = new Web3(window.ethereum)
    const address = "0xE2C05E7f43275756952F62a2354D1EA0cA7AB3Ad"
    const contract = new web3.eth.Contract(AdoptionABI.abi, address);


    return contract;
}

const AnimalContract = () => {
    const web3 = new Web3(window.ethereum)
    const address = "0xC669e893467867c1Ad283E86FFD458E6E522c2c1"
    const contract = new web3.eth.Contract(AnimalABI.abi, address)

    return contract;
}

export { AdoptionContract, AnimalContract }