# Lalita Sahasranama App 🕉️

A React Native Expo app for reading and learning the sacred Lalita Sahasranama with authentication, progress tracking, and spiritual practice features.

## Features ✨

- **Authentication System**: Secure login/signup with form validation
- **Sacred Text Reading**: Browse through Lalita Sahasranama verses
- **Progress Tracking**: Monitor your reading progress and streaks
- **User Profile**: Manage account settings and preferences
- **Responsive Design**: Works on iOS, Android, and Web
- **Dark/Light Theme**: Automatic theme switching

## Quick Start 🚀

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone and Setup**
   ```bash
   # If you have the files, just run:
   npm install
   
   # Install Expo dependencies
   npx expo install expo-router expo-font expo-splash-screen expo-status-bar
   npx expo install @react-navigation/native react-native-screens react-native-safe-area-context
   npx expo install @react-native-async-storage/async-storage
   ```

2. **Add Required Assets**
   
   Create these directories and add assets:
   ```
   assets/
   ├── fonts/
   │   └── SpaceMono-Regular.ttf
   ├── images/
   │   ├── icon.png (512x512)
   │   ├── splash.png (1284x2778)
   │   ├── adaptive-icon.png (1024x1024)
   │   └── favicon.png (48x48)
   ```

   Download SpaceMono font from [Google Fonts](https://fonts.google.com/specimen/Space+Mono)

3. **Start Development Server**
   ```bash
   npx expo start
   ```

## File Structure 📁

```
lalita-sahasranama-app/
├── app/                          # App Router structure
│   ├── (auth)/                   # Authentication screens
│   │   ├── _layout.tsx          # Auth layout
│   │   ├── login.tsx            # Login screen
│   │   └── signup.tsx           # Signup screen
│   ├── (tabs)/                   # Main app tabs
│   │   ├── _layout.tsx          # Tabs layout
│   │   ├── index.tsx            # Home screen
│   │   ├── sahasranama.tsx      # Reading screen
│   │   ├── progress.tsx         # Progress tracking
│   │   └── profile.tsx          # User profile
│   ├── _layout.tsx              # Root layout
│   └── +not-found.tsx           # 404 screen
├── components/                   # Reusable components
│   ├── ui/                      # UI components
│   │   └── index.tsx            # Button, TextInput, etc.
│   ├── ThemedText.tsx           # Themed text component
│   └── ThemedView.tsx           # Themed view component
├── context/                      # React contexts
│   └── AuthContext.tsx          # Authentication context
├── services/                     # API services
│   └── auth.service.ts          # Authentication service
├── utils/                        # Utility functions
│   ├── validation.ts            # Form validation
│   └── storage.ts               # AsyncStorage helpers
├── types/                        # TypeScript types
│   ├── auth.ts                  # Auth related types
│   └── navigation.ts            # Navigation types
├── constants/                    # App constants
│   └── Colors.ts                # Color scheme
├── hooks/                        # Custom hooks
│   ├── useAuth.ts               # Auth hook
│   ├── useColorScheme.ts        # Theme hook
│   └── useThemeColor.ts         # Color hook
├── app.json                      # Expo configuration
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
└── metro.config.js               # Metro bundler config
```

## Key Features Explained 📚

### Authentication System
- **Secure Login/Signup**: Form validation with error handling
- **Demo Credentials**: `user@example.com` / `password123`
- **Persistent Session**: Auto-login with stored tokens
- **Protected Routes**: Automatic navigation based on auth state

### Sacred Text Reader
- **Verse Navigation**: Previous/Next verse controls
- **Sanskrit Display**: Original text with transliteration
- **Meaning Toggle**: Show/hide English translations
- **Audio Support**: Ready for pronunciation playback

### Progress Tracking
- **Reading Statistics**: Verses completed, streaks, session time
- **Visual Progress**: Progress bars and completion percentage
- **Activity Timeline**: Recent reading activity
- **Achievements**: Streak tracking and milestones

### User Profile
- **Account Management**: View and edit profile information
- **Settings**: Language, notifications, audio preferences
- **App Information**: Version, privacy policy, terms

## Configuration ⚙️

### Environment Variables
Create a `.env` file:
```env
API_BASE_URL=https://your-api-url.com/api
API_TIMEOUT=10000
APP_NAME=Lalita Sahasranama
APP_VERSION=1.0.0
DEBUG=true
```

### Customization
- **Colors**: Edit `constants/Colors.ts`
- **Verses**: Add more verses in `app/(tabs)/sahasranama.tsx`
- **API**: Replace mock service in `services/auth.service.ts`
- **Styling**: Customize components in `components/ui/`

## Development Commands 🛠️

```bash
# Start development server
npx expo start

# Run on specific platform
npx expo start --ios
npx expo start --android
npx expo start --web

# Clear cache
npx expo start --clear

# Type checking
npx tsc --noEmit

# Build for production
npx expo build
```

## Troubleshooting 🔧

### Common Issues

1. **TypeScript Errors**
   - Ensure all paths in `tsconfig.json` are correct
   - Check that `metro.config.js` has proper alias configuration
   - Verify all imports use correct paths

2. **Navigation Issues**
   - Make sure all screen files are in correct directories
   - Check that `_layout.tsx` files are properly configured
   - Verify authentication flow redirects

3. **Asset Loading**
   - Ensure fonts are in `assets/fonts/` directory
   - Check that image files exist in `assets/images/`
   - Verify asset bundle patterns in `app.json`

4. **Dependencies**
   - Run `npx expo install --fix` to fix version conflicts
   - Clear node_modules and reinstall if needed
   - Check Expo SDK compatibility

### Demo Login
For testing, use these credentials:
- **Email**: `user@example.com`
- **Password**: `password123`

## Deployment 🚀

### Building for Production

1. **Configure app.json**
   - Update bundle identifiers
   - Set proper app names and descriptions
   - Configure splash screen and icons

2. **Build Commands**
   ```bash
   # Build for all platforms
   npx expo build

   # Build for specific platform
   npx expo build:ios
   npx expo build:android
   npx expo build:web
   ```

3. **Publishing**
   ```bash
   # Publish updates
   npx expo publish

   # Submit to app stores
   npx expo submit
   ```

## Contributing 🤝

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.

## Support 💬

For support, please:
- Check the troubleshooting section
- Review Expo documentation
- Create an issue with detailed reproduction steps

---

**Note**: This is a spiritual app intended for educational and devotional purposes. The Lalita Sahasranama is a sacred text, please treat it with appropriate reverence.

🕉️ May your practice bring peace and divine blessings! 🙏
