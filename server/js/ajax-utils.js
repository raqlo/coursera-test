(function (global){

    // Set up a namespace for our utility
    var ajaxUtils = {};

    // Returns an HTTP request object
    function getRequestObject() {
        if(window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        }
        else if (window.ActiveXObject) {
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else {
            global.alert("Ajax is not supported!");
            return(null);
        }
    }

    // Makes an Ajax GET requesto to 'requestUrl'
    ajaxUtils.sendGetRequest =
        function (requestUrl, responseHandler) {
            var request = getRequestObject();
            request.onreadystatechange =
                function () {
                    handlerResponse(request, responseHandler);
                };
            request.open("GET", requestUrl, true);
            request.send(null); //POST only
        };

    // nly calls user provided 'response handler'
    //function if response is ready
    //and not an error
    function handlerResponse(request, responseHandler) {
        if ((request.readyState === 4)&&
            (request.status == 200)) {
            responseHandler(request);
        }
    }

    global.$ajaxUtils = ajaxUtils;
})(window);

/**
 * Created by Alex on 1/1/2017.
 */
