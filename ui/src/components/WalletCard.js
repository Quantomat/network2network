import React, { useState } from 'react';
import {
  Fieldset,
  Window,
  WindowContent,
  WindowHeader,
  Tabs,
  TabBody,
  Tab,
  Progress,
  Hourglass,
} from 'react95';
import Typography from '@material-ui/core/Typography';

const AccountCard = ({ image, address, balance }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Window>
      <WindowContent>
        <WindowHeader>💰 My Wallet 💰 </WindowHeader>
        <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
          <Tab value={0} onClick={() => setActiveTab(0)}>
            Avatar
          </Tab>

          <Tab value={1} onClick={() => setActiveTab(1)}>
            My Tokens
          </Tab>
        </Tabs>
        {activeTab === 0 && (
          <TabBody>
            <Fieldset>
              {image ? (
                <img style={{maxHeight: "500px"}} src={`data:image/jpeg;base64,${image}`} />
              ) : (
                <Progress percent={52} />
              )}
              <Typography variant="h5" gutterBottom>
                🌴 Address 🌴{' '}
              </Typography>
              <p>{address}</p>
              <br />
              <Typography variant="h5" gutterBottom>
                💴 Balance 💴{' '}
              </Typography>
              {balance}
            </Fieldset>
          </TabBody>
        )}
        {activeTab === 1 && (
          <TabBody>
            <Fieldset>
              <span role="img" aria-label="donut">
                😫
              </span>{' '}
              Oh no! NFT Humans Tokens coming soon!
              <span role="img" aria-label="donut">
                😫
              </span>{' '}
            </Fieldset>
          </TabBody>
        )}
      </WindowContent>
    </Window>
  );
};

export default AccountCard;
