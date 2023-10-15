import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

class VehicleList extends React.Component {
    componentDidMount() {
        this.props.VehicleStore.getVehiclesAsync();
    }

    searchVehicle = (e) => {
        if (e.key === "Enter") {
            this.props.VehicleStore.search = e.target.value;
        }
    }

    sortVehicle = () => {
        this.props.VehicleStore.vehicleData.isAscending = this.props.VehicleStore.vehicleData.isAscending 
        ? false : true;
        this.props.VehicleStore.getVehiclesAsync();
    }

    render() {
        return (
            <div>
                <input type="search" placeholder="Search" onKeyPress={this.searchVehicle} />
                <input type="submit" value="Sort" onClick={this.sortVehicle}/>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>Date Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.VehicleStore.vehicleData.model.map(vehicle => (
                            <tr key={vehicle.id}>
                                <td>{vehicle.name}</td>
                                <td>{vehicle.city}</td>
                                <td>{vehicle.dateCreated}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to="/create">Create Vehicle</Link>
            </div>
        )
    }
}

export default inject("VehicleStore")(observer(VehicleList));