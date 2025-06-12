import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

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
        <SafeAreaView style={styles.container}>
          <Animatable.View animation="fadeInDown" duration={800} style={styles.header}>
            <Text style={styles.title}>Cuidados com sua Planta 🌿</Text>
            <Text style={styles.subtitle}>Mantenha seu jardim sempre saudável!</Text>
          </Animatable.View>
          <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
              <Animatable.View
                animation="fadeInUp"
                duration={600}
                delay={index * 100}
                style={[styles.taskItem, item.done && styles.taskDone]}
              >
                <TouchableOpacity
                  style={styles.taskContent}
                  onPress={() => toggleTask(item.id)}
                >
                  <Ionicons
                    name={item.done ? 'checkmark-circle' : 'ellipse-outline'}
                    size={28}
                    color={item.done ? '#4CAF50' : '#78909C'}
                  />
                  <Text style={[styles.taskText, item.done && styles.taskTextDone]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </Animatable.View>
            )}
            contentContainerStyle={styles.listContainer}
          />
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#1B5E20', // Verde musgo escuro
    textAlign: 'center',
    fontFamily: 'System',
  },
  subtitle: {
    fontSize: 16,
    color: '#616161',
    marginTop: 8,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 30,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  taskDone: {
    backgroundColor: '#E8F5E9',
    opacity: 0.8,
  },
  taskContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  taskText: {
    fontSize: 18,
    marginLeft: 12,
    color: '#37474F',
    flex: 1,
    fontWeight: '500',
  },
  taskTextDone: {
    textDecorationLine: 'line-through',
    color: '#78909C',
  },
});
