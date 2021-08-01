const Decfundme = artifacts.require("./Decfundme.sol");

require("chai").use(require("chai-as-promised")).should();

contract("Decfundme", ([deployer, author, tipper]) => {
  let decfundme;

  before(async () => {
    decfundme = await Decfundme.deployed();
  });

  describe("deployment", async () => {
    it("Deploys successfully", async () => {
      const address = await decfundme.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    it("Has a name", async () => {
      const name = await decfundme.name();
      assert.equal(name, "Decfundme");
    });
  });

  // test for creating post
  describe("Posts", async () => {
    let result, postCount;
    const hash = "uieygehueeyg5344323";
    // pass in values for the post upload
    before(async () => {
      result = await decfundme.uploadPost(hash, "Nnamani Melvin", "Help me get a laptop", "I need funding to get a new laptop please", 43353, { from: author });
      postCount = await decfundme.postCount();
    });

    it("Creates posts", async () => {
      // Success
      const event = result.logs[0].args;
      assert.equal(event.id.toNumber(), postCount.toNumber(), "Post id is correct");
      assert.equal(event.imageHash, hash, "The image hash is correct");
      assert.equal(event.name, "Nnamani Melvin", "The name is correct");
      assert.equal(event.title, "Help me get a laptop", "The title is correct");
      assert.equal(event.description, "I need funding to get a new laptop please", "The description is correct");
      assert.equal(event.amountRequested.toNumber(), 43353, "Amount requested is correct");
    });

    it("Check for failures", async () => {
      // FAILURE: Must have image hash
      await decfundme.uploadPost("", "Nnamani Melvin", "Help me get a laptop", "I need funding to get a new laptop please", 43353, { from: author }).should.be
        .rejected;

      // FAILURE: Must have name
      await decfundme.uploadPost(hash, "", "Help me get a laptop", "I need funding to get a new laptop please", 43353, { from: author }).should.be.rejected;

      // FAILURE: Must have description
      await decfundme.uploadPost(hash, "Nnamani Melvin", "Help me get a laptop", "", 43353, { from: author }).should.be.rejected;

      // FAILURE: Must have title
      await decfundme.uploadPost(hash, "Nnamani Melvin", "", "I need funding to get a new laptop please", 43353, { from: author }).should.be.rejected;

      // FAILURE: Amount requested must be greater than 0
      await decfundme.uploadPost(hash, "Nnamani Melvin", "Help me get a laptop", "I need funding to get a new laptop please", 0, { from: author }).should.be
        .rejected;
    });

    it("List Posts", async () => {
      const post = await decfundme.posts(postCount);
      assert.equal(post.id.toNumber(), postCount.toNumber(), "Post id is correct");
      assert.equal(post.imageHash, hash, "The image hash is correct");
      assert.equal(post.name, "Nnamani Melvin", "The name is correct");
      assert.equal(post.title, "Help me get a laptop", "The title is correct");
      assert.equal(post.description, "I need funding to get a new laptop please", "The description is correct");
      assert.equal(post.amountRequested.toNumber(), 43353, "Amount requested is correct");
    });

    it('allows users to fund posting', async () => {
          // Track the author balance before purchase
          let oldAuthorBalance
          oldAuthorBalance = await web3.eth.getBalance(author)
          oldAuthorBalance = new web3.utils.BN(oldAuthorBalance)
    
          result = await decfundme.fundAPosting(postCount, { from: tipper, value: web3.utils.toWei('1', 'Ether') })
    
          // SUCCESS
          const event = result.logs[0].args
          assert.equal(event.id.toNumber(), postCount.toNumber(), "Post id is correct");
          assert.equal(event.imageHash, hash, "The image hash is correct");
          assert.equal(event.name, "Nnamani Melvin", "The name is correct");
          assert.equal(event.title, "Help me get a laptop", "The title is correct");
          assert.equal(event.description, "I need funding to get a new laptop please", "The description is correct");
          assert.equal(event.amountFunded, "1000000000000000000", "Amount funded is correct");
    
          // Check that post owner received funds
          let newAuthorBalance
          newAuthorBalance = await web3.eth.getBalance(author)
          newAuthorBalance = new web3.utils.BN(newAuthorBalance)
    
          let fundingPostOwner
          fundingPostOwner = web3.utils.toWei('1', 'Ether')
          fundingPostOwner = new web3.utils.BN(fundingPostOwner)
    
          const expectedBalance = oldAuthorBalance.add(fundingPostOwner)
    
          assert.equal(newAuthorBalance.toString(), expectedBalance.toString())
    
          // FAILURE: Tries to fund a post that does not exist
          await decfundme.fundAPosting(99, { from: tipper, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;
        })

  });
});
