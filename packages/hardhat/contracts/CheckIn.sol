//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./BatchRegistry.sol";

contract CheckIn is Ownable {

    BatchRegistry public batchRegistry;

    constructor(address payable registryContractAddress) {
        batchRegistry = BatchRegistry(registryContractAddress);
    }

    function checkMeIn() public onlyOwner {
        batchRegistry.checkIn();
    }
}
