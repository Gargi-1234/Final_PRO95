import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from "./TabNavigator.js"
import StackNavigator from './StackNavigator.js';
import Profile from "../screens/Profile.js";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShowen: false
            }}
        >
            <Drawer.Screen
                name="MyHome"
                component={StackNavigator}
                options={{ unmountOnBlur: true }}
            />
            <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{ unmountOnBlur: true }}
            />

        </Drawer.Navigator>
    )
}

export default DrawerNavigator