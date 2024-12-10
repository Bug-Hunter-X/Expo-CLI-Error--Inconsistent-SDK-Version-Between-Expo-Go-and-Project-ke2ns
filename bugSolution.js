// bug.js (Example of a project using a newer SDK feature)
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font'; // This is a feature that might not exist in an older Expo SDK version 

const App = () => {
  const [loaded] = useFonts({
    'myFont': require('./assets/myFont.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'myFont' }}>Hello, world!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;


// bugSolution.js (Solution: Downgrading the SDK or updating Expo Go)
//To solve this problem, you'd need to either update the Expo Go app to a version that supports `expo-font`, or downgrade the project to use an older SDK version. For example, to downgrade you'd modify app.json (or expo.json):
/*
{
  "expo": {
    "sdkVersion": "47.0.0" // Or other compatible version
  }
}
*/
//The best solution is to update Expo Go to ensure you have access to the latest features and bug fixes.