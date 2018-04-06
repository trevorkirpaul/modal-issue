import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import Modal from "react-native-modal";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleToggleModal() {
    this.setState({ open: !this.state.open })
  }
  handleCloseModal() {
    this.setState({ open: false })
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Open Modal"
          onPress={() => this.handleToggleModal()}
        />
        <Modal
          animationType="slide"
          transparent={false}
          isVisible={this.state.open}

        >
          <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', backgroundColor: 'palevioletred' }}>
            <Button
              title="Open Alert"
              color="white"
              onPress={() => Alert.alert('Alert', 'Close modal', [{text: 'Ok', onPress: () => this.handleCloseModal()}])}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
