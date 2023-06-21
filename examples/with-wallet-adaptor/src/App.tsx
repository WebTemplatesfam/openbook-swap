import './App.css';
import { SwapContainer, SwapError, SwapLoading, SwapSuccess } from '@thespidercode/openbook-swap';
import { marketPairs } from './market.constant';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletModalButton } from '@solana/wallet-adapter-react-ui';

function App() {
  const connection = useConnection().connection;
  const wallet = useWallet();
  
  const onSwapError = (error: SwapError): void => {
      console.log(error);
  }

  const onSwapLoading = (loading: SwapLoading): void => {
      console.log(loading);
  }

  const onSwapSuccess = (success: SwapSuccess): void => {
      console.log(success);
  }

  const disconnect = async () => {
    wallet.disconnect();
  }

  return (
      <div className='App'>
        <header>
          {
            wallet && wallet.connected && <WalletModalButton></WalletModalButton>
          }
        </header>
        <main>
          {
            wallet && wallet.connected ?
            <SwapContainer
                title='Swap'
                colors={{
                    primary: "grey",
                    secondary: "#3a3a3a",
                    background: "#1b1717",
                    swapButton: "grey",
                    text: "#fff",
                }}
                markets={marketPairs} 
                connection={connection}
                onSwapError={onSwapError}
                onSwapLoading={onSwapLoading}
                onSwapSuccess={onSwapSuccess}
                wallet={wallet}
            /> :
            <WalletModalButton></WalletModalButton>
          }
        </main>
      </div>
      
  )
}

export default App;
