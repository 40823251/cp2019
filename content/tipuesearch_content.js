var tipuesearch = {"pages": [{'title': 'About', 'text': '我的倉儲: https://github.com/40823251/cp2019 \n \xa0 \xa0 \xa0 \xa0 課程網站: http://mde.tw/cp2019 \xa0 \n test.pdf \n \n  取 Dart 程式的按鈕  \n 放大   回復   Hello   For Loop   Sum Runge-Kutta \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': '每周進度', 'text': '', 'tags': '', 'url': '每周進度.html'}, {'title': '課程筆記與問題', 'text': '更新至第十三週   \n', 'tags': '', 'url': '課程筆記與問題.html'}, {'title': 'w3\xa0 Hello程式', 'text': '原始碼: \n void main() {\n    print("哈囉!");\n} \n \n \n', 'tags': '', 'url': 'w3\xa0 Hello程式.html'}, {'title': 'w4\xa0 上傳圖片', 'text': '如何上傳圖片 \n \n \n \n \n', 'tags': '', 'url': 'w4\xa0 上傳圖片.html'}, {'title': 'w6\xa0 \xa0For迴圈', 'text': '\n for迴圈原始碼: 程式碼 \n int i;\nint sum;\n \nmain(){\n  sum = 0;\n  for(i=1;i <= 10 ;i++){\n    sum += i;\n    print("$sum");\n  }\n  print(\'sum = $sum\');\n} \n \n', 'tags': '', 'url': 'w6\xa0 \xa0For迴圈.html'}, {'title': 'w7\xa0 \xa0解微分方程式', 'text': '如何更改網頁名稱  \n \n', 'tags': '', 'url': 'w7\xa0 \xa0解微分方程式.html'}, {'title': 'w8\xa0 \xa0部落格', 'text': '部落格的注意事項 \n', 'tags': '', 'url': 'w8\xa0 \xa0部落格.html'}, {'title': 'w9\xa0 \xa0期中考週', 'text': '\n', 'tags': '', 'url': 'w9\xa0 \xa0期中考週.html'}, {'title': 'w11\xa0 \xa0BG1溫度', 'text': '純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping   Function   Function Parameter   Fat Arrow   temp-translarion \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery \n Flutter 程式 \n Flutter1   Flutter2   Flutter3 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n', 'tags': '', 'url': 'w11\xa0 \xa0BG1溫度.html'}, {'title': 'w12\xa0 \xa0CF轉換', 'text': '純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping   Function   Function Parameter   Fat Arrow   Temp 1 \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery   temp2 \n Flutter 程式 \n Flutter0   Flutter1   Flutter2   Flutter3   Flutter4   Flutter Counter   ROC Flag   踩地雷 1   踩地雷 2   踩地雷 3   踩地雷 4 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n', 'tags': '', 'url': 'w12\xa0 \xa0CF轉換.html'}, {'title': 'w13\xa0 \xa0CF影片', 'text': '溫度的轉換(shareX壞了無聲版) \n \n 重點整理: 1.lnit是一個整數物件 ，可與parse (讀取) 一起宣告。 2.將數字代入指定的公式，必須經由運算可得。 3. == 表示判斷式。 4.Input是html的表單。 value(預設) 5.body中的white為白色 6.InputElement是資料型別 7.Output、innerHtml是屬性 \n 心得: 這次w12任務主要說明攝氏與華氏的轉換，從老師給的數字列去分析如何將此代入轉換，經由number代入轉換公式可得其結果，我們可以從中去學習html的轉換，以及提及的python的應用，又或者將其轉換為手機程式，提高生活使用程式的普及性。 \n \n  取 Dart 程式的按鈕  \n 純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping   Function   Function Parameter   Fat Arrow   Temp 1 \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery   temp2 \n Flutter 程式 \n Flutter0   Flutter1   Flutter2   Flutter3   Flutter4   Flutter Counter   ROC Flag   踩地雷 1   踩地雷 2   踩地雷 3   踩地雷 4 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n', 'tags': '', 'url': 'w13\xa0 \xa0CF影片.html'}, {'title': 'w14\xa0 \xa0JS國旗', 'text': '\n \n import \'dart:html\';\nimport \'dart:math\' as Math;\n \nCanvasElement canvas;\nCanvasRenderingContext2D ctx;\nint flag_w = 300;\nint flag_h = 200;\nnum circle_x = flag_w / 4;\nnum circle_y = flag_h / 4;\n \nvoid main() {\n  canvas = querySelector(\'#canvas\');\n  ctx = canvas.getContext(\'2d\');\n \n  drawROC(ctx);\n  querySelector("#roc").onClick.listen((e) => drawROC(ctx));\n  querySelector("#usa").onClick.listen((e) => drawUSA(ctx));\n  querySelector("#button").onClick.listen((e) => clearCanvas());\n}\n \nvoid drawUSA(ctx){\n  // 請畫出美國國旗\n  ctx.clearRect(0, 0, flag_w, flag_h);\n  ctx.font = "30px Arial";\n  ctx.strokeStyle = \'rgb(255, 0, 0)\';\n  ctx.strokeText("請畫出美國國旗", flag_w/6, flag_w/4);\n}\n \nvoid drawROC(ctx){\n  // 先畫滿地紅\n  ctx.clearRect(0, 0, flag_w, flag_h);\n  ctx.fillStyle = \'rgb(255, 0, 0)\';\n  ctx.fillRect(0, 0, flag_w, flag_h);\n  // 再畫青天\n  ctx.fillStyle = \'rgb(0, 0, 150)\';\n  ctx.fillRect(0, 0, flag_w / 2, flag_h / 2);\n  // 畫十二道光芒白日\n  ctx.beginPath();\n  num star_radius = flag_w / 8;\n  num angle = 0;\n  for (int i = 0; i < 25; i++) {\n    angle += 5 * Math.pi * 2 / 12;\n    num toX = circle_x + Math.cos(angle) * star_radius;\n    num toY = circle_y + Math.sin(angle) * star_radius;\n    // 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo\n    if (i != 0)\n      ctx.lineTo(toX, toY);\n    else\n      ctx.moveTo(toX, toY);\n  }\n  ctx.closePath();\n  // 將填色設為白色\n  ctx.fillStyle = \'#fff\';\n  ctx.fill();\n  // 白日:藍圈\n  ctx.beginPath();\n  ctx.arc(circle_x, circle_y, flag_w * 17 / 240, 0, Math.pi * 2, true);\n  ctx.closePath();\n  // 填色設為藍色\n  ctx.fillStyle = \'rgb(0, 0, 149)\';\n  ctx.fill();\n  // 白日:白心\n  ctx.beginPath();\n  ctx.arc(circle_x, circle_y, flag_w / 16, 0, Math.pi * 2, true);\n  ctx.closePath();\n  // 填色設為白色\n  ctx.fillStyle = \'#fff\';\n  ctx.fill();\n}\n \nvoid clearCanvas(){\n  ctx.clearRect(0, 0, flag_w, flag_h);\n} \n \n  取 Dart 程式的按鈕  \n 純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping   Function   Function Parameter   Fat Arrow   Temp 1 \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery   temp2 \n Flutter 程式 \n Flutter0   Flutter1   Flutter2   Flutter3   Flutter4   Flutter Counter   ROC Flag   踩地雷 1   踩地雷 2   踩地雷 3   踩地雷 4 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n', 'tags': '', 'url': 'w14\xa0 \xa0JS國旗.html'}, {'title': 'w15\xa0 \xa0亂數分組', 'text': '\n 學員名單 URL:   每組人數:      \n \n  ##############################  \n 設一乙亂數分組 \n', 'tags': '', 'url': 'w15\xa0 \xa0亂數分組.html'}, {'title': 'w16\xa0 \xa0查驗考試', 'text': '\n', 'tags': '', 'url': 'w16\xa0 \xa0查驗考試.html'}, {'title': 'w17\xa0 \xa0期末作業', 'text': '\n \n  取 Dart 程式的按鈕  \n 純 Dart 程式 \n 重量 \n Html 程式 \n 重量轉換   各國國旗 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n 請輸入所要轉換的重量以數字加上 KG 或 LB:     轉換結果: \n \n \n \n \n Clear Canvas   Draw ROC   Draw JPN   Draw FRA   Draw RUS   Draw USA   Draw UK   Draw DEU   Draw NLD \n \n \n', 'tags': '', 'url': 'w17\xa0 \xa0期末作業.html'}]};