import invokeWebservice from "./InvokeWebservice.tsx";

class WebserviceClient {

    getGreetingWithName(name: string) {
        invokeWebservice(
            'get',
            '/v1/response/simple/' + name
        ).then((response) => {
                console.log("response data: " + response.data)
                response.data
            }
        ).catch((error) => console.log("Error: " + error))
    }

    getHtml(name: string) {
        invokeWebservice(
            'get',
            '/v1/response/simple/html'
        ).then((response) => {
            const link = document.createElement("a");
            const blob = new Blob([response.data.toString()], {type: 'text/plain'});
            const url = URL.createObjectURL(blob);
            link.download = name + ".html";
            link.href = url;
            link.click();
            }
        ).catch((error) => console.log("Error: " + error))
    }
}

const webserviceClient = new WebserviceClient();
export default webserviceClient;