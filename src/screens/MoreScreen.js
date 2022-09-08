import React, {useEffect, useRef, useState} from 'react';
import ReactNative, {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {LineChart, BarChart} from 'react-native-chart-kit';
import {State} from 'react-native-gesture-handler';
const {CustomModule} = ReactNative.NativeModules;
const MoreScreen = () => {
  const [currentUs, setCurrentUs] = useState([]);
  const [data, setData] = useState({});

  async function getResponse(currentUs) {
    try {
      await CustomModule.getCurrentUs(
        'https://api.covidtracking.com/v1/',
        res => {
          const JSONObject = JSON.parse(res);
          let usrtInfo = JSONObject[0];
          setCurrentUs(usrtInfo);
          let da = {
            labels: ['positive', 'negative', 'death', 'pending', 'states'],
            datasets: [
              {
                data: [
                  usrtInfo.positive,
                  usrtInfo.negative,
                  usrtInfo.death,
                  usrtInfo.states,
                  usrtInfo.pending,
                ],
              },
            ],
          };
          console.log('dddd da', da);
          setData(da);
        },
      );
    } catch (e) {
      console.log('caught error', e);
    }
  }
  useEffect(() => {
    getResponse();
  }, []);

  return (
    <View style={{flex: 1, paddingBottom: 90}}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          {data && data.labels ? (
            <LineChart
              data={data}
              width={380}
              height={220}
              yAxisLabel="$"
              yAxisSuffix="%"
              yAxisInterval={1}
              chartConfig={{
                backgroundColor: '#007577',
                backgroundGradientFrom: '#20B2AF',
                backgroundGradientTo: '#1FA698',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: 'white',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          ) : (
            <ActivityIndicator />
          )}
          <View style={{marginTop: 20}}>
            {data && data.labels ? (
              <BarChart
                data={data}
                width={380}
                height={220}
                yAxisLabel="%"
                chartConfig={{
                  backgroundColor: '#007577',
                  backgroundGradientFrom: '#20B2AF',
                  backgroundGradientTo: '#1FA698',
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '5',
                    strokeWidth: '3',
                    stroke: 'white',
                  },
                }}
              />
            ) : (
              <ActivityIndicator />
            )}
          </View>
          <View style={{marginTop: 25}}>
            {data && data.labels ? (
              <LineChart
                data={data}
                width={380}
                height={220}
                chartConfig={{
                  backgroundColor: '#007577',
                  backgroundGradientFrom: '#20B2AF',
                  backgroundGradientTo: '#1FA698',
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '5',
                    strokeWidth: '3',
                    stroke: 'white',
                  },
                }}
              />
            ) : (
              <ActivityIndicator />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default MoreScreen;
