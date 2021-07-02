import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AwayScreen from "../../screens/campaign/index";
import Home from "../../screens/home/index";
import Settings from "../../screens/settings/index";
import Wallet from "../../screens/wallet/index";
import Report from "../../screens/report/index";
import { StyleSheet, Text, View, Image } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 0,
          height: 60,
          paddingBottom: 15,
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../../icons/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#6F6CD2" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#6F6CD2" : "#748c94",
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="campaign"
        component={AwayScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../../icons/laptop.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#6F6CD2" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#6F6CD2" : "#748c94",
                  fontSize: 12,
                }}
              >
                Campaign
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="report"
        component={Report}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../../icons/clipboard.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#6F6CD2" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#6F6CD2" : "#748c94",
                  fontSize: 12,
                }}
              >
                Report
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../../icons/wallet.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#6F6CD2" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#6F6CD2" : "#748c94",
                  fontSize: 12,
                }}
              >
                Wallet
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../../icons/settings.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#6F6CD2" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#6F6CD2" : "#748c94",
                  fontSize: 12,
                }}
              >
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
