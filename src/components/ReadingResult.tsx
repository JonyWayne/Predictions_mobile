import { useState, useEffect, useRef, FC } from 'react';
import { StyleSheet, View, Image, Animated, Dimensions, Text } from 'react-native';
import TypeWriter from 'react-native-typewriter';

import { TarotReading } from '@/shared/types';
import { TEST_TEXT, TEST_CARDS } from '@/app/(tabs)/const';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const ReadingResult: FC<TarotReading> = ({ cards, prediction }) => {
  // console.log(TEST_TEXT);

  const getImageUri = (base64Data: string) => `data:image/jpeg;base64,${base64Data}`;

  return (
    <View style={styles.container}>
      {/* Контейнер для карт */}
      <View style={styles.cardsContainer}>
        {TEST_CARDS.map((card) => (
          <View key={card.id} style={styles.cardContainer}>
            <Image source={{ uri: getImageUri(card.imageData) }} style={styles.cardImage} />
          </View>
        ))}
      </View>
      {/* <Animated.Text style={[styles.predictionText, { opacity: animatedOpacity }]}>
        {displayedText}
      </Animated.Text> */}
      <Animated.Text style={styles.textContainer}>
        <Animated.ScrollView>
          <Text style={styles.text} selectable={true}>
            {TEST_TEXT}
          </Text>
          {/* <TypeWriter
            typing={1}
            style={styles.text}
            delay={2}
            selectable={true}
            minDelay={1}
            maxDelay={1}
            fixed
          >
            {TEST_TEXT}
          </TypeWriter> */}
        </Animated.ScrollView>
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: SCREEN_HEIGHT * 0.01,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 200,
    borderWidth: 2,
    borderColor: '#34495e',
    borderRadius: 8,
    backgroundColor: 'black',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  text: {
    fontSize: 18,
    color: '#ccc',
    textAlign: 'center',
    fontFamily: 'Cinzel_ru',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
});
