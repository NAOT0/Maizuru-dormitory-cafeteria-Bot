function createRichMessage() {
  return{
  "type": "carousel",
  "contents": [
    {
      "type": "bubble",
      "size": "micro",
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "何を食べたい？",
            "weight": "bold",
            "size": "sm",
            "wrap": true
          },
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": "定食",
              "text": "定食"
            },
            "position": "relative",
            "style": "secondary",
            "height": "sm"
          },
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": "ラーメン",
              "text": "ラーメン"
            },
            "height": "sm",
            "gravity": "top",
            "style": "secondary"
          },
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": "寿司",
              "text": "寿司"
            },
            "style": "secondary",
            "height": "sm"
          },
          {
            "type": "button",
            "action": {
              "type": "message",
              "text": "カフェ・軽食",
              "label": "カフェ・軽食"
            },
            "style": "secondary",
            "height": "sm"
          },
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": "打ち上げ候補",
              "text": "打ち上げ"
            },
            "style": "secondary",
            "height": "sm"
          }
        ],
        "spacing": "sm",
        "paddingAll": "13px",
        "margin": "none"
      }
    }
  ]
}
}

function ramen(){
  return{
  "type": "carousel",
  "contents": [
    {
      "type": "bubble",
      "size": "mega",
      "hero": {
        "type": "image",
        "url": "https://drive.usercontent.google.com/download?id=1nwM7WXlFGxcdyTtlW9X78XReX2y78yod",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "320:213"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "熱烈ラーメン(定休日:木曜)",
            "weight": "bold",
            "size": "sm"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "住所",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "京都府舞鶴市字小倉１１３−３",
                    "margin": "none"
                  }
                ]
              },
              {
                "type": "text",
                "text": "予算",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "1000~2000円"
                  }
                ]
              }
            ]
          }
        ],
        "spacing": "md",
        "paddingAll": "xxl",
        "margin": "none"
      }
    },
    {
      "type": "bubble",
      "size": "mega",
      "hero": {
        "type": "image",
        "url": "https://drive.usercontent.google.com/download?id=1SLjC0j2Zb8Q_1HXICvlbTZ7ZmECyNrbD&authuser=0",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "320:213"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "キラメキノトリ",
            "weight": "bold",
            "size": "sm"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "住所",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "京都府舞鶴市小倉２６８−８",
                    "margin": "none"
                  }
                ]
              },
              {
                "type": "text",
                "text": "予算",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "1000~2000円"
                  }
                ]
              }
            ]
          }
        ],
        "spacing": "md",
        "paddingAll": "xxl",
        "margin": "none"
      }
    },
    {
      "type": "bubble",
      "size": "mega",
      "hero": {
        "type": "image",
        "url": "https://drive.usercontent.google.com/download?id=1RKTZ_npUiTkejVJpCjP_O-cc9u3BYQVW",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "320:213"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "麺楽",
            "weight": "bold",
            "size": "sm"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "住所",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "京都府舞鶴市浜４４１−２",
                    "margin": "none"
                  }
                ]
              },
              {
                "type": "text",
                "text": "予算",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "1000~2000円"
                  }
                ]
              }
            ]
          }
        ],
        "spacing": "md",
        "paddingAll": "xxl",
        "margin": "none"
      }
    },
    {
      "type": "bubble",
      "size": "mega",
      "hero": {
        "type": "image",
        "url": "https://drive.usercontent.google.com/download?id=1doOfzqE9GgcLC7gytVdtyE9po3sOFNiQ",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "320:213"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "格別ヤ",
            "weight": "bold",
            "size": "sm"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "住所",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": " 京都府舞鶴市字北吸1045-29",
                    "margin": "none"
                  }
                ]
              },
              {
                "type": "text",
                "text": "予算",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "800~1500円"
                  }
                ]
              }
            ]
          }
        ],
        "spacing": "md",
        "paddingAll": "xxl",
        "margin": "none"
      }
    },
    {
      "type": "bubble",
      "size": "mega",
      "hero": {
        "type": "image",
        "url": "https://drive.usercontent.google.com/download?id=1--acd1hq2lVhnhxLRmqLALMOKOEVZ81v",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "320:213"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "幸村家",
            "weight": "bold",
            "size": "sm"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "住所",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "京都府舞鶴市魚屋126",
                    "margin": "none"
                  }
                ]
              },
              {
                "type": "text",
                "text": "予算",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "800~1200円"
                  }
                ]
              }
            ]
          }
        ],
        "spacing": "md",
        "paddingAll": "xxl",
        "margin": "none"
      }
    }
  ]
}
}

function sushi(){
  return{
  "type": "carousel",
  "contents": [
    {
      "type": "bubble",
      "size": "mega",
      "hero": {
        "type": "image",
        "url": "https://drive.usercontent.google.com/download?id=10lYakst-fl9w37AlKLGoxN47zaI_B1rz",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "320:213"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "かっぱ寿司",
            "weight": "bold",
            "size": "sm"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "住所",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "京都府舞鶴市大字市場28",
                    "margin": "none"
                  }
                ]
              },
              {
                "type": "text",
                "text": "予算",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "1500~3000円"
                  }
                ]
              }
            ]
          }
        ],
        "spacing": "md",
        "paddingAll": "xxl",
        "margin": "none"
      }
    },
    {
      "type": "bubble",
      "size": "mega",
      "hero": {
        "type": "image",
        "url": "https://drive.usercontent.google.com/download?id=1Zz4Z4groLnknVySlj03mF12jmWnRCh3q",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "320:213"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "はま寿司",
            "weight": "bold",
            "size": "sm"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "住所",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "京都府舞鶴市森509-3",
                    "margin": "none"
                  }
                ]
              },
              {
                "type": "text",
                "text": "予算",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "1000~3000円"
                  }
                ]
              }
            ]
          }
        ],
        "spacing": "md",
        "paddingAll": "xxl",
        "margin": "none"
      }
    }
  ]
}
}

function teisyoku(){
  return{
  "type": "carousel",
  "contents": [
    {
      "type": "bubble",
      "size": "mega",
      "hero": {
        "type": "image",
        "url": "https://drive.usercontent.google.com/download?id=1bTGkrAu76nCn9sjuKDWF_gNVk9S7kVy1",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "320:213"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "weight": "bold",
            "size": "sm",
            "text": "ふじの実"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "住所",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "京都府舞鶴市市場68−2",
                    "margin": "none"
                  }
                ]
              },
              {
                "type": "text",
                "text": "予算",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "1000~1800円"
                  }
                ]
              }
            ]
          }
        ],
        "spacing": "md",
        "paddingAll": "xxl",
        "margin": "none"
      }
    },
    {
      "type": "bubble",
      "size": "mega",
      "hero": {
        "type": "image",
        "url": "https://drive.usercontent.google.com/download?id=1xMUnKUVQasW_q1xcgNBOTb_3gO7Cq36Z",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "320:213"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "お食事処 ゆき",
            "weight": "bold",
            "size": "sm"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "住所",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "京都府舞鶴市浜626",
                    "margin": "none"
                  }
                ]
              },
              {
                "type": "text",
                "text": "予算",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "800~1500円"
                  }
                ]
              }
            ]
          }
        ],
        "spacing": "md",
        "paddingAll": "xxl",
        "margin": "none"
      }
    }
  ]
}
}

function cafe(){
  return{
  "type": "carousel",
  "contents": [
    {
      "type": "bubble",
      "size": "mega",
      "hero": {
        "type": "image",
        "url": "https://drive.usercontent.google.com/download?id=1M9ux2e7GuxXZnSB1QOqnGGJDTo-vFZx-",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "320:213"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "吟味屋マンボウ(カレー・鉄板焼き)",
            "weight": "bold",
            "size": "sm"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "住所",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "京都府舞鶴市行永東町29-1",
                    "margin": "none"
                  }
                ]
              },
              {
                "type": "text",
                "text": "予算",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "500~1000円"
                  }
                ]
              }
            ]
          }
        ],
        "spacing": "md",
        "paddingAll": "xxl",
        "margin": "none"
      }
    }
  ]
}
}

function utiage(){
    return{
  "type": "carousel",
  "contents": [
    {
      "type": "bubble",
      "size": "mega",
      "hero": {
        "type": "image",
        "url": "https://drive.usercontent.google.com/download?id=1kdtZcKXDisPCpb6h5LPr75dGdmHcqRn0",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "320:213"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "牛角 (4~12人)",
            "weight": "bold",
            "size": "sm"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "住所",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "京都府舞鶴市森448ｰ1",
                    "margin": "none"
                  }
                ]
              },
              {
                "type": "text",
                "text": "予算",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "4000~7000円"
                  }
                ]
              }
            ]
          }
        ],
        "spacing": "md",
        "paddingAll": "xxl",
        "margin": "none"
      }
    },
    {
      "type": "bubble",
      "size": "mega",
      "hero": {
        "type": "image",
        "url": "https://drive.usercontent.google.com/download?id=1AYdO9DK4um74uEjQupZkyB4EW1VJV-1F",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "320:213"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "美人韓 韓国料理(2~20人)",
            "weight": "bold",
            "size": "sm"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "住所",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "京都府舞鶴市森町５３１−１",
                    "margin": "none"
                  }
                ]
              },
              {
                "type": "text",
                "text": "予算",
                "flex": 1,
                "size": "sm",
                "color": "#aaaaaa"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "2000~6000円"
                  }
                ]
              }
            ]
          }
        ],
        "spacing": "md",
        "paddingAll": "xxl",
        "margin": "none"
      }
    }
  ]
}
}

function cancel(){
  return{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "＜店舗登録＞",
        "weight": "bold",
        "size": "xl",
        "style": "italic",
        "position": "relative",
        "decoration": "none",
        "gravity": "top",
        "align": "center"
      },
      {
        "type": "box",
        "layout": "vertical",
        "margin": "lg",
        "spacing": "sm",
        "contents": [
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "text",
                "text": "店名登録をしました。\n画像を送信してください。",
                "wrap": true,
                "size": "md",
                "flex": 5,
                "align": "center"
              }
            ]
          }
        ]
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "spacing": "xs",
    "contents": [
      {
        "type": "button",
        "style": "secondary",
        "height": "sm",
        "action": {
          "type": "message",
          "label": "操作を取り消す",
          "text": "キャンセル"
        }
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [],
        "margin": "sm"
      }
    ],
    "flex": 0
  }
}
}

