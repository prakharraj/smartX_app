import React, { useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  BackHandler,
} from "react-native";
import { Divider, Image } from "react-native-elements";
import TopBanner from "./TopBanner";

export default function Success({ navigation, route }) {
    let user = route.params.username;

    useEffect(() => {
      const backAction = () => {
        return true;
      };
    
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction
      );
    
      return () => backHandler.remove();
    }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 3, marginTop: 0 }}>
      <TopBanner />
      <Divider width={8} />
      <View style={styles.container}>
        <Image
          source={require("./assets/images/success.png")}
          style={styles.image}
          resizeMode="contain"
        />
       <Text style={{height: 30,width: 300, textAlign:'center', fontSize: 16, fontWeight: 'bold'}}>Order successfully placed for {user}</Text>
       <Text style={{height: 60,width: 300, textAlign:'center', fontSize: 14}}>Please contact admin in case of any changes in the order</Text>

       <Divider width={8} />
      <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log("going home--"+user);
            navigation.navigate('Home',{username: user})
          }
        }
        >
            <Text style={styles.text}>Go home !</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    alignItems: "center",
    elevation: 8,
    height: 40,
    width: 200,
    backgroundColor: "#f7d679",
    color: "black",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 1,
  },
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    marginLeft: 8,
    marginBottom: 2,
  },
  infotext: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 10,
    width: 200,
    fontSize: 16,
    lineHeight: 21,
  },

});
