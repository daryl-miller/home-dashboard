import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";

const bashUrl = 'http://192.168.0.181';

const plexUrl = `${bashUrl}:32400/`;
const qbittorrentUrl = `${bashUrl}:8090/`;
const jackettUrl = `${bashUrl}:9117/`;
const radarrUrl = `${bashUrl}:7878/`;
const sonarrUrl = `${bashUrl}:8989/`;
const piholeUrl = `${bashUrl}:8091/admin`;

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