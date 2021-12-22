import React from 'react'
import HomeScreen  from './screen/HomeScreen'
import DrawerNavigator from './Navigation/DrawerNavigator'

export default function App(){
  return(
    <AppContainer/>
  )
}

const DrawerNavigator = createDrawerNavigator({HomeScreen:{screen:HomeScreen},
  Drawer:{screen:HomeScreen}
})

const AppContainer = createAppContainer(DrawerNavigator)