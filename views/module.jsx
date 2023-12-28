import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../App';
// import { CheckBox } from 'react-native-elements';
import { CheckBox } from '@rneui/themed';

export function Module({ route }) {
  const { num } = route.params;
  const [backendData, setBackendData] = useState('');
  const [firstChoice, setFirstChoice] = useState('');
  const [secondChoice, setSecondChoice] = useState('');
  const [thirdChoice, setThirdChoice] = useState('');
  const [fourthChoice, setFourthChoice] = useState('');

  const [firstBoxChecked, setFirstBoxChecked] = useState(false);
  const [secondBoxChecked, setSecondBoxChecked] = useState(false);
  const [thirdBoxChecked, setThirdBoxChecked] = useState(false);
  const [fourthBoxChecked, setFourthBoxChecked] = useState(false);

  const [revelResponses, setRevelResponses] = useState(false);
  const [triggerDB, setTriggerDB] = useState(false);

  const [responsesArray, setResponsesArray] = useState([]);

  const responses = [];
  useEffect(() => {
    fetch(`http://localhost:4000/question?module=${num.toString()}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((dataBack) => {
        setBackendData(dataBack[0]);
        setFirstChoice(dataBack[0]['Choix1']);
        setSecondChoice(dataBack[0]['Choix2']);
        setThirdChoice(dataBack[0]['Choix3']);
        setFourthChoice(dataBack[0]['Choix4']);
        if (dataBack[0]['Reponse1'] != null) {
          responses.push(dataBack[0]['Reponse1']);
        }
        if (dataBack[0]['Reponse2'] != null) {
          responses.push(dataBack[0]['Reponse2']);
        }
        if (dataBack[0]['Reponse3'] != null) {
          responses.push(dataBack[0]['Reponse3']);
        }
        if (dataBack[0]['Reponse4'] != null) {
          responses.push(dataBack[0]['Reponse4']);
        }
        console.log(
          '---------------------responses-------------------------',
          responses
        );
        setResponsesArray(responses);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [triggerDB]);

  function checkResponses() {
    console.log(responses);
    setRevelResponses(true);
  }

  function resetAll() {
    setBackendData('');
    setFirstChoice('');
    setSecondChoice('');
    setThirdChoice('');
    setFourthChoice('');
    setFirstBoxChecked(false);
    setSecondBoxChecked(false);
    setThirdBoxChecked(false);
    setFourthBoxChecked(false);
    setRevelResponses(false);
    setTriggerDB(!triggerDB);
  }

  return (
    <View style={{ justifyContent: 'center' }}>
      {backendData && responsesArray && (
        <>
          <Text
            style={{
              marginBottom: 20,
              textAlign: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              width: '90%',
            }}
          >
            {backendData['Question']}
          </Text>
          <CheckBox
            title={firstChoice}
            checked={firstBoxChecked}
            onPress={() => setFirstBoxChecked(!firstBoxChecked)}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
            disabled={revelResponses}
            containerStyle={{
              backgroundColor: revelResponses
                ? responsesArray.includes(firstChoice)
                  ? 'green'
                  : 'red'
                : 'transparent',
            }}
          />
          <CheckBox
            title={secondChoice}
            checked={secondBoxChecked}
            onPress={() => setSecondBoxChecked(!secondBoxChecked)}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
            disabled={revelResponses}
            containerStyle={{
              backgroundColor: revelResponses
                ? responsesArray.includes(secondChoice)
                  ? 'green'
                  : 'red'
                : 'transparent',
            }}
          />
          <CheckBox
            title={thirdChoice}
            checked={thirdBoxChecked}
            onPress={() => setThirdBoxChecked(!thirdBoxChecked)}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
            disabled={revelResponses}
            containerStyle={{
              backgroundColor: revelResponses
                ? responsesArray.includes(thirdChoice)
                  ? 'green'
                  : 'red'
                : 'transparent',
            }}
          />
          <CheckBox
            title={fourthChoice}
            checked={fourthBoxChecked}
            onPress={() => setFourthBoxChecked(!fourthBoxChecked)}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
            disabled={revelResponses}
            containerStyle={{
              backgroundColor: revelResponses
                ? responsesArray.includes(fourthChoice)
                  ? 'green'
                  : 'red'
                : 'transparent',
            }}
          />
          {!revelResponses ? (
            <Button title="Valider" onPress={checkResponses} />
          ) : (
            <Button title="Suivant" onPress={resetAll} />
          )}
        </>
      )}
    </View>
  );
}
