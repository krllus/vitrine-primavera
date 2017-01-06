angular
  .module('admin.categories')
  .component('categoriesList', CampusesListComponent())
  .config(CampusesListConfig);

function CampusesListComponent() {
  return {
    templateUrl: './campuses-list.html',
    controller: 'CampusesListController',
    bindings: {
      campuses: '<',
      regions: '<'
    }
  };
}

function CampusesListConfig($stateProvider) {
  var state = {
    name: 'map.campuses.list',
    url: '/list',
    component: 'campusesList',
    resolve: {
      campuses: function(CampusesService) {
        return CampusesService.fetchAll();
      },
      regions: function(RegionsService) {
        return RegionsService.fetchAll();
      },
    }
  };

  $stateProvider.state(state);
}
