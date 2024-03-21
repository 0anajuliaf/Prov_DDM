import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ana Júlia e Anna Beatriz</Text>
      <AnaJulia/>
      <AnnaBeatriz/>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
