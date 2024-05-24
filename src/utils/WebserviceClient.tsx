import invokeWebservice from "./InvokeWebservice.tsx";

class WebserviceClient {

    getGreetingWithName(name: string) {
        console.log("input name :" + name);
        return invokeWebservice(
            'get',
            '/v1/response/simple/' + name
        ).then((response) => response.data
        ).catch((error) => console.log("Error: " + error))
    }

}

const webserviceClient = new WebserviceClient();
export default webserviceClient;