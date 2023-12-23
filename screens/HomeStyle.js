import {StyleSheet, Dimensions, Platform} from 'react-native';
const styles = StyleSheet.create({
    container:{
        marginTop: 30, 
        height: "100%"
    },

    header:{
        marginLeft: 15, 
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText:{
        marginLeft: 25, 
        fontWeight: '700',
        fontSize: 17, 
        color: 'black'
    },
    lineContainer:{
        width: "100%", 
        height: 0.10, 
        marginTop: 25, 
        backgroundColor: 'grey'
    },

    firstTextContainer:{
        backgroundColor: '#EFF5FF', 
        margin: 15, 
        padding: 15,
        flexDirection: 'row'
    },

    firstText:{
        marginLeft: 15,
        fontSize: 13
    },
    requireAmount:{
        marginLeft: 25, 
        marginTop: 15, 
        fontWeight: '700', 
        fontSize: 17, 
        color: 'black'
    },

    eligibleContainer:{
        flexDirection: 'row',
        marginTop: 6, 
        alignItems: 'center'
    },
    eligibleText:{
        marginLeft: 25, 
        fontSize: 13, 
        fontWeight: '500',
    },
    eligibleAmountText:{
        color: "#714FFF", 
        fontWeight: '500', 
        fontSize: 13,
    },


    circularContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
      },
      input: {
        // borderWidth: 1,
        // borderColor: '#ccc',
        // borderRadius: 5,
        padding: 8,
        position: 'absolute',
        zIndex: 1,
      },
      button: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
      },
      submitContainer:{
        position: 'absolute', 
        zIndex: 1, 
        bottom: 0, 
        width: '100%', 
        marginBottom: 30
      },
      submitButton:{
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: 52
      },
      submitText:{
        color: '#ffffff', 
        fontWeight: '700', 
        fontSize: 14,
        lineHeight: 19.6
      }
});
export default styles;
