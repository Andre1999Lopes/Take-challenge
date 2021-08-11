const RepoController = require('./controllers/RepoController.js');

exports.handler = async (event) => {
    try {
        const response = await RepoController.getRepos();
        
        const repos = new Array();
        
        response.forEach(repo => {
            repos.push({
                name: repo.name,
                description: repo.description
            });
        });
        
        return {
            statusCode: 200,
            body: repos
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            message: "Erro interno"
        }
    }
}