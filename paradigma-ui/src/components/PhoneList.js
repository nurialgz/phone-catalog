import React from 'react';
import './PhoneList.css';

class PhoneList extends React.Component {

    render() {
        return (        
        <div>           
           <table>
               <tbody>
               <tr>
                   <td>Battery</td>
                   <td>{this.props.details.battery} mAh</td>
               </tr>
               <tr>
                   <td>Bluetooth</td>
                   <td>{this.props.details.bluetooth}</td>
               </tr>
               <tr>
                   <td>SIM</td>
                   <td>{this.props.details.SIM}</td>
               </tr>
               <tr>
                   <td>Cámara (resolución)</td>
                   <td>{this.props.details.camera.resolution} Mpx</td>
               </tr>
               <tr>
                   <td>Cámara FPS</td>
                   <td>{this.props.details.camera.FPS}</td>
               </tr>
               <tr>
                   <td>Sistema operativo</td>
                   <td>{this.props.details.operatingSystem}</td>
               </tr>
               <tr>
                   <td>Peso</td>
                   <td>{this.props.details.weight} g</td>
               </tr>
               </tbody>
           </table>
        </div>
        )
    }
}

export default PhoneList;