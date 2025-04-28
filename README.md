# Welcome to your Expo + Supabase app 👋

This is an [Expo](https://expo.dev) project with [Supabase](https://supabase.com) integration, created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Set up Supabase
   - Create a `.env` file from the provided `.env.example`
   - Add your Supabase URL and anon key
   - Make sure to add `.env` to your `.gitignore`

3. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a:

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Supabase Features

The project includes:
- Supabase client configuration in `constants/supabase.ts`
- Secure token storage using `expo-secure-store`
- Environment variable setup for Supabase credentials

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo and Supabase, look at the following resources:

- [Expo documentation](https://docs.expo.dev/)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Expo + Supabase Guide](https://supabase.com/docs/guides/getting-started/expo)

## Join the community

Join our community of developers creating universal apps:

- [Expo on GitHub](https://github.com/expo/expo)
- [Supabase on GitHub](https://github.com/supabase/supabase)
- [Discord community](https://chat.expo.dev)
