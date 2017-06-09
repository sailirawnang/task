myApp.factory('apiService', function ($http, $q, $timeout) {
    return {

        // This is a demo Service for POST Method.
        getDemo: function (formData, callback) {
            $http({
                url: adminurl + 'demo/demoService',
                method: 'POST',
                data: formData
            }).success(callback);
        },
        // This is a demo Service for POST Method.

        getuserDetail: function (id, callback) {
            var data = {
                '_id': id
            };
            console.log(data);
            $http.post("http://wohlig.io/api/student/getOne", data).then(function (data) {
                console.log(data);
                callback(data)


            })
        }


    };


});