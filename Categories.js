import { React } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

const items = [
  {
    image: require("./assets/images/shopping-bag.png"),
    text: "Breakfast",
  },
  {
    image: require("./assets/images/soft-drink.png"),
    text: "Lunch",
  },
  {
    image: require("./assets/images/bread.png"),
    text: "Dinner",
  },
];

let CurrentFoodType = "";

const Categories = ({foodType,setFoodType}) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30, backgroundColor: foodType === 'breakfast' ? '#f7d679' : 'white', }}>
            <TouchableOpacity
              key={index}            
              onPress={() => {
                setFoodType(item.text); 
                CurrentFoodType=item.text;
                console.log("Category---"+CurrentFoodType);}}
              style={{
                backgroundColor: foodType === item.text ? '#f7d679' : 'white',
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 12,
                paddingEnd:8,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                shadowColor: "grey",
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: 40,
                  height: 30,
                  resizeMode: "contain",
                }}
              />
              <Text style={{ fontSize: 13, fontWeight: "900" }}>
                {item.text}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>      
    </View>
  );
};

//export const selectedFoodType = CurrentFoodType;
//export const [selectedFoodType, setSelectedFoodType] = useState("Breakfast");
export default Categories;

