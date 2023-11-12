import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const slides = [
  {
    key: '1',
    title: 'Mouse Redragon',
    text: 'Trazendo a já amada iluminação Redragon Chroma Mark II o mouse Gamer Profissional Cobra impressiona com tanta beleza, conforto e precisão. Vá além e customize do seu jeito a iluminação do seu mouse com o software Redragon. ',
    image: require('./src/assets/1.png')
  },

  {
    key: '2',
    title: 'Conforto e precisão',
    text: 'Cadeira Gamer Red Square até 130kgs com almofadas Reclinável Preto e vermelho.',
    image: require('./src/assets/2.png')
  },
  {
    key: '3',
    title: 'PC Gamer',
    text: 'Tenha vantagem extra com Microcomputer revolution Gamer ATX Personal computer, processador AMD Ryzen 5 5600G, placa de vídeo Rx580, NVME m2 500GB, DDR4 32GB. ',
    image: require('./src/assets/3.png')
  },
]

export default function App() {
  const [showHome, setShowHome] = useState(false);

  const buttonLabel = (Label) => {
    return(
      <View styles = {{
        padding: 12 
      }}>
        <Text styles={{
          color: 'black',
          fontWeight: '600',
          fontSize: 23,
        }}>
          {Label}
        </Text>
      </View>
    )
  }

function renderSlides({ item }){
  return(
    <View style={{flex:1}}>
      <Image 
        source={item.image}
        style={{
          resizeMode: 'contain',
          height: '73%',
          width: '100%',

        }}
      />
      <Text style={{
        paddingTop: 25,
        paddingBottom: 10,
        fontSize: 23,
        color: '#099CFF',
        alignSelf: 'center'
      }}>
        {item.title}
      </Text>

      <Text
        style={{
          textAlign: 'center',
          color: '#ABA',
          paddingHorizontal: 25,
          fontSize: 15,
        }}
      >
        {item.text}
      </Text>
    </View>
  )
}

if(showHome){
  return <Text>Entrou na HOME</Text>
} else{ 
  return (
    <AppIntroSlider 
      renderItem={renderSlides}
      data={slides}
      activeDotStyle={{
        backgroundColor: '#099CFF',
        width: 20,
      }}
      showSkipButton
      renderNextButton={() => buttonLabel('NEXT')}
      renderSkipButton={() => buttonLabel('SKIP')}
      renderDoneButton={() => buttonLabel('DONE')}
      onDone={() => {
        alert('Deseja ir para loja agora!')
      }}
    />
    );
  }
}
