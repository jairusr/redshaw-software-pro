//https://mui.com/material-ui/react-drawer/
// BottomDrawer.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, Typography } from '@mui/material';
import './BottomDrawer.css';

const BottomDrawer = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');

  const toggleDrawer = (open, content = '') => () => {
    setOpen(open);
    setContent(content);
  };

  const drawerContent = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <Typography variant="h6">{content}</Typography>
        </ListItem>
        <Divider />
        <List className="drawer-list">
          <ListItem className="drawer-list-item">
            {content === 'About' ? (
              <Typography variant="body1">This is about content...</Typography>
            ) : (
              <Typography variant="body1">This is contact content...</Typography>
            )}
          </ListItem>
        </List>
      </List>
    </div>
  );

  return (
    <div className="BottomDrawer-container">
    <List className="drawer-list" style={{ width: '100%' }}>
    <ListItem className="drawer-list-item about-item poppins-regular" onClick={toggleDrawer(true, 'About')}>
        <ListItemText className="poppins-regular" primary="About" />
    </ListItem>
    <ListItem className="drawer-list-item contact-item poppins-regular" onClick={toggleDrawer(true, 'Contact')}>
        <ListItemText className="poppins-regular" primary="Contact" />
    </ListItem>
    </List>
      <Drawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{ style: { height: '40%' } }}
      >
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default BottomDrawer;
