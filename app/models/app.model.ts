export class AppModel {

    query = '';

    geographic = {

        name : '',

        country : '',

        items : []

    };

    setWeather (response : any) {

        console.dir(response);

        this.geographic.name = response.city.name;

        this.geographic.country = response.city.country;

        this.geographic.items = response.list;

    }


}