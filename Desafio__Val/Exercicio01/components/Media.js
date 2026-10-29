import { useState } from 'react'
import {View, Text, TextInput, Pressable, StyleSheet } from 'react-native'

export default function calculoMedia() {
    
    const [nota1, setNota1] = useState()
    const [nota2, setNota2] = useState()
    const [nota3, setNota3] = useState()
    const [nota4, setNota4] = useState()
    const [calMedia, setcalMedia] = useState()
    // const [res, setRes] = useState()

    function Media () {
        setcalMedia ((+nota1 + +nota2 + +nota3 + +nota4) / 4)
    }

    return(
        <View style={styles.calcContainer}>
            <View style={styles.tituloContainer}>
                <Text style={styles.tituloTexto}>Calcular Media</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='Digite a 1º Nota' value={nota1} onChangeText={setNota1}/>
                <TextInput style={styles.input} placeholder='Digite a 2º Nota' value={nota2} onChangeText={setNota2}/>
                <TextInput style={styles.input} placeholder='Digite a 3º Nota' value={nota3} onChangeText={setNota3}/>
                <TextInput style={styles.input} placeholder='Digite a 4º Nota' value={nota4} onChangeText={setNota4}/>
            </View>

            <View style={styles.botaoContainer}>
                <Pressable style={styles.botao} onPress={Media}>
                    <Text style={styles.botaoTexto}>Calcular Média</Text>
                </Pressable>
            </View>

            <View style={styles.resultadoContainer}>
                <Text style={styles.textoResultado}>
                    resultado: {calMedia}
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
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'row',
       height: '100%'   
    },
    botaoContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'row',
       height: '100%'   
    },
    botao: {
        width: '30%',
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