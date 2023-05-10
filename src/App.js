import React from 'react';
import Grid from './CommonElements/Gird/Gird'
import SideBar from './Layout/SideBar/SideBar';
import NavBar from './Layout/NavBar/NavBar';
import Item from './CommonElements/Gird/Item';


function App() {
  return (
    <div className="App">
      <Grid>
        <SideBar />
        <Item sx={{ gridRow: '1', gridColumn: '1/18' }}>
          <NavBar />
          <Item  sx={{ gridRow: '1', gridColumn: '1/1',height:'900px',background:'#f3f5fa' }}>
            
          </Item>
        </Item>
      </Grid>
    </div>
  );
}


export default App;
