import React from 'react';
import PropTypes from 'prop-types';

import roles from '../data/roles';

import BaseRegisters from './BaseRegisters';

class Coils extends BaseRegisters {
    nativeField = 'coils'

    getFields() { 
        let rooms = this.props.rooms.map(room => ({value: room._id, title: room._id}));
        rooms.unshift({value: '', title: ''});

        let result = [
            {name: '_address', title: 'Address', type: 'text'},
            {name: 'name', title: 'Name', type: 'text'},
            {name: 'description', title: 'Description', type: 'text'},
            {name: 'formula', title: 'formula', type: 'text'},
            {name: 'role', title: 'Role', type: 'select', options: roles},
            {name: 'room', title: 'Room', type: 'select', options: rooms},
            {name: 'poll', title: 'Poll', type: 'checkbox'},
            {name: 'wp', title: 'WP', type: 'checkbox'},
            {name: 'cw', title: 'CW', type: 'checkbox'},
            {name: 'isScale', title: 'SF', type: 'checkbox'},
        ]

        if (this.props.native.params.multiDeviceId) {
            result.splice(1, 0, 
                {name: 'deviceId', title: 'Slave ID', type: 'text'},
            );
        }

        return result;
    }
}

Coils.propTypes = {
    common: PropTypes.object.isRequired,
    native: PropTypes.object.isRequired,
    instance: PropTypes.number.isRequired,
    adapterName: PropTypes.string.isRequired,
    onError: PropTypes.func,
    onLoad: PropTypes.func,
    onChange: PropTypes.func,
    changed: PropTypes.bool,
    socket: PropTypes.object.isRequired,
};

export default Coils;
