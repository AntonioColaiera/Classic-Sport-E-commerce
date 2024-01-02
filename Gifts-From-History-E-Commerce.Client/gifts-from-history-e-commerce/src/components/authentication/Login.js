export const Login = async (email, password) => {
  try {
    const response = await fetch("http://localhost:8080/customers/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      // You can return any additional data obtained from the backend, if necessary
      return data;
    } else {
      throw new Error("Authentication failed");
    }
  } catch (error) {
    throw new Error("An error occurred during authentication");
  }
};
