import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TranslateService {
  async translateText(text: string): Promise<any> {
    const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
    
    const headers = {
      'Content-Type': 'application/json',
      'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
      'x-rapidapi-key': '4bb1699df5mshc4fd470e5f88fa9p1efd35jsn7af3d9f5913f', 
    };

    const data = {
      from: 'auto',  
      to: 'en',  
      text,
    };

    try {
      const response = await axios.post(url, data, { headers });
      
     
      console.log('API Response:', response.data);
      
      return response.data;  
    } catch (error) {
      console.error('Error during translation:', error);
      throw new Error('Failed to translate text');
    }
  }
}
