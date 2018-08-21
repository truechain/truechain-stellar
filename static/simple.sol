pragma solidity ^0.4.0;

contract SimpleStorage {
    uint storedData;

    function set(uint x) public {
        require(x < 100, "Not enough Ether provided.");
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}