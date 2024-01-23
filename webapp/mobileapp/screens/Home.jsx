import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Badge } from "react-native-elements"; // Import the Icon and Badge components
import Icon from "react-native-vector-icons/FontAwesome"; // Import the cart icon
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$19.99",
    imageUrl: "https://example.com/product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$29.99",
    imageUrl: "https://example.com/product2.jpg",
  },
  // Add more products as needed
];

const Home = () => {
  const [cart, setCart] = useState([]); // State to manage the cart
  const [products, setProducts] = useState([]); // State to manage the products
  const navigation = useNavigation(); // Get the navigation prop from the useNavigation hook
  const getProducts = async () => {
    try {
      const response = await fetch(
        "https://pleasing-randomly-tarpon.ngrok-free.app/api/v1/products"
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  });

  const addToCart = (product) => {
    setCart([...cart, product]); // Add the product to the cart
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to CartRover Store</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart", { cartItems: cart })}
        >
          <Icon name="shopping-cart" size={24} color="#007bff" />
          <Badge
            value={cart.length}
            status="primary"
            containerStyle={{ position: "absolute", top: -4, right: -4 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.productContainer}>
        {products.map((product) => (
          <View key={product._id} style={styles.productItem}>
            <Image
              source={{ uri: product.images[0] }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}> $ {product.price}</Text>
            <TouchableOpacity
              onPress={() => addToCart(product)}
              style={styles.addToCartButton}
            >
              <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  productContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  productItem: {
    width: "45%",
    margin: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 8,
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  productName: {
    fontSize: 16,
    marginTop: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
    marginTop: 4,
  },
  addToCartButton: {
    backgroundColor: "#007bff",
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  addToCartButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default Home;
