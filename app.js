// ===== DATA =====
const CASES = [
  {id:1,is_sample:true,type:'悩んだ症例',cat:'心停止・ROSC',cc:'#e53e3e',cr:'229,62,62',
   title:'PEA継続中の薬剤投与タイミングに迷った心停止症例',
   pt:{age:'72歳',sex:'男性',place:'自宅（居間）',transport:'救命救急センター',chief:'「主人が倒れて動かない。息をしていないかもしれない」'},
   scene:'家族が居間で倒れているのを発見し119番通報。倒れた瞬間は目撃なし。推定ダウンタイム約5分。バイスタンダーCPRは未実施。',
   pmhx:'高血圧（10年）、2型糖尿病、陳旧性心筋梗塞（3年前）',
   meds:'アムロジピン5mg、メトホルミン、アスピリン100mg',allergy:'なし',
   timepoints:[
     {label:'初期評価時',time:'10:14',
      findings:{consciousness:'JCS 300',breathing:'自発呼吸なし',circulation:'頸動脈触知なし',pupils:'散大・対光反射なし',skin:'蒼白・冷感'},
      obs:'CPR中のため詳細な所見評価は困難。明らかな外傷なし。',
      vitals:{bp:'測定不可',hr:'---',spo2:'測定不可',rr:'0',bg:'---',temp:'---',etco2:'---'},
      rhythm:'PEA',st:'評価困難',ecgNote:'サイナスリズム様波形 52bpm。胸骨圧迫再開後VFに移行を確認。',
      treatment:['BLS（CPR継続）','AED（ショック不適応）','12誘導ECG']},
     {label:'現場',time:'10:19',
      findings:{consciousness:'JCS 300',breathing:'自発呼吸なし',circulation:'頸動脈触知なし',pupils:'散大・対光反射なし',skin:'蒼白・冷感'},
      obs:'VF確認後、除細動1回施行。気管挿管（2回目）成功。ETCO2波形出現。',
      vitals:{bp:'---',hr:'VF→SR',spo2:'---',rr:'BVM',bg:'124',temp:'---',etco2:'18'},
      rhythm:'VF→SR',st:'評価困難',ecgNote:'除細動後SR復帰を確認。',
      treatment:['AED（除細動1回→SR）','気管挿管（2回目成功）','静脈路確保（18G）','アドレナリン1mg静注']},
     {label:'救急車内',time:'10:26',
      findings:{consciousness:'JCS 300',breathing:'BVM換気中',circulation:'頸動脈触知微弱',pupils:'縮瞳傾向',skin:'蒼白・冷感'},
      obs:'ROSC後も意識回復なし。カプノグラフィー波形安定。アドレナリン2回目投与タイミングで隊員間で意見が分かれた。',
      vitals:{bp:'72/40',hr:'88(SR)',spo2:'95%',rr:'BVM',bg:'124',temp:'---',etco2:'28'},
      rhythm:'洞調律（SR）',st:'評価困難',ecgNote:'SR維持。ST変化の評価は搬送優先のため省略。',
      treatment:['カプノグラフィー装着','アドレナリン2回目（10分後）','バイタル継続測定']}
   ],
   tags:['#PEA','#VF','#ROSC','#アドレナリン'],
   reflect:{worry:'PEA継続中のアドレナリン投与タイミングについてチーム内で判断が分かれた。プロトコル上は3〜5分ごとだが、CPR質のばらつきがあり確信が持てなかった。',
     good:'VFへの移行を12誘導で早期に検出できた。除細動の判断は迅速だった。ETCO2装着で換気評価ができた。',
     learn:'PEA症例では可逆的原因（4H4T）の系統的評価が重要。次回はチェックリストを活用し全員で確認する。'},
   author:'田中 隆',av:'田',avBg:'rgba(229,62,62,.2)',avC:'#e53e3e',
   created_at:'2026-04-01T10:33:44',daysAgo:0,likes:12,
   comments:[
     {name:'佐藤 美咲',av:'佐',avBg:'rgba(237,137,54,.2)',avC:'#ed8936',time:'1時間前',text:'4H4Tの評価、現場でどうやって素早くやりましたか？チェックリストがあれば共有してほしいです。'},
     {name:'山田 剛',av:'山',avBg:'rgba(66,153,225,.2)',avC:'#4299e1',time:'45分前',text:'アドレナリンのタイミングは本当に悩みますよね。ROSCしたのは素晴らしいです。'}
   ],liked:false,bookmarked:false},

  {id:2,is_sample:true,type:'よくできた',cat:'外傷',cc:'#ed8936',cr:'237,137,54',
   title:'骨盤骨折・出血性ショック疑いでのLoad and Go判断',
   pt:{age:'34歳',sex:'男性',place:'国道交差点',transport:'救命救急センター（外傷）',chief:'バイクと車が衝突している。バイクの人が道路に倒れていて動かない』'},
   scene:'バイクと乗用車の正面衝突。バイク運転手が道路上に転倒。推定衝突速度60km/h。バイスタンダーが左大腿部を圧迫止血中。',
   pmhx:'特記なし',meds:'なし',allergy:'ペニシリン系（本人申告）',
   timepoints:[
     {label:'初期評価時',time:'14:32',
      findings:{consciousness:'GCS 14（E3V5M6）',breathing:'頻呼吸（26回/分）',circulation:'橈骨動脈触知弱・頻脈',pupils:'正常・対光反射あり',skin:'蒼白・冷汗著明'},
      obs:'骨盤部に強い圧痛。左大腿部変形・腫脹あり。開放創から出血継続。頸椎固定を先行。',
      vitals:{bp:'88/60',hr:'128',spo2:'96%',rr:'26',bg:'---',temp:'---',etco2:'---'},
      rhythm:'洞性頻脈',st:'変化なし',ecgNote:'洞性頻脈128bpm。ST変化なし。',
      treatment:['頸椎固定（頸椎カラー）','バックボード固定','止血処置（圧迫）','酸素投与（15L）']},
     {label:'現場',time:'14:37',
      findings:{consciousness:'GCS 14',breathing:'頻呼吸（28回/分）',circulation:'橈骨動脈触知弱・さらに悪化',pupils:'正常',skin:'蒼白・冷汗'},
      obs:'骨盤骨折疑い・出血性ショックと判断。現場処置を最小限にしLoad and Goを決断。骨盤ベルト装着。',
      vitals:{bp:'82/54',hr:'136',spo2:'94%',rr:'28',bg:'---',temp:'35.8',etco2:'---'},
      rhythm:'洞性頻脈',st:'変化なし',ecgNote:'頻脈増悪傾向。',
      treatment:['骨盤ベルト固定','静脈路確保×2（16G）','輸液（細胞外液500mL）']},
     {label:'救急車内',time:'14:44',
      findings:{consciousness:'GCS 13',breathing:'頻呼吸（22回/分）',circulation:'橈骨動脈触知やや改善',pupils:'正常',skin:'蒼白'},
      obs:'輸液後わずかにBP改善。病院への事前連絡でER・外科・整形が準備中。現場滞在時間8分。',
      vitals:{bp:'90/62',hr:'122',spo2:'97%',rr:'22',bg:'98',temp:'35.8',etco2:'---'},
      rhythm:'洞性頻脈',st:'変化なし',ecgNote:'頻脈は継続するが改善傾向。',
      treatment:['バイタル継続測定','輸液継続','病院事前連絡（外傷チーム要請）']}
   ],
   tags:['#多発外傷','#骨盤骨折','#出血性ショック','#迅速搬送'],
   reflect:{worry:'骨盤骨折の確定診断はX線なしでは難しく、骨盤ベルトの装着判断に少し迷った。',
     good:'現場滞在時間を8分に抑えられた。病院事前連絡でER準備が整っており、スムーズに引き継ぎできた。',
     learn:'出血性ショックではLoad and Goの判断が最優先。現場処置の優先順位を出動前にチームで確認する習慣をつける。'},
   author:'佐藤 美咲',av:'佐',avBg:'rgba(237,137,54,.2)',avC:'#ed8936',
   created_at:'2026-04-01T07:33:44',daysAgo:0,likes:18,
   comments:[
     {name:'伊藤 健太',av:'伊',avBg:'rgba(229,62,62,.2)',avC:'#e53e3e',time:'4時間前',text:'骨盤ベルト、現場でうまく装着できましたか？コツがあれば教えてください。'},
     {name:'高橋 奈々',av:'高',avBg:'rgba(72,187,120,.2)',avC:'#48bb78',time:'3時間前',text:'現場8分は素晴らしい。日頃のチーム訓練の成果ですね。'}
   ],liked:true,bookmarked:true},

  {id:3,is_sample:true,type:'迷った症例',cat:'内因性疾患',cc:'#4299e1',cr:'66,153,225',
   title:'失語症状のみ・四肢麻痺なし――TIA vs 脳梗塞の搬送先判断',
   pt:{age:'65歳',sex:'男性',place:'自宅（書斎）',transport:'脳卒中センター（総合病院）',chief:'「夫が突然しゃべれなくなった。呼びかけには反応するが言葉が出ない」'},
   scene:'妻が突然夫の発語が困難になったことに気づき119番。発症から推定15分で現着。本人は意識清明で指示には従えるが発語不能。右口角の軽度下垂あり。',
   pmhx:'高血圧（15年）、心房細動（2年、抗凝固療法中）',
   meds:'ワーファリン3mg/日、アムロジピン5mg',allergy:'なし',
   timepoints:[
     {label:'初期評価時',time:'09:08',
      findings:{consciousness:'JCS 1（清明）',breathing:'正常（16回/分）',circulation:'不整脈あり（AF）',pupils:'正常・対光反射あり',skin:'正常'},
      obs:'FACE陽性（右口角下垂）。上肢挙上テストで右腕に軽度の落下傾向。発語なし・理解は保たれている様子。',
      vitals:{bp:'178/102',hr:'78(AF)',spo2:'98%',rr:'16',bg:'135',temp:'36.4',etco2:'---'},
      rhythm:'心房細動（AF）',st:'変化なし',ecgNote:'AF、平均心拍78bpm。ST変化なし。',
      treatment:['バイタル測定','12誘導ECG','血糖測定','神経学的評価（FACE・CPSS）']},
     {label:'現場',time:'09:13',
      findings:{consciousness:'JCS 1',breathing:'正常',circulation:'AF継続',pupils:'正常',skin:'正常'},
      obs:'CPSSスコア2点（顔面＋上肢）。AF＋抗凝固療法中という情報からER vs 脳卒中センターで隊内協議。MC指示を仰ぐことを決定。',
      vitals:{bp:'174/100',hr:'80(AF)',spo2:'98%',rr:'16',bg:'135',temp:'36.4',etco2:'---'},
      rhythm:'心房細動（AF）',st:'変化なし',ecgNote:'AF継続。',
      treatment:['MC指示（脳卒中センターへ搬送決定）','酸素投与（2L経鼻）']},
     {label:'救急車内',time:'09:18',
      findings:{consciousness:'JCS 1',breathing:'正常',circulation:'AF継続',pupils:'正常',skin:'正常'},
      obs:'症状の変化なし。病院へ事前連絡済み。ワーファリン内服・発症時刻・CPSSスコアを申し送り予定。',
      vitals:{bp:'170/98',hr:'82(AF)',spo2:'99%',rr:'16',bg:'135',temp:'36.4',etco2:'---'},
      rhythm:'心房細動（AF）',st:'変化なし',ecgNote:'AF安定。',
      treatment:['バイタル継続測定','神経学的変化の継続観察','病院事前連絡']}
   ],
   tags:['#脳卒中','#TIA','#心房細動','#CPSS','#搬送先判断'],
   reflect:{worry:'失語のみで四肢麻痺なし。FACEは陽性・CPSSは2点でボーダーライン。TIAか完成梗塞かの判断と搬送先選定で迷い、MC指示を仰いだ。',
     good:'AF＋抗凝固療法中という情報を早期に取得し、心原性塞栓の可能性を意識した判断ができた。',
     learn:'AF＋失語は心原性脳塞栓を強く疑う組み合わせ。この場合は積極的に脳卒中センターを選択する基準を持つ。'},
   author:'山田 剛',av:'山',avBg:'rgba(66,153,225,.2)',avC:'#4299e1',
   created_at:'2026-03-31T10:33:44',daysAgo:1,likes:9,
   comments:[
     {name:'木村 誠',av:'木',avBg:'rgba(66,153,225,.2)',avC:'#4299e1',time:'20時間前',text:'AF＋失語はほぼ心原性ですよね。搬送先の判断は正解だと思います。後でどうなったか教えてください。'}
   ],liked:false,bookmarked:false},

  {id:4,is_sample:true,type:'ヒヤリハット',cat:'小児',cc:'#48bb78',cr:'72,187,120',
   title:'熱性けいれん後の意識回復遅延――初期評価で血糖を測定し忘れたヒヤリ',
   pt:{age:'3歳',sex:'男性',place:'自宅（リビング）',transport:'小児救急病院',chief:'「子どもが熱を出していて、突然けいれんした。今は止まったが意識がない」'},
   scene:'母親が発熱中の子どものけいれんを目撃し119番。到着時けいれんは自然終息（持続約2分）していたが意識回復が遅延していた。熱性けいれんの既往あり。',
   pmhx:'熱性けいれん既往1回（1歳時）',meds:'なし',allergy:'なし（確認済み）',
   timepoints:[
     {label:'初期評価時',time:'15:52',
      findings:{consciousness:'JCS 10（呼びかけで開眼）',breathing:'やや促迫（28回/分）',circulation:'頻脈（140bpm）・橈骨動脈良好',pupils:'等円・縮瞳・対光反射あり',skin:'熱感・発赤あり'},
      obs:'体温39.2℃。項部硬直なし。四肢トーヌス正常。血糖測定を失念（後に反省点として認識）。',
      vitals:{bp:'100/60',hr:'140',spo2:'99%',rr:'28',bg:'未測定',temp:'39.2',etco2:'---'},
      rhythm:'洞性頻脈',st:'変化なし',ecgNote:'洞性頻脈140bpm。',
      treatment:['気道確保・側臥位管理','酸素投与（マスク5L）','体温測定','神経学的評価']},
     {label:'現場',time:'15:58',
      findings:{consciousness:'JCS 3（自発開眼あり）',breathing:'正常化傾向（24回/分）',circulation:'頻脈（132bpm）・改善傾向',pupils:'等円・対光反射あり',skin:'熱感継続'},
      obs:'意識レベルが少し改善。てんかん重積との鑑別のため、遅延したが血糖測定を実施（82mg/dL）。低血糖は否定。',
      vitals:{bp:'98/58',hr:'132',spo2:'99%',rr:'24',bg:'82',temp:'39.2',etco2:'---'},
      rhythm:'洞性頻脈',st:'変化なし',ecgNote:'頻脈継続。',
      treatment:['血糖測定（82mg/dL・遅延）','バイタル継続観察','搬送判断（小児救急病院へ）']},
     {label:'救急車内',time:'16:05',
      findings:{consciousness:'JCS 1（意識回復）',breathing:'正常（22回/分）',circulation:'頻脈改善（126bpm）',pupils:'正常',skin:'熱感'},
      obs:'意識が回復し、母親の声に反応して泣き始めた。バイタル安定。病院へ事前連絡。',
      vitals:{bp:'100/62',hr:'126',spo2:'99%',rr:'22',bg:'82',temp:'39.0',etco2:'---'},
      rhythm:'洞性頻脈',st:'変化なし',ecgNote:'頻脈改善傾向。',
      treatment:['バイタル継続測定','意識レベル継続評価','病院事前連絡（熱性けいれん・血糖値報告）']}
   ],
   tags:['#小児','#熱性けいれん','#血糖測定','#ヒヤリハット','#意識障害'],
   reflect:{worry:'初期評価で血糖測定を失念。意識回復遅延の原因として低血糖を早期に除外できなかった。てんかん重積との鑑別が遅れた可能性がある。',
     good:'けいれん終息後の気道管理と側臥位は適切だった。意識レベルの推移を継続観察できていた。',
     learn:'小児の意識障害では低血糖は必須の鑑別項目。発熱があっても血糖測定を初期評価に組み込む。ABCDEに血糖を加えたチェックリストを活用する。'},
   author:'鈴木 愛',av:'鈴',avBg:'rgba(72,187,120,.2)',avC:'#48bb78',
   created_at:'2026-03-30T09:33:44',daysAgo:2,likes:21,
   comments:[
     {name:'田中 隆',av:'田',avBg:'rgba(229,62,62,.2)',avC:'#e53e3e',time:'2日前',text:'血糖忘れは自分もやったことがあります。小児の意識障害チェックリストを作りたいですね。'},
     {name:'松本 拓海',av:'松',avBg:'rgba(229,62,62,.2)',avC:'#e53e3e',time:'1日前',text:'正直に報告してくれてありがとうございます。チーム全体の学びになります。'}
   ],liked:false,bookmarked:true},

  {id:5,is_sample:true,type:'学びになった',cat:'心停止・ROSC',cc:'#e53e3e',cr:'229,62,62',
   title:'バイスタンダーCPR継続中に現着・VF除細動でROSCした症例',
   pt:{age:'58歳',sex:'男性',place:'職場（会議室）',transport:'循環器専門病院（カテーテル室直行）',chief:'「会議中に同僚が突然倒れた。意識がない。AEDを持ってきてCPRをしています」'},
   scene:'会議中に突然意識を失い転倒。同僚がすぐにCPRを開始し職場のAEDを使用。バイスタンダー2回除細動後もVF継続中に救急隊が現着（119番から約6分）。',
   pmhx:'高脂血症（未治療）、喫煙歴30年（現喫煙者）',meds:'なし',allergy:'なし',
   timepoints:[
     {label:'初期評価時',time:'11:03',
      findings:{consciousness:'JCS 300',breathing:'自発呼吸なし',circulation:'頸動脈触知なし',pupils:'散大・対光反射なし',skin:'蒼白'},
      obs:'バイスタンダーのCPRは良質。AEDアドバイス：ショック適応（VF）。3回目の除細動をすみやかに施行。',
      vitals:{bp:'測定不可',hr:'VF',spo2:'測定不可',rr:'0',bg:'---',temp:'---',etco2:'---'},
      rhythm:'VF',st:'評価困難',ecgNote:'VF継続。バイスタンダー2回施行後も持続VF。3回目除細動施行→SR復帰。',
      treatment:['CPR引き継ぎ','AED（3回目→SR復帰）','気管挿管','カプノグラフィー装着']},
     {label:'現場（ROSC後）',time:'11:08',
      findings:{consciousness:'JCS 200',breathing:'自発呼吸出現（浅）',circulation:'頸動脈触知可（微弱）',pupils:'縮瞳傾向',skin:'蒼白から改善傾向'},
      obs:'ROSC確認。気管挿管後ETCO2波形良好（35mmHg）。12誘導でII・III・aVFのST上昇を確認し、搬送先変更を即座に検討。',
      vitals:{bp:'84/50',hr:'92(SR)',spo2:'91%',rr:'自発8回',bg:'188',temp:'36.1',etco2:'35'},
      rhythm:'洞調律（SR）',st:'ST上昇（下壁）',ecgNote:'SR復帰後、II・III・aVFに明確なST上昇。下壁梗塞を強く疑い循環器専門病院へ変更。',
      treatment:['静脈路確保（18G）','12誘導ECG（ST上昇確認）','搬送先変更（循環器→カテ室直行）','MC指示']},
     {label:'救急車内',time:'11:15',
      findings:{consciousness:'JCS 200',breathing:'BVM補助中（自発呼吸あり）',circulation:'橈骨動脈触知可',pupils:'縮瞳',skin:'改善'},
      obs:'バイタル徐々に改善。ETCO2波形安定。病院にカテーテル室準備を要請済み。',
      vitals:{bp:'96/62',hr:'88(SR)',spo2:'97%',rr:'BVM+自発12回',bg:'188',temp:'36.1',etco2:'38'},
      rhythm:'洞調律（SR）',st:'ST上昇（下壁）',ecgNote:'ST上昇継続。SR安定。',
      treatment:['バイタル継続測定','ETCO2継続モニタリング','病院事前連絡（下壁梗塞・カテ室準備要請）']}
   ],
   tags:['#ROSC','#VF','#バイスタンダーCPR','#ST上昇','#下壁梗塞','#カテーテル'],
   reflect:{worry:'ROSC後のST上昇を確認してから搬送先変更の判断に少し時間がかかった。もう少し迅速に決断できたかもしれない。',
     good:'バイスタンダーとのCPR引き継ぎがスムーズで中断時間を最小化できた。ROSC後に迷わず12誘導を取ったことでST変化を検出できた。',
     learn:'目撃ありCPAではROSC後の12誘導は必須。ST上昇があれば即座に循環器への搬送先変更を検討する。バイスタンダー教育の重要性を改めて実感した。'},
   author:'伊藤 健太',av:'伊',avBg:'rgba(229,62,62,.2)',avC:'#e53e3e',
   created_at:'2026-03-29T11:33:44',daysAgo:3,likes:34,
   comments:[
     {name:'佐藤 美咲',av:'佐',avBg:'rgba(237,137,54,.2)',avC:'#ed8936',time:'3日前',text:'ROSC後のST変化をその場で判断できるのが素晴らしい。12誘導の読み方を勉強したいです。'},
     {name:'鈴木 愛',av:'鈴',avBg:'rgba(72,187,120,.2)',avC:'#48bb78',time:'2日前',text:'バイスタンダーの方のCPRが本当に命を救いましたね。市民講習の大切さを改めて感じます。'}
   ],liked:true,bookmarked:true},

  {id:6,is_sample:true,type:'悩んだ症例',cat:'内因性疾患',cc:'#4299e1',cr:'66,153,225',
   title:'非典型的胸痛・ST変化なし――女性のACSを疑い続けた判断',
   pt:{age:'72歳',sex:'女性',place:'自宅（台所）',transport:'循環器内科（総合病院）',chief:'「母が胸が苦しいと言って座り込んでいる。顔色が悪くて冷や汗をかいている」'},
   scene:'家事中に胸部圧迫感・強い倦怠感・左肩へのひびきが出現。発症から約40分で現着。本人は「大したことない」と言うが顔色不良・冷汗あり。',
   pmhx:'高血圧（20年）、高脂血症（10年）、閉経後骨粗鬆症',
   meds:'アムロジピン10mg、アトルバスタチン20mg、ビスホスホネート',allergy:'なし',
   timepoints:[
     {label:'初期評価時',time:'13:45',
      findings:{consciousness:'JCS 0（清明）',breathing:'正常（16回/分）',circulation:'橈骨動脈触知良好・やや不整',pupils:'正常・対光反射あり',skin:'冷感・冷汗あり'},
      obs:'左肩への放散痛あり。軽度の頸静脈怒張疑い。両下腿に軽度浮腫。「大したことない」と否定するが冷汗・顔色不良が気になり継続評価を決定。',
      vitals:{bp:'148/88',hr:'92(整)',spo2:'97%',rr:'16',bg:'142',temp:'36.2',etco2:'---'},
      rhythm:'洞調律（SR）',st:'T波平坦化',ecgNote:'V4〜V6でT波平坦化。ST上昇は明確でないがQTc軽度延長あり。',
      treatment:['バイタル測定','12誘導ECG（1回目）','血糖測定','酸素投与（2L経鼻）']},
     {label:'現場',time:'13:52',
      findings:{consciousness:'JCS 0',breathing:'正常',circulation:'不整なし・触知良好',pupils:'正常',skin:'冷感・冷汗継続'},
      obs:'症状の改善なし。T波変化の進行がないか確認のため2回目の12誘導を施行。ERか循環器か搬送先について隊内で議論。非典型的AMIの可能性を重視し循環器を選択。MC指示を仰ぐ。',
      vitals:{bp:'144/86',hr:'90(整)',spo2:'97%',rr:'16',bg:'142',temp:'36.2',etco2:'---'},
      rhythm:'洞調律（SR）',st:'T波平坦化',ecgNote:'2回目12誘導でもT波平坦化継続。明確なST上昇なし。',
      treatment:['12誘導ECG（2回目）','MC指示（循環器内科搬送）']},
     {label:'救急車内',time:'13:58',
      findings:{consciousness:'JCS 0',breathing:'正常',circulation:'良好',pupils:'正常',skin:'冷感'},
      obs:'症状に変化なし。病院への事前連絡で女性・非典型的胸痛・T波変化の情報を申し送り。後でカテーテル検査にて90%狭窄を確認。搬送先判断は正解だった。',
      vitals:{bp:'140/84',hr:'88(整)',spo2:'98%',rr:'16',bg:'142',temp:'36.2',etco2:'---'},
      rhythm:'洞調律（SR）',st:'T波平坦化',ecgNote:'T波変化継続。ST上昇なし。',
      treatment:['バイタル継続測定','12誘導ECG（3回目）','病院事前連絡（非典型的ACS疑い）']}
   ],
   tags:['#ACS','#非典型的胸痛','#女性','#T波変化','#MC指示'],
   reflect:{worry:'ST上昇がはっきりしない。女性の非典型的AMIを疑ったが確信が持てず、ERか循環器かで迷った。T波平坦化のみで循環器搬送は適切だったか不安だった。',
     good:'本人が否定的でも冷汗・左肩痛・倦怠感の組み合わせを重視し、繰り返し12誘導を施行し続けた。MC指示を仰いで判断を共有できた。',
     learn:'女性のACSは非典型的症状が多い。倦怠感・肩こり・冷汗の三徴はフラグ。T波変化のみでも循環器搬送を考慮する。後にカテーテルで90%狭窄確認。判断は正しかった。'},
   author:'木村 誠',av:'木',avBg:'rgba(66,153,225,.2)',avC:'#4299e1',
   created_at:'2026-03-28T10:33:44',daysAgo:4,likes:16,
   comments:[
     {name:'山田 剛',av:'山',avBg:'rgba(66,153,225,.2)',avC:'#4299e1',time:'4日前',text:'女性のAMIは本当に難しいですよね。非典型症状の勉強会をやりましょう。'},
     {name:'田中 隆',av:'田',avBg:'rgba(229,62,62,.2)',avC:'#e53e3e',time:'3日前',text:'T波変化のみでも循環器搬送を選んだ判断が素晴らしい。カテーテルで確認できてよかった。'}
   ],liked:false,bookmarked:false}
];

// ===== STATE =====
const TYPE_S={
  '悩んだ症例':{bg:'rgba(229,62,62,.1)',c:'#fc8181',bd:'rgba(229,62,62,.3)'},
  '迷った症例':{bg:'rgba(237,137,54,.1)',c:'#fbd38d',bd:'rgba(237,137,54,.3)'},
  'よくできた':{bg:'rgba(72,187,120,.1)',c:'#9ae6b4',bd:'rgba(72,187,120,.3)'},
  '学びになった':{bg:'rgba(66,153,225,.1)',c:'#90cdf4',bd:'rgba(66,153,225,.3)'},
  'ヒヤリハット':{bg:'rgba(159,122,234,.1)',c:'#d6bcfa',bd:'rgba(159,122,234,.3)'}
};
const TYPE_EM={'悩んだ症例':'😓','迷った症例':'🤔','よくできた':'✅','学びになった':'📚','ヒヤリハット':'⚠️'};
const VK=['jcs','bp','hr','spo2','rr','bg','temp'];
const VL=['意識','血圧','脈拍','SpO2','呼吸','血糖','体温'];
const VU=['','mmHg','bpm','%','回/分','mg/dL','°C'];

// ===== SUPABASE =====
const SUPABASE_URL = 'https://ytpdelbmsrhqzmjraljp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0cGRlbGJtc3JocXptanJhbGpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2OTk5MDIsImV4cCI6MjA5MDI3NTkwMn0.HGYuB79VrZvKI7j7FVb_umKEW9rt92RNbbEtOvSSjXs';
let sb = null; // appInit内で初期化

let curFilter='all',curSort='new',curQ='';
let likeSt={},bkmSt={};
let currentUser=null; // Supabase userオブジェクト
let currentProfile=null; // profilesテーブルのレコード
let isAnon=false,vitalCount=2;
let editCaseId=null;
let prevPage='timeline';

// ===== COMMENT TYPES =====
const CMT_TYPES=[
  {key:'question', label:'質問',     color:'#4299e1', bg:'rgba(66,153,225,.15)'},
  {key:'advice',   label:'アドバイス',color:'#48bb78', bg:'rgba(72,187,120,.15)'},
  {key:'agree',    label:'同意・共感',color:'#9f7aea', bg:'rgba(159,122,234,.15)'},
  {key:'info',     label:'情報共有',  color:'#ed8936', bg:'rgba(237,137,54,.15)'},
  {key:'reflect',  label:'振り返り', color:'#fc8181', bg:'rgba(229,62,62,.15)'},
];
let curCmtType=null;
let cmtAnonMap={}; // case_idごとの匿名フラグ

// ===== AUTH HELPERS =====
function setLoading(btnId, spinnerId, txtId, loading){
  const btn=document.getElementById(btnId);
  const sp=document.getElementById(spinnerId);
  const tx=document.getElementById(txtId);
  if(!btn) return;
  btn.disabled=loading;
  if(sp) sp.style.display=loading?'block':'none';
  if(tx) tx.style.display=loading?'none':'inline';
}
function showAuthErr(id, msg){ const e=document.getElementById(id); if(e){e.textContent=msg;e.style.display='block';} }
function hideAuthErr(id){ const e=document.getElementById(id); if(e) e.style.display='none'; }

function switchAuthTab(tab){
  document.getElementById('form-login').style.display = tab==='login'?'block':'none';
  document.getElementById('form-signup').style.display = tab==='signup'?'block':'none';
  document.getElementById('form-reset').style.display = tab==='reset'?'block':'none';
  document.getElementById('tab-login').classList.toggle('on', tab==='login');
  document.getElementById('tab-signup').classList.toggle('on', tab==='signup');
  ['login-err','signup-err','reset-err'].forEach(hideAuthErr);
  document.getElementById('signup-success').style.display='none';
  document.getElementById('reset-success').style.display='none';
}

async function doLogin(){
  if(!sb){showAuthErr('login-err','接続を初期化中です。少し待ってから再試行してください。');return;}
  const email=document.getElementById('login-email').value.trim();
  const pass=document.getElementById('login-pass').value;
  hideAuthErr('login-err');
  if(!email||!pass){showAuthErr('login-err','メールアドレスとパスワードを入力してください');return;}
  setLoading('login-btn','login-spinner','login-btn-txt',true);
  try {
    const {error}=await sb.auth.signInWithPassword({email,password:pass});
    if(error){
      const msg=error.message||'';
      const isInvalid=msg.includes('Invalid')||msg.includes('credentials')||
                      msg.includes('invalid')||error.status===400;
      showAuthErr('login-err', isInvalid
        ?'メールアドレスまたはパスワードが違います':msg);
    }
  } catch(e){
    showAuthErr('login-err','通信エラーが発生しました: '+e.message);
  }
  setLoading('login-btn','login-spinner','login-btn-txt',false);
}

async function doSignup(){
  if(!sb){showAuthErr('signup-err','接続を初期化中です。少し待ってから再試行してください。');return;}
  const email=document.getElementById('signup-email').value.trim();
  const pass=document.getElementById('signup-pass').value;
  const nick=document.getElementById('signup-nick').value.trim();
  const code=document.getElementById('signup-code')?.value.trim()||'';
  hideAuthErr('signup-err');
  if(!email||!pass){showAuthErr('signup-err','必須項目を入力してください');return;}
  if(pass.length<6){showAuthErr('signup-err','パスワードは6文字以上にしてください');return;}
  if(!code){showAuthErr('signup-err','招待コードを入力してください');return;}

  // 招待コードをSupabaseで検証
  setLoading('signup-btn','signup-spinner','signup-btn-txt',true);
  const {data:codeData,error:codeErr}=await sb
    .from('invite_codes')
    .select('id,code,is_active,max_uses,use_count')
    .eq('code',code)
    .eq('is_active',true)
    .single();
  if(codeErr||!codeData){
    showAuthErr('signup-err','招待コードが正しくありません');
    setLoading('signup-btn','signup-spinner','signup-btn-txt',false);
    return;
  }
  if(codeData.max_uses!==null&&codeData.use_count>=codeData.max_uses){
    showAuthErr('signup-err','この招待コードは使用上限に達しています');
    setLoading('signup-btn','signup-spinner','signup-btn-txt',false);
    return;
  }
  const {data,error}=await sb.auth.signUp({
    email, password:pass,
    options:{
      data:{nickname:nick||email.split('@')[0]},
      emailRedirectTo: window.location.origin+window.location.pathname,
    }
  });
  setLoading('signup-btn','signup-spinner','signup-btn-txt',false);
  if(error){
    // 422エラーの場合は日本語でわかりやすく表示
    let msg=error.message;
    if(error.status===422||msg.includes('Password')||msg.includes('password')){
      msg='パスワードは6文字以上で入力してください。';
    } else if(msg.includes('Email')||msg.includes('email')){
      msg='メールアドレスの形式が正しくありません。';
    } else if(msg.includes('already registered')||msg.includes('already exists')){
      msg='このメールアドレスはすでに登録されています。';
    } else if(msg.includes('invalid')){
      msg='入力内容に誤りがあります: '+msg;
    }
    showAuthErr('signup-err',msg);
    console.error('signup error:', error);
    return;
  }
  // ニックネームはトリガーで自動生成（raw_user_meta_dataのnicknameを使用）
  // セッション未確立のためここではprofilesへの書き込みを行わない

  // 招待コードの使用回数をインクリメント
  if(codeData){
    await sb.from('invite_codes')
      .update({use_count:codeData.use_count+1})
      .eq('id',codeData.id);
  }
  document.getElementById('signup-success').style.display='block';
}

async function doReset(){
  if(!sb){showAuthErr('reset-err','接続を初期化中です。');return;}
  const email=document.getElementById('reset-email').value.trim();
  hideAuthErr('reset-err');
  if(!email){showAuthErr('reset-err','メールアドレスを入力してください');return;}
  setLoading('reset-btn','reset-spinner','reset-btn-txt',true);
  const {error}=await sb.auth.resetPasswordForEmail(email);
  setLoading('reset-btn','reset-spinner','reset-btn-txt',false);
  if(error){showAuthErr('reset-err',error.message);return;}
  document.getElementById('reset-success').style.display='block';
}

// ログイン画面への切り替え
function switchToLogin(){
  // ※ localStorageのトークンはSupabaseのsignOut()に任せる
  // 手動削除すると他デバイスのセッションに影響するため行わない
  currentUser=null; currentProfile=null;
  const appEl=document.getElementById('app');
  const loginEl=document.getElementById('scr-login');
  if(appEl) appEl.classList.remove('active');
  if(loginEl) loginEl.classList.add('active');
  switchAuthTab('login');
}

async function doLogout(){
  if(sb) await sb.auth.signOut(); // signOut()がトークンを削除する
  switchToLogin();
}

async function onAuthChange(user){
  if(!user) return;
  currentUser=user;

  // まずメールアドレスからニックネームを生成して即座に画面を表示
  const emailNick=user.user_metadata?.nickname||user.email.split('@')[0];
  currentProfile=null;

  // 画面をすぐに切り替え（profilesの取得を待たない）
  function showApp(nick, isAdmin){
    const hdrUser=document.getElementById('hdr-user');
    if(hdrUser) hdrUser.innerHTML=isAdmin
      ? nick+' <span style="background:var(--acc);color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:4px;letter-spacing:.06em;vertical-align:middle">ADMIN</span>'
      : nick;
    const postNick=document.getElementById('post-nick-disp');
    if(postNick) postNick.textContent=nick;
    const postAv=document.getElementById('post-av');
    if(postAv) postAv.textContent=nick.slice(0,2)||'?';
    document.getElementById('scr-login').classList.remove('active');
    document.getElementById('app').classList.add('active');
    if(isAdmin){
      const nb=document.getElementById('notif-btn');
      if(nb) nb.style.display='flex';
      fetchNotifications();
    }
  }

  // まずメールアドレスで即座にログイン画面を切り替え
  showApp(emailNick, false);
  fetchAndRenderFeed();

  // profilesを非同期で取得（画面表示後に更新）
  try{
    const {data}=await sb.from('profiles').select('*').eq('id',user.id).single();
    if(data){
      currentProfile=data;
      showApp(data.nickname||emailNick, data.is_admin||false);
    } else {
      // profilesが存在しない場合は作成
      const nick=emailNick;
      await sb.from('profiles').insert({
        id:user.id, nickname:nick,
        av_color:'#e53e3e', av_bg:'rgba(229,62,62,.2)', is_admin:false,
      }).catch(()=>{});
      const {data:created}=await sb.from('profiles').select('*').eq('id',user.id).single();
      if(created){
        currentProfile=created;
        showApp(created.nickname||nick, created.is_admin||false);
      }
    }
  }catch(e){
    console.warn('profiles取得エラー（メールアドレスで続行）:', e.message);
  }
}

// 認証状態の監視はappInit内で登録

// エンターキー対応
document.addEventListener('keydown',e=>{
  if(e.key!=='Enter') return;
  const fl=document.getElementById('form-login');
  const fs=document.getElementById('form-signup');
  const fr=document.getElementById('form-reset');
  if(fl&&fl.style.display!=='none') doLogin();
  else if(fs&&fs.style.display!=='none') doSignup();
  else if(fr&&fr.style.display!=='none') doReset();
});

// ===== PAGE NAV =====
function showPage(name,el){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  document.querySelectorAll('.ntab').forEach(t=>t.classList.remove('on'));
  if(el) el.classList.add('on');
  if(name==='mypage') updateMyPage().catch(function(e){console.error('マイページ更新エラー:',e);});
  if(name==='post' && !editCaseId){ fullResetPost(); checkDraft(); }
  prevPage=name;
}

function showDetail(id){
  buildDetail(id);
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-detail').classList.add('active');
}

// マイページからDBのIDで詳細を表示（CASES配列にない場合はDBから取得）
async function showDetailById(id){
  // まずローカルCASESで探す
  const local = CASES.find(c=>c.id==id);
  if(local){
    showDetail(local.id);
    return;
  }
  // なければDBから取得
  if(!sb) return;
  try {
    const {data,error}=await sb.from('cases').select('*').eq('id',id).single();
    if(error||!data) throw error||new Error('not found');
    const {data:prof}=await sb.from('profiles').select('id,nickname,av_color,av_bg').eq('id',data.user_id).single();
    const CAT_META={
      '心停止・ROSC':  {cc:'#e53e3e',cr:'229,62,62'},
      '外傷':          {cc:'#ed8936',cr:'237,137,54'},
      '内因性疾患':    {cc:'#4299e1',cr:'66,153,225'},
      '小児':          {cc:'#48bb78',cr:'72,187,120'},
      '産婦人科':      {cc:'#f687b3',cr:'246,135,179'},
      '精神':          {cc:'#9f7aea',cr:'159,122,234'},
      'その他':        {cc:'#68d391',cr:'104,211,145'},
    };
    const m=CAT_META[data.cat]||{cc:'#888',cr:'128,128,128'};
    const nick=prof?.nickname||'不明';
    const caseObj={
      ...data, cc:m.cc, cr:m.cr,
      pt:{age:'',sex:'',place:'',transport:'',chief:data.chief||''},
      reflect:{worry:data.reflect_worry||'',good:data.reflect_good||'',learn:data.reflect_learn||''},
      author:nick, av:nick.slice(0,2),
      avBg:prof?.av_bg||'rgba(136,136,136,.2)', avC:prof?.av_color||'#888',
      likes:0, comments:[], liked:false, bookmarked:false,
      timepoints:data.timepoints||[], tags:data.tags||[],
    };
    // CASESに追加してから表示
    CASES.push(caseObj);
    showDetail(caseObj.id);
  } catch(e){
    showToast('詳細の取得に失敗しました: '+e.message);
  }
}

function backToTimeline(){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-timeline').classList.add('active');
  document.querySelectorAll('.ntab').forEach((t,i)=>{if(i===0)t.classList.add('on');else t.classList.remove('on');});
}

// ===== 日時フォーマット =====
function formatTime(dateStr){
  if(!dateStr) return '';
  const d = new Date(dateStr);
  if(isNaN(d)) return dateStr;
  const now = new Date();
  const diffMs = now - d;
  const diffMin = Math.floor(diffMs / 60000);
  const diffHr  = Math.floor(diffMs / 3600000);
  const diffDay = Math.floor(diffMs / 86400000);

  // 相対表現
  let rel='';
  if(diffMin < 1)        rel = 'たった今';
  else if(diffMin < 60)  rel = `${diffMin}分前`;
  else if(diffHr  < 24)  rel = `${diffHr}時間前`;
  else if(diffDay < 7)   rel = `${diffDay}日前`;
  else                   rel = `${diffDay}日前`;

  // 日付表現
  const y = d.getFullYear();
  const m = d.getMonth()+1;
  const day = d.getDate();
  const today = new Date(); today.setHours(0,0,0,0);
  const yesterday = new Date(today); yesterday.setDate(today.getDate()-1);
  d.setHours(0,0,0,0);

  let dateLabel='';
  if(d.getTime() === today.getTime())         dateLabel = '今日';
  else if(d.getTime() === yesterday.getTime()) dateLabel = '昨日';
  else                                         dateLabel = `${y}/${String(m).padStart(2,'0')}/${String(day).padStart(2,'0')}`;

  if(diffMin < 1) return dateLabel;
  return `${dateLabel}（${rel}）`;
}

// ===== ALERT CLASS =====
function ac(key,val){
  if(!val||val==='---'||val==='未測定'||val==='0'||/不可|VF|PEA|なし/.test(val)) return 'al';
  if(key==='bp'){const s=parseInt(val);if(!isNaN(s)&&s<90) return 'al';if(!isNaN(s)&&s<100) return 'wn';}
  if(key==='spo2'){const v=parseInt(val);if(!isNaN(v)&&v<93) return 'al';if(!isNaN(v)&&v<96) return 'wn';}
  if(key==='hr'){const v=parseInt(val);if(!isNaN(v)&&(v>130||v<50)) return 'al';if(!isNaN(v)&&(v>110||v<55)) return 'wn';}
  return '';
}

// ===== FEED =====

// Supabaseから症例一覧を取得してCASES配列を更新→描画
async function fetchAndRenderFeed(){
  // sbが未初期化ならサンプルデータで描画
  if(!sb){
    renderFeed();
    return;
  }
  const CAT_META={
      '心停止・ROSC':  {cc:'#e53e3e',cr:'229,62,62'},
      '外傷':          {cc:'#ed8936',cr:'237,137,54'},
      '内因性疾患':    {cc:'#4299e1',cr:'66,153,225'},
      '小児':          {cc:'#48bb78',cr:'72,187,120'},
      '産婦人科':      {cc:'#f687b3',cr:'246,135,179'},
      '精神':          {cc:'#9f7aea',cr:'159,122,234'},
      'その他':        {cc:'#68d391',cr:'104,211,145'},
  };
  try {
    // casesとcomments数を取得
    const {data,error}=await sb
      .from('cases')
      .select('*')
      .order('created_at',{ascending:false})
      .limit(100);
    if(error) throw error;

    // profilesを別途取得
    const uids=[...new Set((data||[]).map(d=>d.user_id).filter(Boolean))];
    let profileMap={};
    if(uids.length>0){
      const {data:profs}=await sb
        .from('profiles')
        .select('id,nickname,av_color,av_bg')
        .in('id',uids);
      (profs||[]).forEach(p=>{ profileMap[p.id]=p; });
    }

    // コメント数マップ（スコープをif外に）
    let cmtCountMap={};
    if(data && data.length>0){
      const caseIds=data.map(d=>d.id);
      try {
        const {data:cmtRows}=await sb.from('comments')
          .select('case_id')
          .in('case_id',caseIds);
        (cmtRows||[]).forEach(function(r){
          cmtCountMap[r.case_id]=(cmtCountMap[r.case_id]||0)+1;
        });
      } catch(_){}

      const dbCases=data.map(d=>{
        const m=CAT_META[d.cat]||{cc:'#888',cr:'128,128,128'};
        const prof=profileMap[d.user_id]||{};
        const nick=prof.nickname||'不明';
        const cmtCount=cmtCountMap[d.id]||0;
        return {
          ...d,
          cc:m.cc, cr:m.cr,
          pt:{
            age:   (d.pt_age||'')+(d.pt_age_unit||''),
            sex:   d.pt_sex||'',
            place: d.pt_place||'',
            transport: d.pt_dest||'',
            chief: d.chief||'',
          },
          reflect:{
            worry:d.reflect_worry||'',
            good: d.reflect_good||'',
            learn:d.reflect_learn||'',
          },
          author:nick,
          av:nick.slice(0,2),
          avBg:prof.av_bg||'rgba(136,136,136,.2)',
          avC:prof.av_color||'#888',
          likes:0,
          comments:[], comments_count:cmtCount,
          liked:false,bookmarked:false,
          timepoints:d.timepoints||[],
          tags:d.tags||[],
        };
      });
      // ログイン中ユーザーのいいね状態・いいね数を取得
      if(currentUser && caseIds.length>0){
        // 自分のいいね済みcase_id一覧
        const {data:myLikes}=await sb.from('likes')
          .select('case_id').eq('user_id',currentUser.id)
          .in('case_id',caseIds);
        const likedIds=new Set((myLikes||[]).map(function(l){return l.case_id;}));
        // 全いいね数（表示中の症例のみ）
        const {data:allLikes}=await sb.from('likes')
          .select('case_id').in('case_id',caseIds);
        const likeCounts={};
        (allLikes||[]).forEach(function(l){
          likeCounts[l.case_id]=(likeCounts[l.case_id]||0)+1;
        });
        dbCases.forEach(function(d){
          d.liked=likedIds.has(d.id);
          d.likes=likeCounts[d.id]||0;
          likeSt[d.id+'l']=d.liked;
          likeSt[d.id]=d.likes;
        });
      }
      // サンプルデータを残してDBデータを後ろに追加
      // まずサンプルデータのみ残す
      const samples=CASES.filter(function(c){return c.is_sample;});
      CASES.splice(0, CASES.length, ...samples, ...dbCases);
    } else if(data && data.length===0){
      // 投稿が0件の場合はサンプルデータをそのまま表示（消さない）
      // CASES配列はそのまま維持
    }
    // コメント総数をst-cmtに反映（一括取得済みのデータから集計）
    try {
      const totalCmts=Object.values(cmtCountMap).reduce(function(a,b){return a+b;},0);
      const stCmt=document.getElementById('st-cmt');
      if(stCmt) stCmt.textContent=totalCmts;
    } catch(_){}
  } catch(e){
    console.error('Supabase取得エラー:', e.message);
    showToast('データ取得エラー: '+e.message);
  }
  renderFeed();
}

function getFiltered(){
  let arr=[...CASES];
  if(curFilter!=='all') arr=arr.filter(c=>c.type===curFilter||c.cat===curFilter);
  if(curQ){
    const q=curQ;
    arr=arr.filter(c=>
      (c.title||'').includes(q)||
      (c.chief||c.pt?.chief||'').includes(q)||
      (c.tags||[]).some(t=>t.includes(q))||
      (c.reflect?.learn||c.reflect_learn||'').includes(q)||
      (c.pmhx||'').includes(q)
    );
  }
  if(curSort==='like') arr.sort((a,b)=>(likeSt[b.id]??b.likes)-(likeSt[a.id]??a.likes));
  else if(curSort==='cmt') arr.sort((a,b)=>(b.comments_count!=null?b.comments_count:b.comments.length)-(a.comments_count!=null?a.comments_count:a.comments.length));
  else arr.sort((a,b)=>new Date(b.created_at||0)-new Date(a.created_at||0));
  arr.sort(function(a,b){return (a.is_sample?1:0)-(b.is_sample?1:0);});
  // サンプルを常に末尾に
  arr.sort(function(a,b){return (a.is_sample?1:0)-(b.is_sample?1:0);});
  return arr;
}

function renderFeed(){
  const arr=getFiltered();
  const realArr=arr.filter(function(c){return !c.is_sample;});
  document.getElementById('cnt-lbl').textContent=realArr.length+'件表示中';
  const realCases=CASES.filter(function(c){return !c.is_sample;});
  document.getElementById('st-total').textContent=realCases.length;
  // 今週の投稿数
  const oneWeekAgo=new Date(Date.now()-7*24*60*60*1000);
  const weekCount=realCases.filter(c=>c.created_at&&new Date(c.created_at)>oneWeekAgo).length;
  const stWeek=document.getElementById('st-week');
  if(stWeek) stWeek.textContent=weekCount;
  // CPA症例数
  const cpaCount=realCases.filter(c=>c.cat==='心停止・ROSC').length;
  const stCpa=document.getElementById('st-cpa');
  if(stCpa) stCpa.textContent=cpaCount;
  // コメント総数
  const cmtCount=realCases.reduce(function(sum,c){return sum+(c.comments_count!=null?c.comments_count:(c.comments?c.comments.length:0));},0);
  const stCmt=document.getElementById('st-cmt');
  if(stCmt) stCmt.textContent=cmtCount;
  const feed=document.getElementById('feed');
  if(!arr.length){feed.innerHTML='<div class="empty-feed">該当する症例がありません</div>';return;}
  feed.innerHTML=arr.map(c=>{
    const ts=TYPE_S[c.type]||{bg:'rgba(128,128,128,.1)',c:'#888',bd:'rgba(128,128,128,.3)'};
    const em=TYPE_EM[c.type]||'📋';
    const likes=likeSt[c.id]!=null?likeSt[c.id]:c.likes;
    const liked=likeSt[c.id+'l']!=null?likeSt[c.id+'l']:c.liked;
    const bkm=bkmSt[c.id]!=null?bkmSt[c.id]:c.bookmarked;
    const v0=c.timepoints?c.timepoints[0].vitals:{};
    const vstrip=[['bp','血圧','mmHg'],['hr','脈拍','bpm'],['spo2','SpO2','%'],['rr','呼吸','回/分'],['bg','血糖','mg/dL']].map(([k,l,u])=>
      v0[k]&&v0[k]!=='---'?`<div class="vi"><div class="vi-t">${l}</div><span class="vi-v ${ac(k,v0[k])}">${v0[k]}</span><span class="vi-u">${u}</span></div>`:''
    ).join('');
    return `<div class="lcard" style="--cc:${c.cc}" id="lc-${c.id}">
      ${c.is_sample?'<div style="background:rgba(159,122,234,.15);border-bottom:1px solid rgba(159,122,234,.3);padding:4px 12px;font-size:10px;color:#9f7aea;letter-spacing:.08em;font-weight:700">📋 サンプル症例</div>':''}
      <div class="lcard-top">
        <div class="lbadges">
          <span class="tbdg" style="--tbb:${ts.bg};--tbc:${ts.c};--tbbd:${ts.bd}">${em} ${c.type}</span>
          <span class="cbdg" style="background:rgba(${c.cr},.12);color:${c.cc};border:1px solid rgba(${c.cr},.28)">${c.cat}</span>
        </div>
        <span class="ltime">${formatTime(c.created_at||c.time)}</span>
      </div>
      <div class="lcard-mid" onclick="showDetail(${c.id})">
        <div class="lcard-title">${c.title}</div>
        <div class="pt-row">
          <span class="pt-item">🧑 ${c.pt.age}・${c.pt.sex}</span>
          <span class="pt-item">📍 ${c.pt.place}</span>
          <span class="pt-item">🚨 ${c.pt.chief}</span>
        </div>
        <div class="vstrip">${vstrip}</div>
        <div class="ltags">${c.tags.slice(0,4).map(t=>'<span class="ltag'+(/ROSC|VF|ヒヤリ|PEA/.test(t)?' hl':'')+'">'+t+'</span>').join('')}</div>
        <div class="expand-hint">▼ タップして詳細（既往歴・所見・バイタル推移・ECG・振り返り）</div>
      </div>
      <div class="card-foot">
        <div class="av-row"><div class="av" style="background:${c.avBg};color:${c.avC}">${c.av}</div><span class="av-name">${c.is_anon?'匿名':c.author}</span></div>
        <div class="reacts">
          <button class="rbtn${liked?' liked':''}" onclick="toggleLike(${c.id})">❤️ <span id="lk-${c.id}">${likes}</span></button>
          <button class="rbtn" onclick="showDetail(${c.id})">💬 ${c.comments_count!=null?c.comments_count:c.comments.length}</button>
          <button class="rbtn${bkm?' bkm':''}" onclick="toggleBkm(${c.id})">🔖</button>
          ${currentProfile?.is_admin?'<button class="rbtn" onclick="adminDeleteCase('+c.id+',event)" style="color:#e53e3e" title="管理者削除">🗑</button>':''}
        </div>
      </div>
    </div>`;
  }).join('');
}

function setFilter(f,el){
  curFilter=f;
  document.querySelectorAll('.fp').forEach(p=>p.classList.remove('on'));
  el.classList.add('on');
  renderFeed();
}
function setSort(s,el){
  curSort=s;
  document.querySelectorAll('.sbtn').forEach(b=>b.classList.remove('on'));
  el.classList.add('on');
  renderFeed();
}
function doSearch(q){curQ=q;renderFeed();}
async function toggleLike(id){
  if(!currentUser){showToast('ログインが必要です');return;}
  const c=CASES.find(x=>x.id==id);if(!c)return;
  const caseId=Number(id);
  const was=likeSt[id+'l']!=null?likeSt[id+'l']:c.liked;
  const newVal=!was;
  // ローカル即時更新
  likeSt[id+'l']=newVal;
  likeSt[id]=(likeSt[id]??c.likes)+(was?-1:1);
  c.liked=newVal;
  c.likes=likeSt[id];
  document.querySelectorAll('#lc-'+id+' .rbtn')[0]?.classList.toggle('liked',newVal);
  const el=document.getElementById('lk-'+id);if(el)el.textContent=likeSt[id];
  // Supabase保存
  if(!sb) return;
  if(newVal){
    const {error}=await sb.from('likes')
      .upsert({case_id:caseId, user_id:currentUser.id},{onConflict:'user_id,case_id',ignoreDuplicates:true});
    if(error) console.warn('いいね保存エラー:', error.message);
  } else {
    const {error}=await sb.from('likes')
      .delete()
      .eq('case_id',caseId)
      .eq('user_id',currentUser.id);
    if(error) console.error('いいね削除エラー:', error);
  }
}
async function toggleBkm(id){
  if(!currentUser){showToast('ログインが必要です');return;}
  const c=CASES.find(x=>x.id==id);
  const was=bkmSt[id]!=null?bkmSt[id]:c.bookmarked;
  const newVal=!was;
  bkmSt[id]=newVal;
  document.querySelectorAll('#lc-'+id+' .rbtn')[2]?.classList.toggle('bkm',newVal);
  // Supabase保存
  if(sb){
    try{
      if(newVal){
        await sb.from('bookmarks').upsert({case_id:Number(id),user_id:currentUser.id},{onConflict:'user_id,case_id',ignoreDuplicates:true});
      } else {
        await sb.from('bookmarks').delete()
          .eq('case_id',Number(id)).eq('user_id',currentUser.id);
      }
    }catch(e){console.warn('ブックマーク保存エラー:',e.message);}
  }
}

// ===== DETAIL =====
function buildDetail(id){
  const c=CASES.find(x=>x.id===id);if(!c)return;
  document.getElementById('det-hdr-title').textContent=c.title;
  adminCurrentCaseId=id;
  fetchComments(id);

  const ts=TYPE_S[c.type]||{bg:'rgba(128,128,128,.1)',c:'#888',bd:'rgba(128,128,128,.3)'};
  const em=TYPE_EM[c.type]||'📋';
  const isAdmin=currentProfile?.is_admin||false;
  const adminBtns=document.getElementById('admin-det-btns');
  if(adminBtns) adminBtns.style.display=isAdmin?'flex':'none';

  const fclass=function(v){
    if(!v) return '';
    if(/300|消失|なし|不可|VF|PEA/.test(v)) return 'al';
    if(/散大/.test(v)) return 'al';
    if(/蒼白|冷感|冷汗|弱|不整|促迫|頻呼吸/.test(v)) return 'wn';
    return '';
  };

  // タイムポイントHTML生成（文字列連結で統一）
  function vtCell(k,v,l,u){
    var cls='';
    if(!v||v==='---'||/不可|VF|PEA|なし|未測定/.test(v)) cls='al';
    else if(k==='bp'){var s=parseInt(v);if(!isNaN(s)&&s<90)cls='al';else if(!isNaN(s)&&s<100)cls='wn';}
    else if(k==='spo2'){var s=parseInt(v);if(!isNaN(s)&&s<93)cls='al';else if(!isNaN(s)&&s<96)cls='wn';}
    else if(k==='hr'){var s=parseInt(v);if(!isNaN(s)&&(s>130||s<50))cls='al';else if(!isNaN(s)&&(s>110||s<55))cls='wn';}
    if(!v||v==='---') return '';
    return '<div style="background:var(--inp);border:1px solid var(--bd);border-radius:5px;padding:5px 9px">'
      +'<div style="font-size:9px;color:var(--tm);margin-bottom:2px">'+l+'</div>'
      +'<span style="font-size:13px;font-weight:600;font-family:JetBrains Mono,monospace" class="'+cls+'">'+v+'</span>'
      +'<span style="font-size:9px;color:var(--tm)"> '+u+'</span>'
      +'</div>';
  }

  var tpHTML='';
  var tps=c.timepoints||[];
  for(var ti=0;ti<tps.length;ti++){
    var tp=tps[ti];
    var fn=tp.findings||{};
    var vt=tp.vitals||{};
    var vtHtml=''
      +vtCell('bp',vt.bp,'血圧','mmHg')
      +vtCell('hr',vt.hr,'脈拍','bpm')
      +vtCell('spo2',vt.spo2,'SpO2','%')
      +vtCell('rr',vt.rr,'呼吸数','回/分')
      +vtCell('bg',vt.bg,'血糖','mg/dL')
      +vtCell('temp',vt.temp,'体温','°C')
      +vtCell('etco2',vt.etco2,'ETCO2','mmHg');
    var stCls=(/ST上昇|ST低下|T波/.test(tp.st||''))?'hl':'';
    var tx=tp.treatment||[];
    var txHtml='';
    for(var xi=0;xi<tx.length;xi++) txHtml+='<span class="det-tag">'+tx[xi]+'</span>';
    tpHTML+=''
      +'<div style="background:var(--card);border:1px solid var(--bd);border-radius:var(--rl);margin-bottom:14px;overflow:hidden">'
        +'<div style="background:var(--inp);border-bottom:1px solid var(--bd);padding:10px 16px;display:flex;align-items:center;gap:10px">'
          +'<div style="background:var(--acc);color:#fff;font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px">'+(ti+1)+'</div>'
          +'<div style="font-size:14px;font-weight:500;color:var(--tp);flex:1">'+(tp.label||'')+'</div>'
          +(tp.time?'<div style="font-size:12px;font-family:JetBrains Mono,monospace;color:var(--ts)">'+tp.time+'</div>':'')
        +'</div>'
        +'<div style="padding:14px 16px">'
          +'<div class="tp-sub" style="--sub-c:#9f7aea;margin-top:0">身体所見</div>'
          +'<div class="findings-grid">'
            +'<div class="find-item"><div class="find-lbl">意識レベル</div><div class="find-val '+fclass(fn.consciousness)+'">'+( fn.consciousness||'---')+'</div></div>'
            +'<div class="find-item"><div class="find-lbl">呼吸</div><div class="find-val '+fclass(fn.breathing)+'">'+( fn.breathing||'---')+'</div></div>'
            +'<div class="find-item"><div class="find-lbl">循環（脈拍）</div><div class="find-val '+fclass(fn.circulation)+'">'+( fn.circulation||'---')+'</div></div>'
            +'<div class="find-item"><div class="find-lbl">瞳孔</div><div class="find-val '+fclass(fn.pupils)+'">'+( fn.pupils||'---')+'</div></div>'
            +'<div class="find-item"><div class="find-lbl">皮膚</div><div class="find-val '+fclass(fn.skin)+'">'+( fn.skin||'---')+'</div></div>'
          +'</div>'
          +(tp.obs?'<div style="margin-top:10px;background:var(--inp);border:1px solid var(--bd);border-radius:6px;padding:10px 12px">'
            +'<div style="font-size:10px;color:var(--tm);margin-bottom:4px">観察所見</div>'
            +'<div style="font-size:13px;color:var(--ts);line-height:1.7;white-space:pre-wrap;word-break:break-word">'+tp.obs+'</div>'
          +'</div>':'')
          +'<div class="tp-sub" style="--sub-c:#4299e1">バイタルサイン</div>'
          +'<div style="display:flex;gap:8px;flex-wrap:wrap">'+vtHtml+'</div>'
          +'<div class="tp-sub" style="--sub-c:var(--acc)">ECG所見</div>'
          +'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">'
            +(tp.rhythm?'<span class="det-tag">'+tp.rhythm+'</span>':'')
            +(tp.st?'<span class="det-tag '+stCls+'">'+tp.st+'</span>':'')
          +'</div>'
          +(tp.ecgNote?'<div style="font-size:13px;color:var(--ts);line-height:1.7;white-space:pre-wrap;word-break:break-word">'+tp.ecgNote+'</div>':'')
          +'<div class="tp-sub" style="--sub-c:#48bb78">実施処置</div>'
          +'<div>'+txHtml+'</div>'
        +'</div>'
      +'</div>';
  }

  // コメントHTML（初期表示・refreshCommentsで更新）
  var cmts='';
  var comments=(c.comments||[]).filter(function(x){return x&&x.text;});
  for(var ci=0;ci<comments.length;ci++){
    var cm=comments[ci];
    var t=CMT_TYPES.find(function(t){return t.key===(cm.cmt_type||'question');})||CMT_TYPES[0];
    var badge='<span class="cmt-type-badge" style="background:'+t.bg+';color:'+t.color+'">'+t.label+'</span>';
    var delBtn=isAdmin?'<button onclick="adminDeleteComment('+c.id+','+ci+')" style="background:transparent;border:none;color:var(--tm);cursor:pointer;padding:4px 6px;font-size:14px" title="削除">🗑</button>':'';
    cmts+='<div class="comment-item" id="cmt-'+c.id+'-'+ci+'">'
      +'<div class="c-av" style="background:'+cm.avBg+';color:'+cm.avC+'">'+cm.av+'</div>'
      +'<div style="flex:1">'
        +'<div class="c-meta">'+badge+cm.name+'<span class="c-time-sm">'+cm.time+'</span></div>'
        +'<div class="c-text">'+cm.text+'</div>'
      +'</div>'
      +delBtn
    +'</div>';
  }

  // コメントタイプボタン
  var cmtTypeBtns='';
  for(var ki=0;ki<CMT_TYPES.length;ki++){
    var t2=CMT_TYPES[ki];
    var isActive=(curCmtType&&t2.key===curCmtType);
    var styleAttr=isActive?(' style="border-color:'+t2.color+';color:'+t2.color+';background:'+t2.bg+';opacity:1;font-weight:700"'):'';
    cmtTypeBtns+='<button class="cmt-type-btn'+(isActive?' on':'')+'" data-key="'+t2.key+'"'+styleAttr+' onclick="selectCmtType(this)">'+t2.label+'</button>';
  }

  // タグHTML
  var tagHtml='';
  var tags=c.tags||[];
  for(var gi=0;gi<tags.length;gi++){
    var hl=/ROSC|VF|ヒヤリ|PEA/.test(tags[gi])?'hl':'';
    tagHtml+='<span class="det-tag '+hl+'">'+tags[gi]+'</span>';
  }

  var html=''
    +'<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px">'
      +'<span class="tbdg" style="--tbb:'+ts.bg+';--tbc:'+ts.c+';--tbbd:'+ts.bd+'">'+em+' '+c.type+'</span>'
      +'<span class="cbdg" style="background:rgba('+c.cr+',.12);color:'+c.cc+';border:1px solid rgba('+c.cr+',.28);padding:3px 9px;border-radius:20px;font-size:11px">'+c.cat+'</span>'
      +(c.is_anon
      ?'<span style="font-size:12px;color:var(--tm);margin-left:4px">匿名投稿</span>'
      :'')
    +'<span style="font-size:12px;color:var(--ts);display:flex;align-items:center;gap:6px;margin-left:4px">❤️ '+(likeSt[c.id]??c.likes)+'　💬 '+(c.comments_count!=null?c.comments_count:comments.length)+'</span>'
    +'</div>'


    +'<div class="det-sec">'
      +'<div class="sec-hdr-row"><div class="sec-bar" style="background:#4299e1"></div><div class="sec-title-sm">患者情報・現場概要</div></div>'
      +'<div class="info-grid" style="margin-bottom:10px">'
        +'<div class="info-block"><div class="ib-lbl">年齢</div><div class="ib-val">'+((c.pt_age)?c.pt_age+(c.pt_age_unit||'歳'):(c.pt&&c.pt.age)||'—')+'</div></div>'
        +'<div class="info-block"><div class="ib-lbl">性別</div><div class="ib-val">'+(c.pt_sex||(c.pt&&c.pt.sex)||'—')+'</div></div>'
        +'<div class="info-block"><div class="ib-lbl">発生場所</div><div class="ib-val">'+(c.pt_place||(c.pt&&c.pt.place)||'—')+'</div></div>'
        +'<div class="info-block"><div class="ib-lbl">搬送先</div><div class="ib-val">'+(c.pt_dest||(c.pt&&c.pt.transport)||'—')+'</div></div>'
      +'</div>'
      +'<div class="info-full"><div class="ib-lbl">通報内容</div><div class="ib-val" style="font-weight:500">'+(c.pt&&c.pt.chief?c.pt.chief:c.chief||'')+'</div></div>'
      +((c.prearrival)?'<div class="info-full"><div class="ib-lbl">プレアライバルコール</div><div class="ib-val" style="line-height:1.7;white-space:pre-wrap;word-break:break-word">'+c.prearrival+'</div></div>':'')
      +((c.roles)?'<div class="info-full"><div class="ib-lbl">情報共有・役割分担</div><div class="ib-val" style="line-height:1.7;white-space:pre-wrap;word-break:break-word">'+c.roles+'</div></div>':'')
      +((c.scene)?'<div class="info-full"><div class="ib-lbl">現場状況の詳細</div><div class="ib-val" style="line-height:1.7;white-space:pre-wrap;word-break:break-word">'+c.scene+'</div></div>':'')
    +'</div>'

    +'<div class="det-sec">'
      +'<div class="sec-hdr-row"><div class="sec-bar" style="background:#ed8936"></div><div class="sec-title-sm">既往歴・内服薬・アレルギー</div></div>'
      +'<div class="info-grid">'
        +'<div class="info-block"><div class="ib-lbl">既往歴</div><div class="ib-val" style="line-height:1.7;white-space:pre-wrap;word-break:break-word">'+(c.pmhx||'')+'</div></div>'
        +'<div class="info-block"><div class="ib-lbl">内服薬</div><div class="ib-val" style="line-height:1.7;white-space:pre-wrap;word-break:break-word">'+(c.meds||'')+'</div></div>'
        +'<div class="info-block"><div class="ib-lbl">アレルギー</div><div class="ib-val">'+(c.allergy||'')+'</div></div>'
      +'</div>'
    +'</div>'

    +'<div class="det-sec">'
      +'<div class="sec-hdr-row"><div class="sec-bar" style="background:#9f7aea"></div><div class="sec-title-sm">時系列記録</div></div>'
      +tpHTML
    +'</div>'

    +'<div class="det-sec">'
      +'<div class="sec-hdr-row"><div class="sec-bar" style="background:var(--acc)"></div><div class="sec-title-sm">タグ</div></div>'
      +'<div>'+tagHtml+'</div>'
    +'</div>'

    +'<div class="det-sec">'
      +'<div class="sec-hdr-row"><div class="sec-bar" style="background:#ed8936"></div><div class="sec-title-sm">振り返り</div></div>'
      +'<div class="reflect-block"><div class="rb-hdr"><div class="rb-dot" style="background:var(--acc)"></div><div class="rb-lbl">迷った点・悩んだこと</div></div><div class="rb-body">'+(c.reflect&&c.reflect.worry?c.reflect.worry:c.reflect_worry||'')+'</div></div>'
      +((c.reflect_question)?'<div class="reflect-block"><div class="rb-hdr"><div class="rb-dot" style="background:#4299e1"></div><div class="rb-lbl">質問したいこと</div></div><div class="rb-body">'+c.reflect_question+'</div></div>':'')
      +'<div class="reflect-block"><div class="rb-hdr"><div class="rb-dot" style="background:#48bb78"></div><div class="rb-lbl">よかった点・工夫したこと</div></div><div class="rb-body">'+(c.reflect&&c.reflect.good?c.reflect.good:c.reflect_good||'')+'</div></div>'
      +'<div class="reflect-block"><div class="rb-hdr"><div class="rb-dot" style="background:#4299e1"></div><div class="rb-lbl">次回への学び</div></div><div class="rb-body">'+(c.reflect&&c.reflect.learn?c.reflect.learn:c.reflect_learn||'')+'</div></div>'
    +'</div>'

    +'<div class="det-sec">'
      +'<div class="sec-hdr-row"><div class="sec-bar" style="background:#4299e1"></div><div class="sec-title-sm" id="cmt-cnt-'+c.id+'">コメント（'+comments.length+'件）</div></div>'
      +'<div class="comment-box">'
        +'<div id="cmt-list-'+c.id+'">'+cmts+'</div>'
        +'<div class="cmt-type-row" id="cmt-type-row-'+c.id+'">'+cmtTypeBtns+'</div>'
        +'<div style="padding:4px 14px 2px;display:flex;align-items:center;gap:8px"><span style="font-size:11px;color:var(--tm)">匿名投稿</span><div class="tog" id="cmt-anon-tog-'+c.id+'" onclick="toggleCmtAnon('+c.id+',this)" style="width:28px;height:16px;border-radius:8px"><div class="tog-k"></div></div></div>'
        +'<div class="c-input-row">'
          +'<input class="c-inp" id="c-inp-'+c.id+'" placeholder="コメントを入力..."/>'
          +'<button class="c-send" id="c-send-'+c.id+'" onclick="postCmt('+c.id+')">送信</button>'
        +'</div>'
      +'</div>'
    +'</div>'
    +'<div style="height:30px"></div>';

  document.getElementById('det-body').innerHTML=html;
}


function toggleCmtAnon(caseId, el){
  const isOn=el.classList.toggle('on');
  cmtAnonMap[caseId]=isOn;
}

function selectCmtType(el){
  const key=el.dataset.key;
  const row=el.closest('.cmt-type-row');
  const btns=row?row.querySelectorAll('.cmt-type-btn'):[];

  // 同じタブを再押し → 選択解除
  if(curCmtType===key){
    curCmtType=null;
    btns.forEach(function(b){ b.classList.remove('on'); b.removeAttribute('style'); });
    return;
  }

  // 別タブ押し → 全リセットして選択
  curCmtType=key;
  btns.forEach(function(b){ b.classList.remove('on'); b.removeAttribute('style'); });
  el.classList.add('on');
  const t=CMT_TYPES.find(function(t){return t.key===key;});
  if(t){
    el.style.cssText='border-color:'+t.color+';color:'+t.color+';background:'+t.bg+';opacity:1;font-weight:700';
  }
}

async function postCmt(id){
  if(!currentUser){showToast('ログインが必要です');return;}
  const inp=document.getElementById('c-inp-'+id);
  if(!inp||!inp.value.trim()) return;
  const body=inp.value.trim();
  const sendBtn=document.getElementById('c-send-'+id);
  if(sendBtn) sendBtn.disabled=true;

  const nick=currentProfile?.nickname||currentUser.email.split('@')[0];
  const avC=currentProfile?.av_color||'#e53e3e';
  const avBg=currentProfile?.av_bg||'rgba(229,62,62,.2)';
  // cmt_typeがnull（未選択）の場合はフィールドを省略（DB側のdefault 'question'が使われる）
  const isCmtAnon=cmtAnonMap[id]||false;
  const cmtData={
    case_id:id,
    user_id:currentUser.id,
    body,
    is_anon:isCmtAnon,
    ...(curCmtType ? {cmt_type:curCmtType} : {}),
  };

  try {
    if(sb){
      const {error}=await sb.from('comments').insert(cmtData);
      if(error) throw error;
    }
    // ローカルのCASES配列にも反映して即表示
    const c=CASES.find(x=>x.id==id);
    if(c){
      c.comments.push({
        name:isCmtAnon?'匿名':nick,
        av:isCmtAnon?'匿':nick.slice(0,2),
        avBg:isCmtAnon?'rgba(100,100,100,.2)':avBg,
        avC:isCmtAnon?'#888':avC,
        time:'たった今', text:body, cmt_type:curCmtType, is_anon:isCmtAnon,
      });
      c.comments_count=(c.comments_count||0)+1;
    }
    inp.value='';
    // 匿名トグルをリセット
    cmtAnonMap[id]=false;
    const anonTog=document.getElementById('cmt-anon-tog-'+id);
    if(anonTog) anonTog.classList.remove('on');
    showToast('コメントを送信しました');
    // コメントタイプ選択を解除
    curCmtType=null;
    const typeRow=document.querySelector('#cmt-type-row-'+id);
    if(typeRow) typeRow.querySelectorAll('.cmt-type-btn').forEach(function(b){b.classList.remove('on');b.removeAttribute('style');});
    // コメント欄を再描画
    refreshComments(id);
  } catch(e){
    showToast('送信エラー: '+e.message);
  } finally {
    if(sendBtn) sendBtn.disabled=false;
  }
}

// Supabaseからコメントを取得して表示を更新
async function fetchComments(caseId){
  if(!sb) return;
  try {
    // commentsをまず取得（JOINなし）
    const {data,error}=await sb.from('comments')
      .select('*')
      .eq('case_id',caseId)
      .order('created_at',{ascending:true});
    if(error) throw error;
    if(!data||data.length===0){
      const c=CASES.find(x=>x.id==caseId);
      if(c){c.comments=[];refreshComments(caseId);}
      return;
    }

    // user_idの一覧を取得してprofilesを別途取得
    const uids=[...new Set(data.map(d=>d.user_id).filter(Boolean))];
    let profMap={};
    if(uids.length>0){
      const {data:profs}=await sb.from('profiles')
        .select('id,nickname,av_color,av_bg')
        .in('id',uids);
      (profs||[]).forEach(p=>{profMap[p.id]=p;});
    }

    const c=CASES.find(x=>x.id==caseId);
    if(c){
      c.comments=data.map(d=>{
        const prof=profMap[d.user_id]||{};
        const nick=prof.nickname||'不明';
        const cmtIsAnon=d.is_anon||false;
        return {
          name:cmtIsAnon?'匿名':nick,
          av:cmtIsAnon?'匿':nick.slice(0,2),
          avBg:cmtIsAnon?'rgba(100,100,100,.2)':(prof.av_bg||'rgba(136,136,136,.2)'),
          avC:cmtIsAnon?'#888':(prof.av_color||'#888'),
          time:formatTime(d.created_at),
          text:d.body,
          cmt_type:d.cmt_type||null,
          is_anon:cmtIsAnon,
          db_id:d.id,
        };
      });
      refreshComments(caseId);
    }
  } catch(e){ console.warn('コメント取得エラー:', e.message); }
}

function refreshComments(caseId){
  const c=CASES.find(x=>x.id==caseId);
  if(!c) return;
  const isAdmin=currentProfile?.is_admin||false;
  const box=document.getElementById('cmt-list-'+caseId);
  const cnt=document.getElementById('cmt-cnt-'+caseId);
  // comments_countも更新
  c.comments_count=c.comments.length;
  c.comments_count=c.comments.length;
  if(cnt) cnt.textContent='コメント（'+c.comments.length+'件）';
  if(!box) return;
  box.innerHTML=c.comments.map((cm,ci)=>{
    const t=CMT_TYPES.find(t=>t.key===(cm.cmt_type||'question'))||CMT_TYPES[0];
    const badge='<span class="cmt-type-badge" style="background:'+t.bg+';color:'+t.color+'">'+t.label+'</span>';
    const delBtn=isAdmin?'<button onclick="adminDeleteComment('+caseId+','+ci+')" style="background:transparent;border:none;color:var(--tm);cursor:pointer;padding:4px 6px;font-size:14px;flex-shrink:0" title="削除">🗑</button>':'';
    return '<div class="comment-item" id="cmt-'+caseId+'-'+ci+'">'+
      '<div class="c-av" style="background:'+cm.avBg+';color:'+cm.avC+'">'+cm.av+'</div>'+
      '<div style="flex:1">'+
        '<div class="c-meta">'+badge+cm.name+'<span class="c-time-sm">'+cm.time+'</span></div>'+
        '<div class="c-text">'+cm.text+'</div>'+
      '</div>'+
      delBtn+
    '</div>';
  }).join('');
}

// ===== POST FORM =====
function updateAv(){
  const disp=document.getElementById('post-nick-disp');
  const val=disp?disp.textContent.trim():(currentProfile?.nickname||'');
  const av=document.getElementById('post-av');
  if(av) av.textContent=val.slice(0,2)||'?';
}
function toggleAnon(){
  isAnon=!isAnon;
  const tog=document.getElementById('anon-tog');
  if(tog) tog.classList.toggle('on',isAnon);
  // post-nick-disp（span）の表示を切り替え
  const disp=document.getElementById('post-nick-disp');
  if(disp) disp.style.opacity=isAnon?'0.4':'1';
  const av=document.getElementById('post-av');
  if(av) av.textContent=isAnon?'匿':((currentProfile?.nickname||'').slice(0,2)||'?');
}
function selCat(el){
  document.querySelectorAll('.cat-card').forEach(c=>c.classList.remove('on'));
  el.classList.add('on');
}
function selType(el){
  document.querySelectorAll('.type-pill').forEach(p=>p.classList.remove('on'));
  el.classList.add('on');
}
// ===== TIMEPOINT CARDS =====
const TP_PRESETS=[
  {label:'初期評価時',time:''},
  {label:'現場',time:''},
  {label:'救急車内',time:''},
  {label:'病院到着前',time:''},
  {label:'追加記録',time:''},
];
const TREATMENT_LIST=[
  'BLS（CPR）','AED','気管挿管','ラリンゲアルマスク','BVM換気',
  '静脈路確保','薬剤投与（Adr）','薬剤投与（その他）',
  '12誘導ECG','カプノグラフィー','血糖測定','酸素投与',
  '頸椎固定','バックボード','骨盤ベルト','止血処置',
  'CPAP','分娩介助','MC指示','体位管理'
];
const RHYTHM_LIST=['洞調律（SR）','心房細動（AF）','心房粗動','VF','VT','PEA','心静止','完全AVブロック','洞性頻脈','洞性徐脈','その他'];
const ST_LIST=['変化なし','ST上昇（下壁）','ST上昇（前壁）','ST上昇（側壁）','ST低下','T波平坦化','T波陰転','評価困難'];

let tpCount=0;

function buildTimepointCard(idx){
  const preset=TP_PRESETS[Math.min(idx,TP_PRESETS.length-1)];
  const id=`tp-${Date.now()}-${idx}`;
  const div=document.createElement('div');
  div.className='tp-card';
  div.id=id;
  div.dataset.draggable='true';
  div.innerHTML=`
  <div class="tp-card-hdr">
    <div class="tp-drag-handle" title="ドラッグして並び替え">
      <span></span><span></span><span></span>
    </div>
    <div class="tp-badge">${idx+1}</div>
    <input class="tp-label-inp" placeholder="タイムポイント名" value="${preset.label}"/>
    <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
      <span style="font-size:11px;color:var(--tm)">時刻</span>
      <input type="time" class="tp-time-inp" value="${preset.time}"/>
    </div>
    <button class="tp-del" onclick="removeTP('${id}')" title="削除">✕</button>
  </div>
  <div class="tp-body">

    <div class="tp-sub" style="--sub-c:#9f7aea;margin-top:0">身体所見</div>
    <div class="tp-findings-grid">
      <div class="tp-find-item"><div class="tp-find-lbl">意識レベル（JCS/GCS）</div><input class="tp-find-inp" placeholder="例：JCS 300 / GCS E1V1M1"/></div>
      <div class="tp-find-item"><div class="tp-find-lbl">瞳孔</div><input class="tp-find-inp" placeholder="例：散大・対光反射なし"/></div>
      <div class="tp-find-item"><div class="tp-find-lbl">呼吸</div><input class="tp-find-inp" placeholder="例：自発呼吸なし / 頻呼吸"/></div>
      <div class="tp-find-item"><div class="tp-find-lbl">呼吸音</div><input class="tp-find-inp" placeholder="例：両側清明 / 右側減弱"/></div>
      <div class="tp-find-item"><div class="tp-find-lbl">循環（脈拍触知）</div><input class="tp-find-inp" placeholder="例：頸動脈触知なし / 橈骨動脈弱い"/></div>
      <div class="tp-find-item"><div class="tp-find-lbl">皮膚色・温感</div><input class="tp-find-inp" placeholder="例：蒼白・冷感・冷汗あり"/></div>
    </div>
    <div style="margin-top:10px">
      <div class="tp-find-lbl">観察所見</div>
      <textarea class="tp-note-inp" style="min-height:90px" placeholder="例：頸静脈怒張あり、両下腿に浮腫、腹部圧痛・筋性防御あり、四肢末梢冷感、項部硬直なし など"></textarea>
    </div>

    <div class="tp-sub" style="--sub-c:#4299e1">バイタルサイン</div>
    <div class="vital-grid">
      <div><div class="vital-item-lbl">血圧</div><input class="vital-inp" placeholder="120/80"/><div class="vital-unit">mmHg</div></div>
      <div><div class="vital-item-lbl">脈拍</div><input class="vital-inp" placeholder="80"/><div class="vital-unit">回/分</div></div>
      <div><div class="vital-item-lbl">SpO2</div><input class="vital-inp" placeholder="98"/><div class="vital-unit">%</div></div>
      <div><div class="vital-item-lbl">呼吸数</div><input class="vital-inp" placeholder="16"/><div class="vital-unit">回/分</div></div>
      <div><div class="vital-item-lbl">体温</div><input class="vital-inp" placeholder="36.8"/><div class="vital-unit">°C</div></div>
      <div><div class="vital-item-lbl">血糖</div><input class="vital-inp" placeholder="105"/><div class="vital-unit">mg/dL</div></div>
      <div><div class="vital-item-lbl">ETCO2</div><input class="vital-inp" placeholder="35"/><div class="vital-unit">mmHg</div></div>
      <div><div class="vital-item-lbl">体重（小児）</div><input class="vital-inp" placeholder="---"/><div class="vital-unit">kg</div></div>
    </div>

    <div class="tp-sub" style="--sub-c:var(--acc)">ECG所見</div>
    <div class="tp-ecg-row">
      <div class="tp-find-item"><div class="tp-find-lbl">心調律</div>
        <select class="tp-find-inp" style="cursor:pointer">
          <option value="">選択...</option>
          ${RHYTHM_LIST.map(r=>'<option>'+r+'</option>').join('')}
        </select>
      </div>
      <div class="tp-find-item"><div class="tp-find-lbl">ST変化</div>
        <select class="tp-find-inp" style="cursor:pointer">
          <option value="">選択...</option>
          ${ST_LIST.map(s=>'<option>'+s+'</option>').join('')}
        </select>
      </div>
    </div>
    <textarea class="tp-note-inp" placeholder="ECG所見・12誘導の詳細メモ（例：VFを確認→除細動後SR復帰、II・III・aVFにST上昇）"></textarea>

    <div class="tp-sub" style="--sub-c:#48bb78">実施処置</div>
    <div class="tp-chips">
      ${TREATMENT_LIST.map(t=>'<div class="tp-chip" onclick="this.classList.toggle(\'on\')">'+t+'</div>').join('')}
    </div>
    <textarea class="tp-note-inp" style="margin-top:10px" placeholder="処置の詳細・特定行為メモ（例：気管挿管2回目成功、アドレナリン1mg静注）"></textarea>

  </div>`;

  initDrag(div);
  return div;
}

function addTimepoint(){
  const container=document.getElementById('tp-cards');
  container.appendChild(buildTimepointCard(tpCount));
  tpCount++;
  renumberTP();
}

function removeTP(id){
  const el=document.getElementById(id);
  if(el) el.remove();
  renumberTP();
}

function renumberTP(){
  document.querySelectorAll('.tp-card').forEach((card,i)=>{
    const badge=card.querySelector('.tp-badge');
    if(badge) badge.textContent=i+1;
  });
}

// ===== DRAG & DROP =====
function initDrag(card){
  const handle=card.querySelector('.tp-drag-handle');
  if(!handle) return;

  function startDrag(clientY){
    const container=document.getElementById('tp-cards');

    // カード自身は半透明のままDOMに残す（fixed移動しない）
    card.classList.add('dragging');

    // 追従するゴースト（視覚用クローン）
    const rect=card.getBoundingClientRect();
    const ghost=card.cloneNode(true);
    ghost.style.cssText=`position:fixed;z-index:999;width:${rect.width}px;left:${rect.left}px;top:${rect.top}px;margin:0;pointer-events:none;opacity:.85;box-shadow:0 8px 24px rgba(0,0,0,.5)`;
    document.body.appendChild(ghost);

    const startY=clientY;
    const startTop=rect.top;

    function getClientY(e){ return e.touches ? e.touches[0].clientY : e.clientY; }

    function onMove(e){
      if(e.cancelable) e.preventDefault();
      const cy=getClientY(e);
      ghost.style.top=(startTop+(cy-startY))+'px';

      // ドラッグ中カードの位置を判定して並び替え
      const siblings=[...container.querySelectorAll('.tp-card:not(.dragging)')];
      let ref=null;
      for(const s of siblings){
        const r=s.getBoundingClientRect();
        if(cy < r.top+r.height/2){ ref=s; break; }
      }
      // refがnullなら末尾、あれば直前に移動
      if(ref){
        container.insertBefore(card, ref);
      } else {
        container.appendChild(card);
      }
    }

    function onEnd(){
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onEnd);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onEnd);
      ghost.remove();
      card.classList.remove('dragging');
      renumberTP();
    }

    document.addEventListener('mousemove', onMove, {passive:false});
    document.addEventListener('mouseup', onEnd);
    document.addEventListener('touchmove', onMove, {passive:false});
    document.addEventListener('touchend', onEnd);
  }

  handle.addEventListener('mousedown', e=>{ e.preventDefault(); startDrag(e.clientY); });
  handle.addEventListener('touchstart', e=>{ e.preventDefault(); startDrag(e.touches[0].clientY); }, {passive:false});
}

function calcChars(){
  let n=0;
  document.querySelectorAll('.post-wrap textarea,.post-wrap input[type="text"],.post-wrap .tp-find-inp,.post-wrap .tp-note-inp,.post-wrap .vital-inp,.form-input,.form-textarea').forEach(el=>{
    if(el.value) n+=el.value.length;
  });
  document.getElementById('char-cnt').textContent=n+'文字';
}

// ===== EDIT MODE =====
async function startEditCase(caseId){
  let c=CASES.find(x=>x.id==caseId);
  if(!c && sb){
    const {data}=await sb.from('cases').select('*').eq('id',caseId).single();
    if(data) c=data;
  }
  if(!c){showToast('症例データが見つかりません');return;}

  // 権限チェック
  const isOwner=currentUser&&c.user_id===currentUser.id;
  const isAdminUser=currentProfile?.is_admin||false;
  if(!isOwner&&!isAdminUser){showToast('編集権限がありません');return;}

  editCaseId=Number(c.id);
  // デバッグ：DBから取得したデータを確認
  console.log('編集データ:', {
    id:c.id, type:c.type, cat:c.cat,
    chief:c.chief, scene:c.scene,
    pt_age:c.pt_age, pt_age_unit:c.pt_age_unit,
    pt_sex:c.pt_sex, pt_place:c.pt_place, pt_dest:c.pt_dest,
    prearrival:c.prearrival, roles:c.roles,
    pmhx:c.pmhx, is_anon:c.is_anon,
    timepoints_count:(c.timepoints||[]).length
  });
  resetPostForm();

  // カテゴリ選択
  document.querySelectorAll('.cat-card').forEach(function(el){
    if(el.querySelector('.cat-name')?.textContent===c.cat) el.classList.add('on');
  });

  // 投稿タイプ選択
  var typeVal=c.type||'';
  document.querySelectorAll('.type-pill').forEach(function(el){
    var t=el.textContent.replace(/\s/g,'').replace(/[^\w\u30A0-\u9FFF]/gu,'');
    var v=typeVal.replace(/\s/g,'');
    if(el.textContent.indexOf(typeVal)>=0||typeVal.indexOf(t)>=0) el.classList.add('on');
  });

  // テキスト入力
  function setVal(id,val){var el=document.getElementById(id);if(el)el.value=val||'';}

  // 患者情報（年齢・性別・場所・搬送先）
  setVal('f-age',      c.pt_age||'');
  setVal('f-chief',    c.chief||'');
  setVal('f-prearrival',c.prearrival||'');
  setVal('f-roles',    c.roles||'');
  setVal('f-scene',    c.scene||'');
  setVal('f-pmhx',     c.pmhx||'');
  setVal('f-meds',     c.meds||'');
  setVal('f-allergy',  c.allergy||'');
  setVal('f-worry',    c.reflect_worry||c.reflect?.worry||'');
  setVal('f-question', c.reflect_question||'');
  setVal('f-good',     c.reflect_good||c.reflect?.good||'');
  setVal('f-learn',    c.reflect_learn||c.reflect?.learn||'');

  // セレクトボックス（年齢単位・性別・場所・搬送先）
  function setSelect(id,val){
    var el=document.getElementById(id);
    if(!el||!val) return;
    for(var i=0;i<el.options.length;i++){
      if(el.options[i].value===val||el.options[i].text===val){
        el.selectedIndex=i; break;
      }
    }
  }
  setSelect('f-age-unit', c.pt_age_unit||'歳');
  setSelect('f-sex',      c.pt_sex||'');
  setSelect('f-place',    c.pt_place||'');
  setSelect('f-dest',     c.pt_dest||'');

  // タグ選択
  var tags=c.tags||[];
  document.querySelectorAll('.tag-chip').forEach(function(el){
    if(tags.indexOf(el.textContent.trim())>=0) el.classList.add('on');
  });

  // タイムポイント復元
  var tpContainer=document.getElementById('tp-cards');
  var tps=c.timepoints||[];
  if(tpContainer&&tps.length>0){
    tpContainer.innerHTML=''; tpCount=0;
    tps.forEach(function(tp,idx){
      tpContainer.appendChild(buildTimepointCard(idx)); tpCount++;
      var card=tpContainer.lastElementChild;
      function si(sel,val){var el=card.querySelector(sel);if(el)el.value=val||'';}
      si('.tp-label-inp',tp.label);
      si('.tp-time-inp', tp.time);
      var fi=card.querySelectorAll('.tp-find-inp');
      var fn=tp.findings||{};
      if(fi[0])fi[0].value=fn.consciousness||'';
      if(fi[1])fi[1].value=fn.breathing||'';
      if(fi[2])fi[2].value=fn.breath_sounds||'';
      if(fi[3])fi[3].value=fn.circulation||'';
      if(fi[4])fi[4].value=fn.skin||'';
      if(fi[5])fi[5].value=fn.pupils||'';
      var vi=card.querySelectorAll('.vital-inp');
      var vt=tp.vitals||{};
      ['bp','hr','spo2','rr','temp','bg','etco2'].forEach(function(k,i){
        if(vi[i]&&vt[k]&&vt[k]!=='---')vi[i].value=vt[k];
      });
      if(fi[6])fi[6].value=tp.rhythm||'';
      if(fi[7])fi[7].value=tp.st||'';
      var ni=card.querySelectorAll('.tp-note-inp');
      if(ni[0])ni[0].value=tp.obs||'';
      if(ni[1])ni[1].value=tp.ecgNote||'';
      if(ni[2])ni[2].value=tp.treatmentNote||'';
      var tx=tp.treatment||[];
      card.querySelectorAll('.tp-chip').forEach(function(chip){
        if(tx.indexOf(chip.textContent.trim())>=0) chip.classList.add('on');
      });
    });
  }

  // 匿名トグル
  isAnon=c.is_anon||false;
  var tog=document.getElementById('anon-tog');
  if(tog) tog.classList.toggle('on',isAnon);

  // 送信ボタンのラベル変更
  var submitBtn=document.querySelector('.submit-btn');
  if(submitBtn) submitBtn.textContent='症例を更新する \u2192';

  // 編集モードバナーを表示
  var banner=document.getElementById('edit-mode-banner');
  if(banner) banner.style.display='flex';

  showPage('post',null);
  window.scrollTo(0,0);
  showToast('編集モードで開いています');
}


// 必須項目エラー時にスクロール＆ハイライト
function scrollToRequired(el, msg){
  if(el){
    el.scrollIntoView({behavior:'smooth', block:'center'});
    el.style.transition='box-shadow .2s';
    el.style.boxShadow='0 0 0 2px var(--acc)';
    setTimeout(function(){el.style.boxShadow='';},2000);
  }
  showToast(msg);
}

// 必須項目エラー時にスクロール＆ハイライト
function scrollToRequired(el, msg){
  if(el){
    el.scrollIntoView({behavior:'smooth', block:'center'});
    el.style.transition='box-shadow .3s';
    el.style.boxShadow='0 0 0 2px var(--acc)';
    setTimeout(function(){el.style.boxShadow='';el.style.transition='';},2000);
    if(el.focus) el.focus();
  }
  showToast(msg);
}

async function submitCase(){
  if(!currentUser){showToast('ログインが必要です');return;}

  // emoji除去ヘルパー
  const stripEmoji = s => s.replace(/[\u{1F300}-\u{1FFFF}\u{2600}-\u{27BF}\u{FE00}-\u{FEFF}]/gu,'').trim();

  // 必須チェック
  const chief = document.getElementById('f-chief')?.value.trim()||'';
  const prearrival = document.getElementById('f-prearrival')?.value.trim()||'';
  const catEl  = document.querySelector('.cat-card.on .cat-name');
  const typeEl = document.querySelector('.type-pill.on');
  if(!catEl){
    scrollToRequired(document.getElementById('cat-grid'),'症例カテゴリを選択してください');return;
  }
  if(!typeEl){
    scrollToRequired(document.querySelector('.type-pills'),'症例の性質を選択してください');return;
  }
  // 年齢バリデーション（必須）
  const ageRaw=document.getElementById('f-age')?.value;
  if(!ageRaw&&ageRaw!=='0'){
    scrollToRequired(document.getElementById('f-age'),'年齢を入力してください');return;
  }
  const ageNum=Number(ageRaw);
  if(isNaN(ageNum)||ageNum<0){
    scrollToRequired(document.getElementById('f-age'),'年齢は0以上の数値を入力してください');return;
  }
  if(ageNum>130){
    scrollToRequired(document.getElementById('f-age'),'年齢の値を確認してください');return;
  }
  // 性別バリデーション（必須）
  const sexVal=document.getElementById('f-sex')?.value||'';
  if(!sexVal||sexVal==='選択...'){
    scrollToRequired(document.getElementById('f-sex'),'性別を選択してください');return;
  }
  if(!chief){
    scrollToRequired(document.getElementById('f-chief'),'通報内容を入力してください');return;
  }
  if(!prearrival){
    scrollToRequired(document.getElementById('f-prearrival'),'プレアライバルコール内容を入力してください');return;
  }
  const scene = document.getElementById('f-scene')?.value.trim()||'';
  if(!scene){
    scrollToRequired(document.getElementById('f-scene'),'現場状況の詳細を入力してください');return;
  }
  const learn=document.getElementById('f-learn')?.value.trim()||'';
  if(!learn){
    scrollToRequired(document.getElementById('f-learn'),'次回に活かしたいこと・学びのポイントを入力してください');return;
  }
  // 年齢バリデーション
  const cat  = catEl.textContent.trim();        // 例: CPA・蘇生
  const type = stripEmoji(typeEl.textContent);  // emoji除去: 悩んだ症例

  // 患者情報からタイトルを自動生成
  const age    = document.getElementById('f-age')?.value||'';
  const ageU   = document.getElementById('f-age-unit')?.value||'歳';
  const sex    = document.getElementById('f-sex')?.value||'';
  const place  = document.getElementById('f-place')?.value||'';
  const agePart  = age ? `${age}${ageU}` : '';
  const sexPart  = sex && sex!=='選択...' ? `・${sex}` : '';
  const placePart= place && place!=='選択...' ? `・${place}` : '';
  const autoTitle= `【${type}】${agePart}${sexPart}${placePart} ${chief}`.slice(0,80);

  const CAT_META={
      '心停止・ROSC':  {cc:'#e53e3e',cr:'229,62,62'},
      '外傷':          {cc:'#ed8936',cr:'237,137,54'},
      '内因性疾患':    {cc:'#4299e1',cr:'66,153,225'},
      '小児':          {cc:'#48bb78',cr:'72,187,120'},
      '産婦人科':      {cc:'#f687b3',cr:'246,135,179'},
      '精神':          {cc:'#9f7aea',cr:'159,122,234'},
      'その他':        {cc:'#68d391',cr:'104,211,145'},
  };
  const meta = CAT_META[cat]||{cc:'#e53e3e',cr:'229,62,62'};

  // タイムポイント収集
  const tpCards = document.querySelectorAll('#tp-cards .tp-card');
  const timepoints = Array.from(tpCards).map(card=>{
    const fi  = card.querySelectorAll('.tp-find-inp');
    const vi  = card.querySelectorAll('.vital-inp');
    const ni  = card.querySelectorAll('.tp-note-inp');
    const tx  = Array.from(card.querySelectorAll('.tp-chip.on')).map(c=>c.textContent.trim());
    return {
      label: card.querySelector('.tp-label-inp')?.value||'',
      time:  card.querySelector('.tp-time-inp')?.value||'',
      findings:{
        consciousness: fi[0]?.value||'', breathing:fi[1]?.value||'',
        breath_sounds: fi[2]?.value||'', circulation:fi[3]?.value||'',
        skin:fi[4]?.value||'',           pupils:fi[5]?.value||'',
      },
      obs: ni[0]?.value||'',
      vitals:{
        bp:vi[0]?.value||'---',  hr:vi[1]?.value||'---',
        spo2:vi[2]?.value||'---',rr:vi[3]?.value||'---',
        temp:vi[4]?.value||'---',bg:vi[5]?.value||'---',
        etco2:vi[6]?.value||'---',
      },
      rhythm:fi[6]?.value||'', st:fi[7]?.value||'',
      ecgNote:ni[1]?.value||'',
      treatment:tx,
      treatmentNote:ni[2]?.value||'',
    };
  });

  // タグ収集
  const tags = Array.from(document.querySelectorAll('#tag-chips .tag-chip.on'))
    .map(t=>t.textContent.trim());

  const dest = document.getElementById('f-dest')?.value||'';

  const caseData={
    user_id: currentUser.id,
    type, cat,
    title:   autoTitle,
    chief,
    scene,
    pt_age:      age,
    pt_age_unit: ageU,
    pt_sex:      sex,
    pt_place:    place,
    pt_dest:     dest,
    prearrival: document.getElementById('f-prearrival')?.value.trim()||'',
    roles:      document.getElementById('f-roles')?.value.trim()||'',
    pmhx:    document.getElementById('f-pmhx')?.value.trim()||'',
    meds:    document.getElementById('f-meds')?.value.trim()||'',
    allergy: document.getElementById('f-allergy')?.value.trim()||'',
    timepoints,
    tags,
    reflect_worry:    document.getElementById('f-worry')?.value.trim()||'',
    reflect_question: document.getElementById('f-question')?.value.trim()||'',
    reflect_good:     document.getElementById('f-good')?.value.trim()||'',
    reflect_learn:    document.getElementById('f-learn')?.value.trim()||'',
    is_anon: isAnon,
  };

  const submitBtn = document.querySelector('.submit-btn');
  if(submitBtn){submitBtn.disabled=true;submitBtn.textContent='投稿中...';}

  try {
    if(editCaseId){
      // 編集モード → UPDATE（user_idは除外してRLSエラーを防ぐ）
      const {user_id, ...updateData}=caseData;
      const {error}=await sb.from('cases').update(updateData).eq('id',editCaseId);
      if(error) throw error;
      // CASES配列から旧データを削除して最新取得で置き換え
      const oldIdx=CASES.findIndex(x=>x.id==editCaseId);
      if(oldIdx>=0) CASES.splice(oldIdx,1);
      showToast('症例を更新しました ✓');
    } else {
      // 新規投稿 → INSERT
      const {error}=await sb.from('cases').insert(caseData);
      if(error) throw error;
      showToast('症例を投稿しました ✓');
    }
    localStorage.removeItem(DRAFT_KEY); // 下書きを自動削除
    fullResetPost();
    await fetchAndRenderFeed();
    setTimeout(function(){showPage('timeline',document.querySelector('.ntab'));},800);
  } catch(e){
    const msg = e.message || JSON.stringify(e) || '不明なエラー';
    showToast('投稿失敗: '+msg);
    console.error('submitCase error:', e);
    // エラー詳細をアラートで表示（デバッグ用）
    alert('投稿エラー詳細:\n' + msg + '\n\nコード: ' + (e.code||'なし') + '\n詳細: ' + (e.details||'なし') + '\nヒント: ' + (e.hint||'なし'));
  } finally {
    if(submitBtn){submitBtn.disabled=false;}
  }
}

function cancelEdit(){
  fullResetPost();
  showToast('編集をキャンセルしました');
}

function resetPostForm(){
  document.querySelectorAll('.cat-card.on').forEach(e=>e.classList.remove('on'));
  document.querySelectorAll('.type-pill.on').forEach(e=>e.classList.remove('on'));
  document.querySelectorAll('.tag-chip.on,.tp-chip.on').forEach(e=>e.classList.remove('on'));
  document.querySelectorAll('.post-wrap textarea, .post-wrap input:not([type="time"])').forEach(e=>{
    if(e.tagName==='SELECT') e.selectedIndex=0; else e.value='';
  });
  // タイムポイントをリセット（3枚に戻す）
  const tp=document.getElementById('tp-cards');
  if(tp){ tp.innerHTML=''; tpCount=0;
    tp.appendChild(buildTimepointCard(0));tpCount++;
    tp.appendChild(buildTimepointCard(1));tpCount++;
    tp.appendChild(buildTimepointCard(2));tpCount++;
  }
  // ※ editCaseIdはここでリセットしない（startEditCaseが後でセットするため）
}

// 完全リセット（新規投稿時・キャンセル時）
function fullResetPost(){
  editCaseId=null;
  isAnon=false;
  const tog=document.getElementById('anon-tog');
  if(tog) tog.classList.remove('on');
  resetPostForm();
  const sb2=document.querySelector('.submit-btn');
  if(sb2) sb2.textContent='症例を投稿する →';
  const banner=document.getElementById('edit-mode-banner');
  if(banner) banner.style.display='none';
}

// ===== MYPAGE =====
async function updateMyPage(){
  if(!currentUser) return;
  const profile=currentProfile;
  const nick=profile?.nickname||currentUser.email.split('@')[0];
  // 管理者パネル表示制御
  const adminPanel=document.getElementById('admin-panel');
  if(adminPanel) adminPanel.style.display=profile?.is_admin?'block':'none';
  const initials=nick.slice(0,2)||'?';
  const el1=document.getElementById('my-av-big');
  const el2=document.getElementById('my-name-disp');
  const el3=document.getElementById('my-email-disp');
  const nickInp=document.getElementById('my-nick-inp');
  if(el1) el1.textContent=initials;
  if(el2) el2.textContent=nick;
  if(el3) el3.textContent=currentUser.email;
  if(nickInp) nickInp.value=nick;

  // 自分の投稿をSupabaseから取得（未接続時はサンプルデータにフォールバック）
  const mp=document.getElementById('my-posts');
  if(!mp) return;
  try {
    const {data,error}=await sb.from('cases')
      .select('id,title,type,cat,created_at')
      .eq('user_id',currentUser.id)
      .order('created_at',{ascending:false});
    if(error) throw error;

    // 自分の投稿IDリスト（数値型に明示変換）
    const myIds=(data||[]).map(c=>Number(c.id)).filter(Boolean);
    const statPosts=document.getElementById('my-stat-posts');
    const statLikes=document.getElementById('my-stat-likes');
    const statCmts=document.getElementById('my-stat-cmts');
    if(statPosts) statPosts.textContent=myIds.length;

    // いいね数・コメント数をDBから取得
    if(myIds.length>0){
      // bigint型との互換性のため文字列・数値両方試す
      const {data:likeData, error:le}=await sb
        .from('likes').select('case_id').in('case_id',myIds);
      if(le){
        console.error('いいね取得エラー詳細:',JSON.stringify(le));
        if(statLikes) statLikes.textContent='?';
      } else {
        console.log('いいね取得成功:',likeData?.length,'件 myIds:',myIds);
        if(statLikes) statLikes.textContent=(likeData||[]).length;
      }

      // 自分が書いたコメント数（user_idで直接取得）
      const {data:cmtData, error:ce}=await sb
        .from('comments').select('id').eq('user_id',currentUser.id);
      if(ce){
        console.error('コメント取得エラー:',ce.message);
        if(statCmts) statCmts.textContent='?';
      } else {
        if(statCmts) statCmts.textContent=(cmtData||[]).length;
      }
    } else {
      console.log('自分の投稿なし→いいね・コメント0');
      if(statLikes) statLikes.textContent=0;
      if(statCmts)  statCmts.textContent=0;
    }

    if(data&&data.length>0){
      mp.innerHTML=data.map(c=>{
        const em=TYPE_EM[c.type]||'📋';
        const dt=new Date(c.created_at).toLocaleDateString('ja-JP');
        return '<div class="my-post-item">'+
          '<div onclick="showDetailById('+c.id+')" style="flex:1;cursor:pointer">'+
            '<div class="my-post-title">'+c.title+'</div>'+
            '<div class="my-post-meta">'+
              '<span>'+em+' '+c.type+'</span>'+
              '<span>'+c.cat+'</span>'+
              '<span>'+dt+'</span>'+
            '</div>'+
          '</div>'+
          '<button onclick="startEditCase('+c.id+')" style="flex-shrink:0;padding:5px 12px;background:rgba(66,153,225,.15);border:1px solid #4299e1;border-radius:6px;color:#90cdf4;font-size:11px;cursor:pointer;margin-left:8px">編集</button>'+
        '</div>';
      }).join('');
    } else {
      mp.innerHTML='<div style="text-align:center;padding:30px;color:var(--tm);font-size:13px">まだ投稿がありません</div>';
    }
  } catch(e) {
    console.error('マイページ取得エラー詳細:', e);
    if(mp) mp.innerHTML='<div style="text-align:center;padding:30px;color:var(--tm);font-size:13px">読み込みエラー: '+e.message+'</div>';
  }
}

async function saveNickname(){
  if(!currentUser) return;
  const nick=document.getElementById('my-nick-inp').value.trim();
  if(!nick) return;
  const {error}=await sb.from('profiles').upsert({id:currentUser.id,nickname:nick});
  if(!error){
    currentProfile={...currentProfile,nickname:nick};
    document.getElementById('my-av-big').textContent=nick.slice(0,2);
    document.getElementById('my-name-disp').textContent=nick;
    document.getElementById('hdr-user').textContent=nick;
    showToast('ニックネームを保存しました');
  }
}

// ===== ADMIN FUNCTIONS =====
let adminCurrentCaseId=null;

async function adminDeleteCase(caseId, e){
  if(e) e.stopPropagation();
  if(!confirm('この投稿を削除しますか？\nこの操作は取り消せません。')) return;
  try {
    const {error}=await sb.from('cases').delete().eq('id',caseId);
    if(error) throw error;
    // ローカルのCASES配列からも除去
    const idx=CASES.findIndex(c=>c.id===caseId);
    if(idx>-1) CASES.splice(idx,1);
    showToast('投稿を削除しました');
    renderFeed();
  } catch(e) {
    // Supabase未接続時はローカルのみ削除
    const idx=CASES.findIndex(c=>c.id===caseId);
    if(idx>-1) CASES.splice(idx,1);
    showToast('投稿を削除しました（ローカル）');
    renderFeed();
  }
}

function adminDeleteCaseFromDetail(){
  if(!adminCurrentCaseId) return;
  adminDeleteCase(adminCurrentCaseId, null);
  backToTimeline();
}

async function adminDeleteComment(caseId, cmtIdx){
  if(!confirm('このコメントを削除しますか？')) return;
  const c=CASES.find(x=>x.id==caseId);
  const cm=c?.comments[cmtIdx];
  try {
    // DBのidがあればSupabaseから削除
    if(sb && cm?.db_id){
      const {error}=await sb.from('comments').delete().eq('id',cm.db_id);
      if(error) throw error;
    }
    if(c) c.comments.splice(cmtIdx,1);
    showToast('コメントを削除しました');
    refreshComments(caseId);
  } catch(e){
    showToast('削除エラー: '+e.message);
  }
}

function adminEditCase(){
  if(!adminCurrentCaseId) return;
  startEditCase(adminCurrentCaseId);
}

async function loadAdminCases(){
  const el=document.getElementById('admin-cases');
  if(!el) return;
  el.innerHTML='<div style="color:var(--tm);padding:8px">読み込み中...</div>';
  try {
    // casesとprofilesを別クエリで取得（JOINなし）
    const {data,error}=await sb
      .from('cases')
      .select('id,title,type,created_at,user_id')
      .order('created_at',{ascending:false})
      .limit(50);
    if(error) throw error;
    if(!data||data.length===0){
      el.innerHTML='<div style="color:var(--tm);padding:8px">投稿なし</div>';return;
    }
    // nicknameを別途取得
    const uids=[...new Set(data.map(function(d){return d.user_id;}).filter(Boolean))];
    var nickMap={};
    if(uids.length>0){
      const {data:profs}=await sb.from('profiles').select('id,nickname').in('id',uids);
      (profs||[]).forEach(function(p){nickMap[p.id]=p.nickname||'不明';});
    }
    el.innerHTML=data.map(function(c){
      var nick=nickMap[c.user_id]||'不明';
      var dt=new Date(c.created_at).toLocaleDateString('ja-JP');
      return '<div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--bd)">'
        +'<div style="flex:1;min-width:0">'
          +'<div style="font-size:13px;color:var(--tp);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+c.title+'</div>'
          +'<div style="font-size:11px;color:var(--tm);margin-top:2px">'+nick+' · '+dt+'</div>'
        +'</div>'
        +'<button onclick="adminDeleteCaseById('+c.id+')" style="padding:5px 10px;background:rgba(229,62,62,.15);border:1px solid var(--acc);border-radius:6px;color:#fc8181;font-size:11px;cursor:pointer;white-space:nowrap;flex-shrink:0">削除</button>'
      +'</div>';
    }).join('');
  } catch(e) {
    el.innerHTML='<div style="color:var(--tm);padding:8px">エラー: '+e.message+'</div>';
  }
}

async function adminDeleteCaseById(caseId){
  if(!confirm('この投稿を削除しますか？\nこの操作は取り消せません。')) return;
  try {
    const {error}=await sb.from('cases').delete().eq('id',caseId);
    if(error) throw error;
    showToast('投稿を削除しました');
    loadAdminCases();
    renderFeed();
  } catch(e) {
    showToast('エラー: '+e.message);
  }
}

async function loadAdminUsers(){
  const el=document.getElementById('admin-users');
  if(!el) return;
  el.innerHTML='<div style="color:var(--tm);padding:8px 0">読み込み中...</div>';
  try {
    const {data,error}=await sb.from('profiles').select('*').order('created_at',{ascending:true});
    if(error) throw error;
    if(!data||data.length===0){el.innerHTML='<div style="color:var(--tm);padding:8px 0">ユーザーなし</div>';return;}
    adminUserCache={};
    data.forEach(u=>{ adminUserCache[u.id]=u; });
    const rows=data.map(u=>{
      const isSelf=u.id===currentUser?.id;
      const nick=(u.nickname||'未設定');
      const avBg=u.av_bg||'rgba(229,62,62,.2)';
      const avC=u.av_color||'#e53e3e';
      const regDate=new Date(u.created_at).toLocaleDateString('ja-JP');
      const adminLabel=u.is_admin?'管理者解除':'管理者設定';
      const adminBg=u.is_admin?'rgba(229,62,62,.12)':'rgba(66,153,225,.12)';
      const adminBd=u.is_admin?'#e53e3e':'#4299e1';
      const adminCol=u.is_admin?'#fc8181':'#90cdf4';
      const adminBadge=u.is_admin?'<span style="background:#e53e3e;color:#fff;font-size:9px;font-weight:700;padding:1px 5px;border-radius:3px">ADMIN</span>':'';
      const selfLabel=isSelf?'<span style="font-size:11px;color:var(--tm);padding:5px 4px">（自分）</span>':'';
      const delBtn=isSelf?''
        :'<button onclick="adminDeleteUser(\''+u.id+'\',\''+u.nickname+'\')" '
        +' style="padding:5px 10px;background:rgba(229,62,62,.12);border:1px solid #e53e3e;border-radius:6px;color:#fc8181;font-size:11px;cursor:pointer;white-space:nowrap">削除</button>';
      return '<div style="display:flex;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid var(--bd)">'
        +'<div style="width:32px;height:32px;border-radius:50%;background:'+avBg+';border:1.5px solid '+avC+';display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:'+avC+';flex-shrink:0">'+nick.slice(0,2)+'</div>'
        +'<div style="flex:1;min-width:0">'
        +'<div style="font-size:13px;color:var(--tp);display:flex;align-items:center;gap:6px">'+nick+adminBadge+'</div>'
        +'<div style="font-size:11px;color:var(--tm);margin-top:1px">'+regDate+' 登録</div>'
        +'</div>'
        +'<div style="display:flex;gap:6px;flex-shrink:0">'
        +'<button onclick="toggleAdminFlag(\''+u.id+'\','+u.is_admin+',\''+u.nickname+'\','+isSelf+')"'
        +' style="padding:5px 10px;background:'+adminBg+';border:1px solid '+adminBd+';border-radius:6px;color:'+adminCol+';font-size:11px;cursor:pointer;white-space:nowrap">'+adminLabel+'</button>'
        +selfLabel+delBtn
        +'</div></div>';
    });
    el.innerHTML=rows.join('');
  } catch(e) {
    el.innerHTML='<div style="color:var(--tm);padding:8px 0">Supabase未接続のため表示できません</div>';
  }
}

async function toggleAdminFlag(userId, currentIsAdmin, nickname, isSelf){
  if(isSelf==='true'){showToast('自分自身の管理者権限は変更できません');return;}
  const newVal=!currentIsAdmin;
  const msg=newVal?nickname+' を管理者に設定しますか？':nickname+' の管理者権限を解除しますか？';
  if(!confirm(msg)) return;
  const {error}=await sb.from('profiles').update({is_admin:newVal}).eq('id',userId);
  if(error){showToast('エラー: '+error.message);return;}
  showToast(newVal?'管理者に設定しました':'管理者権限を解除しました');
  loadAdminUsers();
}

async function adminDeleteUser(userId, nickname){
  if(!confirm('「'+nickname+'」を削除しますか？\nこのユーザーの投稿・コメントも削除されます。\nこの操作は取り消せません。')) return;
  try {
    // SQL関数経由でauth.usersごと削除（security definer関数）
    const {error}=await sb.rpc('delete_user_by_admin',{target_user_id:userId});
    if(error) throw error;
    showToast(nickname+' を削除しました');
    loadAdminUsers();
  } catch(e) {
    console.error('ユーザー削除エラー:', e);
    showToast('削除エラー: '+e.message);
    loadAdminUsers();
  }
}

// ===== NOTIFICATIONS =====
let notifData=[];

async function fetchNotifications(){
  if(!sb||!currentUser||!currentProfile?.is_admin) return;
  try {
    const {data,error}=await sb.from('notifications')
      .select('*')
      .eq('admin_id',currentUser.id)
      .order('created_at',{ascending:false})
      .limit(30);
    if(error) throw error;
    notifData=data||[];
    renderNotifications();
  } catch(e){ console.warn('通知取得エラー:',e.message); }
}

function renderNotifications(){
  const unread=notifData.filter(n=>!n.is_read).length;
  // バッジ更新
  const badge=document.getElementById('notif-badge');
  if(badge){
    badge.textContent=unread>99?'99+':unread;
    badge.style.display=unread>0?'flex':'none';
  }
  // リスト更新
  const list=document.getElementById('notif-list');
  if(!list) return;
  if(notifData.length===0){
    list.innerHTML='<div class="notif-empty">通知はありません</div>';
    return;
  }
  list.innerHTML=notifData.map(function(n){
    var icon=n.type==='new_case'?'📋':'💬';
    var label=n.type==='new_case'?'新規投稿':'新規コメント';
    var cls='notif-item'+(n.is_read?'':' unread');
    return '<div class="'+cls+'" onclick="onNotifClick('+n.id+','+(n.case_id||'null')+')">'
      +'<div class="notif-icon">'+icon+'</div>'
      +'<div class="notif-content">'
        +'<div class="notif-title">'+label+'</div>'
        +'<div class="notif-body">'+n.body+'</div>'
        +'<div class="notif-time">'+formatTime(n.created_at)+'</div>'
      +'</div>'
    +'</div>';
  }).join('');
}

async function onNotifClick(notifId, caseId){
  // 既読にする
  if(sb){
    await sb.from('notifications').update({is_read:true}).eq('id',notifId);
  }
  const n=notifData.find(function(x){return x.id===notifId;});
  if(n) n.is_read=true;
  renderNotifications();
  // 該当症例を開く
  if(caseId){
    toggleNotifPanel();
    showDetailById(caseId);
  }
}

async function markAllRead(){
  if(!sb||!currentUser) return;
  await sb.from('notifications')
    .update({is_read:true})
    .eq('admin_id',currentUser.id)
    .eq('is_read',false);
  notifData.forEach(function(n){ n.is_read=true; });
  renderNotifications();
}

function toggleNotifPanel(){
  const panel=document.getElementById('notif-panel');
  if(!panel) return;
  const isOpen=panel.classList.contains('open');
  panel.classList.toggle('open');
  // パネルを開いたら最新通知を取得
  if(!isOpen) fetchNotifications();
}

// パネル外クリックで閉じる
document.addEventListener('click',function(e){
  const panel=document.getElementById('notif-panel');
  const btn=document.getElementById('notif-btn');
  if(panel&&btn&&panel.classList.contains('open')){
    if(!panel.contains(e.target)&&!btn.contains(e.target)){
      panel.classList.remove('open');
    }
  }
});


// ===== INVITE CODES =====
async function loadInviteCodes(){
  const el=document.getElementById('admin-invite-codes');
  if(!el||!sb) return;
  el.innerHTML='<div style="color:var(--tm)">読み込み中...</div>';
  try {
    const {data,error}=await sb.from('invite_codes')
      .select('*').order('created_at',{ascending:false});
    if(error) throw error;
    if(!data||data.length===0){
      el.innerHTML='<div style="color:var(--tm)">コードなし</div>';return;
    }
    el.innerHTML=data.map(function(c){
      var statusColor=c.is_active?'#48bb78':'#fc8181';
      var statusLabel=c.is_active?'有効':'無効';
      var usageLabel=c.max_uses!=null?(c.use_count+'/'+c.max_uses+'回'):(c.use_count+'回（無制限）');
      return '<div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid var(--bd);flex-wrap:wrap">'
        +'<span style="font-family:JetBrains Mono,monospace;font-size:13px;font-weight:700;color:var(--tp);letter-spacing:.08em">'+c.code+'</span>'
        +'<span style="font-size:11px;color:'+statusColor+';border:1px solid '+statusColor+';border-radius:4px;padding:1px 6px">'+statusLabel+'</span>'
        +'<span style="font-size:11px;color:var(--tm)">'+usageLabel+'</span>'
        +(c.note?'<span style="font-size:11px;color:var(--ts)">'+c.note+'</span>':'')
        +'<div style="display:flex;gap:6px;margin-left:auto">'
          +'<button onclick="toggleInviteCode('+c.id+','+c.is_active+')" style="font-size:11px;padding:3px 10px;background:transparent;border:1px solid var(--bd);border-radius:6px;color:var(--ts);cursor:pointer">'+(c.is_active?'無効化':'有効化')+'</button>'
          +'<button onclick="deleteInviteCode('+c.id+')" style="font-size:11px;padding:3px 10px;background:rgba(229,62,62,.1);border:1px solid var(--acc);border-radius:6px;color:#fc8181;cursor:pointer">削除</button>'
        +'</div>'
      +'</div>';
    }).join('');
  } catch(e){
    el.innerHTML='<div style="color:var(--acc)">エラー: '+e.message+'</div>';
  }
}

async function addInviteCode(){
  if(!sb) return;
  const code=document.getElementById('new-invite-code')?.value.trim().toUpperCase();
  const note=document.getElementById('new-invite-note')?.value.trim();
  if(!code){showToast('コードを入力してください');return;}
  const {error}=await sb.from('invite_codes').insert({code,note:note||''});
  if(error){showToast('エラー: '+error.message);return;}
  document.getElementById('new-invite-code').value='';
  document.getElementById('new-invite-note').value='';
  showToast('招待コードを追加しました');
  loadInviteCodes();
}

async function toggleInviteCode(id,currentActive){
  if(!sb) return;
  const {error}=await sb.from('invite_codes')
    .update({is_active:!currentActive}).eq('id',id);
  if(error){showToast('エラー: '+error.message);return;}
  showToast(currentActive?'コードを無効化しました':'コードを有効化しました');
  loadInviteCodes();
}

async function deleteInviteCode(id){
  if(!confirm('この招待コードを削除しますか？')) return;
  if(!sb) return;
  const {error}=await sb.from('invite_codes').delete().eq('id',id);
  if(error){showToast('エラー: '+error.message);return;}
  showToast('招待コードを削除しました');
  loadInviteCodes();
}


// ===== INVITE CODES =====
async function loadInviteCodes(){
  const el=document.getElementById('admin-invite-codes');
  if(!el||!sb) return;
  el.innerHTML='<div style="color:var(--tm)">読み込み中...</div>';
  try {
    const {data,error}=await sb.from('invite_codes')
      .select('*').order('created_at',{ascending:false});
    if(error) throw error;
    if(!data||data.length===0){
      el.innerHTML='<div style="color:var(--tm)">コードなし</div>';return;
    }
    el.innerHTML=data.map(function(c){
      var statusColor=c.is_active?'#48bb78':'#fc8181';
      var statusLabel=c.is_active?'有効':'無効';
      var usageLabel=c.max_uses!=null?(c.use_count+'/'+c.max_uses+'回'):(c.use_count+'回（無制限）');
      return '<div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid var(--bd);flex-wrap:wrap">'
        +'<span style="font-family:JetBrains Mono,monospace;font-size:13px;font-weight:700;color:var(--tp);letter-spacing:.08em">'+c.code+'</span>'
        +'<span style="font-size:11px;color:'+statusColor+';border:1px solid '+statusColor+';border-radius:4px;padding:1px 6px">'+statusLabel+'</span>'
        +'<span style="font-size:11px;color:var(--tm)">'+usageLabel+'</span>'
        +(c.note?'<span style="font-size:11px;color:var(--ts)">'+c.note+'</span>':'')
        +'<div style="display:flex;gap:6px;margin-left:auto">'
          +'<button onclick="toggleInviteCode('+c.id+','+c.is_active+')" style="font-size:11px;padding:3px 10px;background:transparent;border:1px solid var(--bd);border-radius:6px;color:var(--ts);cursor:pointer">'+(c.is_active?'無効化':'有効化')+'</button>'
          +'<button onclick="deleteInviteCode('+c.id+')" style="font-size:11px;padding:3px 10px;background:rgba(229,62,62,.1);border:1px solid var(--acc);border-radius:6px;color:#fc8181;cursor:pointer">削除</button>'
        +'</div>'
      +'</div>';
    }).join('');
  } catch(e){
    el.innerHTML='<div style="color:var(--acc)">エラー: '+e.message+'</div>';
  }
}

async function addInviteCode(){
  if(!sb) return;
  const code=document.getElementById('new-invite-code')?.value.trim().toUpperCase();
  const note=document.getElementById('new-invite-note')?.value.trim();
  if(!code){showToast('コードを入力してください');return;}
  const {error}=await sb.from('invite_codes').insert({code,note:note||''});
  if(error){showToast('エラー: '+error.message);return;}
  document.getElementById('new-invite-code').value='';
  document.getElementById('new-invite-note').value='';
  showToast('招待コードを追加しました');
  loadInviteCodes();
}

async function toggleInviteCode(id,currentActive){
  if(!sb) return;
  const {error}=await sb.from('invite_codes')
    .update({is_active:!currentActive}).eq('id',id);
  if(error){showToast('エラー: '+error.message);return;}
  showToast(currentActive?'コードを無効化しました':'コードを有効化しました');
  loadInviteCodes();
}

async function deleteInviteCode(id){
  if(!confirm('この招待コードを削除しますか？')) return;
  if(!sb) return;
  const {error}=await sb.from('invite_codes').delete().eq('id',id);
  if(error){showToast('エラー: '+error.message);return;}
  showToast('招待コードを削除しました');
  loadInviteCodes();
}


// ===== DRAFT =====
const DRAFT_KEY='ems_caselog_draft';

function saveDraft(){
  // フォームの現在の入力値を全て収集
  const draft={
    cat: document.querySelector('.cat-card.on .cat-name')?.textContent||'',
    type: (function(){var el=document.querySelector('.type-pill.on');return el?el.textContent.trim():'';})(),
    age:  document.getElementById('f-age')?.value||'',
    ageUnit: document.getElementById('f-age-unit')?.value||'歳',
    sex:  document.getElementById('f-sex')?.value||'',
    place: document.getElementById('f-place')?.value||'',
    dest:  document.getElementById('f-dest')?.value||'',
    chief: document.getElementById('f-chief')?.value||'',
    prearrival: document.getElementById('f-prearrival')?.value||'',
    roles: document.getElementById('f-roles')?.value||'',
    scene: document.getElementById('f-scene')?.value||'',
    pmhx:  document.getElementById('f-pmhx')?.value||'',
    meds:  document.getElementById('f-meds')?.value||'',
    allergy: document.getElementById('f-allergy')?.value||'',
    worry: document.getElementById('f-worry')?.value||'',
    question: document.getElementById('f-question')?.value||'',
    good:  document.getElementById('f-good')?.value||'',
    learn: document.getElementById('f-learn')?.value||'',
    isAnon: isAnon,
    tags: Array.from(document.querySelectorAll('.tag-chip.on')).map(function(t){return t.textContent.trim();}),
    timepoints: Array.from(document.querySelectorAll('#tp-cards .tp-card')).map(function(card){
      var fi=card.querySelectorAll('.tp-find-inp');
      var vi=card.querySelectorAll('.vital-inp');
      var ni=card.querySelectorAll('.tp-note-inp');
      return {
        label: card.querySelector('.tp-label-inp')?.value||'',
        time:  card.querySelector('.tp-time-inp')?.value||'',
        consciousness:fi[0]?.value||'', breathing:fi[1]?.value||'',
        breath_sounds:fi[2]?.value||'', circulation:fi[3]?.value||'',
        skin:fi[4]?.value||'', pupils:fi[5]?.value||'',
        rhythm:fi[6]?.value||'', st:fi[7]?.value||'',
        obs:ni[0]?.value||'', ecgNote:ni[1]?.value||'', treatmentNote:ni[2]?.value||'',
        bp:vi[0]?.value||'', hr:vi[1]?.value||'',
        spo2:vi[2]?.value||'', rr:vi[3]?.value||'',
        temp:vi[4]?.value||'', bg:vi[5]?.value||'', etco2:vi[6]?.value||'',
        treatment:Array.from(card.querySelectorAll('.tp-chip.on')).map(function(c){return c.textContent.trim();}),
      };
    }),
    savedAt: new Date().toISOString(),
  };
  try{
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    showToast('下書きを保存しました 📝');
  }catch(e){
    showToast('下書き保存に失敗しました: '+e.message);
  }
}

function checkDraft(){
  try{
    var d=localStorage.getItem(DRAFT_KEY);
    if(!d) return;
    var draft=JSON.parse(d);
    var banner=document.getElementById('draft-banner');
    if(banner) banner.style.display='flex';
    // 保存日時を表示
    if(draft.savedAt){
      var span=banner?.querySelector('span:nth-child(2)');
      if(span) span.textContent='下書きが保存されています（'+formatTime(draft.savedAt)+'）';
    }
  }catch(e){}
}

function restoreDraft(){
  try{
    var d=localStorage.getItem(DRAFT_KEY);
    if(!d) return;
    var draft=JSON.parse(d);

    // フォームをリセットしてから復元
    resetPostForm();

    // カテゴリ
    if(draft.cat){
      document.querySelectorAll('.cat-card').forEach(function(el){
        if(el.querySelector('.cat-name')?.textContent===draft.cat) el.classList.add('on');
      });
    }
    // 投稿タイプ
    if(draft.type){
      document.querySelectorAll('.type-pill').forEach(function(el){
        if(el.textContent.trim()===draft.type) el.classList.add('on');
      });
    }
    // テキスト入力
    function sv(id,val){var el=document.getElementById(id);if(el&&val)el.value=val;}
    sv('f-age',draft.age); sv('f-chief',draft.chief);
    sv('f-prearrival',draft.prearrival); sv('f-roles',draft.roles);
    sv('f-scene',draft.scene); sv('f-pmhx',draft.pmhx);
    sv('f-meds',draft.meds); sv('f-allergy',draft.allergy);
    sv('f-worry',draft.worry); sv('f-question',draft.question);
    sv('f-good',draft.good); sv('f-learn',draft.learn);
    // セレクト
    function ss(id,val){
      var el=document.getElementById(id);
      if(!el||!val) return;
      for(var i=0;i<el.options.length;i++){
        if(el.options[i].value===val||el.options[i].text===val){el.selectedIndex=i;break;}
      }
    }
    ss('f-age-unit',draft.ageUnit); ss('f-sex',draft.sex);
    ss('f-place',draft.place); ss('f-dest',draft.dest);
    // タグ
    if(draft.tags&&draft.tags.length>0){
      document.querySelectorAll('.tag-chip').forEach(function(el){
        if(draft.tags.indexOf(el.textContent.trim())>=0) el.classList.add('on');
      });
    }
    // 匿名
    isAnon=draft.isAnon||false;
    var tog=document.getElementById('anon-tog');
    if(tog) tog.classList.toggle('on',isAnon);
    // タイムポイント
    if(draft.timepoints&&draft.timepoints.length>0){
      var tpContainer=document.getElementById('tp-cards');
      if(tpContainer){
        tpContainer.innerHTML=''; tpCount=0;
        draft.timepoints.forEach(function(tp,idx){
          tpContainer.appendChild(buildTimepointCard(idx)); tpCount++;
          var card=tpContainer.lastElementChild;
          function si(sel,val){var el=card.querySelector(sel);if(el&&val)el.value=val;}
          si('.tp-label-inp',tp.label); si('.tp-time-inp',tp.time);
          var fi=card.querySelectorAll('.tp-find-inp');
          if(fi[0])fi[0].value=tp.consciousness||'';
          if(fi[1])fi[1].value=tp.breathing||'';
          if(fi[2])fi[2].value=tp.breath_sounds||'';
          if(fi[3])fi[3].value=tp.circulation||'';
          if(fi[4])fi[4].value=tp.skin||'';
          if(fi[5])fi[5].value=tp.pupils||'';
          if(fi[6])fi[6].value=tp.rhythm||'';
          if(fi[7])fi[7].value=tp.st||'';
          var vi=card.querySelectorAll('.vital-inp');
          var vkeys=['bp','hr','spo2','rr','temp','bg','etco2'];
          vkeys.forEach(function(k,i){if(vi[i]&&tp[k])vi[i].value=tp[k];});
          var ni=card.querySelectorAll('.tp-note-inp');
          if(ni[0])ni[0].value=tp.obs||'';
          if(ni[1])ni[1].value=tp.ecgNote||'';
          if(ni[2])ni[2].value=tp.treatmentNote||'';
          var tx=tp.treatment||[];
          card.querySelectorAll('.tp-chip').forEach(function(chip){
            if(tx.indexOf(chip.textContent.trim())>=0) chip.classList.add('on');
          });
        });
      }
    }
    // バナーを非表示
    var banner=document.getElementById('draft-banner');
    if(banner) banner.style.display='none';
    showToast('下書きを復元しました ✓');
  }catch(e){
    showToast('復元に失敗しました: '+e.message);
  }
}

function deleteDraft(){
  localStorage.removeItem(DRAFT_KEY);
  var banner=document.getElementById('draft-banner');
  if(banner) banner.style.display='none';
  showToast('下書きを削除しました');
}


// ===== TOAST =====
function showToast(msg){
  const t=document.getElementById('toast');
  if(!t) return;
  t.textContent=msg;
  t.classList.add('show');
  setTimeout(function(){t.classList.remove('show');},2800);
}

// ===== APP INIT =====
async function appInit(){
  const sbStatus=document.getElementById('sb-status');
  try{
    if(!window.supabase){
      throw new Error('Supabase SDK未ロード');
    }

    // 壊れたロックのみ削除
    try{
      Object.keys(localStorage).forEach(function(k){
        if(k.startsWith('lock:')) localStorage.removeItem(k);
      });
    }catch(e){}

    sb=window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    if(sbStatus) sbStatus.style.display='none';

    // 認証状態の監視（ログイン・ログアウト・トークン更新）
    sb.auth.onAuthStateChange(async function(event, session){
      if(event==='SIGNED_IN'||event==='TOKEN_REFRESHED'){
        if(session?.user) await onAuthChange(session.user);
      } else if(event==='SIGNED_OUT'){
        switchToLogin();
        renderFeed();
      }
    });

    // 起動時のセッション復元
    const {data:{session}} = await sb.auth.getSession();
    if(session) await onAuthChange(session.user);
    else renderFeed();

  }catch(e){
    console.error('Supabase初期化エラー:', e.message);
    if(sbStatus) sbStatus.textContent='接続エラー。ページを再読み込みしてください。';
    renderFeed();
  }
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded', appInit);
} else {
  appInit();
}
