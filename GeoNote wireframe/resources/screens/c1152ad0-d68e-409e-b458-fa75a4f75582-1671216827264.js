jQuery("#simulation")
  .on("click", ".s-c1152ad0-d68e-409e-b458-fa75a4f75582 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-Rectangle_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-Rectangle_5 span" ],
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
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-Rectangle_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#272A3B"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-Rectangle_3 span" ],
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
    } else if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-Rectangle_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-Rectangle_3 span" ],
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
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-Rectangle_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#272A3B"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-Rectangle_5 span" ],
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
    } else if(jFirer.is("#s-c10_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #434343)"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "1.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "1.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "0.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "0.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "0.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "0.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
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
    } else if(jFirer.is("#s-c9_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #434343)"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "1.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "1.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "0.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "0.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "0.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "0.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
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
    } else if(jFirer.is("#s-c8_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #434343)"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "1.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "1.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "0.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "0.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "0.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "0.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
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
    } else if(jFirer.is("#s-c7_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #434343)"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "1.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "1.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "0.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "0.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "0.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "0.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
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
    } else if(jFirer.is("#s-c6_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #434343)"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "1.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "1.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "0.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "0.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "0.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "0.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
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
    } else if(jFirer.is("#s-c5_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #434343)"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "1.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "1.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "0.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "0.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "0.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "0.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
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
    } else if(jFirer.is("#s-c4_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #434343)"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "1.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "1.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "0.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "0.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "0.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "0.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
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
    } else if(jFirer.is("#s-c3_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #434343)"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "1.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "1.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "0.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "0.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "0.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "0.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
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
    } else if(jFirer.is("#s-c2_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #434343)"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "1.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "1.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "0.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "0.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "0.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "0.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
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
    } else if(jFirer.is("#s-c1_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #434343)"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "1.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "1.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "0.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "0.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "0.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "0.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
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
    } else if(jFirer.is("#s-c10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #434343)"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "1.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "1.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "0.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "0.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "0.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "0.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
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
    } else if(jFirer.is("#s-c9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #434343)"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "1.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "1.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "0.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "0.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "0.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "0.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
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
    } else if(jFirer.is("#s-c8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #434343)"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "1.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "1.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "0.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "0.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "0.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "0.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
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
    } else if(jFirer.is("#s-c7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #434343)"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "1.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "1.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "0.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "0.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "0.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "0.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
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
    } else if(jFirer.is("#s-c6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #434343)"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "1.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "1.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "0.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "0.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "0.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "0.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
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
    } else if(jFirer.is("#s-c5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #434343)"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "1.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "1.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "0.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "0.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "0.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "0.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
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
    } else if(jFirer.is("#s-c4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #434343)"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "1.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "1.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "0.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "0.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "0.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "0.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
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
    } else if(jFirer.is("#s-c3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #434343)"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "1.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "1.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "0.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "0.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "0.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "0.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
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
    } else if(jFirer.is("#s-c2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #434343)"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "1.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "1.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "0.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "0.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "0.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "0.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
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
    } else if(jFirer.is("#s-c1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #434343)"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "1.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "1.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .borderLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "0.0px",
                      "border-top-style": "solid",
                      "border-top-color": "#D9D9D9",
                      "border-right-width": "0.0px",
                      "border-right-style": "solid",
                      "border-right-color": "#D9D9D9",
                      "border-bottom-width": "0.0px",
                      "border-bottom-style": "solid",
                      "border-bottom-color": "#D9D9D9",
                      "border-left-width": "0.0px",
                      "border-left-style": "solid",
                      "border-left-color": "#D9D9D9",
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c1_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c2_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c9 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c7 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c10 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c3_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c6 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c5_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4_1 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c4 > .backgroundLayer",
                  "#s-c1152ad0-d68e-409e-b458-fa75a4f75582 #s-c8_1 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
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
    } else if(jFirer.is("#s-Rectangle_9")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ null,"10" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ null,"11" ]
              },
              "actions": [
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
  .on("drag", ".s-c1152ad0-d68e-409e-b458-fa75a4f75582 .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Rectangle_20" ],
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
  .on("dragend", ".s-c1152ad0-d68e-409e-b458-fa75a4f75582 .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-c1152ad0-d68e-409e-b458-fa75a4f75582 .drag", function(event, data) {
    var id = data.drag.id;
    if(id.startsWith("r")){
    	var numR = id.match(/\d+/)[0];
    	id = id.replace("r"+numR+"_",'');
    }
    if(id.startsWith("s-"))
      jimEvent(event).jimDestroyDrag(jQuery(this));
  });