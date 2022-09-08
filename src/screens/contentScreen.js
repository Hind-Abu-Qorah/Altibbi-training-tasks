import React from 'react';
import {
  Image,
  LogBox,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../../global/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Hr from 'react-native-hr-component';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ContentScreen = () => {
  return (
    <View style={{flex: 1, paddingBottom: 80}}>
      <ScrollView>
        <View>
          <View style={styles.TopContentScreen}>
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
              Medical Content
            </Text>
          </View>
        </View>
        <View style={{marginEnd: 12, marginTop: 80}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#1f6568',
              width: 185,
              marginStart: 12,
              borderBottomLeftRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              height: 70,
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
              height: 70,
              alignSelf: 'flex-end',
              flex: 1,
            }}>
            <Icon name="chatbubble-ellipses-outline" size={25} color="white" />
            <Text style={{color: 'white'}}>ChatToADoctor</Text>
          </TouchableOpacity>
        </View>

        <Image
          style={styles.WomanPicContentScreen}
          source={require('../Image/doctor.jpg')}
        />
        <Text
          style={{
            position: 'absolute',
            fontWeight: 'bold',
            fontSize: 23,
            marginTop: 105,
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
            marginTop: 145,
            marginStart: 23,
          }}>
          Just fill out your symptoms and you'll be talking to a doctor
        </Text>

        <Text
          style={{
            position: 'absolute',
            fontSize: 23,
            marginTop: 215,
            marginStart: 20,
            color: '#21b1ae',
          }}>
          Within Minutes
        </Text>
        <View style={{margin: 15}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: 165,
              borderRadius: 15,
              height: 165,
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="newspaper-variant-multiple-outline"
              size={45}
              color="#21b1ae"
              style={{marginTop: 20}}
            />
            <Text
              style={{
                color: '#424A4C',
                fontWeight: '600',
                alignSelf: 'center',
                fontSize: 17,
                marginTop: 5,
              }}>
              News and Articles
            </Text>
            <Text
              style={{
                fontSize: 13,
                margin: 8,
                textAlign: 'center',
              }}>
              Top Articles and latest news
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              width: 175,
              borderRadius: 15,
              height: 165,
              marginStart: 185,
              alignItems: 'center',
            }}>
            <Fontisto
              name="drug-pack"
              size={45}
              color="#21b1ae"
              style={{marginTop: 20}}
            />
            <Text
              style={{
                color: '#424A4C',
                fontWeight: '600',
                fontSize: 17,
                marginTop: 5,
              }}>
              Drugs
            </Text>
            <Text
              style={{
                margin: 8,
                fontSize: 13,
                textAlign: 'center',
              }}>
              More than 15.000 drugs
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{margin: 15}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: 165,
              borderRadius: 15,
              height: 165,
              alignItems: 'center',
            }}>
            <FontAwesome5
              name="viruses"
              size={45}
              color="#21b1ae"
              style={{marginTop: 20}}
            />
            <Text
              style={{
                color: '#424A4C',
                fontWeight: '600',
                alignSelf: 'center',
                fontSize: 17,
                marginTop: 5,
              }}>
              Diseases
            </Text>
            <Text
              style={{
                fontSize: 13,
                margin: 8,
                textAlign: 'center',
              }}>
              More than 100.000 diseases
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              width: 175,
              borderRadius: 15,
              height: 165,
              marginStart: 185,
              alignItems: 'center',
            }}>
            <MaterialIcons
              name="book-online"
              size={45}
              color="#21b1ae"
              style={{marginTop: 20}}
            />
            <Text
              style={{
                color: '#424A4C',
                fontWeight: '600',
                fontSize: 17,
                marginTop: 5,
              }}>
              Book Now
            </Text>
            <Text
              style={{
                margin: 8,
                fontSize: 13,
                textAlign: 'center',
              }}>
              Best of certificated doctors
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{margin: 15}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: 165,
              borderRadius: 15,
              height: 165,
              alignItems: 'center',
            }}>
            <FontAwesome
              name="calculator"
              size={45}
              color="#21b1ae"
              style={{marginTop: 20}}
            />
            <Text
              style={{
                color: '#424A4C',
                fontWeight: '600',
                alignSelf: 'center',
                fontSize: 17,
                textAlign: 'center',
                marginTop: 5,
              }}>
              Medical Calculators
            </Text>
            <Text
              style={{
                fontSize: 13,
                margin: 8,
                textAlign: 'center',
              }}>
              More than 60 calculators
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              width: 175,
              borderRadius: 15,
              height: 165,
              marginStart: 185,
              alignItems: 'center',
            }}>
            <FontAwesome5
              name="allergies"
              size={45}
              color="#21b1ae"
              style={{marginTop: 20}}
            />
            <Text
              style={{
                color: '#424A4C',
                fontWeight: '600',
                fontSize: 17,
                marginTop: 5,
              }}>
              Allergies
            </Text>
            <Text
              style={{
                margin: 8,
                fontSize: 13,
                textAlign: 'center',
              }}>
              More than 1000 allergy types
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{margin: 15}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: 165,
              borderRadius: 15,
              height: 165,
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="emoticon-sick-outline"
              size={45}
              color="#21b1ae"
              style={{marginTop: 20}}
            />
            <Text
              style={{
                color: '#424A4C',
                fontWeight: '600',
                alignSelf: 'center',
                fontSize: 17,
                margin: 5,
              }}>
              Diagnosis
            </Text>
            <Text
              style={{
                fontSize: 13,
                margin: 8,
                textAlign: 'center',
              }}>
              More than 20.000 diagnosis
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              width: 175,
              borderRadius: 15,
              height: 165,
              marginStart: 185,
              alignItems: 'center',
            }}>
            <FontAwesome5
              name="book-medical"
              size={45}
              color="#21b1ae"
              style={{marginTop: 20}}
            />
            <Text
              style={{
                color: '#424A4C',
                fontWeight: '600',
                fontSize: 17,
                marginTop: 5,
              }}>
              Medical Guide
            </Text>
            <Text
              style={{
                margin: 8,
                fontSize: 13,
                textAlign: 'center',
              }}>
              Best of certificated doctors
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{margin: 15}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: 165,
              borderRadius: 15,
              height: 165,
              alignItems: 'center',
            }}>
            <Fontisto
              name="bed-patient"
              size={45}
              color="#21b1ae"
              style={{marginTop: 20}}
            />
            <Text
              style={{
                color: '#424A4C',
                fontWeight: '600',
                alignSelf: 'center',
                fontSize: 17,
                marginTop: 5,
              }}>
              Surgeries
            </Text>
            <Text
              style={{
                fontSize: 13,
                margin: 8,
                textAlign: 'center',
              }}>
              More than 2000 surgery types
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              width: 175,
              borderRadius: 15,
              height: 165,
              marginStart: 185,
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="text-box-multiple-outline"
              size={45}
              color="#21b1ae"
              style={{marginTop: 20}}
            />
            <Text
              style={{
                color: '#424A4C',
                fontWeight: '600',
                fontSize: 17,
                marginTop: 5,
              }}>
              Blogs
            </Text>
            <Text
              style={{
                margin: 8,
                fontSize: 13,
                textAlign: 'center',
              }}>
              More than 864 blogs
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default ContentScreen;
