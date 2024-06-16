// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract LoginNFT is ERC721 {
    uint256 public nextTokenId;
    address public admin;

    constructor() ERC721('LoginNFT', 'LNFT') {
        admin = msg.sender;
    }

    function mint(address to) external {
        require(msg.sender == admin, 'only admin can mint');
        _safeMint(to, nextTokenId);
        nextTokenId++;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return "https://api.yourservice.com/metadata/";
    }
}