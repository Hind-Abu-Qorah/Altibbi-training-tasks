import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../../global/styles';
import Hr from 'react-native-hr-component';
import Icon from 'react-native-vector-icons/Ionicons';
const TalkToADoctor = () => {
  return (
    <View style={{flex: 1, paddingBottom: 80}}>
      <ScrollView>
        <View>
          <View style={styles.TopTalkScreen}>
            <Text style={styles.signInText}> SignIn </Text>
            <Icon
              name="language"
              size={25}
              color="white"
              style={{
                position: 'absolute',
                elevation: 1,
                color: 'white',
                margin: 25,
                height: 35,
                left: 35,
              }}
            />
            <Image
              style={styles.Logo}
              source={require('../Image/altibbiLogo.png')}
            />
            <Text
              style={{
                position: 'absolute',
                color: 'white',
                marginTop: 70,
                marginStart: 10,
                fontSize: 18,
              }}>
              Good Morning
            </Text>
            <Text
              style={{
                color: 'white',
                alignSelf: 'flex-end',
                marginTop: 75,
                marginStart: 25,
                fontSize: 15,
                position: 'absolute',
                right: 10,
              }}>
              24/7 Doctors available to help you
            </Text>
          </View>
        </View>
        <View style={{marginEnd: 12, marginTop: 29}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#1f6568',
              width: 185,
              marginStart: 12,
              borderBottomLeftRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              height: 90,
            }}>
            <Icon name="call" size={25} color="white" />
            <Text style={{color: 'white'}}>TalkToADoctor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#21b1ae',
              width: 185,
              position: 'absolute',
              marginEnd: 15,
              borderBottomRightRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
              height: 90,
              alignSelf: 'flex-end',
              flex: 1,
            }}>
            <Icon name="chatbubble-ellipses-outline" size={25} color="white" />
            <Text style={{color: 'white'}}>ChatToADoctor</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={styles.WomanPicTalkScreen}
          source={require('../Image/doctor.jpg')}
        />
        <Text
          style={{
            position: 'absolute',
            fontWeight: 'bold',
            fontSize: 23,
            marginTop: 150,
            marginStart: 23,
            color: 'black',
          }}>
          Talk To A Doctor Now
        </Text>
        <Text
          style={{
            position: 'absolute',
            fontSize: 16,
            width: 195,
            marginTop: 195,
            marginStart: 23,
          }}>
          Just fill out your symptoms and you'll be talking to a doctor
        </Text>
        <Text
          style={{
            fontWeight: '690',
            position: 'absolute',
            fontSize: 23,
            marginTop: 260,
            marginStart: 20,
            color: '#21b1ae',
          }}>
          Within Minutes
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            marginStart: 25,
            marginTop: 20,
            marginEnd: 15,
            marginBottom: 5,
            fontWeight: 'bold',
          }}>
          Thousend of certified doctors are available to help you{' '}
        </Text>
        <Text style={{marginStart: 25, marginBottom: 5, marginEnd: 10}}>
          Get a trusted medical consultation from the best doctors in the middle
          east.
        </Text>
        <Text
          style={{
            marginStart: 25,
            marginBottom: 5,
            marginEnd: 10,
            color: 'black',
          }}>
          Complete privacy and satisfactory answer within minutes
        </Text>
        <View
          style={{
            marginTop: 20,
            borderRadius: 20,
            width: 360,
            height: 230,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: 350,
            }}>
            <View
              style={{
                margin: 10,
                borderRadius: 10,
                backgroundColor: '#d6e5e7',
                width: 50,
                justifyContent: 'center',
                height: 50,
                alignItems: 'center',
              }}>
              <Icon
                name="ios-fitness-outline"
                size={30}
                color="#21b1ae"
                style={{margin: 10}}
              />
            </View>
            <Text
              style={{
                color: '#424A4C',
                fontWeight: '600',
                alignSelf: 'center',
                position: 'absolute',
                top: 14,
                right: 110,
                fontSize: 17,
              }}>
              My Last Consultation
            </Text>
            <Text
              style={{position: 'absolute', top: 42, right: 80, fontSize: 13}}>
              You have no consultation history
            </Text>
            <Icon
              name="ios-chevron-forward-sharp"
              size={30}
              color="#21b1ae"
              style={{margin: 10, position: 'absolute', right: 1, top: 10}}
            />
            <View
              style={{
                borderBottomColor: '#D3D3D3',
                borderBottomWidth: 1,
                marginStart: 10,
                marginEnd: 10,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 350,
            }}>
            <View
              style={{
                margin: 10,
                borderRadius: 10,
                backgroundColor: '#d6e5e7',
                width: 50,
                justifyContent: 'center',
                height: 50,
                alignItems: 'center',
              }}>
              <Icon
                name="md-people-circle-outline"
                size={30}
                color="#21b1ae"
                style={{margin: 10}}
              />
            </View>
            <Text
              style={{
                color: '#424A4C',
                fontWeight: '600',
                alignSelf: 'center',
                position: 'absolute',
                top: 10,
                right: 110,
                fontSize: 17,
              }}>
              My Last Consultation
            </Text>
            <Text
              style={{position: 'absolute', top: 37, right: 130, fontSize: 13}}>
              Log in to use the service
            </Text>
            <Icon
              name="ios-chevron-forward-sharp"
              size={30}
              color="#21b1ae"
              style={{margin: 10, position: 'absolute', right: 1, top: 10}}
            />
            <View
              style={{
                borderBottomColor: '#D3D3D3',
                borderBottomWidth: 1,
                marginStart: 10,
                marginEnd: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 350,
            }}>
            <View
              style={{
                margin: 10,
                borderRadius: 10,
                backgroundColor: '#d6e5e7',
                width: 50,
                justifyContent: 'center',
                height: 50,
                alignItems: 'center',
              }}>
              <Icon
                name="md-notifications-outline"
                size={30}
                color="#21b1ae"
                style={{margin: 10}}
              />
            </View>
            <Text
              style={{
                color: '#424A4C',
                fontWeight: '600',
                alignSelf: 'center',
                position: 'absolute',
                top: 10,
                right: 150,
                fontSize: 17,
              }}>
              Medicine alarm
            </Text>
            <Text
              style={{
                position: 'absolute',
                top: 35,
                right: 20,
                fontSize: 13,
                width: 250,
              }}>
              Add your medication and we'll remind you on time
            </Text>
            <Icon
              name="ios-chevron-forward-sharp"
              size={30}
              color="#21b1ae"
              style={{margin: 10, position: 'absolute', right: 1, top: 10}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            margin: 16,
            height: 160,
            borderStyle: 'solid',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#579C97',
            backgroundColor: '#F6FFFC',
            padding: 15,
          }}>
          <Text> Dear User </Text>
          <Text
            style={{
              color: '#424A4C',
              fontSize: 18,
              marginTop: 8,
              marginBottom: 10,
            }}>
            Diabetes Health Care Program
          </Text>
          <Text style={{color: '#505457'}}>
            If you suffer from diabetes, tou can now benefit from the Diabetes
            Program.
          </Text>
          <Text
            style={{
              color: '#21b1ae',
              position: 'absolute',
              top: 120,
              fontWeight: 'bold',
              right: 40,
            }}>
            Find More
          </Text>
          <Icon
            name="ios-chevron-forward-sharp"
            size={25}
            color="#21b1ae"
            style={{margin: 10, position: 'absolute', right: 1, top: 108}}
          />
        </View>
        <View
          style={{
            margin: 16,
            height: 175,
            borderRadius: 10,
            backgroundColor: 'white',
            padding: 15,
          }}>
          <Text
            style={{
              color: '#79787D',
              fontSize: 18,
              marginTop: 8,
              marginBottom: 10,
            }}>
            Having Corona Symptoms?
          </Text>
          <Text style={{color: '#46454A'}}>
            Contact us for more immediate medical consultation
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#21b1ae',
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
              borderRadius: 25,
              marginTop: 10,
            }}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
              Get consultation now{' '}
            </Text>
          </TouchableOpacity>
          <Icon
            name="ios-sad-outline"
            size={40}
            color="#21b1ae"
            style={{margin: 10, position: 'absolute', right: 10, top: 8}}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default TalkToADoctor;
