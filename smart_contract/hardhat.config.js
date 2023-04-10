//https://eth-sepolia.g.alchemy.com/v2/xIuGmUeQ4EgVT9vZT3xS9cjiZJABDFYl

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:'0.8.0',
  networks:{
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/xIuGmUeQ4EgVT9vZT3xS9cjiZJABDFYl',
      accounts: ['9c1121131bc526e4651d5259442e755f72bb6e2895e54591d0f1f3a278d9d578']
    }
  }
}