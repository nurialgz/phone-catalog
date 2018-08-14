import React from 'react';
import ReactDOM from 'react-dom';
import PhoneList from './PhoneList';
import '../setupTest.js';

import { shallow, mount, render } from 'enzyme';

const obj = {
    title: 'XIAOMI REDMI S2',
    description: 'Android 8.1 Oreo, Qualcomm Snapdragon 625 (8 núcleos)',
    image: 'https://chinacoupon.info/wp-content/uploads/2018/06/Xiaomi-Redmi-S2-4G-Phablet-1.jpg',
    price: 179, 
    weight: 170,
    SIM: 'nano SIM',
    operatingSystem: 'Android 8.1 Oreo',
    battery: 3080,
    bluetooth: 4.2,
    camera: {
      resolution: 12,
      FPS: 30
    }
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PhoneList details={obj}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the table as it is suppose to', () => {
    const wrapper = shallow(<PhoneList details={obj}/>);
    const welcome =<div>           
        <table>
            <tbody>
            <tr>
                <td>Battery</td>
                <td>{obj.battery} mAh</td>
            </tr>
            <tr>
                <td>Bluetooth</td>
                <td>{obj.bluetooth}</td>
            </tr>
            <tr>
                <td>SIM</td>
                <td>{obj.SIM}</td>
            </tr>
            <tr>
                <td>Cámara (resolución)</td>
                <td>{obj.camera.resolution} Mpx</td>
            </tr>
            <tr>
                <td>Cámara FPS</td>
                <td>{obj.camera.FPS}</td>
            </tr>
            <tr>
                <td>Sistema operativo</td>
                <td>{obj.operatingSystem}</td>
            </tr>
            <tr>
                <td>Peso</td>
                <td>{obj.weight} g</td>
            </tr>
            </tbody>
        </table>
    </div>;
    expect(wrapper.contains(welcome)).toEqual(true);
});