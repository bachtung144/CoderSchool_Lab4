import React from "react";
import { View, Text, StyleSheet,FlatList,Image,TouchableOpacity } from "react-native";
import messages from "../../messages";
function ItemChat({item}) {
    return(
        <TouchableOpacity style={{flexDirection:'row',marginVertical:5,backgroundColor:'#fff',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            elevation: 11,paddingVertical:5,height: 100}}>
           <Image source={{uri:item.avatar_url}} style={{
               width:70,height:70,borderRadius:35,
               borderWidth:0.5,borderColor:'black',marginLeft:5}}/>
           <View style={{flex:1,marginHorizontal:10}}>
               <View style={{flexDirection:'row',justifyContent: 'space-between',
                   marginBottom:5
               }}>
                   <Text style={{fontSize:20,fontWeight:'bold'}}>{item.last_name}</Text>
                   <Text style={{fontSize:15}}>{item.last_message_date}</Text>
               </View>
               <Text style={{flexWrap: "wrap"}} numberOfLines={3}>{item.last_message_content}</Text>
           </View>
        </TouchableOpacity>
    )
}
export default function MessagesScreen(props) {
    return (
        <View style={{flex:1}}>
            <FlatList
                data={messages}
                keyExtractor={item=> item.id}
                renderItem={({item}) => <ItemChat item={item}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
