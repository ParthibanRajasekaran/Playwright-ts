import { test, expect } from '@playwright/test';

interface CreateUserResponse {
  name: string;
  job: string;
  id: string;
  createdAt: string;
}

test.describe.parallel("API testing", () => {
  const baseURL = 'https://reqres.in/api';

  test("Create user", async ({ request }) => {
    const response = await request.post(`${baseURL}/users`, { data: {
        name: "morpheus",
        job: "leader" 
    }});

    expect(response.status()).toBe(201);

    const responseBody: CreateUserResponse = await response.json();
    console.log(responseBody);

    // Assertions for create user response
    expect(responseBody.name).toBe("morpheus");
    expect(responseBody.job).toBe("leader");
    expect(responseBody.id).toBeDefined();
    expect(responseBody.createdAt).toBeDefined();
  });  

  test("Create user with invalid request body", async ({ request }) => {
    const response = await request.post(`${baseURL}/register`, { data: {
        "email": "sydney@fife"
    }});

    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    console.log(responseBody);
  }); 
});
