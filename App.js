import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import Accordion from 'react-native-collapsible';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');
  const [showScrollView, setShowScrollView] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const addItem = () => {
    setItems([...items, newItem]);
    setNewItem('');
  };

  const clearItems = () => {
    setItems([]);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const removeLastItem = () => {
    const updatedItems = [...items];
    updatedItems.pop();
    setItems(updatedItems);
  };

  const doubleCounter = () => {
    setCounter(counter * 2);
  };

  const displayMessage = () => {
    if (counter % 2 === 0) {
      setMessage('Counter is even.');
    } else {
      setMessage('Counter is odd.');
    }
  };

  const toggleScrollView = () => {
    setShowScrollView(!showScrollView);
  };

  const toggleSpinner = () => {
    setShowSpinner(!showSpinner);
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>The App Application</Text>

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item}</Text>
          </View>
        )}
      />

      <TextInput
        style={styles.input}
        placeholder="Write a new item"
        value={newItem}
        onChangeText={text => setNewItem(text)}
      />

      <Button
        title="Add Item"
        color="pink"
        onPress={addItem}
      />

      <Button
        title="Clear Items"
        color="pink"
        onPress={clearItems}
      />

      <Button
        title="Increment Counter"
        color="pink"
        onPress={incrementCounter}
      />

      <Button
        title="Decrement Counter"
        color="pink"
        onPress={decrementCounter}
      />

      <Button
        title="Remove Last Item"
        color="pink"
        onPress={removeLastItem}
      />

      <Button
        title="Double Counter"
        color="pink"
        onPress={doubleCounter}
      />

      <Button
        title="Display Message"
        color="pink"
        onPress={displayMessage}
      />

      <Button
        title={collapsed ? "Show Content" : "Hide Content"}
        color="pink"
        onPress={toggleCollapse}
      />

      <Accordion isCollapsed={collapsed}>
        <ScrollView style={styles.scrollView}>
          <Text>I am a bird always flying in the sky.</Text>
          <Text>I am a kind person, you know that.</Text>
          <Text>I am bold enough to tell you the truth.</Text>
          <Text>When I was One, I had just begun.</Text>
          <Text>When I was Two, I was nearly new.</Text>
          <Text>When I was Three, I was hardly me.</Text>
        </ScrollView>
      </Accordion>

      <Button
        title={showSpinner ? "Hide Spinner" : "Show Spinner"}
        color="pink"
        onPress={toggleSpinner}
      />

      {showSpinner && (
        <ActivityIndicator size="large" color="#0000ff" />
      )}

      <Text style={styles.counter}>Counter: {counter}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  scrollView: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  counter: {
    fontSize: 24,
    marginTop: 20,
  },
  message: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default App;
