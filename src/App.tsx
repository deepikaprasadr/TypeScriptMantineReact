import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { MantineProvider } from '@mantine/core';
import {AppShell,Burger,Group,Text,Box} from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
// import { AquaButton } from './components/AquaButton'; // Adjust the import path as necessary
import AquaButton from './components/AquaButton';



function App() {
const [opened, { toggle }] = useDisclosure();
  // return (
  //   <MantineProvider>
  //   <div className="App">
  //     Hello Dev.to!
  //     <AquaButton/>
  //   </div> 
  //   </MantineProvider>
  // ); 
  /*return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
     <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text fw={700}>My Mantine App Header</Text>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Text>🏠 Home</Text>
        <Text>📄 About</Text>
        <Text>📞 Contact</Text>
      </AppShell.Navbar>

        <AppShell.Main>
        <Box p="md">
          <Text size="xl" fw={500}>
            Welcome to the Main Area!
          </Text>
        </Box>
      </AppShell.Main>
    </AppShell>
  );*/
 return (
   <AppShell
  navbar={{
    width: 300,
    breakpoint: 'sm',
    collapsed: { mobile: false },
  }}
>
  <AppShell.Navbar p="md">
     <Text fw={700}>My Mantine App Navbar</Text>
  </AppShell.Navbar>

  <AppShell.Main>
   <Text fw={700}>My Mantine App Main content</Text>
  </AppShell.Main>
</AppShell>

  );
}

export default App;

//https://dev.to/samp_reston/building-an-application-with-mantine-in-reactjs-ts-3f43
