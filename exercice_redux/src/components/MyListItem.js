import * as React from 'react';
import { List } from 'react-native-paper';
import {useSelector} from "react-redux";
import {withNavigationFocus} from "react-navigation";

const MyComponent = (props) => {

    const history = useSelector(state => state.historyReducer)

    props.isFocused? console.log("yes we use navigation focus x) ", history[1].numbertoFound) : console.log("does nothing")

    function generateList() {
        if(history!=[{}]){
            for(let i = 0; i < history.length ; i ++) {
                if(i!=0 && props.isFocused) {
                    return(
                        <List.Item
                            title={"The number to find was : "+history[i].winTries}
                            description={"Number of tests : "+history[i].numbertoFound}
                            left={props => <List.Icon {...props} icon="star" />}
                        />
                    )
                }
            }
        }
    }

    return(
        <>
        {generateList()}
        </>
    )

};

export default withNavigationFocus(MyComponent);
