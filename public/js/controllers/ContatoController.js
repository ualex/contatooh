angular.module('contatooh').controller('ContatoController',
   function($scope, $resource, $routeParams, Contato) {
    
      Contato.query(function(contatos) {
          $scope.contatos = contatos;
      });
    
      $scope.salvar = function() {
         $scope.contato.$save()
            .then(function() {
                $scope.mensagem = {texto: 'Salvo com sucesso'};
                $scope.contato  = new Contato();
            })
            .catch(function(erro) {
                console.log(erro);
                $scope.mensagem = {texto: 'Não foi possivel salvar'};
            });
      }
      if ($routeParams.contatoId) {          
          Contato.get({id: $routeParams.contatoId},
             function(dado) {
                $scope.contato = dado;
                console.log("sucesso"+dado);
             }, 
             function(erro) {
                $scope.mensagem = {texto: 'Não foi possível obter o contato'};
                console.log(erro);
             }
           );
          console.info($routeParams.contatoId);
       } else {
        $scope.contato = new Contato();
       }
    } 
);


