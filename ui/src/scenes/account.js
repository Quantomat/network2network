import React, { useEffect, useState } from 'react';
import '../App.css';
import { ApiPromise, WsProvider } from '@polkadot/api';
import AccountCard from '../components/AccountCard';
import { Grid } from '@material-ui/core';
import { getImage } from '../utils/polka';

function AccountPage({ address, network }) {
  const [balance, setBalance] = useState(0);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const getApi = async () => {
      const provider = new WsProvider(network === "kusama" ? 'wss://cc3-5.kusama.network/' : 'wss://cc1-1.polkadot.network');
      const api = await ApiPromise.create({ provider: provider });
      let {
        data: { free: previousFree },
      } = await api.query.system.account(address);
      setBalance(`${previousFree}`);
    };

    getApi();
    getImage(address, balance, network)
      .then((r) => {
        const data = r.data;
        setImage(data[Object.keys(data)[0]]);
      })
      .catch((e) => console.log(e));
  }, [address]);

  return (
    <div className="App-header">
      <span style={{ marginTop: '170px' }}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item>
            <AccountCard
              image={image}
              address={address}
              balance={balance}
            ></AccountCard>
          </Grid>
        </Grid>
      </span>
    </div>
  );
}

export default AccountPage;
