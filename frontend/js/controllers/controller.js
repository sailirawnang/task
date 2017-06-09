myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

        $scope.mySlides = [
            'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
        ];
        var abc = _.times(100, function (n) {
            return n;
        });

        var i = 0;
        $scope.buttonClick = function () {
            i++;
            console.log("This is a button Click");
        };



    })

    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/form.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
        $scope.submitForm = function (data) {
            console.log(data);
            $scope.formSubmitted = true;
        };
    })

    .controller('formDetailCtrl', function ($scope, $state, TemplateService, NavigationService, $timeout, apiService, $http, $stateParams) {
        $scope.formData = {};
        $scope.studSave = function (data) {
            console.log(data._id);
            $http.post("http://wohlig.io/api/Student/save", data).then(function (data) {
                console.log("*******************inside submit***************************", data);
                $message = "thank you";
                $state.go('task');
                // $scope.name="Hello";
                // console.log("verifying",name);
            });
        };
        console.log($stateParams.id);
        apiService.getuserDetail($stateParams.id, function (data) {
            console.log(data)
            if (data.data.value) {
                $scope.formData = data.data.data;
                $scope.formData.dob=new Date(data.data.data.dob);
            }

        });
    })

    .controller('taskCtrl', function ($scope, $http, NavigationService) {


        $http.post("http://wohlig.io/api/student/search").then(function (data) {
            console.log("*******************************", data);
            $scope.studentList = data.data.data.results;
            console.log("**** inside taskCtrl ***** & data is", $scope.studentList);
        });

        $scope.deleteUser = function (id) {
            console.log("*******id*********", id);
            var userList = {
                "_id": id
            };
            console.log("**********object******", userList);
            $http.post("http://wohlig.io/api/student/delete", userList).then(function (data) {
                console.log("*******************************", data);
            })

        }
        $scope.editUser = function (data) {
            console.log("***************inside edit*************", data);
            $scope.formData = {}
            $scope.formData.name = data.name;
            console.log("edited data is**********", $scope.formData.name)
        }

    })

    //Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });