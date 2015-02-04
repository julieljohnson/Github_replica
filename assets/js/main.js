 $.ajaxSetup({
    async: false
 });

 $.getJSON('assets/json/user.json',function(_user){
    user = _user;
 });
$.getJSON('assets/json/repo.json',function(_repo){
    repo = _repo;
});
$.getJSON('assets/json/publicact.json',function(_publicact){
    publicact = _publicact;
});


var createPage = {
     init: function() {
         createPage.initStyling();

     },
     initStyling: function() {
        createPage.getGithubUserInfo();
        createPage.renderAllRepo(repo);
        createPage.renderPublicact(publicact);
     },

    initEvents: function() {

    },


//AJAX for user section of github replica//

    config: {
        baseURL: 'https://api.github.com/',
        user: 'julieljohnson'
    },

    getGithubUserInfo: function () {
        $.ajax({
            url: 'https://api.github.com/users/julieljohnson',
            type: 'GET',
            dataType:  'JSONP',
            success: function (data) {
                console.log(data.data);
                var user = data.data;
                var compiled = _.template(templates.user)
                $('.left-column').append(compiled(user));

            },
            error: function (error) {
                console.log(error);

            }
        });


//Jquery for tab events, still working on this//

        $('.top-tabs').on('click', '.repotab', function (event) {
            event.preventDefault();
            $('.publicsec').removeClass('active');
            $('.reposec').addClass('active');
            console.log('repo data works')
        });

        $('.top-tabs').on('click', '.publictab', function (event) {
            event.preventDefault();
            $('.reposec').removeClass('active');
            $('.publicsec').addClass('active');
            console.log('public data works');
        });



    },
        renderRepo: function (repo, index, array) {
            var compiled = _.template(templates.repo);
            $('.reposec').append(compiled(repo));
            console.log("repositories working");
        },

        renderPublicact: function (publicact, index, array) {
            var compiled = _.template(templates.publicact);
            $('.publicsec').append(compiled(publicact));
            console.log("public Activity working")
        },





        renderAllRepo: function(repoData) {
            console.log("repoData");
            _.each(repoData, createPage.renderRepo);
        },

        renderAllPublicact: function (publicData) {
            console.log("publicData");
            _.each(publicData, createPage.renderPublicact);
        },















        // config: {
        //     baseURL: 'https://api.github.com/',
        // },

        // getGithubRepoInfo: function () {
        //     $.ajax({
        //         url: 'https://api.github.com/users/julieljohnson/repos',
        //         type: 'GET',
        //         dataType:  'JSONP',
        //         success: function (data) {
        //             console.log(data.data);
        //             var repo = data.data;
        //             var compile = _.template(templates.repo)
        //             $('.left-column').append(compile(repo));
        //





}





$(document).ready(function() {

    createPage.init();
});
