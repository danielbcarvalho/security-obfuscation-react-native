import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Section = ({children, title}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: '#FFF',
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: '#FFF',
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const backgroundStyle = {
    backgroundColor: '#200',
    flex: 1,
  };

  const apiKeyGoogle = '81B155D4-E153-4CB7-88BD-B8BDCA96662';
  const capivara = {
    nome: 'Daniel',
    pin: 'capivara1234*'
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <Text
        style={{
          color: '#FFF',
          fontSize: 40,
          textAlign: 'center',
        }}>
        Security MB
      </Text>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <Section title="NOME">{capivara.nome}</Section>
          <Section title="API Key">{apiKeyGoogle}</Section>
          <Section title="PIN">{capivara.pin}</Section>
          <Section title="Business Rules">
            Should do something or other thing.
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
