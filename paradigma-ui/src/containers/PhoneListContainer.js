import React from 'react';

import {connect} from 'react-redux';
import * as actions from '../actions';
import PhoneList from '../components/PhoneList';
import { Card, Image, Loader} from 'semantic-ui-react';
import './PhoneListContainer.css';

class PhoneListContainer extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {
            selected: {}
        };
    }
    componentDidMount() {
        this.props.getPhoneList();
    }

    selectInfo(phone) {
        let newSate;
        if(this.state.selected.title === phone.title) {
            newSate = {};
        } else {
            newSate = phone;
        }
        this.setState({
            selected: newSate
        });
    }

    _renderList() {
        const list = this.props.phoneList.map((phone, index) => {
            return (
              <div key={phone.title} onClick={this.selectInfo.bind(this, phone)} className="card">
                <Card>
                    <Image src={phone.image} className="image"/>
                    <Card.Content>
                        <Card.Header>{phone.title}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{phone.price}€</span>
                        </Card.Meta>
                        <Card.Description>{phone.description}</Card.Description>                        
                        {(this.state.selected.title === phone.title ? <PhoneList details={phone} /> : '')}
                    </Card.Content>
                </Card>
              </div>
            );
        });
      
        return (
            <div className="list">
              { list }
            </div>
        );
    }

    render() {
        if(this.props.phoneList.length === 0) {
            return (
                <Loader active={true} content="Loading" />
            )
        }

        return (
            <div>
                <h1>Catálogo de Teléfonos móviles</h1>                
                { this._renderList()}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actions)(PhoneListContainer);