import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  inputArea: {
    marginTop: 150,
    marginLeft: 30,
    marginRight: 30,
  },
  message: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03A9F4',
    marginTop: 20,
  },
  disabled: {
    opacity: .7,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  registered: {
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    backgroundColor: '#FAFAFA',
    height: 60,
    justifyContent: 'center',
  },
  registeredText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#212121',
  },

});