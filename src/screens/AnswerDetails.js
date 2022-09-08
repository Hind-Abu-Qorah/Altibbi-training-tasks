import React, {useEffect, useState} from 'react';
import ReactNative, {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
const {CustomModule} = ReactNative.NativeModules;
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AnswerDetails = ({route, navigation}) => {
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState({});
  const questionId = route.params.question_id;
  async function getResponse() {
    try {
      await CustomModule.convertorFunA(
        'https://api-stg.altibb.com/v1/',
        questionId,
        res => {
          const JSONObject = JSON.parse(res);
          setQuestion({
            questionBody: JSONObject.data.question.questionBody,
            age: JSONObject.data.question.age,
            gender: JSONObject.data.question.gender,
            title: JSONObject.data.question.title,
            numOfAnswer: JSONObject.data.question.numOfAnswer,
            questionSubCategoryName:
              JSONObject.data.question.questionSubCategoryName,
            answer: JSONObject.data.question.answers.map(item => {
              setAnswers([
                {
                  answerBody: item.answerBody,
                  arabicName: item.doctor.arabicName,
                  specialty: item.doctor.specialty,
                  locationId: item.doctor.locationId,
                  imageUrl: item.doctor.imageUrl,
                  country: item.doctor.country,
                },
              ]);
            }),
          });
        },
      );
    } catch (e) {
      console.log('caught error', e);
    }
  }
  useEffect(() => {
    getResponse();
  }, [questionId]);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.questionContainer}>
        <View style={styles.fromContainer}>
          <Text style={styles.fromText}>From:</Text>
          <Text style={styles.memberGenderText}>{question.gender}</Text>
          <Text style={styles.memberAgeText}>{question.age + 'years'}</Text>
          <Text style={styles.questionCategory}>
            {question.questionSubCategoryName}
          </Text>
        </View>

        <Text style={styles.questionTitle}>{question.title}</Text>
        <Text style={styles.questionBody}>{question.questionBody}</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.answersContainer}>
        <View style={styles.answersTop}>
          <Text style={styles.answerCountText}>
            Answers Count:{question.numOfAnswer}
          </Text>
          <View style={styles.iconsView}>
            <Text style={styles.shareQuestionText}>share question</Text>
            <Icon
              name="logo-whatsapp"
              size={30}
              color="green"
              style={styles.iconStyle}
            />
            <FontAwesome name="share-square-o" size={30} color="gray" />
          </View>
        </View>
        <View style={styles.lineStyle} />
        {answers && answers.length > 0 ? (
          <View>
            <View style={styles.doctorContainer}>
              <Image
                style={styles.doctorImage}
                source={{uri: answers[0].imageUrl}}
              />
              <View style={styles.doctorInformation}>
                <Text style={styles.doctorName}>{answers[0].arabicName}</Text>
                <Text style={styles.doctorSpecialty}>
                  {answers[0].specialty}
                </Text>
                <Text style={styles.doctorCountry}>{answers[0].country}</Text>
                <Text style={styles.answerBody}>{answers[0].answerBody}</Text>
              </View>
            </View>
          </View>
        ) : (
          <ActivityIndicator />
        )}
      </View>
      <View style={styles.thanksContainer}>
        <Text style={styles.helpfulText}>was this information Helpful?</Text>
        <TouchableOpacity style={styles.TouchableOpacity}>
          <AntDesign name="like1" size={30} color="#21b1ae" />
          <Text style={styles.thanksText}>Thanks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {paddingBottom: 150},
  questionContainer: {padding: 15, backgroundColor: '##1F5F4'},
  fromContainer: {flexDirection: 'row'},
  fromText: {fontSize: 16},
  memberGenderText: {color: '#21b1ae', fontWeight: 'bold'},
  memberAgeText: {color: '#21b1ae', fontWeight: 'bold'},
  questionCategory: {alignSelf: 'flex-end', fontWeight: 'bold'},
  questionTitle: {
    marginTop: 20,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#454449',
    flexDirection: 'row-reverse',
    marginBottom: 20,
  },
  questionBody: {marginTop: 5, fontSize: 17},
  line: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 5,
  },
  answersContainer: {backgroundColor: 'white', padding: 15},
  answersTop: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  answerCountText: {
    fontSize: 18,
    color: '#454449',
    fontWeight: 'bold',
    flexDirection: 'column',
    marginEnd: 20,
  },
  shareQuestionText: {
    fontSize: 13,
    color: '#454449',
    textAlign: 'right',
    margin: 10,
  },
  iconsView: {
    marginStart: 20,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  iconStyle: {marginEnd: 8},
  lineStyle: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
  },
  doctorContainer: {flexDirection: 'row', justifyContent: 'flex-start'},
  doctorImage: {
    marginTop: 10,
    width: 50,
    height: 50,
    alignSelf: 'flex-start',
    borderRadius: 25,
  },
  TouchableOpacity: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#21b1ae',
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    width: 200,
    marginStart: 10,
  },
  thanksText: {color: '#21b1ae', fontSize: 18, fontWeight: 'bold'},
  helpfulText: {margin: 10, fontSize: 16},
  thanksContainer: {backgroundColor: 'white', padding: 15},
  doctorInformation: {justifyContent: 'flex-end', padding: 10},
  doctorName: {
    alignSelf: 'flex-start',
    color: '#21b1ae',
    fontWeight: 'bold',
    fontSize: 15,
  },
  doctorSpecialty: {alignSelf: 'flex-start'},
  doctorCountry: {alignSelf: 'flex-start'},
  answerBody: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'flex-start',
    marginTop: 30,
  },
});
export default AnswerDetails;
