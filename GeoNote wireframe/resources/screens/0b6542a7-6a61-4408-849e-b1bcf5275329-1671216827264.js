jQuery("#simulation")
  .on("click", ".s-0b6542a7-6a61-4408-849e-b1bcf5275329 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#282828"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#282828"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
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
    } else if(jFirer.is("#s-Paragraph_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_5" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_5" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
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
    } else if(jFirer.is("#s-Paragraph_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_7" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_7" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
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
    } else if(jFirer.is("#s-Paragraph_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_17 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_17 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E5E5EA",
                      "border-right-color": "#E5E5EA",
                      "border-bottom-color": "#E5E5EA",
                      "border-left-color": "#E5E5EA"
                    }
                  },{
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_17 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_18 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_18 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#F2F2F7",
                      "border-right-color": "#F2F2F7",
                      "border-bottom-color": "#F2F2F7",
                      "border-left-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_18 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "action": "jimSubstring",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_4",
                    "property": "jimGetValue"
                  },"0","2" ]
                },"11" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_4" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimSubstring",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-Input_4",
                            "property": "jimGetValue"
                          },"0","2" ]
                        },"12" ]
                      },{
                        "action": "jimSubstring",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_4",
                          "property": "jimGetValue"
                        },"2","5" ]
                      } ]
                    }
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
    } else if(jFirer.is("#s-Paragraph_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_18 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_18 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E5E5EA",
                      "border-right-color": "#E5E5EA",
                      "border-bottom-color": "#E5E5EA",
                      "border-left-color": "#E5E5EA"
                    }
                  },{
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_18 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_17 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_17 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#F2F2F7",
                      "border-right-color": "#F2F2F7",
                      "border-bottom-color": "#F2F2F7",
                      "border-left-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_17 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimSubstring",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_4",
                    "property": "jimGetValue"
                  },"0","2" ]
                },"11" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_4" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimSubstring",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-Input_4",
                            "property": "jimGetValue"
                          },"0","2" ]
                        },"12" ]
                      },{
                        "action": "jimSubstring",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_4",
                          "property": "jimGetValue"
                        },"2","5" ]
                      } ]
                    }
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
    } else if(jFirer.is("#s-Path_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Path_5" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Path_5" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
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
    } else if(jFirer.is("#s-Path_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Path_6" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Path_6" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
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
    } else if(jFirer.is("#s-Paragraph_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_19" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_19" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
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
  .on("change", ".s-0b6542a7-6a61-4408-849e-b1bcf5275329 .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "action": "jimSubstring",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_4",
                    "property": "jimGetValue"
                  },"0","2" ]
                },"11" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_18 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_18 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E5E5EA",
                      "border-right-color": "#E5E5EA",
                      "border-bottom-color": "#E5E5EA",
                      "border-left-color": "#E5E5EA"
                    }
                  },{
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_18 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_17 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_17 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#F2F2F7",
                      "border-right-color": "#F2F2F7",
                      "border-bottom-color": "#F2F2F7",
                      "border-left-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_17 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_17 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_17 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E5E5EA",
                      "border-right-color": "#E5E5EA",
                      "border-bottom-color": "#E5E5EA",
                      "border-left-color": "#E5E5EA"
                    }
                  },{
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_17 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_18 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_18 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#F2F2F7",
                      "border-right-color": "#F2F2F7",
                      "border-bottom-color": "#F2F2F7",
                      "border-left-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-0b6542a7-6a61-4408-849e-b1bcf5275329 #s-Paragraph_18 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
  });