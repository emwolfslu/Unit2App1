require(["esri/views/MapView", "esri/WebMap"], function(MapView, WebMap) {
        /************************************************************
         * Creates a new WebMap instance. A WebMap must reference
         * a PortalItem ID that represents a WebMap saved to
         * arcgis.com or an on-premise portal.
         *
         * To load a WebMap from an on-premise portal, set the portal
         * url with esriConfig.portalUrl.
         ************************************************************/
        var webmap = new WebMap({
          portalItem: {
            // autocasts as new PortalItem()
            id: "a351a019f4874c6ea636063c67fda6b1"
          }
        });
