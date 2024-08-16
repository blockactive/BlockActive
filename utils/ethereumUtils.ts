export async function requestAccount() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
      } catch (error) {
        console.error("Error requesting account:", error);
        throw error;
      }
    } else {
      throw new Error("Ethereum provider is not available.");
    }
  }
  
  export async function switchToScrollSepolia() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x8274f' }],
        });
      } catch (error) {
        console.error("Error switching chain:", error);
        throw error;
      }
    } else {
      throw new Error("Ethereum provider is not available.");
    }
  }
  