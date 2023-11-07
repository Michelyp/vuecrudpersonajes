import axios from "axios";
import Global from "./../Global";

export default class ServicioPersonaje{
    getSeries(){
        return new Promise(function(resolve){
            var request = "api/series";
            var url =Global.urlApiPersonajes + request;
            var series=[];
            axios.get(url).then(response=>{
                series= response.data;
                resolve(series);
            })
        })
    }
    findSerie(id){
        return new Promise(function(resolve){
            var request ="api/series/" +id;
            var url = Global.urlApiPersonajes +request;
            var serie={};
            axios.get(url).then(response=>{
                serie=response.data;
                resolve(serie);
            })
        })
    }
    findPersonajes(id){
        return new Promise(function(resolve){
            var request = "api/series/personajesserie/" +id;
            var url = Global.urlApiPersonajes +request;
            var personajes=[];
            axios.get(url).then(response=>{
                personajes = response.data;
                resolve(personajes);
            })
        })
    }
    
}