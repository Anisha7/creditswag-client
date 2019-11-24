// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react'
import Main from './main'


// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import reducers from './reducers'
// const store = createStore(reducers)

const App = () => (
  // <Provider store={store}>
    <Main />
  // </Provider>
)

export default App;
