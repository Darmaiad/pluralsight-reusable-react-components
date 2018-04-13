import React from 'react';
import Label from 'ps-react/Label';

/** Required label */
export default function ExampleRequired() {
    // since 'required' is a boolean we do not have to type the word true
    return <Label htmlFor="test" label="test" required />
}
