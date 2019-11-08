import * as React from 'react';
import { List } from 'react-native-paper';
import {useSelector} from "react-redux";
import {withNavigationFocus} from "react-navigation";
import { FlatList, Item, Text } from 'react-native';

const MyComponent = (props) => {

    const history = useSelector(state => state.historyReducer)


    return(
        <>
        {(history.length == 0) ? (
            <Text></Text>
        ) : (
            <FlatList
            data={history}
            keyExtractor={item => item.numbertoFound}
            renderItem={({ item }) => <List.Item
            title={"The number to find was : "+item.winTries}
            description={"Number of tests : "+item.numbertoFound}
            left={props => <List.Icon {...props} icon="star" />}
        />}
            />
        )}

        </>
    )

};

export default withNavigationFocus(MyComponent);
