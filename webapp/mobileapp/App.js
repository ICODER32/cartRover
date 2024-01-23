// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Cart from "./screens/Cart";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={Home} />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ title: "Your Cart" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
