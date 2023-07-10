document.getElementById('connect-wallet-button').addEventListener('click', async () => {
  try {
    const provider = new WalletConnectProvider({
      infuraId: 'YOUR_INFURA_PROJECT_ID', // Replace with your Infura Project ID
    });

    await provider.enable();

    const ethersProvider = new ethers.providers.Web3Provider(provider);
    const accounts = await ethersProvider.listAccounts();
    const address = accounts[0];

    // Use the connected wallet's address to fetch portfolio data or perform other actions
    // Update your website UI with the portfolio data

  } catch (error) {
    console.error('Error connecting to wallet:', error);
  }
});
