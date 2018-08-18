angular.module('primeiraApp').controller('DashboardCtrl', [
  '$scope',
  '$http',
  DashboardController
])

function DashboardController($scope, $http) {

  $scope.getSummary = function() {
    const url = 'http://localhost:3000/api/billingSummary'
    $http.get(url).sucess(function({credit = 0, debt = 0}) {
      $scope.credit = credit
      $scope.debt = debt
      $scope.total = credit - debt
    })
  }

  $scope.getSummary()
}
