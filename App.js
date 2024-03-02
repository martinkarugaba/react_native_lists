import {
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
  View,
} from 'react-native';
import mentorsList from './data.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <FlatList
          data={mentorsList}
          renderItem={({ item }) => {
            console.log(item.id);
            return (
              <View style={styles.card} key={item.id}>
                <Text style={styles.cardText}>{item.mentor}</Text>
                <Text>{item.location}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.id.toString()}
          horizontal
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 15,
    marginHorizontal: 5,
    width: 300,
  },
  cardText: {
    fontSize: 30,
  },
});
