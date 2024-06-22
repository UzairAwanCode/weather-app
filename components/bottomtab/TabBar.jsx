import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const TabBar = ({ state, descriptors, navigation }) => {
  const icons = {
    Location: (props) => (
      <Image
        source={require("../../assets/images/locationone.png")}
        {...props}
      />
    ),
    HomeScreen: (props) => (
      <Image source={require("../../assets/images/home_one.png")} {...props} />
    ),
    Details: (props) => (
      <Image
        source={require("../../assets/images/details_one.png")}
        {...props}
      />
    ),
  };

  return (
    <View className="items-center">
      <View
        className="absolute bottom-0 flex-row justify-between p-2 items-center"
        style={{ width: "85%" }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };
          
          return (
            <TouchableOpacity
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabItem}
            >
              {icons[route.name]({})}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#3E2D8F",
    backgroundColor: "black",
    marginHorizontal: 20,
    paddingVertical: 7,
    width: "85%",
  },
});
