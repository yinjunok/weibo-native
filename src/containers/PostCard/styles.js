import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  time: {
    fontSize: 12,
  },
  author: {
    marginLeft: 10,
  },
  content: {
    marginTop: 12,
    marginBottom: 12,
  },
  contentText: {
    fontSize: 14,
    lineHeight: 21,
  },
  operating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 3,
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: '#eee',
  },
  iconNoBorder: {
    borderRightWidth: 0,
  },
  iconText: {
    fontSize: 12,
    color: '#999',
    marginLeft: 5,
  }
});

export default styles;