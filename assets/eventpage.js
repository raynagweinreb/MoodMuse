const APIController = (function(){

    const clientId = '';
    const clientSecret = '';

    //private methods
    const _getToken = async () => {

        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-ww-form-urlencoded',
                'Authorization' : 'Basic' + btoa(clientId + ':' +clientSecret)
            },
            body: 'grant_type-client_credentials'
        });
        const data = await result.json();
        return data.access_token;
    }

})();