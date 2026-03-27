import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f0f0f0',
  },
  container: {
    gap: 16,
    padding: 16,
  },
  card: {
    borderRadius: 20,
    padding: 20,
  },

  containerImg: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  typesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  type: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})