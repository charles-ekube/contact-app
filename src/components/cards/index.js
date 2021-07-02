import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Contact from "./carditem";

const Item = ({ title, name, img }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.lastCalled}>{name}</Text>
    <TouchableOpacity style={styles.call_btn} activeOpacity={0.5}>
      <Image source={img} />
    </TouchableOpacity>
  </View>
);

const Card = () => {
  const renderItem = ({ item }) => (
    <Item title={item.phone_number} name={item.last_called} img={item.image} />
  );

  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            See customers that have stopped calling
          </Text>
          <Text style={styles.headerText}>For more than two (2) weeks</Text>
        </View>
        {Contact.map((item) => renderItem({ item }))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginTop: 50,
  },
  headerText: {
    paddingTop: 5,
    fontSize: 17,
    color: "#000",
    fontWeight: "500",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 14,
    color: "#000",
  },
  lastCalled: {
    color: "#C3C3C3",
    fontSize: 14,
  },
  call_btn: {
    borderWidth: 3,
    borderColor: "#61BA15",
    borderRadius: 50,
    padding: 10,
  },
});

export default Card;
