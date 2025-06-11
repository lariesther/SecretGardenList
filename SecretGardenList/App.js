import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const initialTasks = [
  { id: '1', title: 'Regar a planta', done: false },
  { id: '2', title: 'Colocar ao sol', done: false },
  { id: '3', title: 'Adubar o solo', done: false },
  { id: '4', title: 'Limpar folhas secas', done: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <ImageBackground
      source={require('./assets/secret.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Cuidados com a sua Planta 🌼</Text>
        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.taskItem, item.done && styles.taskDone]}
              onPress={() => toggleTask(item.id)}
            >
              <Ionicons
                name={item.done ? 'checkmark-circle' : 'ellipse-outline'}
                size={24}
                color={item.done ? '#6db37b' : '#aaa'}
              />
              <Text style={[styles.taskText, item.done && styles.taskTextDone]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.8)', // leve camada para legibilidade
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4a4a4a',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f0f5',
    padding: 12,
    marginVertical: 8,
    borderRadius: 16,
  },
  taskDone: {
    backgroundColor: '#e2f4e3',
  },
  taskText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#555',
  },
  taskTextDone: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});
