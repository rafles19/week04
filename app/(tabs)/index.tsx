import { Text, StyleSheet, Image, View, ScrollView, Modal, TouchableOpacity } from 'react-native';
import userData from '../data.json';
import { AppRegistry } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Button } from 'react-native-paper';
import * as React from 'react';
import styles from '../style';

export default class Index extends React.Component {
  state = {
    modalVisible: false,
    selectedUser: null,
  };

  setModalVisible = (visible, user = null) => {
    this.setState({ modalVisible: visible, selectedUser: user });
  };

  render() {
    const { modalVisible, selectedUser } = this.state;

    return (
      <PaperProvider>
        <ScrollView>
          {userData.map((user) => (
            <TouchableOpacity key={user.name} onPress={() => this.setModalVisible(true, user)}>
              <Card style={styles.card}>
                <Card.Content>
                  <Title style={styles.boldText}>{user.name}</Title>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {selectedUser && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => this.setModalVisible(false)}
          >
            <View style={styles.modalView}>
              <Card>
                <Card.Cover source={{ uri: selectedUser.photo_url }} style={styles.avatar} />
                <Card.Content>
                  <Title style={styles.boldText}>{selectedUser.name}</Title>
                  <Paragraph>{selectedUser.email}</Paragraph>
                </Card.Content>
                <Card.Actions>
                  <Button onPress={() => this.setModalVisible(false)}>Close</Button>
                </Card.Actions>
              </Card>
            </View>
          </Modal>
        )}
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  avatar: {
    height: 200,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});