import axios from 'axios';
import store from "shared/js/React/Store/store";
var _ = require('lodash');

export function FetchData(){

    /** Set Methods */ 
    // 1. Fetch Data
    this.start = () => {

        // Json Path 
        // '<%= path %>/json/App.json', 
        this.init=['https://interactive.guim.co.uk/docsdata/1YuyLLZd4U4gB1SKYzkXMKqP-KnqgQGDUhx3yTqaPYD0.json']
        // Fetch Json Data for build and load into Reducers
        axios.all(this.init.map(l => axios.get(l)))

        .then(axios.spread(function (...res) { 
                const {
                    Client,
                    Header,
                    BodyCopy,
                    PartnerZone,
                    Interactive_List_Meta,
                    Interactive_List_Categories,
                    Interactive_Category_Description
                } = res[0].data.sheets

                console.log("DATA RESPONSE");

                store.dispatch({ type:"STORE_META", payload:[Header,BodyCopy,PartnerZone,Client] });
                store.dispatch({ type:"STORE_APPLICATION", payload:[Interactive_List_Meta.reverse(),Interactive_List_Categories.reverse(),Interactive_Category_Description] });
                store.dispatch({ type:"STORE_APPLICATIONREADY", payload:true });
 
            })
        )
        .catch(function (error) { 
            console.log("ERROR", error); 
        });
    }
}