import React from 'react';
import { render } from 'react-dom';
import { Title } from './Components/Title';

render(
    <Title text="Hello State" />,
    document.getElementById('content')
);
