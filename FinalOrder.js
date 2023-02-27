import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import TopBanner from "./TopBanner";

export default function FinalOrder({ navigation, route }) {
  let foodOrder = route.params.order;
  let username = route.params.user;
  let  transformedData = [];
  const [orderStatus, setOrderStatus] = useState("Place Order!");


  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 3, marginTop: 0 }}>
      <TopBanner/>
      <Divider width={8} />
      <Text style={styles.titleText}>Your final food order -</Text>
      <Divider width={2} />
      <ScrollView style={styles.container}>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Date - {foodOrder.date}</Text>
          <Text style={styles.categoryTitle}>Breakfast</Text>
          {foodOrder.breakfast.map((item) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCount}>x{item.count}</Text>
            </View>
          ))}
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Lunch</Text>
          {foodOrder.lunch.map((item) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCount}>x{item.count}</Text>
            </View>
          ))}
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Dinner</Text>
          {foodOrder.dinner.map((item) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCount}>x {item.count}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Divider width={4} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log("FinalOrder----" + JSON.stringify(foodOrder));
            setOrderStatus("Sending......")
            // Mapping breakfast items
            foodOrder.breakfast.forEach((item) => {
              transformedData.push({
                Date: foodOrder.date,
                User: username,
                Type: "Breakfast",
                ID: item.id,
                Name: item.name,
                Points: item.point,
                Count: item.count,
              });
            });

            // Mapping lunch items
            foodOrder.lunch.forEach((item) => {
              transformedData.push({
                Date: foodOrder.date,
                User: username,
                Type: "Lunch",
                ID: item.id,
                Name: item.name,
                Points: item.point,
                Count: item.count,
              });
            });

            // Mapping dinner items
            foodOrder.dinner.forEach((item) => {
              transformedData.push({
                Date: foodOrder.date,
                User: username,
                Type: "Dinner",
                ID: item.id,
                Name: item.name,
                Points: item.point,
                Count: item.count,
              });
            });
            console.log("transformedData----" + JSON.stringify(transformedData));
            foodOrder=null;
            fetch(
              "https://script.google.com/macros/s/AKfycbwutJLNiSoTLmndDsz0nTlqemXQxPKajcADY725q0r-zxE6gmYj9b3YVcxFbzBwgZhRfg/exec",
              {
                method: "POST",
                body: JSON.stringify(transformedData),
              }
            )
              .then((res) => {
                res.text();
                navigation.navigate('Success',{username: username})
                })
              .catch((error) => {
                console.log(error);
                navigation.navigate('Failure',{username: username})
              });
             
          }}
        >
          <Text style={styles.text}>{orderStatus}</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Total points - {route.params.order.totalPoints}
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 5,
  },
  itemName: {
    flex: 1,
    fontWeight: "bold",
    marginLeft: 80,
    marginRight: 10,
  },
  itemCount: {
    fontWeight: "bold",
    marginRight: 50,
  },
  button: {
    alignItems: "flex-start",
    elevation: 8,
    height: 40,
    width: 200,
    backgroundColor: "#f7d679",
    color: "black",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    marginLeft: 8,
    marginBottom: 2,
  },
  titleText: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: "bold",
    letterSpacing: 0.25,
    backgroundColor: "#f7d679",
  },
});
