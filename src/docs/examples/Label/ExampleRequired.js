import React from 'react';
import Label from 'ps-react/Label';

/** Required label */
const ExampleRequired = () => 
    // since 'required' is a boolean we do not have to type the word true
    <Label htmlFor="test" label="test" required />;

export default ExampleRequired;