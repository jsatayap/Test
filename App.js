import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";
import { useState } from 'react';

export default function App() {
  const [entered_item_text, set_entered_item_text] = useState('');
  const [items, set_items] = useState([]);

  function item_input_handler(entered_text) {
    set_entered_item_text(entered_text);
  }

  function add_item_handler() {
    console.log(entered_item_text);
    set_items((current_items) => [
      ...current_items,
      entered_item_text,
    ]);
  }

  return (
    <View style={styles.app_container}>
      <Text>Welcome to FridgeTrack!</Text>

      <View style={styles.input_container}>
        <TextInput style={styles.text_input} placeholder="New item name" onChangeText={item_input_handler}/>
        <Button title="Add item" onPress={add_item_handler}/>
      </View>

      <View style={styles.input_container}>
        <TextInput style={styles.text_input} placeholder="Expiration date" />
        <Button title="Add date" />
      </View>
      
      <View style={styles.items_container}>
        <ScrollView>
        <Text>List of items in fridge:</Text>
        {items.map((item) => (
          <View key={item} style={styles.item_card}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app_container: {
    padding: 70,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  text_input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  items_container: {
    flex: 5
  },
  item_card: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#7dbae3',
  },
  itemText: {
    color: 'white',
  }
});
