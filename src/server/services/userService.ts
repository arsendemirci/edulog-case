export const userService = {
  authenticate,
};

function authenticate(username: string, password: string) {
  if (username !== "admin" && password !== "admin") {
    return null;
  }

  const user = {
    id: "9001",
    name: "Arsen Demirci",
    email: "admin@example.com",
  };

  return user;
}
