// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

contract Decfundme {
    string public name = "Decfundme";
    uint256 public postCount = 0;
    // Create fund me
    mapping(uint256 => Post) public posts;

    struct Post {
        uint256 id;
        string imageHash;
        string name;
        string title;
        string description;
        uint256 amountRequested;
        uint256 amountFunded;
        address payable author;
    }

    // EVENTS:
    // create event for emitting when a post is created
    event PostCreated(
        uint256 id,
        string imageHash,
        string name,
        string title,
        string description,
        uint256 amountRequested,
        uint256 amountFunded,
        address payable author
    );

    event PostFunding(
        uint256 id,
        string imageHash,
        string name,
        string title,
        string description,
        uint256 amountRequested,
        uint256 amountFunded,
        address payable author
    );

    // EVENTS

    // Modifier to check if the values are empty
    modifier uploadFieldCheck(
        string memory _modImageHash,
        string memory _modName,
        string memory _modTitle,
        string memory _modDescription,
        uint256 _modAmountRequested
    ) {
        require(bytes(_modImageHash).length > 0, "Image hash cannot be empty");
        require(bytes(_modName).length > 0, "Name cannot be empty");
        require(bytes(_modTitle).length > 0, "Title cannot be empty");
        require(
            bytes(_modDescription).length > 0,
            "Description cannot be empty"
        );
        require(
            _modAmountRequested > 0,
            "Amount requested must be greater than 0"
        );
        require(msg.sender != address(0), "Address cannot be empty");
        _;
    }

    modifier checkIfPostExists(uint256 _modId) {
        require(_modId > 0 && _modId <= postCount, "Post does not exist");
        _;
    }

    // Store fund me
    function uploadPost(
        string memory _imageHash,
        string memory _name,
        string memory _title,
        string memory _description,
        uint256 _amountRequested
    )
        public
        uploadFieldCheck(
            _imageHash,
            _name,
            _title,
            _description,
            _amountRequested
        )
    {
        // increment post count
        postCount++;

        posts[postCount] = Post(
            postCount,
            _imageHash,
            _name,
            _title,
            _description,
            _amountRequested,
            0,
            msg.sender
        );

        // emit post creation event
        emit PostCreated(
            postCount,
            _imageHash,
            _name,
            _title,
            _description,
            _amountRequested,
            0,
            msg.sender
        );
    }

    // Initiate funding
    function fundAPosting(uint256 _id) public payable checkIfPostExists(_id) {
        // get post to fund
        Post memory _post = posts[_id];

        // Get the address of the post author
        address payable _author = _post.author;

        // pay the address of the post author
        // msg.value is the amount of crypto that came in when the contract is initiated
        address(_author).transfer(msg.value);

        // increment amount funded
        _post.amountFunded = _post.amountFunded + msg.value;

        // Update the value of the posts
        posts[_id] = _post;

        // emit post fuunding event
        emit PostFunding(
            _id,
            _post.imageHash,
            _post.name,
            _post.title,
            _post.description,
            _post.amountRequested,
            _post.amountFunded,
            _author
        );
    }
}
