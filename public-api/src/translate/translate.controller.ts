import { Controller, Get, Query } from '@nestjs/common';
import { TranslateService } from './translate.service';

@Controller('translate')
export class TranslateController {
  constructor(private readonly translateService: TranslateService) {}

  @Get()
  async translate(@Query('text') text: string) {
    if (!text) {
      return { error: 'Text query parameter is required' };
    }

    try {
      const translated = await this.translateService.translateText(text);
      return { translatedText: translated.translatedText };  
    } catch (error) {
      console.error('Error during translation:', error);
      return { error: 'Failed to translate text' };
    }
  }
}
