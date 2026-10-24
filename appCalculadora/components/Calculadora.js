import { useState } from 'react'
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native'

export default function Calculadora() {

    const [num1,setNum1] = useState()
    const [num2,setNum2] = useState()
    const [res,setRes] = useState()

    function soma(){
        setRes(+num1 + +num2);
    }
    function divisao(){
        setRes(+num1 / +num2);
    }
    function subtracao(){
        setRes(+num1 - +num2);
    }
    function multiplicacao(){
        setRes(+num1 * +num2);
    }

    return(
        <View style={styles.calcContainer}>
            <View style={styles.tituloContainer}>
                <Text style={styles.tituloTexto}>Calculadora</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='Primeiro nº' value={num1} onChangeText={setNum1}/>
                <TextInput style={styles.input} placeholder='Segundo nº' value={num2} onChangeText={setNum2}/>
            </View>
            <View style={styles.botaoContainer}>
                <Pressable style={styles.botao} onPress={soma}>
                    <Text style={styles.botaoTexto}>+</Text>
                </Pressable>
                <Pressable style={styles.botao} onPress={subtracao}>
                    <Text style={styles.botaoTexto}>-</Text>
                </Pressable>
                <Pressable style={styles.botao} onPress={multiplicacao}>
                    <Text style={styles.botaoTexto}>*</Text>
                </Pressable>
                <Pressable style={styles.botao} onPress={divisao}>
                    <Text style={styles.botaoTexto}>/</Text>
                </Pressable>
            </View>
            <View style={styles.resultadoContainer}>
                <Text style={styles.textoResultado}>
                    resultado: {res}
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    calcContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0a6bac',
        width: '100%'
    },
    tituloContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tituloTexto: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        gap: 15
    },
    input: {
        width: '90%',
        borderRadius: 8,
        borderColor: '#f1eded',
        borderWidth: 2
    },
    botaoContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        gap: 15
    },
    botao: {
        width: '10%',
        height: 20,
        backgroundColor: '#7db4b5',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoTexto: {
        textAlign: 'center'
    },
    
    resultadoContainer: {
        width: '100%',
        justifyContent: 'center',
        marginBottom: 40,
        alignItems: 'center',
        marginTop: 40
    },

    textoResultado: {
        fontSize: 20,
        fontWeight: 'bold'
    }

})