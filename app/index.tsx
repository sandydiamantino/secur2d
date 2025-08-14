import Slider from '@react-native-community/slider';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
 
  return (
    <View style={styles.container}>
      
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />      

      <Text style={styles.title}>20 caracteres</Text>

      <View style={styles.area}>
        <Slider
        style={{height: 50}}
        minimumValue={8}
        maximumValue={20}
        maximumTrackTintColor='#ff0000'
        minimumTrackTintColor='#000'
        thumbTintColor='#392de9'
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity> 

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3FF'
  },
  logo:{
    marginBottom: 60
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 6
  },
  button:{
    width: '80%',
    backgroundColor: '#392de9',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 20  
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF'
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10
  }
})