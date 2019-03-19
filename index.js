//  import to help us to create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a compoent 

const App = () => (
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);


// render a component 
AppRegistry.registerComponent('albums', () => App);
