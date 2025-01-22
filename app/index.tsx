import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Index() {
  const handleSignIn = () => {
    // Handle sign in
  };

  const handleSignOut = () => {
    // Handle sign out
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  signInButton: {
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'green',
    padding: 30,
    margin: 6,
    borderRadius: 6,
  },
  signOutButton: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'red',
    padding: 30,
    margin: 6,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
