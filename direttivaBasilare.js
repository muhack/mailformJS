

angular.module('app', [])
.controller('Controller', ['$scope', function($scope) {
    $scope.lunghezza = 0;
    var bestemmia = true;
    $scope.sentence = 'Hello there how are you today?';
    $scope.parseSentence = function () {
        $scope.lunghezza = $scope.sentence.length;
    }
    
    $scope.$watch('lunghezza', function(l) {
      if(l>75 & bestemmia)
      {
          $scope.sentence = "Mannaggia a san Gennaro: "+$scope.sentence;
          bestemmia = false;
      }
      check();
    });
    
    var check = function()
    {
        prima = new Array();
        dopo = new Array();
        
        linka("per","x");
        linka("pazz","paxxxixxxxim");
        linka("? ","??????");
        linka("! ","!!!!!");
        linka("ch","k");
        linka("buongiorno","bella zio");
        linka("caro","bella zio");
        linka("cara","bella zio");
        linka(". ", ".Minkia bordello.");
        linka("arrivederci", "cazzo mene");
        
          
        checkChange(prima, dopo, 15);
      
    }
    
    var linka = function(p,d)
    {
        prima.push(p);
        dopo.push(d);
    }
    
    var checkChange = function(prima, dopo, ritardo)
    {
        var n = prima.length;
        var totlen = $scope.sentence.length;

        for(var a=0; a<n; a++)
        {   
            ago = prima[a];
            //alert("ago:  "+ago);
            nuovoAgo = dopo[a];
            nl = nuovoAgo.length;
            var l = prima[a].length;
            for(var i=0; i<(totlen-l-ritardo); i++)
            {
                if($scope.sentence.substring((0+i),(0+l+i)).toLowerCase()===ago.toLowerCase())
                {
                    riattacco = 0+l+i;
                    $scope.sentence=$scope.sentence.substring(0,(0+i))+nuovoAgo+$scope.sentence.substring((riattacco),totlen); 
                }
            }    
        }

    }
    
}])
.directive("formMail", function() { 
    return { 
        restrict: "EAC", 
        templateUrl: "templateDirettivaBasilare.html",
    }; 
});