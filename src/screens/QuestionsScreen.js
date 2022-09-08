import React, {useEffect, useState} from 'react';
import ReactNative, {
  FlatList,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../../global/styles';
import Icon from 'react-native-vector-icons/Ionicons';
const {CustomModule} = ReactNative.NativeModules;
import AnswerDetails from './AnswerDetails';
import moment from 'moment';

const QuestionsScreen = ({navigation}) => {
  let [questions, setQuestions] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');

  async function getResponse(questions) {
    try {
      await CustomModule.converterFun(
        'https://api-stg.altibb.com/v1/',
        page,
        keyword,
        res => {
          const JSONObject = JSON.parse(res);
          JSONObject.data.questions.map(item => {
            setQuestions(questions => [
              ...questions,
              {
                body: item.body,
                question_id: item.question_id,
                sub_category_name: item.subCategory.sub_category_name,
                member_age: item.member.member_age,
                member_gender: item.member.gender,
                avatar: item.answer.location.avatar,
                name: item.answer.location.name,
                date_added: item.answer.location.date_added,
                answers_count: item.answers_count,
              },
            ]);
          });
        },
      );
    } catch (e) {
      console.log('caught error', e);
    }
  }
  useEffect(() => {
    getResponse();
  }, [page, keyword]);

  return (
    <View style={{paddingBottom: 70}}>
      <View style={styles.TopQuestionScreen}>
        <Text style={styles.questionText}>SignIn</Text>
        <Icon
          name="language"
          size={25}
          color="white"
          style={{
            position: 'absolute',
            alignSelf: 'flex-end',
            elevation: 1,
            color: 'white',
            margin: 25,
            height: 35,
            right: 50,
          }}
        />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
            alignSelf: 'flex-start',
            position: 'absolute',
            margin: 20,
            color: 'white',
          }}>
          Question & Answers
        </Text>
      </View>

      <Image style={styles.WomanPic} source={require('../Image/doctor.jpg')} />
      <Text
        style={{
          position: 'absolute',
          fontWeight: 'bold',
          fontSize: 20,
          marginTop: 105,
          marginStart: 23,
          color: 'black',
        }}>
        Ger your answer for free
      </Text>
      <Text
        style={{
          position: 'absolute',
          fontSize: 14,
          width: 200,
          marginTop: 135,
          marginStart: 23,
        }}>
        A group of specialized doctors to answer your inquiry within 48 hours
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#21b1ae',
          borderRadius: 25,
          position: 'absolute',
          marginTop: 200,
          width: 160,
          height: 45,
          marginStart: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            position: 'absolute',
            fontWeight: 'bold',
            fontSize: 14,
            marginStart: 20,
            color: 'white',
          }}>
          Enter Your Question
        </Text>
      </TouchableOpacity>
      <View style={styles.backgroundQuestionScreen}>
        <Icon name="search" style={styles.iconStyle} />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={keyword}
          placeholder="Search in questions and answers"
          onChangeText={newKeyword => {
            setQuestions([]);
            setKeyword(newKeyword);
          }}
          defaultValue={keyword}
        />
      </View>
      <View>
        <FlatList
          extraData={questions}
          listHeaderComponent={QuestionsScreen}
          data={questions}
          onEndReached={() => setPage(page + 1)}
          onEndReachedThreshold={0.5}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderRadius: 20,
                margin: 10,
                padding: 15,
              }}
              onPress={() =>
                navigation.navigate('AnswerDetails', {
                  question_id: item.question_id,
                })
              }>
              <View>
                <Text>
                  From:
                  <Text style={{color: '#21b1ae', fontWeight: 'bold'}}>
                    {'  ' + item.member_gender + ' '}
                  </Text>
                  <Text style={{color: '#21b1ae', fontWeight: 'bold'}}>
                    {item.member_age +
                      ' year' +
                      '                                   '}
                  </Text>
                  <Text style={{alignSelf: 'flex-end', fontWeight: 'bold'}}>
                    {item.sub_category_name}
                  </Text>
                </Text>
                <Text
                  style={{
                    marginTop: 20,
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: 'black',
                    flexDirection: 'row-reverse',
                    marginBottom: 20,
                    textAlign: 'right',
                  }}>
                  {item.body}
                </Text>
                <View
                  style={{
                    borderBottomColor: '#D3D3D3',
                    borderBottomWidth: 1,
                    margin: 10,
                  }}
                />
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{
                      width: 40,
                      margin: 10,
                      height: 40,
                      alignSelf: 'flex-start',
                    }}
                    source={{uri: item.avatar}}
                  />
                  <View>
                    <Text style={{marginStart: 5}}> Answered The Question</Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 18,
                        width: 100,
                        marginStart: 5,
                        alignSelf: 'flex-start',
                      }}>
                      {item.name}
                    </Text>
                    <Text style={{alignSelf: 'flex-start', marginStart: 5}}>
                      {moment
                        .utc(item.date_added)
                        .local()
                        .startOf('years')
                        .endOf('minutes')
                        .fromNow()}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 40,
                      marginEnd: 30,
                    }}>
                    <Text
                      style={{
                        color: '#21b1ae',
                        marginTop: 5,
                        fontWeight: 'bold',
                      }}>
                      Doctor's Answers
                    </Text>
                    <Icon
                      name="ios-chevron-forward-sharp"
                      size={30}
                      color="#21b1ae"
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.questionId}
        />
      </View>
    </View>
  );
};
export default QuestionsScreen;
