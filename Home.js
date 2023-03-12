import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import {StyleSheet, View, SafeAreaView,Button, Text, TouchableOpacity,} from "react-native";
import { Divider } from "react-native-elements";
import Categories from "./Categories";
import TopBanner from "./TopBanner";
import Menu from "./Menu";
import { ScrollView } from "react-native-gesture-handler";

export default function Home({navigation, route}) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [foodType, setFoodType] = useState("Breakfast");
  const [disable, setDisable] = useState(true);
  let fDate = "";
  let points = 0;

  let foodList = [
    { id: 1, name:  "Chicken Beliram ", points: 5,  bCount:0, lCount:0, dCount:0,category: "Breakfast"},
    { id: 2, name:  "Chicken Butter,200 gms", points: 9,  bCount:0, lCount:0, dCount:0,category: "Breakfast"},
    { id: 3, name:  "Chicken Butter,120 gms", points: 5,  bCount:0, lCount:0, dCount:0,category: "Breakfast"},
    { id: 4, name:  "Chicken Butter (Boneless),180 gms", points: 9,  bCount:0, lCount:0, dCount:0,category: "Breakfast"},
    { id: 5, name:  "Chicken Butter (Boneless),100 gms 5", points: 2,  bCount:0, lCount:0, dCount:0,category: "Breakfast"},
    { id: 6, name:  "Chicken Chilli Gravy (Boneless),180", points: 2,  bCount:0, lCount:0, dCount:0,category: "Breakfast"},
    { id: 7, name:  "Chicken Chilli Gravy (Boneless),100", points: 1,  bCount:0, lCount:0, dCount:0,category: "Indian Veg"},
    { id: 8, name:  "Chicken Kadai,200 gms 9", points: 2,  bCount:0, lCount:0, dCount:0,category: "Indian Veg"},
    { id: 9, name:  "Chicken Kadai,120 gms 5", points: 2,  bCount:0, lCount:0, dCount:0,category: "Indian Veg"},
    { id: 10, name: "Chicken Kadai (Boneless),180 gms 9", points: 1,  bCount:0, lCount:0, dCount:0,category: "Indian Veg"},
    { id: 11, name: "Chicken Kadai (Boneless),100 gms 5", points: 2,  bCount:0, lCount:0, dCount:0,category: "Indian Veg"},
    { id: 12, name: "Chicken Keema Masala,180 gms 9", points: 2,  bCount:0, lCount:0, dCount:0,category: "Indian Veg"},
    { id: 13, name: "Chicken Keema Masala,100 gms 5", points: 1,  bCount:0, lCount:0, dCount:0, category: "Indian Non-Veg"},
    { id: 14, name: "Chicken Turkish Style,200 gms 9", points: 2,  bCount:0, lCount:0, dCount:0, category: "Indian Non-Veg"},
    { id: 15, name: "Chicken Turkish Style,120 gms 5", points: 2,  bCount:0, lCount:0, dCount:0, category: "Indian Non-Veg"},
    { id: 16, name: "Chicken Andra Style,200 gms 9", points: 1,  bCount:0, lCount:0, dCount:0, category: "Indian Non-Veg"},
    { id: 17, name: "Chicken Andra Style,120 gms 5", points: 2,  bCount:0, lCount:0, dCount:0, category: "Indian Non-Veg"},
    { id: 18, name: "Chicken Laal Maas,200 gms 9", points: 2,  bCount:0, lCount:0, dCount:0, category: "Indian Non-Veg"},
    { id: 19, name: "Chicken Laal Maas,120 gms 5", points: 1,  bCount:0, lCount:0, dCount:0, category: "Indian Non-Veg"},
    { id: 20, name: "Chicken Legs (Dry),2 pcs 9", points: 2,  bCount:0, lCount:0, dCount:0, category: "Breads" },
    { id: 21, name: "khichidi,100 gms 5", points: 2,  bCount:0, lCount:0, dCount:0, category: "Breads" },
    { id: 22, name: "Paneer Beliram,180 gms 9", points: 1,  bCount:0, lCount:0, dCount:0, category: "Breads" },
    { id: 23, name: "Paneer Beliram,100 gms 5", points: 2,  bCount:0, lCount:0, dCount:0, category: "Breads" },
    { id: 24, name: "Paneer Butter Masala,180 gms 9", points: 2,  bCount:0, lCount:0, dCount:0, category: "Breads" },
    { id: 25, name: "Paneer Butter Masala,100 gms 5", points: 1,  bCount:0, lCount:0, dCount:0, category: "Dessert" },
    { id: 26, name: "Paneer Bhurji,180 gms 9", points: 2,  bCount:0, lCount:0, dCount:0, category: "Dessert" },
    { id: 27, name: "Paneer Bhurji,100 gms 5", points: 2,  bCount:0, lCount:0, dCount:0, category: "Dessert" },
    { id: 28, name: "Paneer Kadai,180 gms 9", points: 1,  bCount:0, lCount:0, dCount:0, category: "Dessert" },
    { id: 29, name: "Paneer Kadai,100 gms 5", points: 2,  bCount:0, lCount:0, dCount:0, category: "Dessert" },
    { id: 30, name: "Paneer Mattar,180 gms 9", points: 2,  bCount:0, lCount:0, dCount:0, category: "Dessert" },
  ];

  const [foodData, setFoodData] = useState(foodList);

  const onChange = (event, selectDate) => {
    setShow(false);
    const currentDate = selectDate || date;
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setText(fDate);
    setDisable(false);
    console.log(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 3, marginTop: 0 }}>
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
            minimumDate={new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)}
            maximumDate={new Date(Date.now() + 6 * 24 * 60 * 60 * 1000)}
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
            No.             Name                                     Points
          </Text>
          <Divider width={2} /> 
       <ScrollView> 
       <Text style={styles.categoryText}>Breakfast</Text>    
          <Menu foodType={foodType} setFoodType={setFoodType} foodData={foodData} setFoodData={setFoodData}/>
      </ScrollView>
      <View style={{ backgroundColor: "white", padding: 10,  flexDirection: 'row', alignItems: 'center'}}>
      <Divider width={4} /> 
        <TouchableOpacity
          style={[disable? styles.disbutton : styles.button]}
          disabled={disable}
          onPress={() => {
            console.log("Onpress----"+route.params.username);
            let foodOrder = {
              date,
              totalPoints:0,
              breakfast: [],
              lunch:[],
              dinner: []
            };
           
            console.log("FinalOrder building----");
            points=0;
            foodData.forEach((food) => {
              if (food.bCount > 0) {
                foodOrder.breakfast.push({id:food.id, name: food.name, point: food.points, count: food.bCount });
                points  += food.points*food.bCount;
              }
              if (food.lCount > 0) {
                foodOrder.lunch.push({id:food.id, name: food.name, point: food.points, count: food.lCount });
                points  += food.points*food.lCount;
              }
              if (food.dCount > 0) {
                foodOrder.dinner.push({id:food.id, name: food.name, point: food.points, count: food.dCount });
                points  += food.points*food.dCount;
              }
            });
            foodOrder.date=text;
            foodOrder.totalPoints=points;
            console.log("FinalOrder----"+JSON.stringify(foodOrder));
            navigation.navigate('FinalOrder',{order: foodOrder, user:route.params.username})
            
      }}
        >
        <Text style={styles.text}>Place Order!</Text>
        </TouchableOpacity>
        <Text style={styles.Hellotext}>Hello  {route.params.username}</Text>
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
  disbutton: {
    alignItems: "flex-start",
    elevation: 8,
    height: 40,
    width: 200,
    backgroundColor: "grey",
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
  Hellotext: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    marginLeft: 10,
    marginBottom: 2
  },
  titleText: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    backgroundColor: "#f7d679",
  },
  categoryText: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    backgroundColor: "#b8b6b4",
    marginBottom: 6,
  },
});
