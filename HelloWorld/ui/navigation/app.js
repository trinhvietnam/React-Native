/**
 * Created by Administrator on 2/18/2017.
 */
import  React , {Component} from 'react';
import  {Text,View,StyleSheet,Navigator,TouchableOpacity,Button} from 'react-native';
export default class App extends Component{
    renderScene(route,navigator){
        switch (route.name){
            case 'redScreen':
                return( <RedScreen clickMe={()=>{
                    navigator.push({name:'yellowScreen'})
                }}/>);
            case 'yellowScreen':
                return( <YellowScreen clickMe={()=>{
                    navigator.pop({name:'redScreen'})
                }}/>);
        }
    }
    render(){
        return(
            <Navigator
                initialRoute={{name:'redScreen'}}
                renderScene={this.renderScene}
            />
        );
    }
}
class RedScreen extends Component{
    render(){
        return(
            <View style={styles.redWrapper}>
                <Button title="Next to Red Screen" onPress={this.props.clickMe}/>
            </View>
        );
    }
}
class YellowScreen extends Component{
    render(){
        return(
            <View style={styles.yellowWrapper}>
                <Button title="Back to Red Screen" onPress={this.props.clickMe}/>
            </View>

        );
    }
}
const styles = new StyleSheet.create({
   redWrapper:{
       backgroundColor: 'red',
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   },
    yellowWrapper:{
        backgroundColor: 'yellow',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});