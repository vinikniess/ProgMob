// App.tsx
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HelloWorld from './components/HelloWorld'; // Ajuste o caminho conforme a estrutura do seu projeto

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HelloWorld />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EB489', //Mint Green
  },
});

export default App;
