import Head from 'next/head'
import {AppBar, Button, Container, Typography} from '@mui/material'
import { Box } from '@mui/system'
import SchoolIcon from '@mui/icons-material/School';
import { useRouter } from 'next/router'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ethers } from 'ethers'
import { useState } from 'react';

export default function Layout({ children }) {
const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState('')
  const [walletBalance, setWalletBalance] = useState('')
  const [signer, setSigner] = useState(undefined)
  const [owner, setOwner] = useState('')

  const router = useRouter()

  if (typeof window !== 'undefined') {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
  }

  const connectWallet = async () => {
    try {
        await provider.send("eth_requestAccounts", []);

        const newSigner = await provider.getSigner();
        // setSigner(newSigner)
        const address = await newSigner.getAddress()
        setConnected(true)
        setAddress(address)
        const balance = await getBalance()
        setWalletBalance(Math.round(balance * 1e4) / 1e4)
    } catch(e) {
        console.error(e)
    }
  }

  const disconnectWallet = async () => {
    setConnected(false)
    setAddress('')
    setWalletBalance('0.0')
  }

  const getBalance = async () => {
    const newSigner = await provider.getSigner();
    setSigner(newSigner)
    const balance = await newSigner.getBalance();
    return balance / 1e18;
  }

  return (
    <>
        <Head>
            <title>Blockchain Learning</title>
            <meta name="description" content="Learn blockchain software development" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <AppBar>
            <Box sx={{ m: 2, display: 'flex', width: '100%', px: 5}}>
                <Typography
                    variant='h6'
                    noWrap
                    component='div'
                    sx={{ cursor: 'pointer' }}
                    onClick={() => router.push('/')}
                >
                    <SchoolIcon sx={{ fontSize: '2rem' }} />
                </Typography>

                <Box>
                    <Button sx={{ ml: 3, color: 'white', display: 'block' }} onClick={() => router.push('/about')}>
                        About
                    </Button>
                </Box>

                <Box>
                    <Button sx={{ ml: 1, color: 'white', display: 'block' }} onClick={() => router.push('/courses')}>
                        Courses
                    </Button>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Button sx={{ ml: 1, color: 'white', display: 'block' }} onClick={() => router.push('/voting')}>
                        Voting
                    </Button>
                </Box>

                <Box sx={{ flexGrow: 0, ml: 'auto', textAlign: 'right' }}>
                    {connected ? (
                        <>
                        <Button sx={{ ml: 1, color: 'white', display: 'block' }} onClick={disconnectWallet}>
                            Disconnect Wallet {address.slice(0,7)}...
                        </Button>
                        </>
                    ) : (
                        <Button sx={{ ml: 1, color: 'white', display: 'block' }} onClick={connectWallet}>
                            Connect Wallet
                        </Button>
                    )}
                </Box>

                <Box sx={{ flexGrow: 0, ml: 'auto', textAlign: 'right' }} onClick={() => router.push('/profile')}>
                    <AccountCircleIcon sx={{ mt: 0.5, cursor: 'pointer' }} />
                </Box>

            </Box>
        </AppBar>

        {children}
    </>
  )
}
