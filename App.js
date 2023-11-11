import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import {StatusBar} from "expo-status-bar";

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [gusessRounds, setGuessRounds] = useState(0);

    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading/>
    }

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler(numberOfRounds) {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds)
    }

    function startNewGameHandler() {
        setUserNumber(null);
        setGuessRounds(null)
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
    }

    if (gameIsOver && userNumber) {
        screen =
            <GameOverScreen userNumber={userNumber} roundsNumber={gusessRounds} onStartNewGame={startNewGameHandler}/>
    }

    return (
        <>
            <StatusBar style={'light'}/>
            <LinearGradient style={styles.rootScreen} colors={[Colors.primary700, Colors.accent500]}>
                <ImageBackground
                    source={require('./assets/images/background.png')}
                    resizeMode={'cover'}
                    style={styles.rootScreen}
                    imageStyle={styles.backgorundImage}
                >
                    <SafeAreaView style={styles.rootScreen}>
                        {screen}
                    </SafeAreaView>
                </ImageBackground>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgorundImage: {
        opacity: 0.15
    }
});
