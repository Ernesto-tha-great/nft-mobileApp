import { View, Text, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import {CircleButton, RectButton} from '../components'
import { SubInfo, EthPrice, NFTTitle } from './SubInfo'

export const NFTCard = ({data}) => {
    const navigation = useNavigation()
  return (
    <View style={{backgroundColor: COLORS.white, borderRadius: SIZES.font, marginBottom: SIZES.extraLarge, margin:SIZES.base, ...SHADOWS.dark}}>
        <View style={{width: '100%', height: 250 }}>
            <Image resizeMode='cover' source={data.image} style={{width: '100%', height: '100%', borderTopLeftRadius: SIZES.font, borderTopRightRadius: SIZES.font}} />
            <CircleButton imgUrl={assets.heart} right={10} top={10} onPress={() => navigation.navigate('NFTDetail', {data})} />
        </View>
        <SubInfo />
    </View>
  )
} 
