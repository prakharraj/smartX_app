import { View, Image, Text } from 'react-native';

const TopBanner = ({username}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>SmartX Living</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 12,  marginLeft:50,  alignContent:"flex-end",}}>{username}</Text>
      </View>
    </View>
  );
};

const styles = {
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7d679',
    paddingHorizontal: 15
  },
  logoContainer: {
    width: 60,
    height: 60,
    marginRight: 10
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'flex-end'
  }
};

export default TopBanner;
