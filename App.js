import {
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';
import mentorsList from './data.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {mentorsList.map((mentor) => {
          console.log(mentor.id)
          return (
            <View style={styles.card} key={mentor.id}>
              <Text style={styles.cardText}>{mentor.mentor}</Text>
              <Text>{mentor.location}</Text>
            </View>
          );
        })}
      </ScrollView>
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
  },
  cardText: {
    fontSize: 30,
  }
});
