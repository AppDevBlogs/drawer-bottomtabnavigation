import * as React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function Profile() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff', fontWeight: 'bold'}}>Profile</Text>
    </View>
  );
}

function Lists() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff', fontWeight: 'bold'}}>Lists</Text>
    </View>
  );
}

function Topics() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff', fontWeight: 'bold'}}>Topics</Text>
    </View>
  );
}

function Bookmarks() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff', fontWeight: 'bold'}}>Bookmarks</Text>
    </View>
  );
}

function Moments() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff', fontWeight: 'bold'}}>Moments</Text>
    </View>
  );
}

function Settings() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff', fontWeight: 'bold'}}>Settings</Text>
    </View>
  );
}

function Help() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff', fontWeight: 'bold'}}>Help</Text>
    </View>
  );
}

function Home({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#424b52'}}>
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image
            source={require('./App/Assets/icon_black.png')}
            style={styles.image}
          />
        </TouchableWithoutFeedback>
        <Icon name="twitter" size={28} color="#00acee" />
        <Image source={require('./App/Assets/2.jpg')} style={styles.icon} />
      </View>
    </View>
  );
}

function Search({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#424b52'}}>
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image
            source={require('./App/Assets/icon_black.png')}
            style={styles.image}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

function Notification({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#424b52'}}>
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image
            source={require('./App/Assets/icon_black.png')}
            style={styles.image}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

function Messages({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#424b52'}}>
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image
            source={require('./App/Assets/icon_black.png')}
            style={styles.image}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        inactiveTintColor: 'gray',
        activeTintColor: '#00acee',
        showLabel: false,
        tabStyle: {
          backgroundColor: '#141f27',
          height: 60,
          paddingBottom: 7,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon2
              name={focused ? 'ios-search' : 'ios-search'}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={focused ? 'bell' : 'bell-outline'}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Messages}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={focused ? 'email' : 'email-outline'}
              size={25}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <View style={{flex: 1, backgroundColor: '#141f27'}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.topContainer}>
          <Image
            source={require('./App/Assets/icon_black.png')}
            style={styles.profile}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>appdevblog</Text>
            <Icon2 name="ios-arrow-down" size={20} color="#00acee" />
          </View>

          <Text style={styles.username}>APPDEVBLOG_2020</Text>
          <View style={styles.data}>
            <View style={styles.following}>
              <Text style={styles.number}>22</Text>
              <Text style={styles.text}> Following</Text>
            </View>
            <View style={styles.followers}>
              <Text style={styles.number}>44</Text>
              <Text style={styles.text}> Followers</Text>
            </View>
          </View>
        </View>
        <DrawerItem
          label={() => <Text style={styles.label}>Profile</Text>}
          onPress={() => props.navigation.navigate('Profile')}
          icon={() => <Icon name="account-outline" size={22} color="#898f93" />}
        />
        <DrawerItem
          label={() => <Text style={styles.label}>Lists</Text>}
          onPress={() => props.navigation.navigate('Lists')}
          icon={() => <Icon name="text" size={22} color="#898f93" />}
        />
        <DrawerItem
          label={() => <Text style={styles.label}>Topics</Text>}
          onPress={() => props.navigation.navigate('Topics')}
          icon={() => <Icon name="chat-processing" size={22} color="#898f93" />}
        />
        <DrawerItem
          label={() => <Text style={styles.label}>Bookmarks</Text>}
          onPress={() => props.navigation.navigate('Bookmarks')}
          icon={() => (
            <Icon name="bookmark-outline" size={22} color="#898f93" />
          )}
        />
        <DrawerItem
          label={() => <Text style={styles.label}>Moments</Text>}
          onPress={() => props.navigation.navigate('Moments')}
          icon={() => <Icon name="flash-outline" size={22} color="#898f93" />}
        />
        <View style={{height: 0.2, backgroundColor: '#2b353c'}} />
        <TouchableOpacity
          style={{padding: 10, paddingLeft: 15}}
          onPress={() => props.navigation.navigate('Settings')}>
          <Text style={styles.optionText}>Settings and privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{padding: 10, paddingLeft: 15}}
          onPress={() => props.navigation.navigate('Help')}>
          <Text style={styles.optionText}>Help and Centre</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
      <View style={styles.bottomContainer}>
        <TouchableWithoutFeedback>
          <Image
            source={require('./App/Assets/2.jpg')}
            style={styles.bottomIcon}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Image
            source={require('./App/Assets/1.jpg')}
            style={styles.bottomIcon}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerType="front"
      edgeWidth={100}
      initialRouteName="Tabs"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Lists" component={Lists} />
      <Drawer.Screen name="Topics" component={Topics} />
      <Drawer.Screen name="Bookmarks" component={Bookmarks} />
      <Drawer.Screen name="Moments" component={Moments} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#141f27" />
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingRight: 0,
    backgroundColor: '#141f27',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  icon: {
    height: 50,
    width: 50,
  },
  topContainer: {
    padding: 15,
    borderBottomWidth: 0.2,
    borderBottomColor: '#2b353c',
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  username: {
    fontSize: 18,
    color: '#898f93',
  },
  data: {
    flexDirection: 'row',
    marginTop: 15,
  },
  following: {
    flexDirection: 'row',
    marginRight: 15,
  },
  followers: {
    flexDirection: 'row',
  },
  number: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    fontSize: 16,
    color: '#898f93',
  },
  label: {
    fontSize: 18,
    color: '#fff',
  },
  optionText: {
    fontSize: 18,
    color: '#fff',
    // fontWeight: 'bold',
  },
  bottomContainer: {
    padding: 10,
    position: 'absolute',
    bottom: 0,
    height: 50,
    borderTopWidth: 0.2,
    borderTopColor: '#2b353c',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  bottomIcon: {
    height: 40,
    width: 40,
  },
});
