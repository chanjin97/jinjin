import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconButton from './IconButton';
import Icons from '../Icons';

const Task = ({data, deleteTask}) => {
  return (
    <>
      {[...data].reverse().map((item, idx) => {
        return (
          <View style={styles.container} key={idx}>
            <IconButton icon={Icons.check} onPress={() => alert('check')} />
            <Text style={{flex: 1}}>{item.text}</Text>
            {item.completed || (
              <IconButton icon={Icons.edit} onPress={() => alert('edit')} />
            )}
            <IconButton
              icon={Icons.delete}
              onPress={() => deleteTask(item.id)}
            />
          </View>
        );
      })}
    </>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 5,
    backgroundColor: 'white',
  },
});
