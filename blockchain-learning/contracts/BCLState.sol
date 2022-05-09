// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";

contract BCLState is Ownable {
    mapping(address => uint8[]) private _allowMint;

    function setAllowMint(address _address, uint8 _code) external onlyOwner {
        // todo fix
        _allowMint[_address] = _allowMint[_address].push(_code);
    }

    function getCodesAllowMint(address _address)
        external
        view
        returns (uint8[] memory)
    {
        return _allowMint[_address];
    }

    function checkCodeInAllowMint(address _address, uint8 _code)
        external
        view
        returns (bool)
    {
        for (uint8 i = 0; i < _allowMint[_address].length; i++) {
            if (_allowMint[_address][i] == _code) {
                return true;
            }
        }

        return false;
    }

    function removeCodeFromAllowMint(address _address, uint8 _code) external {
        for (uint8 i = 0; i < _allowMint[_address].length; i++) {
            if (_allowMint[_address][i] == _code) {
                // remove
                _allowMint[_address][i] = _allowMint[_address][
                    _allowMint[_address].length - 1
                ];
                _allowMint[_address].pop();
                break;
            }
        }
    }
}
