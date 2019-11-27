import * as React from 'react';
import ReactNativeSettingsPage, { 
	SectionRow, 
	NavigateRow,
  CheckRow,
  SwitchRow,
  SliderRow
} from 'react-native-settings-page';
import { Button, Paragraph, Dialog, Portal, RadioButton } from 'react-native-paper';

import {Text, View, Alert, StyleSheet, } from "react-native"

import i118n from '../components/i118n';

const styles = StyleSheet.create({
  container: {
    height: 48,
  },
  row: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  checkboxContainer: {
    paddingRight: 8,
  },
  label: {
    flex: 1,
    flexWrap: 'wrap',
  },
});

const SettingsScreen = () => {


    return (
      <>
      <View>
      <Text style={{padding: 10, fontSize: 30}} >{i118n.t('settings.name')}</Text>
      </View>
      <ReactNativeSettingsPage>
      <SectionRow text={i118n.t('settings.sectionGeneral')}>
        <SwitchRow 
          text={i118n.t('settings.darkmode')}
        />
      </SectionRow>
      <SectionRow text={i118n.t('settings.sectionAccount')}>
        <NavigateRow
          text={i118n.t('settings.logout')}
          
           />
      </SectionRow>
      <SectionRow text='Informations'>
      <NavigateRow
          text='Build: 0666'
          
           />
      </SectionRow>
    </ReactNativeSettingsPage>
    </>
    );
}

export default SettingsScreen;