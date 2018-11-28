pragma solidity ^0.5.0;

contract SimpleStorage {
    uint storedData;

    constructor (uint x) public {
        storedData = x;
    }

    function set(uint x) public {
        require(x < 100, "Not enough Ether provided.");
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}