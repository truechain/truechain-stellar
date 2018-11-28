pragma solidity ^0.5.0;

library SafeMath {
    // function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    //     if (a == 0) {
    //         return 0;
    //     }
    //     uint256 c = a * b;
    //     assert(c / a == b);
    //     return c;
    // }

    // function div(uint256 a, uint256 b) internal pure returns (uint256) {
    //     uint256 c = a / b;
    //     return c;
    // }

    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        assert(b <= a);
        return a - b;
    }

    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        assert(c >= a);
        return c;
    }
}

contract TestERC20Token {
    using SafeMath for uint256;
    string public constant name = "Test ERC20 Token";
    string public constant symbol = "TET";
    uint256 public constant decimals = 6;
    uint256 _totalSupply = 100000000 * 10 ** decimals;
    address payable public founder = address(0);
    uint256 public distributed = 0;

    mapping (address => uint256) balances;
    mapping (address => mapping (address => uint256)) allowed;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);

    constructor() public { 
        founder = msg.sender;
    }

    function totalSupply() public view returns (uint256 supply) {
        return _totalSupply;
    }

    function balanceOf(address _owner) public view returns (uint256 balance) {
        return balances[_owner];
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require (_to != address(0), "");
        require((balances[msg.sender] >= _value), "");
        balances[msg.sender] = balances[msg.sender].sub(_value);
        balances[_to] = balances[_to].add(_value);
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require (_to != address(0), "");
        require(balances[_from] >= _value && allowed[_from][msg.sender] >= _value, "");
        balances[_from] = balances[_from].sub(_value);
        balances[_to] = balances[_to].add(_value);
        emit Transfer(_from, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender) public view returns (uint256 remaining) {
        return allowed[_owner][_spender];
    }

    function distribute(address _to, uint256 _amount) public returns (bool success) {
        require(msg.sender == founder, "");
        require(distributed.add(_amount) <= _totalSupply, "");

        distributed = distributed.add(_amount);
        balances[_to] = balances[_to].add(_amount);
        emit Transfer(address(this), _to, _amount);
        return true;
    }
	
    function distributeMultiple(address[] memory _tos, uint256[] memory _values) public returns (bool success) {
        require(msg.sender == founder, "");
		
        uint256 total = 0;
        uint256 i = 0; 
        for (i = 0; i < _tos.length; i++) {
            total = total.add(_values[i]);
        }

        require(distributed.add(total) < _totalSupply, "");

        for (i = 0; i < _tos.length; i++) {
            distributed = distributed.add(_values[i]);
            balances[_tos[i]] = balances[_tos[i]].add(_values[i]);
            emit Transfer(address(this), _tos[i], _values[i]);
        }

        return true;
    }

    function changeFounder(address payable newFounder) public {
        require(msg.sender == founder, "");

        founder = newFounder;
    }

    function kill() public {
        require(msg.sender == founder, "");

        selfdestruct(founder);
    }
}