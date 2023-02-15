import { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Divider, ListItem } from "react-native-elements";



const Menu = ({ foodType, setFoodType, foodData, setFoodData}) => {
 // console.log("123---"+JSON.stringify(foodData))
  function handleChange(e, operation, foodType) {
    let obj = [];
    foodData.forEach((val) => {
      //console.log("1---"+val.name+"---"+val.count)
     
      if (e.id === val.id && foodType == 'Breakfast') {
        val.bCount = operation === "minus" ? val.bCount - 1 : val.bCount + 1;
       // console.log("0---"+val.name+"---"+val.bCount);
      }
      if (e.id === val.id && foodType == 'Lunch') {
        val.lCount = operation === "minus" ? val.lCount - 1 : val.lCount + 1;
        //console.log("1---"+val.name+"---"+val.lCount);
      }
      if (e.id === val.id && foodType == 'Dinner') {
        val.dCount = operation === "minus" ? val.dCount - 1 : val.dCount + 1;
        //console.log("2---"+val.name+"---"+val.dCount);
      }
      
      obj.push({
        id: val.id,
        name: val.name,
        points: val.points,
        bCount: val.bCount,
        lCount: val.lCount,
        dCount: val.dCount,
        category: val.category,
      });
    });
    //console.log("3---" +foodType+"****\n"+ JSON.stringify(obj));
    setFoodData(obj);
  }

  return (
    <ScrollView>
      {foodData.map((item) => {
        return (
          <View key={item.id} style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={{
                shadowColor: "#2ca8f5",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Text style={styles.itemText}>{item.id}</Text>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>{item.points}</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity onPress={() => handleChange(item, "add", foodType)} style={styles.button} >
                <Text style={styles.text}>+</Text>
              </TouchableOpacity>
              <Text style={{ marginLeft: 3, marginRight: 3 }}>
                { foodType == 'Breakfast' ? item.bCount : foodType == 'Lunch' ? item.lCount : item.dCount }
              </Text>
              <TouchableOpacity onPress={() => handleChange(item, "minus", foodType)} style={styles.button} >
                <Text style={styles.text}>-</Text>
              </TouchableOpacity>
            </View>
            <Divider width={2} />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  button: {
    alignItems: "flex-start",
    elevation: 8,
    height: 25,
    width: 35,
    backgroundColor: "#f7d679",
    color: "black",
    borderRadius: 10,
    paddingVertical: 1,
    paddingHorizontal: 6,
    paddingStart: 13,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
  titleText: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    backgroundColor: "#f7d679",
  },
  itemText: {
    marginTop: 4,
    paddingVertical: 1,
    paddingLeft: 30,
    paddingRight: 30,
    alignContent: "center"
  }
});