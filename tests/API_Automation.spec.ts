import {test, expect} from '@playwright/test'

test('test api', async ({ request }) => {
  
    const userData = {
        name: 'john doe',
        job : 'software engineer'
    }

    const response = await request.post('https://reqres.in/api/users', {
        data: userData
      });
    
      expect(response.status()).toBe(201);
      
      const responseBody = await response.json();
    
      expect(responseBody).toHaveProperty('id');
      expect(responseBody.id).toBeTruthy();  

      expect(responseBody.name).toBe(userData.name);
      expect(responseBody.job).toBe(userData.job);
    
      console.log('Response Body:', responseBody);

})
    