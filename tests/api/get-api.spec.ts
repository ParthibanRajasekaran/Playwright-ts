import { test, expect } from '@playwright/test';

interface UserResponse {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  support: {
    url: string;
    text: string;
  };
}

test.describe.parallel("API testing", () => {
  const baseURL = 'https://reqres.in/api';

  test("Get valid user", async ({ request }) => {
    const response = await request.get(`${baseURL}/users/2`);
    expect(response.status()).toBe(200);

    const responseBody: UserResponse = JSON.parse(await response.text());
    console.log(responseBody);

    // Assertions for valid user response
    expect(responseBody.data.id).toBe(2);
    expect(responseBody.data.email).toBe('janet.weaver@reqres.in');
    expect(responseBody.data.first_name).toBe('Janet');
    expect(responseBody.data.last_name).toBe('Weaver');
    expect(responseBody.support.text).toBe('To keep ReqRes free, contributions towards server costs are appreciated!');
  });

  test("Get invalid user", async ({ request }) => {
    const response = await request.get(`${baseURL}/users/xxx`);
    expect(response.status()).toBe(404);
  });
});
