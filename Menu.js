import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Divider} from "react-native-elements";

const Menu = ({ foodType, setFoodType, foodData, setFoodData}) => {

  let currentCategory="Breakfast";
  let obj = foodData;
  function handleChange(e, operation, foodType) {
    //console.log(JSON.stringify(e));
    if (foodType == 'Breakfast') {
        obj[e.id-1].bCount = operation === "minus" ? (obj[e.id-1].bCount>0? obj[e.id-1].bCount -= 1:obj[e.id-1].bCount) : obj[e.id-1].bCount += 1;
      }
      else if (foodType == 'Lunch') {
        obj[e.id-1].lCount = operation === "minus" ?(obj[e.id-1].lCount>0? obj[e.id-1].lCount -= 1:obj[e.id-1].lCount) : obj[e.id-1].lCount += 1;
      }
      else if (foodType == 'Dinner') {
        obj[e.id-1].dCount = operation === "minus" ? (obj[e.id-1].dCount>0? obj[e.id-1].dCount -= 1:obj[e.id-1].dCount) : obj[e.id-1].dCount += 1;
      }
     //console.log(JSON.stringify(obj));
    setFoodData([...obj]);
  }

  return (
    <ScrollView>
      {foodData.map((item) => {
        if(item.category != currentCategory){
          currentCategory = item.category;
          return(<Text style={styles.titleText}>{item.category}</Text>)
        }
        else{
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
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <Text style={styles.itemText}>{item.points}</Text>
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
        );}
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
    setOpacityTo: 0,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
  titleText: {
    fontSize: 15,
    lineHeight: 28,
    fontWeight: "bold",
    letterSpacing: 0.50,
    backgroundColor: "#b8b6b4",
    
  },
  itemText: {
    marginTop: 4,
    paddingVertical: 1,
    paddingLeft: 10,
    paddingRight: 10,
    alignContent: "center"
  }
});
