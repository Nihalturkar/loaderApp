import React, { useState } from "react";
// import { View,TouchableOpacity,Image } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, SIZES, icons, images, } from "../../constants";
import styles from "./styles";
import { EarningStack, HomeStack, OrderStack, ProfileStack, } from "../stackNavigator";
import Icons from "../../component/Icons";
import { Image, Text, View, TouchableOpacity, } from "react-native";
import Home from "../../screens/Home";
import Order from "../../screens/Order";
import Earning from "../../screens/Earning";
import MyAccount from "../../screens/MyAccount";
import HeaderLeft from "../../component/HeaderLeft";
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { GetOrderApi } from "../../redux/actions/orderAction";
import { connect, useDispatch } from "react-redux";
import { MANUALLY_MODAL } from "../../redux/types";


const Tab = createBottomTabNavigator();

const BottomTab = ({ GetOrderApi, notificationCount }) => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false);
  return (
    <Tab.Navigator initialRouteName='Home'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: COLORS.gray20,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: styles.labelStyle,
        tabBarStyle: styles.tabBarStyle,

        tabBarIcon: ({ color }) => {
          if (route.name === 'Home') {
            return (<Icons name={"home1"} size={25} color={color} />);
          } else if (route.name === 'Order') {
            return (<Icons name={"chart"} size={25} color={color} />);
          } else if (route.name === 'Earning') {
            return (<Icons name={"discount"} size={25} color={color} />);
          } else if (route.name === 'MyAccount') {
            return (<Icons name={"profile2"} size={25} color={color} />);
          }
        },
        tabBarLabel: ({ focused, color }) => {
          let label;
          switch (route.name) {
            case 'Home':
              return label = <Text style={{ color, ...styles.labelStyle }}>{focused ? "Home" : null}</Text>
            case 'Order':
              return label = <Text style={{ color, ...styles.labelStyle }}>{focused ? "Orders" : null}</Text>
            case 'Earning':
              return label = <Text style={{ color, ...styles.labelStyle }}>{focused ? "Earning" : null}</Text>
            case 'MyAccount':
              return label = <Text style={{ color, ...styles.labelStyle }}>{focused ? "Profile" : null}</Text>
          }
          return label
        }
      })}
    >
      <Tab.Screen name="Home" component={Home}
        options={({ navigation }) => ({
          headerShown: true,
          headerStyle: styles.headerStyle1,
          headerTitle: () => (
            <Image source={images.logo1} style={styles.logo1} resizeMode='contain' />
          ),
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity style={styles.notificationTouch}
              onPress={() => navigation.navigate("Notification")}
            >
              {notificationCount > 0 &&
                <View style={styles.notificationCountmain}>
                  <Text style={styles.notificationcountText}>{notificationCount}</Text>
                </View>
              }
              <Image source={icons.notification} resizeMode="contain" style={styles.notificationIcon} />
            </TouchableOpacity>
          )
        })}
      />
      <Tab.Screen name="Order" component={Order}
        options={({ navigation }) => ({
          headerShown: true,
          headerStyle: [styles.headerStyle1, { backgroundColor: COLORS.primary }],
          headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
          headerTitleAlign: 'center',
          headerTitle: "Orders",
          headerTintColor: COLORS.white,
          headerLeft: () => (
            <HeaderLeft navigation={navigation} backColor={COLORS.white} />
          ),
          // headerRight: () => (
          //   <View style={{ marginRight: SIZES.width * .03 }}>
          //     <Menu
          //       visible={visible}
          //       anchor={<TouchableOpacity style={styles.threedotMain} onPress={() => setVisible(!visible)}>
          //         <Image source={icons.menu1} resizeMode='contain' style={styles.threeDot} />
          //       </TouchableOpacity>}
          //       onRequestClose={() => setVisible(!visible)}
          //       style={{ width: SIZES.width * .5 }}
          //     >
          //       <MenuItem textStyle={styles.menuText} onPress={() => { setVisible(!visible), GetOrderApi(1, "today") }}>Today</MenuItem>
          //       <MenuItem textStyle={styles.menuText} onPress={() => { setVisible(!visible), GetOrderApi(1, "week") }}>This Week</MenuItem>
          //       <MenuItem textStyle={styles.menuText} onPress={() => { setVisible(!visible), GetOrderApi(1, "month") }}>This Month</MenuItem>
          //       <MenuItem textStyle={styles.menuText} onPress={() => { setVisible(!visible), GetOrderApi(1, "year") }}>This Year</MenuItem>
          //       <MenuItem textStyle={styles.menuText} onPress={() => { setVisible(!visible), GetOrderApi(1, "total") }}>Total</MenuItem>
          //       <MenuItem textStyle={styles.menuText} onPress={() => { setVisible(!visible), dispatch({ type: MANUALLY_MODAL, payload: true }) }}>Manually</MenuItem>

          //     </Menu>
          //   </View>
          // )
        })}
      />
      {/* <Tab.Screen name="Earning" component={Earning} /> */}
      <Tab.Screen name="MyAccount" component={MyAccount} />
    </Tab.Navigator>
  )
}

const mapStateToProps = (state) => ({
  notificationCount: state.home.notificationCount
})

const mapDispatchToProps = {
  GetOrderApi
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomTab)

