var data = {
  cards: [
    {
      name: "人",
      description: "人の輪郭、服、表情からは強く人の気配を感じる。"
    },
    {
      name: "車",
      description: "現代の日本では車は勝手に走ることはない。走っている車を見ればそこに人がいるであろうと考える。"
    },
    {
      name: "足音",
      description: "人の足音には人のリズムがある。地面が発する音にも特徴があり、場所や速度などをがじ取れる。"
    },
    {
      name: "扉の開閉音",
      description: "自動ドア、引き戸、開き戸など、色々な扉がありそれぞれ開閉したときの音の特徴に違いはあるが、過去の経験からその音は扉と認識できる。扉の開閉音が鳴ったとき、その瞬間人が通っていると知覚する。"
    },
    {
      name: "コピー機の音",
      description: "コピー機の音はリズミカルで特徴的だ。人が司令を出したときこの独特な音を聞くことができる"
    },
    {
      name: "水道の音",
      description: "水は色々な音を発する。落ちてきた水を水受けが受けたときに発する音、水に人が触れてその音が乱れる場面では、人がその水道を使っていることが想像できる。"
    },
    {
      name: "トイレの水が流れる音",
      description: "使用後には水が流れる。たしかな生活の音のひとつ。"
    },
    {
      name: "車のエンジン音",
      description: "姿は見えなくても、音から走っている車を認知でき、それを運転する「ひと気」を感じる。"
    },
    {
      name: "自転車のブレーキ音",
      description: "特徴のない甲高い音のようだが、音の長さ、強弱から自転車のブレーキ音だと分かる。"
    },
    {
      name: "入口に脱ぎ置かれた靴",
      description: "土足禁止のエリアの入口に靴があれば、その靴を履いていたであろう人がその先にいるはずだ。"
    },
    {
      name: "傘立てに置かれた傘",
      description: "濡れた傘が置いてあれば、さっきまでそれを使っていた人が近くにいる可能性が高い"
    },
    {
      name: "付けっぱなしのエアコン",
      description: "エアコンを付けた人間がかならずいる。さっきまで人がいて消し忘れたのかもしれない。あるいはこの後すぐ戻って来ることを想定して付けっぱなしにしているのかも。"
    },
    {
      name: "付けっぱなしのプロジェクタ",
      description: ""
    },
    {
      name: "付けっぱなしのモニタ",
      description: "人がデスクワークをしていたはず。スリープする設定の機材も多いため、モニタがついているならば誰かが操作した直後かもしれない"
    },
    {
      name: "地面に落ちたタバコの吸殻",
      description: "清掃が行き届いている武蔵野美術大学。落ちている吸い殻は今日落とされたものかもしれない。"
    },
    {
      name: "空き缶",
      description: "清掃が行き届いている武蔵野美術大学。落ちている空き缶は今日落とされたものかもしれない。"
    },
    {
      name: "道に落ちているぬいぐるみ",
      description: "ぬいぐるみは大事なものである可能性があるという共通認識をわたしたちは持っている。拾って届けてあげる人も多い中で道に落ちているぬいぐるみはついさっき落とされたものかもしれない。"
    },
    {
      name: "あたかい椅子",
      description: "常温よりも人の身体は温かい。椅子が温かい場合はさっきまでそこに人が座っていたからである。温度からその時間経過がわかることもある。"
    },
    {
      name: "涼しい部屋 / 暖かい部屋",
      description: "エアコンや暖房をつけた人間が必ずいるはず。死角で人が作業していることも、数分後に人が戻って来る可能性もある。"
    },
    {
      name: "人の体臭",
      description: "人の体臭は独特だ。他の動物とも違う。強い人の体臭からは強いひとの気配を感じる。"
    },
    {
      name: "香水の香り",
      description: "この香水、あの人がつけているものと一緒。特定の誰かを想像することもある。"
    },
    {
      name: "カップ麺の匂い",
      description: "カップ麺を誰かが食べた。"
    },
    {
      name: "乱れたテーブル",
      description: "いつも整理されているのに、きっと誰かが使ったのだろう。"
    },
    {
      name: "整理されたテーブル",
      description: "いつも乱雑なのに、きっと誰かが整理してくれたのだろう。"
    },
    {
      name: "インクの足跡",
      description: "美大ならではではあるが、インクを踏んで歩いた軌跡が残っている。"
    },
    {
      name: "椅子の形状",
      description: "椅子の形状からは、人が座りやすいような位置、曲線が存在する。人が使う様子をイメージしながら、人の気配を感じる。"
    },
    {
      name: "トイレの取っ手",
      description: "取っ手から人の手をイメージする。かすかな人の気配やイメージを形状から意識してしまう。"
    }
  ],
  categories: [
    {
      name: "「ひと気」",
      description: "「ひと気」という言葉がある。人の気配という意味であるが、声や人影といったわかりやすいものだけでなく、色々なひと気を人間は感じ取っている。"
    },
    {
      name: "直接感じ取れる「ひと気」",
      description: "人影や人の声など、あきらかに直接人が発っしているである「ひと気」。感じ取ればすぐにそこへ意識が向いてしまう強い「ひと気」"
    },
    {
      name: "人影",
      description: "人の輪郭、服、表情からは強く人の気配を感じる。"
    },
    {
      name: "音",
      description: "人の輪郭、服、表情からは強く人の気配を感じる。"
    },
    {
      name: "間接的に感じ取れる「ひと気」",
      description: "人が直接発したわけではなく、人が残した痕跡、"
    },
    {
      name: "人の痕跡",
      description: "人の輪郭、服、表情からは強く人の気配を感じる。"
    },
    {
      name: "音",
      description: "人の輪郭、服、表情からは強く人の気配を感じる。"
    },
    {
      name: "残したもの",
      description: "人の輪郭、服、表情からは強く人の気配を感じる。"
    },
    {
      name: "付けっぱなし",
      description: "人の輪郭、服、表情からは強く人の気配を感じる。"
    }
  ]
}

var doc = app.activeDocument;

var dpi = 72;
var mmToPx = dpi / 25.4;

var a6Width = 148 * mmToPx;  // 148mmをピクセルに変換
var a6Height = 105 * mmToPx; // 105mmをピクセルに変換
var space = 11 * mmToPx; // 105mmをピクセルに変換
var pad = 60; // 105mmをピクセルに変換

var textList = data.cards
for (var i = 0; i < textList.length; i++) {
    var artboard = doc.artboards[Math.floor(i/4)];
    var artboardRect = artboard.artboardRect;
    var xPos = artboardRect[0] + 30; // 左上のX座標
    var yPos = artboardRect[1]; // 左上のY座標
    if (i%2 === 1) xPos += a6Width
    if (i%4 > 1) yPos -= a6Height

    // アートボードの中央にテキストを配置
    var centerX = -a6Width / 2 + (a6Width + space)  * i + 30;
    var centerY = 0;

    // テキストオブジェクトを作成
    var nameFrame = doc.textFrames.add();
    nameFrame.contents = '「' + textList[i].name + '」';
    nameFrame.position = [xPos, yPos - 30 ];
    nameFrame.textRange.size = 22;

    var textAreaPath = doc.pathItems.rectangle(yPos - 60, xPos, a6Width - pad, 100);
    var descFrame = doc.textFrames.areaText(textAreaPath);
    descFrame.contents = textList[i].description;
    descFrame.textRange.size = 10;
    descFrame.position = [xPos, yPos - 60];
    descFrame.fillColor = new RGBColor();
    descFrame.fillColor.red = 100;
    descFrame.fillColor.green = 100;
    descFrame.fillColor.blue = 100;  
}
