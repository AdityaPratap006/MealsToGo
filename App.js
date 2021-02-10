import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";

export default function App() {
  return (
    <React.Fragment>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.searchContainer}>
          <Text>search</Text>
        </View>
        <View style={styles.listContainer}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    padding: 16,
    backgroundColor: "green",
  },
  listContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
