import HomeScreen from "./screens/HomeScreen";
import WorkoutsScreen from "./screens/WorkoutsScreen";
import NutritionScreen from "./screens/NutritionScreen";
import ProgressScreen from "./screens/ProgressScreen";
import LiveTrackingScreen from "./screens/LiveTrackingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#1DB954',
        tabBarActiveBackgroundColor: '#191414',
        tabBarInactiveBackgroundColor: '#191414',
        tabBarInactiveTintColor: 'white',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Workouts"
          component={WorkoutsScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Workouts',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="dumbbell" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Nutrition"
          component={NutritionScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Nutrition',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="nutrition" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Progress"
          component={ProgressScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Progres',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="progress-star" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="LiveTracking"
          component={LiveTrackingScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Tracker',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="run" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}