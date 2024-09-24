import { Text, StyleSheet, Image,  View, ScrollView} from 'react-native'

const styles = StyleSheet.create({
    container: {
      padding: 5,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'black',
      padding: 8,
      borderRadius: 8,
      width: 325,
      gap: 8,
  
    },
    avatar: {
      width: 75,
      height: 75,
      borderRadius: 999,
    },
    textContainer: {
      flex: 1,
    },
    boldText: {
      fontWeight: 'bold',
    },
  })

export default styles;

