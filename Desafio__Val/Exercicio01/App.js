import { StyleSheet, View } from 'react-native';

import Media from './components/Media';

export default function App() {
  return (
    <View style={styles.container}>
        <Media />
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
