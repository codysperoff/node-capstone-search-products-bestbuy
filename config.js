
exports.DATABASE_URL = process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    (process.env.NODE_ENV === 'production' ?
     'mongodb://admin:admin@ds119081.mlab.com:19081/node-capstone-search-food-grubhub' :
     'mongodb://admin:admin@ds119081.mlab.com:19081/node-capstone-search-food-grubhub');
exports.PORT = process.env.PORT || 3004;
