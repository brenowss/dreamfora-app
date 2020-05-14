import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, ScrollView, Image } from "react-native";
import styles from "./styles";

const backgroundImage = require('../../assets/background.png');
const avatar = require('../../assets/avatar.png');


export default function Home() {
  const [greeting, setGreeting] = useState("");
  const [objectives, setObjectives] = useState(1);
  const isDay = () => {
    var hr = (new Date()).getHours();
    if (hr > 18) {
      setGreeting("Boa noite")
    } else {
      setGreeting("Bom dia")
    }
  };
  const randomNumber = () => {
    setObjectives(Math.round(Math.random() * 10))
  };
  useEffect(()=>{
    randomNumber()
    isDay()
  })
return (
  <View style={styles.container}>
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.innerContainer}>
        <View style={styles.welcome}>
          <Image source={avatar} style={styles.avatar} />
          <View style={styles.welcomeAndName}>
            <Text style={styles.welcomeText} onRender={isDay}>{greeting}</Text>
            <Text style={styles.name}>Breno</Text>
          </View>
        </View>
        <View style={styles.mainInfo}>
          <Text style={styles.info}>
            Você tem <Text style={styles.bold}>{objectives} objetivos </Text>para completar
          </Text>
        </View>
        <View style={styles.horizontalScroll}>
          <Text style={styles.achievementHeading}>Conquistas recentes:</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.achievement}>
              <Text style={styles.achievementTitle}>Primeiros passos</Text>
            </View>
            <View style={styles.achievement}>
              <Text style={styles.text}>Hello</Text>
            </View>
            <View style={styles.achievement}>
              <Text style={styles.text}>Hello</Text>
            </View>
            <View style={styles.achievement}>
              <Text style={styles.text}>Hello</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  </View>
);
}
