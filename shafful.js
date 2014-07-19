
<script>


var shafful = new Array(
  {name:src="kyoku/m1.mp3",time:245},
  {name:src="kyoku/m2.mp3",time:320},
  {name:src="kyoku/m3.mp3",time:229}  ,
  {name:src="kyoku/m4.mp3",time:172:},
  {name:src="kyoku/m5.mp3",time:271:},
  {name:src="kyoku/m6.mp3",time:172},
  {name:src="kyoku/m7.mp3",time:255},
  {name:src="kyoku/m8.mp3",time:260},
  {name:src="kyoku/m10.mp3",time:249},
  {name:src="kyoku/m11.mp3",time:240},
  {name:src="kyoku/m12.mp3",time:242},
  {name:src="kyoku/m13.mp3",time:218},
  {name:src="kyoku/m14.mp3",time:240},
  {name:src="kyoku/m15.mp3",time:150},
  {name:src="kyoku/m16.mp3",time:199},
  {name:src="kyoku/m17.mp3",time:191},
  {name:src="kyoku/m18.mp3",time:288},
  {name:src="kyoku/m19.mp3",time:197},
  {name:src="kyoku/m20.mp3",time:172}

  );

//配列の大きさに合わせて適当な回数繰り返す
for ( i = 0 ; i < 100 ; i++ )
{
  //0～4までの乱数を作成し、変数Rndに格納する
  var rnd = Math.floor(Math.random()*19);
  
  var str1 = shahhul[0];    //配列colの最初の要素
  var str2 = shahhul[rnd];  //配列colの乱数で決定した要素

  //配列の各要素を入れ替える
  col[rnd] = str1;
  col[0]   = str2;
}

consol.log(shahhul[2]);

</script>