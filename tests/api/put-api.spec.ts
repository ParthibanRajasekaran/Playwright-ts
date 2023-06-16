import { test, expect } from '@playwright/test';

interface CreateUserResponse {
  name: string;
  job: string;
  updatedAt: string;
}

test.describe.parallel("API testing", () => {
  const baseURL = 'https://reqres.in/api';

  test("Create user", async ({ request }) => {
    const response = await request.put(`${baseURL}/users/2`, { data: {
        "name": "morpheus",
        "job": "zion resident"
    }});

    expect(response.status()).toBe(200);

    const responseBody: CreateUserResponse = await response.json();
    console.log(responseBody);

    // Assertions for create user response
    expect(responseBody.name).toBe("morpheus");
    expect(responseBody.job).toBe("zion resident");
    expect(responseBody.updatedAt).toBeTruthy();
  });  
});