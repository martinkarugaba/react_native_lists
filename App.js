import {
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
  View,
  SectionList,
} from 'react-native';
import mentorsList from './data.json';
import groupedMentors from './grouped-data.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        {/* <FlatList
          data={[...mentorsList]}
          renderItem={({ item }) => {
            console.log(item.id);
            return (
              <View style={styles.card} key={item.id}>
                <Text style={styles.cardText}>{item.mentor}</Text>
                <Text>{item.location}</Text>
              </View>
            );
          }}
          horizontal={false}
          keyExtractor={(item, index) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 5 }}></View>}
          ListEmptyComponent={<Text>No mentors available</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>Mentors</Text>}
          ListFooterComponent={<Text style={styles.headerText}>Next</Text>}
        /> */}
        <SectionList
          sections={groupedMentors}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeaderText}>{section.occupation}</Text>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
          SectionSeparatorComponent={() => <View style={{ height: 16 }}></View>}
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
  },
  cardText: {
    fontSize: 20,
  },
  headerText: {
    fontSize: 30,
    marginVertical: 30,
    textAlign: 'center',
  },
  sectionHeaderText: {
    backgroundColor: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  }
});
