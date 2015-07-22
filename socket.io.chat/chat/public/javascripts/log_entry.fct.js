(function () {
  angular.module('space')
    .factory('LogEntry', ['$resource', function ($resource) {
      return $resource('/log_entries/:logEntryId.json', null, {
        update: { method: 'PUT' }
      });
    }]);
})();
