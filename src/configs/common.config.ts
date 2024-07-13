import { registerAs } from '@nestjs/config';

export default registerAs('common', () => ({
  environment: process.env.ENVIRONMENT || 'production',
  port: parseInt(process.env.APP_PORT, 10) || 3000,
  i18n: {
    fallbackLanguage: process.env.I18N_FALLBACK_LANGUAGE,
  },
}));
