import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import destinationCategories from "../data/categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../constants/styles";

const CategoryButtons = ({ onCategoryChanged }) => {
  {
    /* Button functionality for when button is pressed need useRef Hook */
  }
  const itemRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  {
    /* Create scrollRef so when category is pressed it will snap that category to far left */
  }
  const scrollRef = useRef(null);

  const handleSelectCategory = (index) => {
    const selected = itemRef.current[index];
    setActiveIndex(index);
    console.log(index);
    selected?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x, y: 0, animated: true });

      onCategoryChanged(destinationCategories[index].title);
    });
  };
  return (
    <View style={styles.categoriesContainer}>
      <Text style={styles.title}>Categories</Text>
      {/* Create ScrollView to scroll left to right for Categories */}
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 12,
          marginBottom: 10,
        }}
      >
        {destinationCategories.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            ref={(el) => (itemRef.current[index] = el)}
            onPress={() => handleSelectCategory(index)}
            style={
              activeIndex === index
                ? styles.categoryBtnActive
                : styles.categoryButton
            }
          >
            <MaterialCommunityIcons
              name={item.iconName}
              size={20}
              color={activeIndex === index ? Colors.textLight : Colors.textDark}
            />
            <Text
              style={
                activeIndex === index
                  ? styles.categoryBtnTxtActive
                  : styles.categoryBtnTxt
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryButtons;

const styles = StyleSheet.create({
  categoriesContainer: {
    paddingLeft: 18,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 20,
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  categoryBtnActive: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.bgDark,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  categoryBtnTxt: {
    marginLeft: 7,
    color: Colors.textDark,
  },
  categoryBtnTxtActive: {
    marginLeft: 7,
    color: Colors.btnLight,
  },
});
