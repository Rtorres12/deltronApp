import React,{useState} from "react";
import {View,Text,StyleSheet,ScrollView,Dimensions,Image} from "react-native";


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const images = 
[
    require('../img/banner/banner1.png'),
    require('../img/banner/banner2.png'),
    require('../img/banner/banner3.png')
]
Carousel = () =>
{
    const [imgActive,setimgActive] = useState(0);
    onchange= (nativeEvent) =>{
        if(nativeEvent)
        {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if(slide != imgActive)
            {
                setimgActive(slide);
            }
        }
    }
    return(
<View style={styles.container}>
<View style={styles.wrapcontainer}>
    
    <ScrollView
    onScroll={({nativeEvent})=>onchange(nativeEvent)}
    showsHorizontalScrollIndicator={false}
    pagingEnabled
    horizontal
    style={styles.wrap}
    >
      {  images.map((e,index)=>
        
          <Image
          key={e}
          resizeMode='stretch'
          style={styles.wrap}
          source={e}

          />
      )}

    </ScrollView>

    <Text style={styles.text}>L1orem ipsum dolor sit amet consectetam modi, vitae aut aliquid ducimus distinctio sapiente suscipit, sed possimus nisi?</Text>

    <View style={styles.wrapDot}>
        {
            images.map((e,index)=><Text
             key={e}
             style={imgActive == index ? styles.dotActive:styles.dot}
             >
                 ■
             </Text>)
        }
        
    </View>

</View>

</View>
    )}


export default Carousel;

const styles = StyleSheet.create({
    container:
    {
        flex:1
    },
    wrap:
    {
        width:WIDTH,
        height:HEIGHT*0.25,
    },
    wrapcontainer:
    {
        width:WIDTH,
        height:HEIGHT*0.25,
        justifyContent:'center'
    },
    wrapDot:
    {
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignSelf:'center'
    },
    dotActive:
    {
        margin:3,
        color:'white'
    },
    dot:
    {
        margin:3,
        color:'grey'
    },
    text:
    {
        position:'absolute',
        color:'white',
        textAlign:'center',   
        alignItems:'center',
        marginHorizontal:30
    }
    
})