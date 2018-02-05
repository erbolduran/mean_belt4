var mongoose = require('mongoose'),
    db_name  = 'belt4';

mongoose.connect(`mongodb://localhost/${db_name}`);