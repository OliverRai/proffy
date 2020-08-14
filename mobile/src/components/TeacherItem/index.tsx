import React from 'react';

import styles from './styles'
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{uri: 'http://github.com/oliverrai.png'}}/>
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Raiane Oliveira</Text>
                    <Text style={styles.subject}>Artes</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                Entusiasta Java {'\n'} {'\n'}
                Formada em análise e desenvolvimento de sistemas
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'  '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/*<Image source={heartOutlineIcon}/>*/}
                        <Image source={unFavoriteIcon}/>
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entre em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;