const request = require("supertest");
const app = require("../app");

describe("GET /api/ping", () => {
  test("respond with 200 status code", async () => {
    const response = await request(app).get("/api/ping");

    expect(response.statusCode).toBe(200);
  });

  test("content-type header is application/json", async () => {
    const response = await request(app).get("/api/ping");

    expect(response.header["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });

  test("response body has success param with value true", async () => {
    const response = await request(app).get("/api/ping");

    expect(response.body.success).toBeDefined();
    expect(response.body.success).toBe(true);
  });
});

describe("GET /api/posts", () => {});