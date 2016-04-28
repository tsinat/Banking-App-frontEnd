'use strict';
var app = angular.module('myapp', []);

app.controller('mainCtrl', function($scope){

    $scope.balance= 0;
    $scope.amount = [];

    $scope.debitTotal =0;
    $scope.creditTotal = 0;
    $scope.addBalance = () => {
        $scope.amount.push($scope.newAmount);
        $scope.debitTotal += Number($scope.newAmount.debit || 0);
        $scope.creditTotal += Number($scope.newAmount.credit || 0);
        $scope.balance = $scope.debitTotal + $scope.creditTotal;
        $scope.newAmount = {};
    };

    $scope.removeRow = balance => {
        console.log(balance);
        var index = $scope.amount.indexOf(balance);
        $scope.amount.splice(index, 1);
         $scope.debitTotal -= Number($scope.balance.debit || 0);
        $scope.creditTotal -= Number($scope.balance.credit || 0);
        $scope.balance = $scope.debitTotal + $scope.creditTotal;

    };
    $scope.editBalance = balance => {
        console.log(balance);

    }
    $scope.sortBy = balance =>{
        console.log(balance);

        if($scope.sortOrder == balance){
            $scope.sortOrder = '-' + balance;
        }
        else{
            $scope.sortOrder = balance;
        }
    }
});
