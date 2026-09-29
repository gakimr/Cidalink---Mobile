import { StyleSheet, View, Image, Text } from "react-native";
import { useRouter } from "expo-router";
import MapView from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

export default function MapaScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -21.4053,
          longitude: -48.5124,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      />
      <View style={styles.header}>
        <Ionicons name="search-outline" size={24} color="#333" />
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/LogoCida.png")}
            style={styles.logoIcon}
          />
        </View>
        <Ionicons name="person-circle-outline" size={32} color="#333" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  header: {
    position: "absolute",
    top: 50,
    left: 16,
    right: 16,
    height: 56,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoIcon: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginRight: 6,
  },
});
