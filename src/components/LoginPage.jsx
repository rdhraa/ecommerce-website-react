import React, { useState } from "react";
import './loginpage.css';
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    if (email === "test11@gmail.com" && password === "pass123") {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.ok) {
          const data = await response.json();
          console.log(data); 
          setProducts(data);
          setIsLoggedIn(true);
        } else {
          setMessage("Login successful, but failed to fetch products from the API.");
        }
      } catch (error) {
        setMessage("Login successful, but an error occurred while fetching products.");
      }
    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <>
          <h2>Login Page</h2>
          <div className="input-grp">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="input-grp">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
          {message && (
            <p className={message.includes("successful") ? "success-message" : "error-message"}>
              {message}
            </p>
          )}
        </>
      ) : (
        <div className="products_container">
          {products.map((product) => (
            <div className="product-cd" key={product.id} >
              <img src={product.image} alt={product.title} className="product-img" />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LoginPage;