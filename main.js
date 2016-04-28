'use strict';
var app = angular.module('myapp', []);

app.controller('mainCtrl', function($scope){

    $scope.balance= 0;
    $scope.amount = [];

    $scope.debitTotal =0;
    $scope.creditTotal = 0;
    $scope.addBalance = () => {
        $scope.amount.push($scope.newAmount);
        if($scope.newAmount.debit == ''){
            $scope.newAmount.debit ==0;
        }
        if($scope.newAmount.credit == ''){
            $scope.newAmount.credit ==0;
        }
        $scope.debitTotal += Number($scope.newAmount.debit);
        $scope.creditTotal += Number($scope.newAmount.credit);
        $scope.newAmount = {};
    };

    $scope.removeRow = balance => {
        var index = $scope.amount.indexOf(balance);
        console.log(balance);
        $scope.amount.splice(index, 1);
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
