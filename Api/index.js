const RepoController = require('./controllers/RepoController.js');

exports.handler = async (event) => {
    const response = await RepoController.getRepos();
        
    const repos = new Array();
    
    response.forEach(repo => {
    	repos.push({
    		name: repo.name,
    		description: repo.description
    	});
    });
    
    return repos;
}