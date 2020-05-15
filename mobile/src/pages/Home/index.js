import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, ScrollView, Image } from "react-native";
import styles from "./styles";
import { Icon } from 'react-native-elements';

const backgroundImage = require('../../assets/background.png');
const avatar = require('../../assets/avatar.png');

const api = "https://thesimpsonsquoteapi.glitch.me/quotes";


export default function Home() {
  const [greeting, setGreeting] = useState("");
  const [objectives, setObjectives] = useState(1);
  const [quote, setQuote] = useState({});

  const randomNumber = () => {
    setObjectives(Math.round(Math.random() * 10))
  };

  const isDay = () => {
    var hr = (new Date()).getHours();
    if (hr > 18) {
      setGreeting("Boa noite,")
    } else {
      setGreeting("Bom dia,")
    }
  };

  function getQuote() {
    const quoteList = {
      1: {
        author: 'PÍNDARO',
        quote: '“O sucesso, para quem é grande batalhador, apaga o esforço da luta.”'
      },
      2: {
        author: 'LAO TSÉ',
        quote: '“O sábio não ensina com palavras, senão com atos.”'
      },
      3: {
        author: 'SIR FRANCIS BACON',
        quote: '“Instrução e capacidade humana, são sinónimos.”'
      },
      4: {
        author: 'ALEXANDRE DUMAS',
        quote: '“Um marido é sempre uma criatura de espírito; nunca lhe passa pela ideia casar-se.”'
      },
    };
    const keys = Object.keys(quoteList);
    const randomIndex = keys[Math.floor(Math.random() * keys.length)];
    const item = quoteList[randomIndex];
    setQuote(item)
  }
  useEffect(() => {
    randomNumber()
    isDay()
    getQuote()
  }, []);

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
              <View style={[styles.achievement,{ marginLeft: 0}]}>
                <Text style={styles.achievementTitle}>Focado</Text>
                <View style={styles.achievementDetail}>
                  <Icon style={styles.achievementTrophy} name="trophy" type="font-awesome-5" color={"lightgreen"} />
                  <Text style={styles.achievementCompletion}>100%</Text>
                </View>
              </View>
              <View style={styles.achievement}>
                <Text style={styles.achievementTitle}>De cabeça</Text>
                <View style={styles.achievementDetail}>
                  <Icon style={styles.achievementTrophy} name="trophy" type="font-awesome-5" color={"lightgreen"} />
                  <Text style={styles.achievementCompletion}>100%</Text>
                </View>
              </View>
              <View style={styles.achievement}>
                <Text style={styles.achievementTitle}>Primeiros passos</Text>
                <View style={styles.achievementDetail}>
                  <Icon style={styles.achievementTrophy} name="trophy" type="font-awesome-5" color={"lightgreen"} />
                  <Text style={styles.achievementCompletion}>100%</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.objectives}>
            <View style={styles.objective}>
              <Icon style={styles.objectiveIcon} name="bullseye" type="font-awesome-5" color="#fff" size={40} />
              <Text style={styles.objectiveTitle}>Metas</Text>
              <View style={styles.objectiveCompletion}>
                <Text style={styles.objectiveProgress}>3 / 6</Text>
              </View>
            </View>
            <View style={styles.objective}>
              <Icon style={styles.objectiveIcon} name="tasks" type="font-awesome-5" color="#fff" size={40} />
              <Text style={styles.objectiveTitle}>Tarefas</Text>
              <View style={styles.objectiveCompletion}>
                <Text style={styles.objectiveProgress}>1 / 4</Text>
              </View>
            </View>
            <View style={styles.objective}>
              <Icon style={styles.objectiveIcon} name="calendar-alt" type="font-awesome-5" color="#fff" size={40} />
              <Text style={styles.objectiveTitle}>Hábitos</Text>
              <View style={styles.objectiveCompletion}>
                <Text style={styles.objectiveProgress}>2 / 3</Text>
              </View>
            </View>
            <View style={styles.objective}>
              <Icon style={styles.objectiveIcon} name="book" type="font-awesome-5" color="#fff" size={40} />
              <Text style={styles.objectiveTitle}>Estudos</Text>
              <View style={styles.objectiveCompletion}>
                <Text style={styles.objectiveProgress}>1 / 2</Text>
              </View>
            </View>
          </View>
          <View style={styles.quotes}>
            <Text style={styles.quote}>{quote.quote}</Text>
            <Text style={styles.author}>{quote.author}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
