import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BooksPage from './pages/BooksPage';
import AddBookPage from './pages/AddBookPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import MatchesPage from './pages/MatchesPage';
import AcceptedPage from './pages/AcceptedPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Books'
        screenOptions={{headerShown: false, animation: 'none'}}
      >
        <Stack.Screen name="Books" component={BooksPage} />
        <Stack.Screen name="AddBook" component={AddBookPage} />
        <Stack.Screen name="Matches" component={MatchesPage} />
        <Stack.Screen name="Accepted" component={AcceptedPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="EditProfile" component={EditProfilePage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
