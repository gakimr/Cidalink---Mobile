import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function FeedScreen() {
  return (
    <View style={styles.container}>

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={22} color="#333" />

        <Text style={styles.logo}>CidaLink</Text>

        <Ionicons name="person-circle" size={30} color="#555" />
      </View>

      {/* CONTEÚDO */}
      <View style={styles.content}>

        <Text style={styles.title}>Feed</Text>

        <Text style={styles.text}>
          Aqui ficarão as publicações dos cidadãos.
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },

  logo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2e7d32",
  },

  content: {
    flex: 1,
    padding: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    color: "#666",
  },

});