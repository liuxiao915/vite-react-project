
import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

const siderStyle = {
  textAlign: 'center',
  color: '#fff',
  width: '200px',
  backgroundColor: '#ffffff'
};

const items = [
  { label: <Link to="/about">About</Link>, key: '1', },
  { label: <Link to="/game">game</Link>, key: '2'},
  { label: 'Navigation Three', key: 'sub1', 
    children: [
      { label: 'Option 3', key: '3'},
      { label: 'Option 4', key: '4'},
      { label: 'Submenu', key: 'sub1-2', 
        children: [{ label: 'Option 5', key: '5'}, { label: 'Option 6', key: '6'}]
      },
    ]
  },
  { label: 'Navigation Fore', key: 'sub2', 
    children: [
      { label: 'Option 7', key: '7'},
      { label: 'Option 8', key: '8'},
      { label: 'Option 9', key: '9'},
      { label: 'Option 10', key: '10'}
    ]
  }
];

export const SapiSide = () => {
  return (
    <Sider style={siderStyle}>
      <Menu
        inlineIndent={12}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={'inline'}
        theme={'light'}
        items={items}
      />
    </Sider>
  )
}