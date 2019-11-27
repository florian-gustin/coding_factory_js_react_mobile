import * as React from 'react';
import ReactNativeSettingsPage, { 
	SectionRow, 
	NavigateRow,
  CheckRow,
  SwitchRow,
  SliderRow
} from 'react-native-settings-page';

import {Text, View} from "react-native"

const SettingsScreen = () => {
    return (
      <>
      <View>
      <Text style={{padding: 10, fontSize: 30}} >Settings</Text>
      </View>
      <ReactNativeSettingsPage>
      <SectionRow text='General'>
        <SwitchRow 
          text='Dark Mode'   
        />
      </SectionRow>
      <SectionRow text='Account'>
        <NavigateRow
          text='Logout'
          
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