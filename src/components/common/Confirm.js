import React from "react";
import {CardSection} from "./CardSection";
import {Button} from "./Button";
import {View, Text, Modal} from "react-native";

const Confirm = ({children, visible, onAccept, onDecline}) => {
    return(
        <Modal
            visible={visible}
            transparent
            onRequestClose={() => {}}
            animationType="slide"
        >
            <View style={styles.containerStyle}>
                <CardSection style={styles.cardSectionStyle}>
                    <Text style={styles.textStyle}>
                        {children}
                    </Text>
                </CardSection>
            
                <CardSection>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    )
}

const styles = {
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1
    },
    cardSectionStyle: {
        justifyContent: 'center'
    }
}

export {Confirm};