import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PrecautionScreen from "../screen/PrecautionScreen";
import HomeScreen from "../screen/HomeScreen"
import VaccinationScreen from "../screen/VaccinationScreen";
import HomeScreen from "../screen/HomeScreen";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component{
render(){
  let props=this.props
  return(
    <Drawer.Navigator
    drawerContentOptions={{
      activeTintColour: "#e91e63",
      inactiveTintColour: this.state.light_theme ? "black":"white",
      itemStyle: {marginVertical : 5}
    }}
    drawerContent={props => <CustomSidebarMenu {...props}/>}
    >
    <Drawer.Screen
    name="Home"
    component={HomeScreen}
    options={{ unmountOnBlur : true }}
    />
     <Drawer.Screen
    name="Precaution"
    component={PrecautionScreen}
    options={{ unmountOnBlur : true }}
    />
     <Drawer.Screen
    name="Vaccination"
    component={VaccinationScreen}
    options={{ unmountOnBlur : true }}
    />
    </Drawer.Navigator>
  );
}
}