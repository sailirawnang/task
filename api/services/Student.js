var schema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    dob: {
        type: Date,
    },
    mobile_num: {
        type: Number,
    },
    hobbies: {
        type: String,
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Student', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);