import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";

const baseUrl = 'http://192.168.0.181';

const plexUrl = `${baseUrl}:32400/`;
const ombiUrl = `${baseUrl}:3579/`
const qbittorrentUrl = `${baseUrl}:8090/`;
const jackettUrl = `${baseUrl}:9117/`;
const radarrUrl = `${baseUrl}:7878/`;
const sonarrUrl = `${baseUrl}:8989/`;
const piholeUrl = `${baseUrl}:8091/admin`;
const grafanaUrl = `${baseUrl}:3030`
const prometheusUrl = `${baseUrl}:9090`


const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const App = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={plexUrl}>Plex</OpenURLButton>
      <OpenURLButton url={ombiUrl}>ombi</OpenURLButton>
      <OpenURLButton url={grafanaUrl}>grafana</OpenURLButton>
      <OpenURLButton url={prometheusUrl}>prometheus</OpenURLButton>
      <OpenURLButton url={jackettUrl}>jackett</OpenURLButton>
      <OpenURLButton url={radarrUrl}>radarr</OpenURLButton>
      <OpenURLButton url={sonarrUrl}>sonarr</OpenURLButton>
      <OpenURLButton url={piholeUrl}>pihole</OpenURLButton>
      <OpenURLButton url={qbittorrentUrl}>qbittorrent</OpenURLButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { display:'flex', flex: 1, justifyContent: "space-evenly", alignSelf: 'center', textAlign: 'center', flexDirection: 'column'}, div: {
  }
});

export default App;