import React from 'react';
import Grid from './CommonElements/Gird/Gird'
import SideBar from './Layout/SideBar/SideBar';
import NavBar from './Layout/NavBar/NavBar';
import Item from './CommonElements/Gird/Item';
import { useRoutes } from 'react-router-dom';
import { Routes } from './routes';

function App() {
  let router = useRoutes(Routes)
  return (
    <div className="App">
      <Grid>
        <SideBar />
        <Item sx={{ gridRow: '1', gridColumn: '1/18' }}>
          <NavBar />
          <Item  sx={{ gridRow: '1', gridColumn: '1/1',height:'900px',background:'#f3f5fa' }}>
            {router}
          </Item>
        </Item>
      </Grid>
    </div>
  );
}



export default App;
