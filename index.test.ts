import { expect, test } from "bun:test";
import { diamond } from "./lib";

test("1 diamond", () => {
  expect(diamond(1)).toBe("         1\n");
});

test("2 diamonds", () => {
    expect(diamond(2)).toBe(`
     1
    121
     1`);
  });
  