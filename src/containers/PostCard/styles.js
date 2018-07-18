import {
  StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
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
  },
  contentText: {
    fontSize: 14,
    lineHeight: 21,
  },
  operating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingBottom: 3,
  },
  operatingInner: {
    borderRightWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  operatingWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  iconNoBorder: {
    borderRightWidth: 0,
  },
  iconText: {
    fontSize: 12,
    color: '#999',
    marginLeft: 5,
  },
  referenceWrap: {
    backgroundColor: '#ECEFF1',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4,
    marginTop: 5,
  },
});

export default styles;