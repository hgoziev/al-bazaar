import React from 'react';
import Home from '../Screens/Home/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerCom from '../Components/DrawerCom/DrawerCom';
import Login from '../Screens/Login/Login';
import SignUp from '../Screens/SignUp/SignUp';
import SelectedItem from '../Screens/SelectedItem/SelectedItem';
import Payment from '../Screens/Payment/Payment';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={(props) => <DrawerCom {...props} />}>
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="login" component={Login} />
    <Drawer.Screen name="signup" component={SignUp} />
    <Drawer.Screen name="selectedItem" component={SelectedItem} />
    <Drawer.Screen name="payment" component={Payment} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
