module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {


    demo: function (req, res) {
        res.callback("error", null);
    }



};
module.exports = _.assign(module.exports, controller);