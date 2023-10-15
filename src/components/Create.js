import React from 'react';
import { observer, inject } from 'mobx-react';

class Create extends React.Component {
    CreateVehicle = (e) => {
        e.preventDefault();
        this.props.VehicleStore.createVehicleAsync({
            name: this.refs.name.value,
            city: this.refs.city.value,
        });
        this.refs.name.value = null;
        this.refs.city.value = null;
    };
    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.CreateVehicle}>
                    <div className="form-group">
                        <input ref="name" id="name" type="text" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <input ref="city" id="city" type="text" placeholder="City"/>
                    </div>
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default inject("VehicleStore")(observer(Create)); 