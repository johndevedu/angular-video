import angular from "angular";
import "./index.css";

angular.module("app", []).controller("MyController", [
  function() {
    this.userRoles = [
      {
        namespace: "user",
        role: "can-create",
        display: "User Creator",
        description: "You get to add users"
      },
      {
        namespace: "user",
        role: "can-delete",
        display: "User Remover",
        description: "You get to delete users"
      }
    ];

    this.options = this.userRoles.map(userRole => {
      return {
        value: userRole.namespace + ":" + userRole.role,
        display_value: userRole.display,
        subtext: userRole.description
      };
    });

    this.goThirty = function() {
      var videos = angular.element(document.querySelector("#test"));
      var video = videos[0];
      video.currentTime = 2;
      video.play();
    };

    this.play = function() {
      var videos = angular.element(document.querySelector("#test"));
      var video = videos[0];
      video.play();
    };

    this.pause = function() {
      var videos = angular.element(document.querySelector("#test"));
      var video = videos[0];
      video.pause();
    };
  }
]);

// Manually bootstrap your angular application
angular.bootstrap(document.getElementById("root"), ["app"]);
