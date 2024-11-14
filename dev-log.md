## 2024/11/14
・gitのハマったところ
　・pushしても永遠とエラーが出たが、gitでpushできるデータサイズの上限が小さかったよう
> git config --global http.postBuffer 524288000
で解決した。

・ 機能開発をするときは、開発用のブランチを切り、エラーを全て改修してからmainにマージする流れを作る。

・topwireというbranchを切った、そこで、トップの画面を一旦作成することにする。


## 参考資料
画面遷移図
https://drive.google.com/file/d/1tvYyMIAlg3IVpgSg1Bsf87d4mPjoLigC/view?usp=drive_link
