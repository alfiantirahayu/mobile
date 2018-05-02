import React from 'react';
import { View} from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';
// import CardSection from './components/CardSection';

const App = () => {
  return (
    <View>
      <Header headerText={'Instagram'}/>
      <AlbumList />
    </View>
  );
};

export default App;