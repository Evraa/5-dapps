pragma solidity ^0.5.0;

contract SimpleStorage{
    //Assigned as STORAGE variable
    string public data;

    function set(string memory _data) public{
        data = _data;
    }
    function get() view  returns(string memory) public{
        return data;
    }
    
}