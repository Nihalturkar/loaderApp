import React, { useEffect } from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import { COLORS, icons, images, SIZES } from '../../constants';
import styles from "./styles";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Home from '../../screens/Home';
import Icons from '../../component/Icons';
import HeaderLeft from '../../component/HeaderLeft';
import Notification from '../../screens/Notification';
import MyAccount from '../../screens/MyAccount';
import EditProfile from '../../screens/EditProfile';
import AboutUs from '../../screens/AboutUs';
import TermsAndCondition from '../../screens/TermsAndCondition';
import PrivacyPolicy from '../../screens/PrivacyPolicy';
import CheckVehicle from '../../screens/CheckVehicle';
import Order from '../../screens/Order';
import Earning from '../../screens/Earning';
import TransactionHistory from '../../screens/TransactionHistory';
import OrderStatus from '../../screens/OrderStatus';
import Booking from '../../screens/Booking';
import BottomTab from '../bottomTab';
import OrderDetails from '../../screens/OrderDetails';
import Filter from '../../screens/filter';
import DriverPolicy from '../../screens/DriverPolicy';
import UploadDocumentMain from '../../screens/UploadDocumentMain';
import UploadDriverDocument from '../../screens/UploadDriverDocument';
import UploadVehicleOption from '../../screens/UploadVehicleOption';
import UploadDetails from '../../screens/UploadDetails';
import ShareCode from '../../screens/ShareCode';
import Training from '../../screens/Training';
import VideoPreview from '../../screens/VideoPreview';
import Help from '../../screens/Help';
import { useDispatch } from 'react-redux';
import { LogoutApi } from '../../redux/actions/authAction';

const Stack = createStackNavigator();

const HeaderBox = ({ navigation, title, bookingStatus, }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icons name={"back"} size={25} color={"#646464"} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Trip CRN56787</Text>
          <Text style={styles.status}>Bokking confirmed</Text>
        </View>
      </View>
      <View style={{ ...styles.headerRow, marginRight: SIZES.width * .03, }}>
        <TouchableOpacity style={styles.backBtn}>
          <Icons name={"info"} size={20} color={COLORS.primary} />
          <Text style={styles.btn_text}>Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backBtn}>
          <Icons name={"share"} size={20} color={COLORS.primary} />
          <Text style={styles.btn_text}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const bottomBarCondition = (navigation, route, nm) => {
  if (getFocusedRouteNameFromRoute(route) === nm || getFocusedRouteNameFromRoute(route) === undefined) {
    navigation.setOptions({
      tabBarStyle: {
        width: SIZES.width * .9,
        height: SIZES.height * .07,
        backgroundColor: "#E9E9E9",
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        elevation: 10,
        borderRadius: 12,
        position: 'absolute',
        bottom: SIZES.height * .02,
        marginHorizontal: SIZES.width * .05,
        justifyContent: 'flex-start',
        borderTopWidth: 0,
      }
    })
  }
  else {
    navigation.setOptions({
      tabBarStyle: { display: 'none' }
    });
  }
}


const HomeStack = ({ navigation, route }) => {
  // useEffect(() => {
  //   bottomBarCondition(navigation, route, "Home")
  // }, [route])
  const dispatch = useDispatch()
  return (
    <Stack.Navigator
      initialRouteName='BottomTab'
      screenOptions={() => ({
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      })}>
      <Stack.Screen name="BottomTab" component={BottomTab}
        options={({ navigation }) => ({
          headerShown: false,
          headerStyle: styles.headerStyle1,
          // headerLeft: () => (
          //   <TouchableOpacity style={styles.drawer_btn}
          //     onPress={() => navigation.toggleDrawer()}
          //   >
          //     <Icons
          //       name={"menu"}
          //       size={30}
          //       color={COLORS.white}
          //     />
          //   </TouchableOpacity>
          // ),
          // headerTitleAlign: 'center',
          headerTitle: () => (
            <Image source={images.logo1} style={styles.logo1} resizeMode='contain' />
          )
        })}
      />
      <Stack.Screen name="CheckVehicle" component={CheckVehicle}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle1,
          headerLeft: () => (
            <TouchableOpacity style={styles.drawer_btn}
              onPress={() => navigation.toggleDrawer()}
            >
              <Icons
                name={"menu"}
                size={30}
                color={COLORS.white}
              />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Image source={images.logo1} style={styles.logo1} resizeMode='contain' />
          )
        })}
      />
      <Stack.Screen name="MyAccount" component={MyAccount}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitle1,
          headerTitle: "My Account",
          headerLeft: () => (
            <HeaderLeft navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="Filter" component={Filter}
        options={({ navigation, route }) => ({
          headerStyle: [styles.headerStyle, { backgroundColor: COLORS.primary }],
          headerTitleStyle: [styles.headerTitle1, { color: COLORS.white }],
          headerTitleAlign: 'center',

          headerTitle: route?.params?.name,
          headerLeft: () => (
            <HeaderLeft navigation={navigation} backColor={COLORS.white} />
          ),
        })}
      />
      <Stack.Screen name="EditProfile" component={EditProfile}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitle1,
          headerTitle: "Edit Profile",
          headerLeft: () => (
            <HeaderLeft navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="AboutUs" component={AboutUs}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitle1,
          headerTitle: "About us",
          headerLeft: () => (
            <HeaderLeft navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="TermsAndCondition" component={TermsAndCondition}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitle1,
          headerTitle: "Terms & conditions",
          headerLeft: () => (
            <HeaderLeft navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitle1,
          headerTitle: "Privacy policy",
          headerLeft: () => (
            <HeaderLeft navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="Booking" component={Booking}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="TransactionHistory" component={TransactionHistory}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      {/* <Stack.Screen name="Earning" component={Earning}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle1,
          headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
          headerTitleAlign: 'center',
          headerTitle: "Earning",
          headerTintColor: COLORS.white,
          headerLeft: () => (
            <HeaderLeft navigation={navigation} backColor={COLORS.white} />
          ),
        })}
      />
      <Stack.Screen name="Order" component={Order}
        options={({ navigation }) => ({
          headerStyle: [styles.headerStyle, { backgroundColor: COLORS.primary }],
          headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
          headerTitleAlign: 'center',
          headerTitle: "Orders",
          headerTintColor: COLORS.white,
          headerLeft: () => (
            <HeaderLeft navigation={navigation} backColor={COLORS.white} />
          ),
        })}
      /> */}
      <Stack.Screen name="OrderStatus" component={OrderStatus}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="OrderDetails" component={OrderDetails}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle1,
          headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
          headerTitleAlign: 'center',
          headerTitle: "Order Details",
          headerTintColor: COLORS.white,
          headerLeft: () => (
            <HeaderLeft navigation={navigation} backColor={COLORS.white} />
          ),
        })}
      />
      <Stack.Screen name="Notification" component={Notification}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle1,
          headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
          headerTitleAlign: 'center',
          headerTitle: "Notification",
          headerTintColor: COLORS.white,
          headerLeft: () => (
            <HeaderLeft navigation={navigation} backColor={COLORS.white} />
          ),
        })}
      />
      <Stack.Screen name="DriverPolicy" component={DriverPolicy}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle1,
          headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
          headerTitleAlign: 'center',
          headerTitle: "Driver Policy",
          headerTintColor: COLORS.white,
          headerLeft: () => (
            <HeaderLeft navigation={navigation} backColor={COLORS.white} />
          ),
        })}
      />

      
      {/* document verification */}
      <Stack.Screen name="UploadDocumentMain" component={UploadDocumentMain}
        options={({ navigation }) => ({
          headerStyle: [styles.headerStyle, { backgroundColor: COLORS.primary }],
          headerTitleStyle: styles.headerTitle,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Image source={icons.loaderLogo} resizeMode='contain' style={styles.logo} />
          ),
          headerTintColor: COLORS.white,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => dispatch(LogoutApi())}
            >
              <Image source={icons.logout} resizeMode='contain' style={styles.logoutIcon} />
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen name="UploadDriverDocument" component={UploadDriverDocument}
        options={({ navigation }) => ({
          headerStyle: [styles.headerStyle, { backgroundColor: COLORS.primary }],
          headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
          headerTitleAlign: 'center',
          headerTitle: "Upload Documents",
          headerTintColor: COLORS.white
        })}
      />
      <Stack.Screen name="UploadVehicleOption" component={UploadVehicleOption}
        options={({ navigation }) => ({
          headerStyle: [styles.headerStyle, { backgroundColor: COLORS.primary }],
          headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
          headerTitleAlign: 'center',
          headerTitle: "Upload Vehicle Option",
          headerTintColor: COLORS.white
        })}
      />
      <Stack.Screen name="UploadDetails" component={UploadDetails}
        options={({ navigation }) => ({
          headerStyle: [styles.headerStyle, { backgroundColor: COLORS.primary }],
          headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
          headerTitleAlign: 'center',
          headerTitle: "Upload Details",
          headerTintColor: COLORS.white
        })}
      />
      <Stack.Screen name="ShareCode" component={ShareCode}
        options={({ navigation }) => ({
          headerStyle: [styles.headerStyle, { backgroundColor: COLORS.primary }],
          headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
          headerTitleAlign: 'center',
          headerTitle: "Share code",
          headerTintColor: COLORS.white,
        })}
      />
      <Stack.Screen name="Training" component={Training}
        options={({ navigation }) => ({
          headerStyle: [styles.headerStyle, { backgroundColor: COLORS.primary }],
          headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
          headerTitleAlign: 'center',
          headerTitle: "Training",
          headerTintColor: COLORS.white,
        })}
      />
      <Stack.Screen name="videoPreview" component={VideoPreview}
        options={({ navigation }) => ({
          headerShown: false
        })}
      />
      <Stack.Screen name="Help" component={Help}
        options={({ navigation }) => ({
          headerStyle: [styles.headerStyle, { backgroundColor: COLORS.primary }],
          headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
          headerTitleAlign: 'center',
          headerTitle: "Help",
          headerTintColor: COLORS.white,
        })}
      />

    </Stack.Navigator>
  );
}

const EarningStack = ({ navigation, route }) => {
  useEffect(() => {
    bottomBarCondition(navigation, route, "Earning")
  }, [route])
  return (
    <Stack.Navigator
      // initialRouteName='Home'
      screenOptions={() => ({
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      })}
    >

      <Stack.Screen name="Earning" component={Earning}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle1,
          headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
          headerTitleAlign: 'center',
          headerTitle: "Earning",
          headerTintColor: COLORS.white,
          headerLeft: () => (
            <HeaderLeft navigation={navigation} backColor={COLORS.white} />
          ),
        })}
      />

      <Stack.Screen name="TransactionHistory" component={TransactionHistory}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  )
}


const OrderStack = ({ navigation, route }) => {
  useEffect(() => {
    bottomBarCondition(navigation, route, "Order")
  }, [route])
  return (
    <Stack.Navigator
      // initialRouteName='Home'
      screenOptions={() => ({
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      })}>

      <Stack.Screen name="Order" component={Order}
        options={({ navigation }) => ({
          headerStyle: [styles.headerStyle, { backgroundColor: COLORS.primary }],
          headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
          headerTitleAlign: 'center',
          headerTitle: "Orders",
          headerTintColor: COLORS.white,
          headerLeft: () => (
            <HeaderLeft navigation={navigation} backColor={COLORS.white} />
          ),
        })}
      />
      <Stack.Screen name="OrderStatus" component={OrderStatus}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  )
}

const ProfileStack = ({ navigation, route }) => {
  useEffect(() => {
    bottomBarCondition(navigation, route, "MyAccount")
  }, [route])
  return (
    <Stack.Navigator
      // initialRouteName='Home'
      screenOptions={() => ({
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      })}>

      <Stack.Screen name="MyAccount" component={MyAccount}
        options={({ navigation }) => ({
          headerStyle: [styles.headerStyle, { backgroundColor: COLORS.primary }],
          headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
          headerTitleAlign: 'center',
          headerTitle: "My Account",
          headerLeft: () => (
            <HeaderLeft navigation={navigation} backColor={COLORS.white} />
          ),
        })}
      />
    </Stack.Navigator>
  )
}

export {
  HomeStack,
  EarningStack,
  OrderStack,
  ProfileStack,
}
