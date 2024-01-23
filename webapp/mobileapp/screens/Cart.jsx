import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const Cart = ({ route }) => {
  const { cartItems } = route.params;
  const [totalBill, setTotalBill] = useState(0);

  // Calculate the total bill

  const getBill = () => {
    let total = 0;
    cartItems.map((item) => {
      total += item.price;
    });
    setTotalBill(total);
  };

  useEffect(() => {
    // console.log(cartItems);r
    getBill();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCart}>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Image
                  source={{ uri: item.images[0] }}
                  style={styles.productImage}
                />
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>$ {item.price}</Text>
                </View>
              </View>
            )}
          />
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </TouchableOpacity>
          <Text style={styles.totalBill}>Total Bill: ${totalBill}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  emptyCart: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
  },
  productPrice: {
    fontSize: 16,
    color: "#007bff",
    marginTop: 4,
  },
  checkoutButton: {
    backgroundColor: "#007bff",
    padding: 16,
    borderRadius: 4,
    marginVertical: 16,
  },
  checkoutButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  totalBill: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Cart;
