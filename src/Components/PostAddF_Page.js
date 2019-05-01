import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Choose Image:',
    takePhotoButtonTitle: '* Take photo with your camera',
    chooseFromLibraryButtonTitle: '* Choose Photo From Library',
}
export default class PostAddF_Page extends Component {

    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null
        }
    }

    PostAddS_Page() {
        Actions.PostAddS_Page();
    }

    Menu() {
        Actions.Mainmenu();
    }

    chooseImage = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
            }
        });
    }

    render() {

        return (
            <ImageBackground source={require('../assets/uploadbg.png')}
                style={{ resizeMode: 'stretch', height: '100%', width: '100%' }}>
                <View style={styles.container}>

                    <Text style={styles.title}>Upload your Advertisement here</Text>
                    <Text style={styles.instructions}>Step 1:</Text>
                    <Image style={styles.previewImage}
                        source={this.state.avatarSource} />

                    <TouchableOpacity style={{ backgroundColor: 'green', margin: 10, padding: 10 }}
                        onPress={this.chooseImage}>
                        <Text style={{ color: 'white' }}>Choose Image</Text>
                    </TouchableOpacity>
                    <Image
                        style={styles.pic}
                        source={require('../assets/p1.png')} />

                    <View style={styles.buttonAlignment}>

                        <TouchableOpacity
                            style={styles.buttonContainer2}
                            onPress={this.Menu}>
                            <Image style={styles.smallbtns}
                                source={require('../assets/closebtn.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonContainer1}
                            onPress={this.PostAddS_Page}>
                            <Image style={styles.smallbtns}
                                source={require('../assets/nextbtn.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 5,
        alignItems: 'center',
        //Imagebackground: '../assets/uploadbg.png',
        //marginRight: 30,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }, pic: {
        width: 300,
        height: 70,
    },
    buttonAlignment: {
        // flex:1,
        flexDirection: 'row',
    },
    previewImage: {
        width: 300,
        height: 300,
        margin: 20,
    },
    smallbtns: {
        width: 40,
        height: 40,
        //margin: 20,
    },
    title: {
        fontSize: 25,
        color: '#fff',
        marginTop: 15,
        width: 300,
        textAlign: 'center',
        opacity: 0.9,
    },
    instructions: {
        fontSize: 15,
        color: '#032863',
        marginTop: 10,
        textAlign: 'left',
    },
    buttonContainer1: {
        marginTop: 10,
        marginLeft: 70,
        marginBottom: 20,
    },
    buttonContainer2: {
        marginTop: 10,
        marginBottom: 20,
        marginRight: 70,
    }
});

AppRegistry.registerComponent('PostAddF_Page', () => PostAddF_Page);
