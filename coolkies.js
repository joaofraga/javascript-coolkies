coolkies = {

    // Set a new cookie or modify an existing

    set : function( key, value, options ) {

        if(typeof key !== 'string' && typeof value !== 'string' ) {
            console.error('Cookies key and value are obrigatory and need to be strings.');
            return false;
        }

        var data = {
            key : '',
            value : '',
            expires : 'expires= ;',
            domain : 'domain= ;',
            path : 'path=/;'
        };

        // Set cookie expires
        if( typeof options.expires !== 'number' )
            options.expires = 1;

        date = new Date();
        date.setTime(date.getTime()+(options.expires*24*60*60*1000));
        data.expires = "expires="+date.toGMTString()+";";

        // Set cookie path
        if( typeof options.path === 'string' )
            data.path = options.path;

        // Set cookie domain
        if( typeof options.domain === 'string' )
            data.domain = options.domain;

        return document.cookie = key + '=' + value + ';' + data.expires + data.domain + data.path;

    },

    // Get cookie value using key name

    get : function ( key ) {

        if( typeof key !== 'string' ) {
            console.error('Cookie key are obrigatory and need to be strings.');
            return false;
        }

        var all_cookies;

        all_cookies = this.find();

        return ( typeof all_cookies[key] !== 'undefined' ) ? all_cookies[key] : false;

    },

    // Remove a cookie

    remove : function ( key ) {

        this.set(key,'',{'expires':-1})

    },

    // Verify if a cookie exists

    exists : function( key ) {
        return ( this.get(key) !== false ) ? true : false;
    },

    // Get all cookies in array

    find : function() {

        var cookie_array, my_cookies, temp_cookie, x;

        my_cookies = Array();
        cookie_array = document.cookie.split('; ');

        for( x=0; x < cookie_array.length; x++ ) {
            temp_cookie = cookie_array[x].split('=');
            my_cookies[temp_cookie[0]] = temp_cookie[1];
        }

        return my_cookies;
    }

}

