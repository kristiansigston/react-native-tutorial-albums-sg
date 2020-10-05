import React from 'react';
import {StyleSheet, Text, View, Image, Linking} from 'react-native'
import Card from '../card'
import CardSection from '../cardSection'
import Button from '../Button'


export const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image, url} = album
  const {imageThumbnailStyle, headerContentStyle, imageThumbnailContainerStyle, headerTextStyle, imageStyle} = styles
  return (
    <Card>
      <CardSection>
        <View style={imageThumbnailContainerStyle}>
          <Image style={imageThumbnailStyle} source={{uri: thumbnail_image}} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle} key={title}>{title}</Text>
          <Text key={artist}>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{uri: image}} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)} >
          Buy now
        </Button>
      </CardSection>
    </Card >
  )
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18,
  },
  imageThumbnailStyle: {
    height: 50,
    width: 50,
  },
  imageStyle: {
    height: 300,
    width: '100%'
  },
  imageThumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

})

export default AlbumDetail
