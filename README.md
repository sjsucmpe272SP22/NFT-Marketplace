# NFT marketplace Application using Next.js

# Introduction to the problem statement:

● NFT will continue to gain prominence in 2022 and is growing as a new asset class in the crypto space. There should be an efficient exchange medium for NFTs.

● NFT marketplaces are focused on selling specific assets. For example, the Valuables NFT marketplace allows users to buy and sell tweets.

● The possibilities of NFTs are endless, since they can be used to log ownership of any unique assets.

● In this Project we will develop a Full-Stack application using Next.js for NFT trading and secure transactions via blockchain.

# Abstract:

Non-fungible tokens (NFT) are an emerging technology that has already seen a ton of use cases outside the typical NFT application – which right now is mostly for trading artworks and game characters. At its core, an NFT is a tool that creates non-fungible digital assets using blockchain. There are two major benefits that can be gained from these features. Primarily, NFT offers the certification of ownership. With blockchain-based NFT, the record of ownership is protected from changes or modification. This makes a digital asset to only have one official owner at a time. Subsequently, consumers do not have to worry about the risk of counterfeiting.

# Personna:

The Collectors, Investors and Businesses are different users who are willing to either sell or purchase distinctive assets.

# Tagline:

NFT marketplace where traders can buy and sell the NFT tokens via the usage of Ethereum Web Client Library(Ethers.js) ,Solidity development environment (Hardhat) and track the ownership of digital assets.



# The STACK used:

Web Application Framework - Next.js

Solidity Development Environment - Hardhat

File Storage - IPFS

Ethereum Web Client Library - Ethers.js


# Prerequisites:

Node.js version 16.14.0 or greater should be installed on your machine.

Metamask wallet extension installed as a browser extension


# Approach/About project:

The Web application is developed using Next.js and for the Authentication we use Metamask and Third webhooks.

NFT is a solution to Digital Scarcity. When a user puts an item for sale, the ownership of the item will be transferred from the creator to the marketplace. 

When a user purchases an item, the purchase price will be transferred from the buyer to the seller and the item will be transferred from the marketplace to the buyer.

The marketplace owner will be able to set a listing fee. This fee will be taken from the seller and transferred to the contract owner upon completion of any sale, enabling the owner of the marketplace to earn recurring revenue from any sale transacted in the marketplace.



# The problems solved by NFT marketplace:

Duplicate Asset Problem: Due to non fungibility of NFT's duplication of assets is not possible.

No Tampering of Data: As the data is stored on the blockchain no one can easily tamper the data.

Quick Transactions from Polygon: Polygon provided us with quick transaction speed which helps to boast the user experience.

Ownership Record Maintainance: Ownership can be tracked easily as smart contract passes the ownership from the seller to buyer directly.

Data Storage problem of Blockchain: Blockchain can't be used for storing media files for media assets in an efficient manner, so we used IPFS for digital assets.
	


# The Future Scope : How NFTs Will Change the World

1. State of the Art
The meteoric rise of NFTs in the art world has inevitably sparked debate about what makes art valuable and the nature of ownership.

2. New era in gaming where the gamers actually own their own assets.

3. Raise the Fundraising Bar 
With the world coming to terms with the benefits of tokenization, fundraising has emerged as a necessary outcome of NFTs.

4. Social Communities
Their has been an huge and a sudden rise in Instagram or Twitter


# Reasons to buy an NFT, here are some of the main reasons:

-Brand Perks

-Collectability

-Entertainment/Utility

-Investment Opportunities

-Likeability


# Project setup

To get started, we'll create a new Next.js app. To do so, open your terminal. Create or change into a new empty directory and run the following command.

![image](https://user-images.githubusercontent.com/99928364/167018614-639e902f-d975-4c12-b14b-edf099f3f833.png)


Next, change into the new directory and install the dependencies using a package manager like npm, yarn, or pnpm:

![image](https://user-images.githubusercontent.com/99928364/167018744-217093ac-8e55-4f8e-9a99-cf16f46436ce.png)


**Setting up Tailwind CSS**

![image](https://user-images.githubusercontent.com/99928364/167018984-196df45e-6c1b-4c2a-a6f1-329562ed4808.png)

Next, we will create the configuration files needed for Tailwind to work with Next.js (tailwind.config.js and postcss.config.js) by running the following command:

![image](https://user-images.githubusercontent.com/99928364/167019117-c25453e2-84f4-415b-966e-35548283c0da.png)

Next, configure your template content paths in tailwind.config.js:

![image](https://user-images.githubusercontent.com/99928364/167019224-0ff51b1a-f01e-4f7f-a14e-09e2c43c5063.png)


**Configuring Hardhat**

Next, initialize a new Hardhat development environment from the root of your project:

![image](https://user-images.githubusercontent.com/99928364/167019311-be9456d4-e07b-447f-b1ab-d375aef857b3.png)

Now you should see the following files and folders created for you in your root directory:

hardhat.config.js - The entirety of your Hardhat setup (i.e. your config, plugins, and custom tasks) is contained in this file.

scripts - A folder containing a script named sample-script.js that will deploy your smart contract when executed

test - A folder containing an example testing script

contracts - A folder holding an example Solidity smart contract

Next, update the configuration at hardhat.config.js with the following:

![image](https://user-images.githubusercontent.com/99928364/167019497-f645d3bb-8bc9-4657-9708-18a30e40a510.png)






