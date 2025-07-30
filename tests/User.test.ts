import { User } from "../src/components/User";

describe("User component", () => {
  it("creates user with name and email", () => {
    const user = new User({ name: "Gal", email: "gal@example.com" });
    expect(user.name).toBe("Gal");
    expect(user.email).toBe("gal@example.com");
  });

  it("allows password to be set", () => {
    const user = new User({ name: "Bob", email: "bob@example.com" });
    user.setPassword("secret");
    expect(user.validatePassword("secret")).toBe(true);
  });

  it("validates password correctly", () => {
    const user = new User({ name: "Carol", email: "carol@example.com" });
    user.setPassword("mypassword");
    expect(user.validatePassword("mypassword")).toBe(true);
    expect(user.validatePassword("wrong")).toBe(false);
  });
});
