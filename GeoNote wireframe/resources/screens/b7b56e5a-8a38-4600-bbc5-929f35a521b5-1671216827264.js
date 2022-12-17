jQuery("#simulation")
  .on("click", ".s-b7b56e5a-8a38-4600-bbc5-929f35a521b5 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b7b56e5a-8a38-4600-bbc5-929f35a521b5 #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-b7b56e5a-8a38-4600-bbc5-929f35a521b5 #s-Rectangle_13 span" ],
                    "attributes": {
                      "color": "#999999"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b7b56e5a-8a38-4600-bbc5-929f35a521b5 #s-Rectangle_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#272A3B"
                    }
                  },{
                    "target": [ "#s-b7b56e5a-8a38-4600-bbc5-929f35a521b5 #s-Rectangle_12 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b7b56e5a-8a38-4600-bbc5-929f35a521b5 #s-Rectangle_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-b7b56e5a-8a38-4600-bbc5-929f35a521b5 #s-Rectangle_12 span" ],
                    "attributes": {
                      "color": "#999999"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-b7b56e5a-8a38-4600-bbc5-929f35a521b5 #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#272A3B"
                    }
                  },{
                    "target": [ "#s-b7b56e5a-8a38-4600-bbc5-929f35a521b5 #s-Rectangle_13 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("drag", ".s-b7b56e5a-8a38-4600-bbc5-929f35a521b5 .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Rectangle_16" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("dragend", ".s-b7b56e5a-8a38-4600-bbc5-929f35a521b5 .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-b7b56e5a-8a38-4600-bbc5-929f35a521b5 .drag", function(event, data) {
    var id = data.drag.id;
    if(id.startsWith("r")){
    	var numR = id.match(/\d+/)[0];
    	id = id.replace("r"+numR+"_",'');
    }
    if(id.startsWith("s-"))
      jimEvent(event).jimDestroyDrag(jQuery(this));
  });