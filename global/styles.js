import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  sectionContainer: {
    marginLeft: 15,
  },
  background: {
    marginTop: 90,
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  backgroundQuestionScreen: {
    marginTop: 100,
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    flex: 1,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Top: {
    height: 200,
    backgroundColor: '#21b1ae',
    flex: 1,
    marginHorizontal: 1,
    paddingHorizontal: 1,
  },
  TopQuestionScreen: {
    height: 200,
    backgroundColor: '#21b1ae',
    marginHorizontal: 1,
    paddingHorizontal: 1,
  },
  TopTalkScreen: {
    height: 330,
    backgroundColor: '#21b1ae',
    flex: 1,
    marginHorizontal: 1,
    paddingHorizontal: 1,
  },
  TopContentScreen: {
    height: 200,
    backgroundColor: '#21b1ae',
    flex: 1,
    marginHorizontal: 1,
    paddingHorizontal: 1,
  },
  Logo: {
    alignSelf: 'flex-end',
    height: 40,
    width: 123,
    position: 'absolute',
    margin: 20,
    right: 3,
  },
  signInText: {
    alignSelf: 'flex-start',
    elevation: 1,
    fontSize: 15,
    color: 'white',
    marginTop: 25,
    marginStart: 10,
    height: 30,
  },
  questionText: {
    alignSelf: 'flex-end',
    elevation: 1,
    fontSize: 16,
    color: 'white',
    margin: 25,
    height: 30,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    color: '#21b1ae',
    marginHorizontal: 15,
  },
  WomanPic: {
    alignSelf: 'center',
    width: 370,
    height: 200,
    marginTop: 80,
    elevation: 1,
    borderRadius: 25,
    position: 'absolute',
  },
  WomanPicTalkScreen: {
    alignSelf: 'center',
    width: 370,
    height: 250,
    marginTop: 110,
    elevation: 1,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: 'absolute',
  },
  WomanPicContentScreen: {
    alignSelf: 'center',
    width: 370,
    height: 200,
    marginTop: 80,
    elevation: 1,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: 'absolute',
  },

  active: {
    color: '#21b1ae',
  },
  inActive: {
    color: '#b7bcb9',
  },
  talkIconText: {
    alignSelf: 'flex-end',
    position: 'absolute',
    marginStart: 130,
  },
  contentsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  infoContainer: {
    padding: 16,
  },
});
