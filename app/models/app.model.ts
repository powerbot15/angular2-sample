export class AppModel {

    geographic = {

        name : '',

        country : '',

        items : []

    };

    setWeather (response : any) {

        console.dir(response);

        this.geographic.country = response.city.country;

        this.geographic.items = response.list;

    }


}