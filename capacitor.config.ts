import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: '../LeChatVertApp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    LiveUpdates: {
      appId: '417dcb76',
      channel: 'Production',
      autoUpdateMethod: 'background'
    }
  }
};

export default config;
