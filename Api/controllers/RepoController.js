const fetch = require('node-fetch');

class RepoController {
    static async getRepos() {
        try {
            const url = 'https://api.github.com/orgs/takenet/repos?type=all&direction=asc&per_page=5';
            const res = await fetch(url, {
            	headers: {
            		accept: 'application/vnd.github.v3+json'
            	}
            })
            .then(res => res.json())
    	    .then(data => {return data;});
    	    
    	    return res;
        }
        catch (error) {
            return error;
        }
    }
}

module.exports = RepoController;