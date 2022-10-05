// Example of Popup Dialog in React Native
// https://aboutreact.com/popup-dialog/

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Button,
} from 'react-native';

import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
} from 'react-native-popup-dialog';

const App = () => {
  const [defaultAnimationDialog, setDefaultAnimationDialog] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Coba Aplikasi Pop Up</Text>
        {/* For Default Animation Dialog */}
        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={() => setDefaultAnimationDialog(true)}>
          <Text style={styles.buttonTextStyle}>Beli Sekarang</Text>
        </TouchableHighlight>

        <Dialog
          onDismiss={() => {
            setDefaultAnimationDialog(false);
          }}
          width={0.9}
          visible={defaultAnimationDialog}
          rounded
          actionsBordered
          dialogTitle={
            <DialogTitle
              title="Apakah kamu yakin untuk beli?"
              style={{
                backgroundColor: '#F7F7F8',
              }}
              hasTitleBar={false}
              align="left"
            />
          }
          footer={
            <DialogFooter>
              <DialogButton
                text="TIDAK"
                bordered
                onPress={() => {
                  setDefaultAnimationDialog(false);
                }}
                key="button-1"
              />
              <DialogButton
                text="BELI"
                bordered
                onPress={() => {
                  setDefaultAnimationDialog(false);
                }}
                key="button-2"
              />
            </DialogFooter>
          }>
          <DialogContent
            style={{
              backgroundColor: '#F7F7F8',
            }}>
            <Text>Apakah kamu yakin untuk membeli?</Text>
          </DialogContent>
        </Dialog>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    padding: 16,
  },
  buttonStyle: {
    minWidth: '100%',
    padding: 10,
    backgroundColor: '#f5821f',
    margin: 15,
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
  },
  titleStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
});
