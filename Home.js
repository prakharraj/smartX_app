import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  Text,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements";
import Categories from "./Categories";
import TopBanner from "./TopBanner";
import Menu from "./Menu";
import { ScrollView } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Select Date!");
  const [foodType, setFoodType] = useState("Breakfast");

  let foodList = [
   { id: 1, name: "BF Item 1", points: 1,  bCount:0, lCount:0, dCount:0,category: "Breakfast"},
      { id: 2, name: "Item 2", points: 2,  bCount:0, lCount:0, dCount:0,category: "Breakfast"},
      { id: 3, name: "Item 3", points: 2,  bCount:0, lCount:0, dCount:0,category: "Breakfast"},
      { id: 4, name: "Item 1", points: 1,  bCount:0, lCount:0, dCount:0,category: "Breakfast"},
      { id: 5, name: "Item 2", points: 2,  bCount:0, lCount:0, dCount:0,category: "Breakfast"},
      { id: 6, name: "Item 3", points: 2,  bCount:0, lCount:0, dCount:0,category: "Breakfast"},
      { id: 7, name: "Item 1", points: 1,  bCount:0, lCount:0, dCount:0,category: "Indian Veg"},
      { id: 8, name: "Item 2", points: 2,  bCount:0, lCount:0, dCount:0,category: "Indian Veg"},
      { id: 9, name: "Item 3", points: 2,  bCount:0, lCount:0, dCount:0,category: "Indian Veg"},
      { id: 10, name: "Item 1", points: 1,  bCount:0, lCount:0, dCount:0,category: "Indian Veg"},
      { id: 11, name: "Item 2", points: 2,  bCount:0, lCount:0, dCount:0,category: "Indian Veg"},
      { id: 12, name: "Item 3", points: 2,  bCount:0, lCount:0, dCount:0,category: "Indian Veg"},
      { id: 13, name: "Item 1", points: 1,  bCount:0, lCount:0, dCount:0, category: "Indian Non-Veg"},
      { id: 14, name: "Item 2", points: 2,  bCount:0, lCount:0, dCount:0, category: "Indian Non-Veg"},
      { id: 15, name: "Item 3", points: 2,  bCount:0, lCount:0, dCount:0, category: "Indian Non-Veg"},
      { id: 16, name: "Item 1", points: 1,  bCount:0, lCount:0, dCount:0, category: "Indian Non-Veg"},
      { id: 17, name: "Item 2", points: 2,  bCount:0, lCount:0, dCount:0, category: "Indian Non-Veg"},
      { id: 18, name: "Item 3", points: 2,  bCount:0, lCount:0, dCount:0, category: "Indian Non-Veg"},
      { id: 19, name: "Item 1", points: 1,  bCount:0, lCount:0, dCount:0, isExpanded: false },
      { id: 20, name: "Item 2", points: 2,  bCount:0, lCount:0, dCount:0, category: "Breads" },
      { id: 21, name: "Item 3", points: 2,  bCount:0, lCount:0, dCount:0, category: "Breads" },
      { id: 22, name: "Item 1", points: 1,  bCount:0, lCount:0, dCount:0, category: "Breads" },
      { id: 23, name: "Item 2", points: 2,  bCount:0, lCount:0, dCount:0, category: "Breads" },
      { id: 24, name: "Item 3", points: 2,  bCount:0, lCount:0, dCount:0, category: "Breads" },
      { id: 25, name: "Item 1", points: 1,  bCount:0, lCount:0, dCount:0, category: "Dessert" },
      { id: 26, name: "Item 2", points: 2,  bCount:0, lCount:0, dCount:0, category: "Dessert" },
      { id: 27, name: "Item 3", points: 2,  bCount:0, lCount:0, dCount:0, category: "Dessert" },
      { id: 28, name: "Item 1", points: 1,  bCount:0, lCount:0, dCount:0, category: "Dessert" },
      { id: 29, name: "Item 2", points: 2,  bCount:0, lCount:0, dCount:0, category: "Dessert" },
      { id: 30, name: "Item 3", points: 2,  bCount:0, lCount:0, dCount:0, category: "Dessert" },
  ];

  const [foodData, setFoodData] = useState(foodList);

  const onChange = (event, selectDate) => {
    setShow(false);
    const currentDate = selectDate || date;
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setText(fDate);
    
    console.log(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (

    

    <SafeAreaView style={{ backgroundColor: "#eee", flex: 3, marginTop: 50 }}>
      <TopBanner/>
      <Divider width={8} />
      <View style={{ backgroundColor: "white", padding: 10,  flexDirection: 'row', alignItems: 'center'   }}>
        <TouchableOpacity
          onPress={() => showMode("date")}
          style={styles.button}
        >
        <Text style={styles.text}>Select Date!</Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            minimumDate={new Date()}
            testID="dateTimePicker"
            value={date}
            mode={mode}
            display="default"
            onChange={onChange}
          />
        )}
        <Text style={styles.text}>{text}</Text>
      </View>
      <View>
        <Divider width={8} />
        <Categories foodType={foodType} setFoodType={setFoodType}/>
        <Divider width={8} />      
      </View>
      <Text style={styles.titleText}>
            ID            Name             Point
          </Text>
          <Divider width={2} /> 
       <ScrollView>     
          <Menu foodType={foodType} setFoodType={setFoodType} foodData={foodData} setFoodData={setFoodData}/>
      </ScrollView>
      <View style={{ backgroundColor: "white", padding: 10,  flexDirection: 'row', alignItems: 'center'   }}>
      <Divider width={4} /> 
        <TouchableOpacity
          style={styles.button}
        >
        <Text style={styles.text}>Place Order!</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{foodData[0].points}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "flex-start",
    elevation: 8,
    height: 40,
    width: 200,
    backgroundColor: "#f7d679",
    color:'black',
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
    marginBottom: 2
  },
  titleText: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    backgroundColor: "#f7d679",
  },
});
