import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { t } from '@/localization/i18n'; // Import the translation function
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" tx="welcome" />
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" tx="home.step1.title" />
        <ThemedText>
          {t('home.step1.editInstruction', { fileName: '' }).split('{fileName}')[0]}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>
          {t('home.step1.editInstruction', { fileName: '' }).split('{fileName}')[1]}
          {' '}
          {t('home.step1.press')}{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          {t('home.step1.openDevTools')}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" tx="home.step2.title" />
        <ThemedText tx="home.step2.exploreInstruction" />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" tx="home.step3.title" />
        <ThemedText>
          {t('home.step3.runCommand')}{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{' '}
          {t('home.step3.getFresh')}{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText>{' '}
          {t('home.step3.moveCurrent')}{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText>{' '}
          {t('home.step3.moveTo')}{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
