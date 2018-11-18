module.exports.security = {
    cors: {

        /***************************************************************************
         *                                                                          *
         * Allow CORS on all routes by default? If not, you must enable CORS on a   *
         * per-route basis by either adding a "cors" configuration object to the    *
         * route config, or setting "cors:true" in the route config to use the      *
         * default settings below.                                                  *
         *                                                                          *
         ***************************************************************************/

        allRoutes: true,

        /***************************************************************************
         *                                                                          *
         * Which domains which are allowed CORS access? This can be a               *
         * comma-delimited list of hosts (beginning with http:// or https://) or    *
         * "*" to allow all domains CORS access.                                    *
         *                                                                          *
         ***************************************************************************/

        allowOrigins: '*',

        /***************************************************************************
         *                                                                          *
         * Allow cookies to be shared for CORS requests?                            *
         *                                                                          *
         ***************************************************************************/

        allowCredentials: false,

        /***************************************************************************
         *                                                                          *
         * Which methods should be allowed for CORS requests? This is only used in  *
         * response to preflight requests (see article linked above for more info)  *
         *                                                                          *
         ***************************************************************************/

        allowRequestMethods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',

        /***************************************************************************
         *                                                                          *
         * Which headers should be allowed for CORS requests? This is only used in  *
         * response to preflight requests.                                          *
         *                                                                          *
         ***************************************************************************/

        allowRequestHeaders: 'Origin, X-Requested-With, Content-Type, Content-Disposition, Accept, Authorization',

        allowResponseHeaders: 'Content-Type, Content-Disposition'

    }
};
