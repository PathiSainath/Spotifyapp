import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const playlistData = [
  { id: '1', title: 'Mawaa Enthaina', artist: 'Thaman', cover: 'https://images.filmibeat.com/img/popcorn/movie_posters/guntur-kaaram-20230531184011-20092.jpg' },
  { id: '2', title: 'Chuttamalla', artist: 'Anirudh', cover: 'https://www.naasongs.co/wp-content/uploads/2024/08/Devara-2024-Chuttamalle.jpg' },
  { id: '3', title: 'Tum hi ho', artist: 'Arijith Singh', cover: 'https://i.scdn.co/image/ab67616d0000b2736404721c1943d5069f0805f3' },
  { id: '4', title: 'Sajni', artist: 'Arijith Singh', cover: 'https://i.ytimg.com/vi/k3g_WjLCsXM/maxresdefault.jpg' },
  { id: '5', title: 'Tujh mein rab dikhta hai', artist: 'Salim', cover: 'https://a10.gaanacdn.com/gn_img/albums/7rVW1aRWk5/rVW1pY53k5/size_m.webp' },
  { id: '6', title: 'Kathakaadhey', artist: 'Anirudh', cover: 'https://m.media-amazon.com/images/S/pv-target-images/9fffccd050d59f6d72e70740a0b3a8fc3ca835bb81a3d7b0a92d62ccf491ccf9.jpg' },
];

const profilePicUrl = 'https://miro.medium.com/v2/resize:fit:1024/1*noSSQEwHw-E17X6V0E8TLw.png'; 

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.playlistItem}>
      <Image source={{ uri: item.cover }} style={styles.cover} />
      <View style={styles.textContainer}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.artistName}>{item.artist}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="play-circle-outline" size={30} color="black" style={styles.playIcon} />
        <Icon name="ellipsis-vertical" size={24} color="black" style={styles.menuIcon} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.profile}>
          <Image source={{ uri: profilePicUrl }} style={styles.profilePic} />
        </TouchableOpacity>
        <View style={styles.navItems}>
          <View style={styles.navItem}>
            <Text style={styles.navText}>All</Text>
          </View>
          <View style={styles.navItem}>
            <Text style={styles.navText}>Music</Text>
          </View>
          <View style={styles.navItem}>
            <Text style={styles.navText}>Podcasts</Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <FlatList
          data={playlistData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.playlist}
        />
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Icon name="home-outline" size={24} color="black" />
          <Text style={styles.bottomBarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Icon name="search-outline" size={24} color="black" />
          <Text style={styles.bottomBarText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Icon name="library-outline" size={24} color="black" />
          <Text style={styles.bottomBarText}>Your Library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Icon name="albums-outline" size={24} color="black" />
          <Text style={styles.bottomBarText}>Premium</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1ED760',
  },
  profile: {
    marginRight: 20,
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15, 
  },
  navItems: {
    flexDirection: 'row',
    flex: 1,
  },
  navItem: {
    backgroundColor: '#ddd',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 16,
    color: '#333',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  playlist: {
    paddingBottom: 20, 
  },
  playlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, 
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    justifyContent: 'space-between', 
  },
  cover: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1, 
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playIcon: {
    marginRight: 10, 
  },
  menuIcon: {
    marginLeft: 5, 
  },
  songTitle: {
    fontSize: 18,
    color: '#333',
  },
  artistName: {
    fontSize: 14,
    color: '#666',
    marginTop: 5, 
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  bottomBarItem: {
    alignItems: 'center',
  },
  bottomBarText: {
    fontSize: 12,
    color: '#333',
    marginTop: 4, 
  },
});

export default App;
