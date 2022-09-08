//React Native
import React, { useState } from 'react';
import { TextInput } from 'react-native';

//TextFormatter
import TextFormatter from './TextFormatter';

export default () => {
    const [phone, setPhone] = useState('');

    return (
        <TextInput
            value={phone}
            onChangeText={(value) => setPhone(TextFormatter({ format: '(000) 000 0000', text: value }))}
        />
    );
}
