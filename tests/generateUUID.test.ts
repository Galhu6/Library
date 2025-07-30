import { generateUUID } from "../src/utils/generateUUID";

describe("generateUUID", () => {
  it("generates unique ids", () => {
    const id1 = generateUUID();
    const id2 = generateUUID();
    expect(id1).not.toBe(id2);
    expect(typeof id1).toBe("string");
  });
});
