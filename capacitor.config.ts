import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'newapp',
  backgroundColor: "#ffffffff",
  loggingBehavior: "none",
  bundledWebRuntime: false,
  webDir: 'www',
	plugins: {
		SplashScreen: {
			launchShowDuration: 1500,
			launchAutoHide: false,
			launchFadeOutDuration: 500,
			backgroundColor: "#ffffffff",
			splashFullScreen: false,
			splashImmersive: false,
			layoutName: "launch_screen",
		},
		LocalNotifications: {
		  smallIcon: 'ic_stat_icon_config_sample',
		  iconColor: '#488AFF',
		  sound: 'beep.wav'
		},
		PushNotifications: {
		  presentationOptions: [
			"badge",
			"sound",
			"alert"
		  ]
		}
	},
	android: {
		minWebViewVersion: 55,
		allowMixedContent: true
	},
	server: {
	  cleartext: true,
	  androidScheme: "https"
	}
};

export default config;
