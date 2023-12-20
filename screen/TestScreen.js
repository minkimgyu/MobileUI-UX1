import React from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, View, ScrollView } from "react-native";

const persons = [
  {
    id: '1',
    name: 'Earnest Green',
  },
  {
    id: '2',
    name: 'Winston Orn',
  },
  {
    id: '3',
    name: 'Carlton Collins',
  },
  {
    id: '4',
    name: 'Malcolm Labadie',
  },
  {
    id: '5',
    name: 'Michelle Dare',
  },
  {
    id: '6',
    name: 'Carlton Zieme',
  },
  {
    id: '7',
    name: 'Jessie Dickinson',
  },
  {
    id: '8',
    name: 'Julian Gulgowski',
  },
  {
    id: '9',
    name: 'Ellen Veum',
  },
  {
    id: '10',
    name: 'Lorena Rice',
  },

  {
    id: '11',
    name: 'Carlton Zieme',
  },
  {
    id: '12',
    name: 'Jessie Dickinson',
  },
  {
    id: '13',
    name: 'Julian Gulgowski',
  },
  {
    id: '14',
    name: 'Ellen Veum',
  },
  {
    id: '15',
    name: 'Lorena Rice',
  },
];

export default function App() {

  const myItemSeparator = () => {
    return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
    };
  
  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
      <Text style={styles.item}>No data found</Text>
      </View>
    );
  };
  
return (
    // <FlatList
    //   data={persons}
    //   renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
    //   keyExtractor={(item) => item.id}
    //   ItemSeparatorComponent={myItemSeparator}
    //   ListEmptyComponent={myListEmpty}
    // />

  <SafeAreaView style={styles.container}>
    <ScrollView>
        <View>
          {persons.map((person) => {
            return (
              <View>
                <Text style={styles.item}>{person.name}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
  </SafeAreaView>
  );
 }

//styles to see the data more clearly

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
});