import { runInAction, makeAutoObservable } from 'mobx';
import VehicleService from '../services/VehicleService'; // Update the path
 
class VehicleStore {
    constructor() {
      this.vehicleService = new VehicleService();
      makeAutoObservable(this);
    }
  
    vehicleData = {
      model: []
    };
    status = "initial";
    searchQuery = "";
  
     getVehiclesAsync = async () => {
      try {
        var params = {
          pageNumber: this.vehicleData.pageNumber,
          searchQuery: this.searchQuery,
          isAscending: this.vehicleData.isAscending
        };
        const urlParams = new URLSearchParams(Object.entries(params));
        const data = await this.vehicleService.get(urlParams);
        runInAction(() => {
          this.vehicleData = data;
        });
      } catch (error) {
         runInAction(() => {
             this.status = "error";
         });
     }
 }; 
 createVehicleAsync = async (model) => {
     try {
         const response = await this.vehicleService.post(model);
         if (response.status === 201) {
             runInAction(() => {
                 this.status = "success";
             })
         } 
     } catch (error) {
         runInAction(() => {
             this.status = "error";
         });
     }

 };
 updateVehicleAsync = async (vehicle) => {
     try {
         const response = await this.vehicleService.put(vehicle)
         if (response.status === 200) {
             runInAction(() => {
                 this.status = "success";
             })
         } 
     } catch (error) {
         runInAction(() => {
             this.status = "error";
         });
     }
 };
 deleteVehicleAsync = async (id) => {
     try {
         const response = await this.vehicleService.delete(id);
         if (response.status === 204) {
             runInAction(() => {
                 this.status = "success";
             })
         } 
     } catch (error) {
         runInAction(() => {
             this.status = "error";
         });
     }
 }
}

/* decorate(CountryStore, {
 countryData: observable,
 searchQuery: observable,
 status: observable
}); */
const vehicleStore = new VehicleStore();

export default vehicleStore;
